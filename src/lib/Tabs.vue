<template>
  <div class="hugsy-tabs">

    <div class="hugsy-tabs-nav" ref="container">
      <div class="hugsy-tabs-nav-item" :class="{selected: title===selected}"
           v-for="(title,index) in titles" :key="index"
           :ref="el => {if (title === selected) currentTab = el}"
           @click="select(title)">{{ title }}
      </div>
      <div class="hugsy-tabs-nav-indicator" ref="indicator"/>
    </div>

    <div class="hugsy-tabs-content">
      <component class="hugsy-tabs-content-item"
                 :is="currentSelect" :key="selected"/>
    </div>

  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {computed, onMounted, ref, watchEffect} from "vue";

export default {
  props: {
    selected: {
      type: String
    },
  },
  setup(props, context) {
    const currentTab = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);

    onMounted(() => {
      watchEffect(
          () => {
            const {width: tabWidth} = currentTab.value.getBoundingClientRect();
            indicator.value.style.width = tabWidth + "px";
            const {left: left1} = container.value.getBoundingClientRect();
            const {left: left2} = currentTab.value.getBoundingClientRect();
            const left = left2 - left1;
            indicator.value.style.left = left + "px";
          }
      );
    });

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("<Tabs> 的子标签必须是 <Tab>");
      }
    });
    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    const currentSelect = computed(() => {
      return defaults.filter(tag => {
        return tag.props.title === props.selected;
      })[0];
    });

    return {
      defaults, titles, select, currentSelect,
      currentTab, container, indicator
    };
  }
};
</script>

<style lang="scss">
$selected: #00dc82;
$color: #00312d;
$line: #00dc82;
$border-color: #c8d8d8;

.hugsy-tabs {

  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-indicator {
      position: absolute;
      height: 3px;
      background: $line;
      left: 0;
      bottom: -1px;
      transition: all 300ms;
    }

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      font-weight: bold;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $selected;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }

}

</style>