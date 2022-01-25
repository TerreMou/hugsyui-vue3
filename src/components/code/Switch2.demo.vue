<demo>不可用状态</demo>

<template>
  <Switch v-model:checkedValue="bool1" disabled/>
  <Switch v-model:checkedValue="bool2" disabled/>
</template>

<script lang="ts">
import {Switch} from "../../lib/index";
import {ref} from "vue";

export default {
  components: {Switch},
  setup() {
    const bool1 = ref(true);
    const bool2 = ref(false);
    return {bool1, bool2};
  }
};
</script>