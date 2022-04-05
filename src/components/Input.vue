<template>
  <div class="input-container">
    <h3 class="input-title">{{ title }}</h3>
    <input
      :type="type"
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "input",
  props: ["value", "handleInput", "placeholder", "title", "type"],
};
</script>

<style lang="scss" scoped>
.input-container {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h3 {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 16px 16px;
    border-radius: 16px;
    border: none;
    background-color: #f2f2f2;
    outline: none;
  }
}
</style>
