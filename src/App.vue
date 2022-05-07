<template>
  <div id="app">
    <header class="header">
      <Navigation/>
      <MobileNav v-if="isMobile" />
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation.vue";
import MobileNav from "./components/MobileNavigation/MobileNav";
export default {
  name: "App",
  components: { MobileNav, Navigation },
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    checkMobileView() {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  mounted() {
    this.checkMobileView();
    window.addEventListener("resize", this.checkMobileView);
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin: 3rem;

  .header {
    margin-right: 1rem;
    min-height: fit-content;
  }
}
</style>
