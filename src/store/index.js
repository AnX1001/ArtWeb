import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "endPointWithQueries";
const urlTwo = "endPointWithQueries";
const client = "007"

const headers = {
  Accept: "application/json",
  Authorization: client,
};

export default new Vuex.Store({
  state: {
    PhotoUrls: [],
    PhotographerNames: [],
    naturePhotoUrls: [],
  },
  mutations: {
    setPhotosUrl(state, payload) {
      let i = 0;

      while (i < payload.photos.length - 1) {
        i++;
        state.PhotoUrls.push(payload.photos[i]);
      }
    },
    setPhotographer(state, payload) {
      let i = 0;
      while (i < payload.photos.length - 1) {
        
        i++;
        state.PhotographerNames.push(payload.photos[i].photographer);
        //dot notation to reach "photos" in fetched JSON data.
      }
    },
    setNatureUrls(state, payload) {
      let i = 0;
      while (i < payload.photos.length - 1) {
        i++;
        state.naturePhotoUrls.push(payload.photos[i]);
      }
    },
  },
  actions: {
    async fetchPhotos(state) {
      const resp = await fetch(url, { headers });
      const data = await resp.json();

      state.commit("setPhotosUrl", data);
      state.commit("setPhotographer", data); // make arguments ready for mutations
    },
    async fetchNaturePhotos(state) {
      const resp = await fetch(urlTwo, { headers });
      const data = await resp.json();
  
      state.commit("setNatureUrls", data);
    },
  },
  getters: {
    // state is ready for delivering
    PhotoUrls: (state) => state.PhotoUrls,
    PhotographerNames: (state) => state.PhotographerNames,
    NaturePhotoUrls: (state) => state.naturePhotoUrls
  },
});
