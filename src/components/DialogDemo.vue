<template>
  <h2>Dialog 对话框</h2>

  <h3>示例一</h3>
  <Button @click="toggle">对话框1</Button>
  <Dialog v-model:visible="bool" :closeOnClickOverlay="false"
          :cancel="f1" :ok="f2">
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

  <h3>示例二</h3>
  <Button @click="showDialog">Show Dialog</Button>

</template>

<script>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {Button, Dialog},
  setup() {
    const showDialog = () => {
      openDialog({
        visible: false,
        closeOnClickOverlay: false,
        title: "提示",
        content: "内容很长很长很长很长",
        ok() {
          console.log('ok2');
        },
        cancel() {
          console.log('cancel2');
        },
      })
    }
    const bool = ref(false);
    const toggle = () => {
      bool.value = !bool.value;
    };
    const f1 = () => {
      console.log('cancel');
    };
    const f2 = () => {
      console.log('ok');
    };
    return {toggle, bool, f1, f2, showDialog};
  }
};
</script>