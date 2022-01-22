<demo>默认</demo>
<template>
  <Tabs v-model:selected="tab">
    <Tab title="Tab One">This is Content One</Tab>
    <Tab title="Tab Two">This is Content Two</Tab>
    <Tab title="Tab Three">This is Content Three</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import {ref} from "vue";

export default {
  components: {Tabs, Tab},
  setup() {
    const tab = ref("Tab One");
    return {tab};
  }
};
</script>