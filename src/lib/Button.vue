<template>
  <button class="hugsy-button" :class="classes"
          :disabled="disabled">
    <span v-if="loading" class="hugsy-loadingIndicator"/>
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
$border: #d9d9d9;
$theme: #c1b3a6;
$primary: #373737;
$link: #333;
$red: #f65658;
$disabled: grey;
$default: white;
$danger: red;
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
  background: $default;
  color: #333;
  border: 1px solid $border;
  border-radius: $radius;
  box-shadow: $box-shadow;
  transition: background 250ms;
  text-align: center;

  & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: $theme;
    border-color: $theme;
  }

  &:focus {
    outline: none
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.hugsy-theme-link {
    border-color: transparent;
    background: transparent;
    box-shadow: none;
    color: $link;

    &:hover, &:focus {
      background: darken($theme, 5%);
    }
  }

  &.hugsy-theme-text {
    border-color: transparent;
    background: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      border-bottom: 2px solid $red;
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
      background: $primary;
      color: white;
      border-color: $primary;

      &:hover,
      &:focus {
        background: darken($primary, 15%);
        border-color: darken($primary, 15%);
      }
    }

    &.hugsy-level-danger {
      background: $danger;
      border-color: $danger;
      color: #333;

      &:hover,
      &:focus {
        background: darken($danger, 10%);
        border-color: darken($danger, 10%);
      }
    }
  }

  &.hugsy-theme-link {
    &.hugsy-level-danger {
      color: $danger;

      &:hover,
      &:focus {
        color: darken($danger, 10%);
      }
    }
  }

  &.hugsy-theme-text {
    &.hugsy-level-primary {
      color: $primary;
      font-weight: bold;

      &:hover,
      &:focus {
        color: darken($primary, 15%);
      }
    }

    &.hugsy-level-danger {
      color: $danger;

      &:hover,
      &:focus {
        color: darken($danger, 10%);
        border-bottom: 2px solid darken($danger, 10%);
      }
    }
  }

  &.hugsy-theme-default {
    &[disabled] {
      cursor: not-allowed;
      color: $disabled;

      &:hover {
        border-color: $disabled;
      }
    }
  }

  &.hugsy-theme-link, &.hugsy-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $disabled;
      border: none;
    }
  }

  > .hugsy-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $primary $primary $primary transparent;
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
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
</style>