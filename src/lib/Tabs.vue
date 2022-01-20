<template>
  <div class="hugsy-tabs">

    <div class="hugsy-tabs-nav" ref="container">
      <div class="hugsy-tabs-nav-item" :class="{selected: title===selected}"
           v-for="(title,index) in titles" :key="index"
           :ref="el => {if (el) navItem[index]=el}"
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
import {computed, onMounted, onUpdated, ref} from "vue";

export default {
  props: {
    selected: {
      type: String
    },
  },
  setup(props, context) {
    const navItem = ref<HTMLDivElement[]>([]);
    const container = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);

    console.log(navItem.value);
    const x = () => {
      const currentTab = navItem.value.filter(div => div.classList.contains("selected"))[0];
      const {width: tabWidth} = currentTab.getBoundingClientRect();
      indicator.value.style.width = tabWidth + "px";
      const {left: left1} = container.value.getBoundingClientRect();
      const {left: left2} = currentTab.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };
    onMounted(x);
    onUpdated(x);

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
      navItem, container, indicator
    };
  }
};
</script>

<style lang="scss">
$blue: #88a3c1;
$color: #333;
$border-color: #d9d9d9;

.hugsy-tabs {
  border: 1px solid black;

  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 300ms;
    }

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;

    &-item {

    }
  }

}

</style>