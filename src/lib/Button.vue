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
$border: #e5eef0;
$theme: #fff;
$warning: #ffb624;
$link: #00dc82;
$disabled: #b4c4c3;
$default: #00dc82;
$danger: #f36948;
$box-shadow: 0 1px 0 fade-out(black, 0.95);
$h: 32px;
$radius: 4px;

.hugsy-button {
  box-sizing: border-box;
  height: $h;
  padding: 8px 16px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: $default;
  color: $theme;
  border: 1px solid $border;
  border-radius: $radius;
  box-shadow: $box-shadow;
  transition: background 250ms;
  text-align: center;

  & + & {
    margin-left: 8px;
    margin-bottom: 8px;
  }

  &:hover, &:focus {
    background: darken($default, 10%);
    border-color: darken($default, 10%);
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
      background: darken(white, 10%);
    }
  }

  &.hugsy-theme-oval {
   border-radius: 1.5rem;
  }

  &.hugsy-theme-text {
    border-color: transparent;
    background: transparent;
    box-shadow: none;
    color: inherit;
    position: relative;

    &:hover::after, &:focus::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: $default;
    }
  }

  &.hugsy-theme-outlined {
    border: 2px solid $default;
    border-radius: 1.5rem;
    background: transparent;
    color: $default;

    &:hover, &:focus {
      background: lighten($default, 50%);
    }
  }

  &.hugsy-size-large {
    font-size: 20px;
    height: 40px;
    padding: 8px 16px;
  }

  &.hugsy-size-small {
    font-size: 12px;
    height: 24px;
    padding: 8px 16px;
  }

  &.hugsy-theme-default {
    &.hugsy-level-warning {
      background: $warning;
      color: white;
      border-color: $warning;

      &:hover,
      &:focus {
        background: darken($warning, 10%);
        border-color: darken($warning, 10%);
      }
    }

    &.hugsy-level-danger {
      background: $danger;
      border-color: $danger;
      color: white;

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
    &.hugsy-level-warning {
      color: $warning;
      font-weight: bold;

      &:hover,
      &:focus {
        color: darken($warning, 10%);

        &::after {
          background: darken($warning, 10%);
        }
      }
    }

    &.hugsy-level-danger {
      color: $danger;
      font-weight: bold;

      &:hover,
      &:focus {
        color: darken($danger, 10%);

        &::after {
          background: darken($danger, 10%);
        }
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

      &:hover::after, &:focus::after {
        content: none
      }
    }
  }

  > .hugsy-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $theme $theme $theme transparent;
    border-style: solid;
    border-width: 2px;
    animation: hugsy-spin 1s infinite linear;
  }

}

@keyframes hugsy-spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
</style>