<template>
  <div>
    <Layout main-heading="Switch 开关"
            main-description="Switch component turns on or off the state of your custom option"
            sub-heading="示例">
      <Demo :component="Switch1Demo"
            description="This is basic usage of switch component."/>
      <Demo :component="Switch2Demo"
            description="Switch can be in disabled state."/>
    </Layout>
  </div>
</template>

<script>
import Switch1Demo from './code/Switch1.demo.vue';
import Switch2Demo from './code/Switch2.demo.vue';
import Demo from './Demo.vue';
import Layout from './Layout.vue';

export default {
  components: {Layout, Demo},
  setup() {
    return {Switch1Demo, Switch2Demo};
  }
};
</script>