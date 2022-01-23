<template>
  <article class="markdown-body" id="mb" v-html="content"/>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
};
</script>