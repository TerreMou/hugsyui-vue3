<template>
  <button :class=" {checked: checkedValue} " @click="toggle"><span/></button>
</template>

<script lang="ts">

export default {
  props: {
    checkedValue: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:checkedValue", !props.checkedValue);
    };
    return {toggle};
  }
};
</script>

<style lang="scss" scoped>
@import "../helper.scss";

$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: $color-off;
  border-radius: $h / 2;
  position: relative;

  > span {
    background: white;
    height: $h2;
    width: $h2;
    border-radius: $h2 / 2;
    border: none;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all 250ms;
  }

  &.checked {
    background: $color-on;

    > span {
      left: calc(100% - #{$h2} - 2px)
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.checked:active {
    > span {width: $h2 + 4px; margin-left: -4px;}
  }
}
</style>