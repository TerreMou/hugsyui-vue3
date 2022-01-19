<template>
  <Switch v-model:checkedValue="bool"/>
</template>

<script>
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
import Button from '../lib/Button.vue';

export default {
  components: {Button, Switch},
  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>