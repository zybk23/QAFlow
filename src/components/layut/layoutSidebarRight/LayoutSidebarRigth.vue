<template>
  <div
    style="height: 80px"
    class="flex w-full border-2 border-t-0 items-center justify-center"
  >
    <w-button
      xl
      style="width: 220px; height: 40px; background-color: #2d6ff8"
      class="ma1 text-white bg-blue"
      @click="handleOpenDialog"
    >
      Ask a Question
    </w-button>
    <question-dialog
      :isShow="dialog.show"
      :handleOpenDialog="handleOpenDialog"
      :handleCloseDialog="handleCloseDialog"
    />
  </div>
</template>

<script>
import QuestionDialog from "./QuestionDialog.vue";
export default {
  name: "Sidebar-right",
  data: () => ({
    dialog: { show: false },
  }),
  components: {
    QuestionDialog,
  },
  methods: {
    handleOpenDialog() {
      this.dialog.show = true;
    },
    handleCloseDialog() {
      this.dialog.show = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
