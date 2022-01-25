<demo>禁用</demo>
<template>
  <div>
    <Button>Enabled</Button>
    <Button disabled>Disabled</Button>
    <Button disabled theme="link">Disabled Link</Button>
    <Button disabled theme="text">Disabled Text</Button>
  </div>
</template>

<script lang="ts">
import {Button} from "../../lib/index";

export default {
  components: {Button}
};
</script>