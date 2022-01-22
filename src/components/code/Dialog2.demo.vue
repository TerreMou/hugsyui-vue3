<demo>一键打开 Dialog</demo>
<template>
  <div>
    <Button @click="showDialog">Show Dialog</Button>
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
        title: h('strong', {}, 'Overview'),
        content: '内容很长很长很长很长',
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