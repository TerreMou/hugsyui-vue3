<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="hugsy-dialog-overlay" @click="onClickOverlay"/>
      <div class="hugsy-dialog-wrapper">
        <div class="hugsy-dialog">
          <header>
            <slot name="title" />
            <span class="hugsy-dialog-close"
                  @click="close"/>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="onCancel">取消</Button>
            <Button @click="onOk" level="primary">确认</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: Function,
    cancel: Function,
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", !props.visible);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const onCancel = () => {
      props.cancel && props.cancel()
      close()
    };
    const onOk = () => {
      if (props.ok && props.ok() !== false) {
        close()
      }
    };
    return {close, onClickOverlay, onCancel, onOk};
  }
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