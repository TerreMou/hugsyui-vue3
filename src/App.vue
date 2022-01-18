<template>
  <router-view/>
</template>

<script>

import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500)
    console.log(asideVisible.value);
    provide('asideVisible', asideVisible) // set
  }
};
</script>
