<template>
  <button :class=" {checked} " @click="toggle"><span/></button>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return {checked, toggle};
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
    transition: left 250ms;
  }
}

button.checked {
  background: $color-on;

  > span {
    left: calc(100% - #{$h2} - 2px)
  }
}

button:focus {
  outline: none;
}

</style>