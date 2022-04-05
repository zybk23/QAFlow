<template>
  <div class="navigation-contianer">
    <div class="navigation-logo">
      <img class="navigation-logo-img" src="assets/images/qa.png" alt="" />
      <p class="navigation-logo-text">Stack</p>
    </div>
    <div class="navigation-pages">
      <div class="navigation-pages-text-container">
        <router-link to="/">
          <div class="navigation-pages-text">Layout</div>
        </router-link>
        <router-link to="/login">
          <div class="navigation-pages-text">Login</div>
        </router-link>
        <router-link to="/register">
          <div class="navigation-pages-text">Register</div>
        </router-link>
      </div>
      <SearchBar />
    </div>
    <div class="navigation-profile"></div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
.navigation-contianer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #27282f;
  width: 100%;
  height: 80px;
  padding: 0px 80px;

  .navigation-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 20%;

    .navigation-logo-img {
      width: 60px;
    }

    .navigation-logo-text {
      font-family: "Roboto", Arial, sans-serif;
      color: #fff;
      font-weight: 600;
      font-size: 26px;
      margin-left: 12px;
    }
  }

  .navigation-pages {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60%;

    .navigation-pages-text-container {
      display: flex;
      flex-direction: row;
      align-items: center;

      .navigation-pages-text {
        font-family: "Roboto", Arial, sans-serif;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        margin-left: 12px;
      }
    }
  }

  .navigation-profile {
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    background-color: pink;
  }
}
</style>
