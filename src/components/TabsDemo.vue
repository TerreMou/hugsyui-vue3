<template>
  <h2>Tabs 切换</h2>

  <h3>示例一</h3>
  <Tabs v-model:selected="tab">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航222222222">内容2</Tab>
    <Tab title="导航33333">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import {ref} from "vue";

export default {
  components: {Tabs, Tab},
  setup() {
    const tab = ref("导航1");
    return {tab};
  }
};
</script>