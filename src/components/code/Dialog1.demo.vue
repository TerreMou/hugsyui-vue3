<demo>默认</demo>
<template>
  <div>
    <Button @click="toggle">Show dialog</Button>
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
  </div>
</template>

<script>
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
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
    return {toggle, bool, f1, f2};
  }
};
</script>