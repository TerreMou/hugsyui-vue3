<template>
  <div>
    <div class="title">
      <h1>Switch 开关</h1>
      <p>Switch component turns on or off the state of your custom option</p>
    </div>
    <section>
      <h2>示例</h2>
      <Demo :component="Switch1Demo"
            description="This is basic usage of switch component."/>
      <Demo :component="Switch2Demo"
            description="Switch can be in disabled state."/>
    </section>
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

.title {
  padding: 16px 16px;
  h1 {
    font-size: 36px;
    font-weight: 600;
  }
}

section {
  h2 {
    font-size: 28px;
    font-weight: 600;
    padding: 16px 16px 0 16px;
  }
}

</style>