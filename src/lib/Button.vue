<template>
  <button class="hugsy-button" :class="{[`hugsy-theme-${theme}`]: theme}">
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

<style lang="scss">
$color-border: #dcdfe6;
$color-button: #409eff;
$box-shadow: 0 1px 0 fade-out(black, 0.95);
$h: 32px;
$radius: 4px;

.hugsy-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: #333;
  border: 1px solid $color-border;
  border-radius: $radius;
  box-shadow: $box-shadow;

  & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: $color-button;
    border-color: $color-button;
  }

  &:focus {
    outline: none
  }

  &::-moz-focus-inner {
    border: 0;
  }

}


</style>