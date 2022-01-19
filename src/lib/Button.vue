<template>
  <button class="hugsy-button" :class="classes"
          :disabled="disabled">
    <span v-if="loading" class="hugsy-loadingIndicator" />
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    level: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`hugsy-theme-${theme}`]: theme,
        [`hugsy-size-${size}`]: size,
        [`hugsy-level-${level}`]: level,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss">
$color-border: #dcdfe6;
$color-button: #409eff;
$red: red;
$grey: grey;
$box-shadow: 0 1px 0 fade-out(black, 0.95);
$h: 32px;
$radius: 4px;

.hugsy-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: #333;
  border: 1px solid $color-border;
  border-radius: $radius;
  box-shadow: $box-shadow;
  transition: background 300ms;

  & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: $color-button;
    border-color: $color-button;
  }

  &:focus {
    outline: none
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.hugsy-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $color-button;

    &:hover, &:focus {
      color: lighten($color-button, 10%);
    }
  }

  &.hugsy-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);;
    }
  }

  &.hugsy-theme-dashed {
    border-style: dashed;
  }

  &.hugsy-size-large {
    font-size: 20px;
    height: 40px;
    padding: 0 16px;
  }

  &.hugsy-size-small {
    font-size: 12px;
    height: 24px;
    padding: 0 4px;
  }

  &.hugsy-theme-default, &.hugsy-theme-dashed {
    &.hugsy-level-primary {
      background: $color-button;
      color: white;
      border-color: $color-button;

      &:hover,
      &:focus {
        background: darken($color-button, 10%);
        border-color: darken($color-button, 10%);
      }
    }

    &.hugsy-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.hugsy-theme-link {
    &.hugsy-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.hugsy-theme-text {
    &.hugsy-level-primary {
      color: $color-button;
      &:hover,
      &:focus {
        color: darken($color-button, 10%);
      }
    }
    &.hugsy-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.hugsy-theme-default {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.hugsy-theme-link, &.hugsy-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .hugsy-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $color-button $color-button $color-button transparent;
    border-style: solid;
    border-width: 2px;
    animation: hugsy-spin 1s infinite linear;
  }

  &.hugsy-level-primary {
    > .hugsy-loadingIndicator {
      border-color: white white white transparent;

    }
  }

}
@keyframes hugsy-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>