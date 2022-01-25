<demo>加载状态</demo>
<template>
  <div>
    <Button loading size="small">Loading</Button>
    <Button loading>Loading</Button>
    <Button loading size="large">Loading</Button>
  </div>
</template>

<script lang="ts">
import {Button} from "../../lib/index";

export default {
  components: {Button}
};
</script>