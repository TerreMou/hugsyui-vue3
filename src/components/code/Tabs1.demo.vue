<demo>基本</demo>
<template>
  <Tabs v-model:selected="tab">
    <Tab title="Tab One">This is Content One</Tab>
    <Tab title="Tab Two">This is Content Two</Tab>
    <Tab title="Tab Three">This is Content Three</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs, Tab} from "../../lib/index";
import {ref} from "vue";

export default {
  components: {Tabs, Tab},
  setup() {
    const tab = ref("Tab One");
    return {tab};
  }
};
</script>