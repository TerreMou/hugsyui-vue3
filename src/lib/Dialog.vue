<template>
  <div class="hugsy-dialog-overlay"/>
  <div class="hugsy-dialog-wrapper">
    <div class="hugsy-dialog">
      <header>标题 <span class="hugsy-dialog-close"/></header>
      <main>
        <p>细草微风岸，危樯独夜舟。</p>
        <p>星垂平野阔，月涌大江流。</p>
        <p>名岂文章著，官应老病休。</p>
        <p>飘飘何所似，天地一沙鸥。</p>
      </main>
      <footer>
        <Button>取消</Button>
        <Button level="primary">确认</Button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  components: {Button},
  props: {
    visible: Boolean,
    title: String,
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.hugsy-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 20em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    text-align: right;
    padding: 12px 16px;
    border-top: 1px solid $border-color;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>