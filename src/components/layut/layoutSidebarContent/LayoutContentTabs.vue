<template>
  <div style="height: 80px" class="flex border-2 w-full flex-row items-center">
    <p
      v-for="item in tabs"
      :key="item.id"
      style=""
      class="tab-title font-sans ml-8 font-bold text-lg"
    >
      {{ item.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "layoutContentTabs",
  data: () => ({
    tabs: [
      {
        id: 1,
        name: "Recent Questions",
      },
      {
        id: 2,
        name: "Most Answered",
      },
      {
        id: 3,
        name: "Bump Question",
      },
      {
        id: 4,
        name: "Answers",
      },
      {
        id: 5,
        name: "Most Visited",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.tab-title {
  color: #26333b;
  border-bottom: 1px solid #26333b;
  cursor: pointer;
  /* padding-bottom: 36px; */
}
</style>
