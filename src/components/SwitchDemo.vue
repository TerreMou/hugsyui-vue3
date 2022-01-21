<template>
  <div>
    <h1>Switch 开关</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script>
import Switch1Demo from './code/Switch1.demo.vue';
import Switch2Demo from './code/Switch2.demo.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {Switch1Demo, Switch2Demo};
  }
};
</script>

<style lang="scss" scoped>

h1 {
}

</style>