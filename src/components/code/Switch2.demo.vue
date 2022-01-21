<demo>状态</demo>

<template>
  <Switch v-model:checkedValue="bool" disabled/>
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import {ref} from "vue";

export default {
  components: {Switch},
  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>