<template>
  <Button>
    Default Button
  </Button>
  <Button theme="primary">
    Primary Button
  </Button>
  <Button theme="dashed">
    Dashed Button
  </Button>
  <Button theme="text">
    Text Button
  </Button>
  <Button theme="link">
    Link Button
  </Button>
</template>

<script>
import Button from '../lib/Button.vue';
export default {
  components: {Button},
  setup() {

  }
};
</script>