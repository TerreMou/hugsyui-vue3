<demo>梯度</demo>
<template>
  <div>
    <Button>Info</Button>
    <Button level="warning">Warning</Button>
    <Button level="danger">Danger</Button>
    <Button theme="text">Info Text</Button>
    <Button level="warning" theme="text">Warning Text</Button>
    <Button level="danger" theme="text">Danger Text</Button>
  </div>
</template>

<script lang="ts">
import {Button} from "../../lib/index";

export default {
  components: {Button}
};
</script>