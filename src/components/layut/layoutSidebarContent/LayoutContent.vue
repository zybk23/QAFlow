<template>
  <div class="flex flex-col w-full">
    <layout-content-tabs />
  </div>
</template>

<script>
import LayoutContentTabs from "./LayoutContentTabs.vue";
export default {
  name: "layoutContent",
  components: {
    LayoutContentTabs,
  },
};
</script>

<style lang="scss" scoped></style>
