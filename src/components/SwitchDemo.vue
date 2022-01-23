<template>
  <div>
    <Layout main-heading="Switch 开关"
            main-description="用于切换开启状态/关闭状态。"
            sub-heading="示例">
      <Demo :component="Switch1Demo"
            description="Switch 组件的基本用法。"/>
      <Demo :component="Switch2Demo"
            description="Switch 组件可以被设置为不可用状态。"/>
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