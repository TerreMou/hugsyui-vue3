<template>
  <h2>Button 按钮</h2>

  <h3>样式</h3>
  <Button @click="onClick">Click Button</Button>
  <Button>Default Button</Button>
  <Button theme="dashed">Dashed Button</Button>
  <Button theme="text">Text Button</Button>
  <Button theme="link">Link Button</Button>

  <h3>尺寸</h3>
  <Button size="large">Large</Button>
  <Button>Default</Button>
  <Button size="small">Small</Button>

  <h3>程度</h3>
  <Button level="primary">Primary</Button>
  <Button>Default</Button>
  <Button level="danger">Danger</Button>
  <Button level="primary" theme="text"> Primary Text</Button>
  <Button level="danger" theme="text">Danger Text</Button>
  <Button level="danger" theme="link">Danger Link</Button>

  <h3>禁用</h3>
  <Button disabled>Disabled</Button>
  <Button disabled theme="link">Disabled Link</Button>
  <Button disabled theme="text">Disabled Text</Button>

  <h3>加载中</h3>
  <Button loading level="primary">Loading</Button>
  <Button loading>Loading</Button>

</template>

<script>
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {onClick}
  }
};
</script>