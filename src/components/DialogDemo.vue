<template>
  <h2>Dialog 对话框</h2>
  <h3>示例1</h3>
  <Button @click="toggle">对话框 1</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
          :cancel="f1"
          :ok="f2">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <p>细草微风岸，危樯独夜舟。</p>
      <p>星垂平野阔，月涌大江流。</p>
      <p>名岂文章著，官应老病休。</p>
      <p>飘飘何所似，天地一沙鸥。</p>
    </template>
  </Dialog>
</template>

<script>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
    };
    const f2 = () => {
      console.log('ok');
      return true;
    };
    return {toggle, x, f1, f2};
  }
};
</script>