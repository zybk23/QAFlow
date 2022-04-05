<template>
  <div class="search-input-container">
    <input type="text" class="search-input" placeholder="Type Search Words" />
    <i class="fas fa-search search-icon" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search-input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 32px;

  .search-input {
    width: 240px;
    height: 40px;
    background-color: #1b1b1f;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    color: #fff;
  }

  .search-icon {
    color: #fff;
    margin-left: -32px;
  }
}
</style>
