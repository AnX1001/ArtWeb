<template>
  <div class="container">
    <h1 class="title">Home</h1>
    <h2 class="subheading">Latest artwork 2021</h2>
    <section class="gallery">
      <div class="figures" v-for="(url, idx) in PhotoUrls" :key="idx">
        <img class="figures__image" :src="url.src.medium" :alt="url.alt" />
        <p class="figures__captions">
          <i>{{ url.alt }}</i> av
          {{ url.photographer }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["PhotoUrls"]), // get the states
  },
  mounted() {
    this.$store.dispatch("fetchPhotos"); // make API call
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  color: black;
}
.container {
  .title {
    text-align: center;
    margin-bottom: 1rem;
    font-size: $h1-font-size;
  }

  .subheading {
    text-align: center;
    margin-bottom: 5rem;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem;
    max-width: fit-content;

    @media only screen and (max-width: 768px) {
      margin: 0;
    }

    .figures {
      flex-grow: 1;

      &:hover > .figures__captions {
        opacity: 1;
        transform: scale(1.2);
        transition: 0.3s;
      }

      &:hover > .figures__image {
        opacity: 0.2;
        background: white;
      }
      .figures__captions {
        opacity: 0;
        position: absolute;
        color: black;
        margin-top: -10rem;
        margin-left: 2rem;
        max-width: 200px;
        padding: 5px;
        font-size: small;
      }
      .figures__image {
        width: 100%;
      }
    }
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.4s;
}
.slide-enter {
  transform: translate(0, 10%);
}
.slide-leave-to {
  transform: translate(0, -10%);
}
</style>
