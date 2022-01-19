<template>
  <button class="hugsy-button" :class="{[`theme-${theme}`]: theme}">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "default"
    }
  }
};
</script>

<style lang="scss" scoped>

</style>