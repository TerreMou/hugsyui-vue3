<template>

  <h2>Button 按钮</h2>

  <section>
    <h3>样式</h3>
    <div class="wrapper">
      <Button @click="onClick">Click Button</Button>
      <Button>Default Button</Button>
      <Button theme="dashed">Dashed Button</Button>
      <Button theme="text">Text Button</Button>
      <Button theme="link">Link Button</Button>
    </div>
  </section>

  <section>
    <h3>尺寸</h3>
    <div class="wrapper">
      <Button size="large">Large</Button>
      <Button>Default</Button>
      <Button size="small">Small</Button>
    </div>
  </section>


  <section>
    <h3>程度</h3>
    <div class="wrapper">
      <Button level="primary">Primary</Button>
      <Button>Default</Button>
      <Button level="danger">Danger</Button>
      <Button level="primary" theme="text"> Primary Text</Button>
      <Button level="danger" theme="text">Danger Text</Button>
      <Button level="danger" theme="link">Danger Link</Button>
    </div>
  </section>

  <section>
    <h3>禁用</h3>
    <div class="wrapper">
      <Button disabled>Disabled</Button>
      <Button disabled theme="link">Disabled Link</Button>
      <Button disabled theme="text">Disabled Text</Button>
    </div>
  </section>

  <section>
    <h3>加载中</h3>
    <div class="wrapper">
      <Button loading level="primary">Loading</Button>
      <Button loading>Loading</Button>
    </div>
  </section>

</template>

<script>
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {onClick};
  }
};
</script>

<style lang="scss" scoped>
$border: #eee;
h2 {
  margin-bottom: 24px;
}

section {
  display: flex;
  flex-direction: column;

  > h3 {
    margin: 8px 0 16px 0;
  }

  > .wrapper {
    border: 1px solid $border;
    border-radius: 4px;
    padding: 24px;
    margin-right: 25%;
    transition: all .2s ease-in-out;

    &:hover {
      border-color: darken($border, 10%);
    }
  }
}
</style>