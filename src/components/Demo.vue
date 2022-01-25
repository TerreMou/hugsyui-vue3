<template>
  <div class="demo">
    <h3>{{ component.__sourceCodeTitle }}</h3>
    <p class="description">{{ description }}</p>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button size="small" theme="link" @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button size="small" theme="link" @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="rawCode"/>
    </div>
  </div>
</template>

<script>
import Button from '../lib/Button.vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';
import {computed, ref} from 'vue';

export default {
  components: {Button},
  props: {
    component: Object,
    description: String,
  },
  setup(props) {
    const codeVisible = ref(false);
    const rawCode = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const hideCode = () => {
      codeVisible.value = false;
    };
    const showCode = () => {
      codeVisible.value = true;
    };

    return {Prism, codeVisible, rawCode, hideCode, showCode};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #c8d8d8;

.demo {
  margin: 16px 0 32px;

  > h3 {
    font-size: 20px;
    padding: 8px 16px;
  }

  > .description {
    padding: 0 16px;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 0 16px 16px 16px;
    border-bottom: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>