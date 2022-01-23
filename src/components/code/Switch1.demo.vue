<demo>基本</demo>

<template>
  <Switch v-model:checkedValue="bool"/>
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import {ref} from "vue";

export default {
  components: {Switch},
  setup() {
    const bool = ref(true);
    return {bool};
  }
};
</script>