<template>
  <h2>Dialog 对话框</h2>
  <h3>示例1</h3>
  <Dialog :visible="true" title="标题"
          @yes="fn1" @no="fn2">

  </Dialog>
</template>
<script>
import Dialog from '../lib/Dialog.vue';

export default {
  components: {Dialog}
};
</script>