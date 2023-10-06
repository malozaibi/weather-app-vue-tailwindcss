<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import CityList from "../components/CityList.vue";

const searchQuery = ref("");
const queryTimeout = ref(null);
const mapSearchResults = ref(null);
const searchError = ref(false);
const router = useRouter();

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const previewCity = (searchResult) => {
  router.push({
    name: "cityView",
    params: {
      city: searchResult.address.countrySubdivisionName,
      country: searchResult.address.country,
    },
    query: {
      lat: searchResult.position.lat,
      lon: searchResult.position.lon,
      preview: true,
    },
  });
};

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value.trim() == "") {
      mapSearchResults.value = null;
    }
    try {
      const result = await axios.get(
        `https://api.tomtom.com/search/2/geocode/${searchQuery.value}.json?storeResult=false&view=Unified&key=Hlcw8e9bvza3e7XgsRa3By5qS01Ha6PQ`
      );
      mapSearchResults.value = result.data.results;
      searchError.value = false;
    } catch (error) {
      searchError.value = true;
    }
  }, 400);
};
</script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="Search for city"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-w-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />
      <ul
        v-if="mapSearchResults"
        class="absolute bg-w-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
      >
        <p v-if="searchError">Sorry Something Went Wrong!</p>
        <p v-else-if="!searchError && mapSearchResults.length == 0">
          No Search Found
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapSearchResults"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="previewCity(searchResult)"
          >
            {{
              searchResult.address.freeformAddress +
              " " +
              searchResult.address.country
            }}
          </li>
        </template>
      </ul>
    </div>
    <div>
      <Suspense>
        <CityList />
        <template #fallback>
          <p>Loading ...</p>
        </template>
      </Suspense>
    </div>
  </main>
</template>
