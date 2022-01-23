<template>
  <button class="hugsy-switch" :class=" {'hugsy-checked': checkedValue} "
          @click="toggle"><span/></button>
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

<style lang="scss">
$color-on: #00dc82;
$color-off: #b4c4c3;
$h: 22px;
$h2: $h - 4px;
.hugsy-switch {
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

  &.hugsy-checked {
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

  &.hugsy-checked:active {
    > span {width: $h2 + 4px; margin-left: -4px;}
  }

  &[disabled] {
   cursor: not-allowed;
  }

}
</style>