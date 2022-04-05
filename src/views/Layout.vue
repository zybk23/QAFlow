<template>
  <div class="layout">
    <div class="layout-sidebar-left">taha</div>
    <div class="layout-content">
      <layout-content />
    </div>
    <div class="layout-sidebar-right">
      <layout-sidebar-rigth />
    </div>
  </div>
</template>

<script>
import LayoutSidebarRigth from "../components/layut/layoutSidebarRight/LayoutSidebarRigth.vue";
import LayoutContent from "../components/layut/layoutSidebarContent/LayoutContent.vue";
export default {
  name: "Layout",

  components: {
    LayoutSidebarRigth,
    LayoutContent,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  padding: 0 80px;

  .layout-sidebar-left {
    display: flex;
    width: 20%;
    height: 100vh;
    background-color: pink;
  }
  .layout-content {
    display: flex;
    width: 60%;
    height: 100vh;
  }
  .layout-sidebar-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100vh;
  }
}
</style>
