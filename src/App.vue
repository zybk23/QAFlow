<template>
  <div id="nav">
    <!-- <router-link to="/">Layout</router-link> |
    <router-link to="/login">Login</router-link> -->
    <Navigation />
  </div>
  <router-view />
</template>

<script>
import Navigation from "./navigation/Navigation";

export default {
  components: {
    Navigation,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
span {
  font-family: "Lato", Arial, sans-serif;
}
</style>
