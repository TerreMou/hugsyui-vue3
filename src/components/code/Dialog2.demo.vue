<demo>一键打开 Dialog</demo>
<template>
  <div>
    <Button @click="showDialog">Show dialog</Button>
  </div>
</template>

<script>
import Button from '../../lib/Button.vue';
import {openDialog} from '../../lib/openDialog';
import {h} from 'vue';

export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        visible: false,
        closeOnClickOverlay: true,
        title: h('strong', {}, '这里是标题'),
        content: '这里是很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的内容',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        },
      });
    };
    return {showDialog};
  }
};
</script>