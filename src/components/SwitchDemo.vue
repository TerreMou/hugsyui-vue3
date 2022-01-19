<template>
<!--  Switch 的 value 自动监听 update:value 这个事件-->
  <Switch v-model:checkedValue="checkedValue"/>
</template>

<script>
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const checkedValue = ref(false);
    return {checkedValue};
  }
};
</script>