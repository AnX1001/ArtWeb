<template>
  <nav class="nav">
    <div class="logo">
      <router-link class="logo--link" to="/">ArtsAbstract</router-link>
    </div>
    <div class="nav__links">
      <router-link to="/">HOME</router-link>
      <router-link to="/Sketchbook">SKETCHBOOK</router-link>
      <router-link to="/Info">INFO</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  .logo--link {
    font-size: xx-large;
    text-decoration: none;
    color: black;
  }

  .nav__links {
    display: flex;
    gap: 1.2rem;

    a {
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration: underline;
      }

      @media screen and (max-width: 768px) {
        &:hover {
          color: white;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
