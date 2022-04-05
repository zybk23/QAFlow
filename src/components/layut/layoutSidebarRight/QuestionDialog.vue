<template style="position: relative">
  <w-dialog v-model="change" title="Ask Question" persistent :width="550">
    <div class="flex flex-col">
      <w-input
        v-on:change="handleChangeTitle"
        class="mb6 mb-4"
        type="text"
        label="Title"
        outline
      >
      </w-input>
      <w-textarea
        v-on:change="handleChangeContent"
        label="Content"
        label-position="inside"
        outline
        inner-icon-left="mdi mdi-comment"
      >
      </w-textarea>
      <w-icon
        style="right: 10px; top: 10px"
        class="mr1 absolute cursor-pointer"
        color="primary"
        @click="handleCloseDialog"
      >
        mdi mdi-close
      </w-icon>
    </div>
    <template class="flex justify-end mt-4">
      <w-button @click="handleSubmitQuestion" bg-color="error"> Save </w-button>
    </template>
  </w-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "questionDialog",
  data() {
    return {
      shows: false,
      titleValue: "",
      contentValue: "",
    };
  },
  props: ["isShow", "handleCloseDialog", "handleOpenDialog"],
  computed: {
    change: function () {
      return this.isShow;
    },
  },
  methods: {
    ...mapActions(["askQuestion"]),
    handleChangeTitle(e) {
      this.$emit("change", (this.titleValue = e.target.value));
    },
    handleChangeContent(e) {
      this.$emit("change", (this.contentValue = e.target.value));
    },
    handleSubmitQuestion() {
      const obj = {
        title: this.titleValue,
        content: this.contentValue,
        token: localStorage.getItem("token"),
      };
      this.$store.dispatch("askQuestion", obj).then((res) => {
        if (res.data.success) {
          this.handleCloseDialog();
        } else {
          alert(res.data.message);
        }
        console.log("resss", res);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
