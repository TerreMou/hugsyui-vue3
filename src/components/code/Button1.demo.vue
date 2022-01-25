<demo>样式</demo>
<template>
  <div>
    <Button>Button</Button>
    <Button theme="oval">Oval</Button>
    <Button theme="outlined">Outline</Button>
    <Button theme="link">Link</Button>
    <Button theme="text">Text</Button>
  </div>
</template>

<script lang="ts">
import {Button} from "../../lib/index";

export default {
  components: {Button}
};
</script>