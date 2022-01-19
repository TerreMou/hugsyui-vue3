<template>
  <h2>Dialog 对话框</h2>
  <h3>示例1</h3>
  <Button @click="toggle">对话框 1</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
          :cancel="f1"
          :ok="f2"></Dialog>
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
    }
    const f2 = () => {
      console.log('ok')
      return true
    }
    return {toggle, x, f1, f2};
  }
};
</script>