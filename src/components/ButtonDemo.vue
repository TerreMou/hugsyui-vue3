<template>
  <Button @click="onClick" @mouseover="onClick">
    你好
  </Button>
</template>

<script>
import Button from '../lib/Button.vue';
export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    }
    return {onClick}
  }
};
</script>