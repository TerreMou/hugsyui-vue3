<template>
  <div>
    <Layout main-heading="Tabs 标签页"
            main-description="最常用的选项卡切换组件，可作为页面导航。"
            sub-heading="示例">
      <Demo :component="Tabs1Demo"
            description="默认为水平列表选项卡。"/>
    </Layout>
  </div>
</template>

<script>
import Tabs1Demo from './code/Tabs1.demo.vue';
import Demo from './Demo.vue';
import Layout from './Layout.vue';

export default {
  components: {Layout, Demo},
  setup() {
    return {Tabs1Demo};
  }
};
</script>