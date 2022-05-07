<template>
  <section class="nav">
    <div class="nav__icon" @click="showLinks">
      <i class="fa fa-bars fa-1x"></i>
    </div>

    <transition name="slide">
      <div class="nav__links" v-if="isNavLinks">
        <router-link to="/">HOME</router-link>
        <router-link to="/Sketchbook">SKETCHBOOK</router-link>
        <router-link to="/Info">INFO</router-link>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "MobileNav",
  data() {
    return {
      isNavLinks: false,
    };
  },
  methods: {
    showLinks() {
      this.isNavLinks = !this.isNavLinks;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.nav {
  .nav__icon {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    margin: 0 1rem;
    position: absolute;
    background: black;
    color: white;
    border-radius: 4px;
    right: 0;
    top: 5px;
    

    &:hover {
      cursor: pointer;
    }
  }
  .nav__links {
    opacity: 0.9;
    border-radius: 4px;
    width: 35%;
    min-width: 200px;
    height: fit-content;
    background: black;
    display: flex;
    min-height: 250px;
    position: absolute;
    justify-items: start;
    flex-direction: column;
    right: 0;
    top: 20%;
    padding: 2rem;

    a {
      text-decoration: none;
      color: white;
      margin-bottom: 2rem;

      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.4s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>
