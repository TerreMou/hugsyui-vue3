<template>
<!--  <h2>Switch 开关</h2>-->
<!--  <hr/>-->
<!--  <h3>常规</h3>-->
  <Switch v-model:checkedValue="bool"/>
</template>

<script>
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>