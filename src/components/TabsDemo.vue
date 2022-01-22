<template>
  <div>
    <Layout main-heading="Tabs 标签页"
            main-description="This component can be used as an on-page navigation
            offering with a rich variety of visual customizations and
            usage flexibility."
            sub-heading="示例">
      <Demo :component="Tabs1Demo"
            description="By default it’s displayed as a horizontal list
            of tab items"/>
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