<template>
  <div class="hugsy-tabs">
    <div class="hugsy-tabs-nav">
      <div class="hugsy-tabs-nav-item" :class="{selected: title===selected}"
           v-for="(title,index) in titles" :key="index"
           @click="select(title)">{{ title }}
      </div>
    </div>
    <div class="hugsy-tabs-content">
      <component class="hugsy-tabs-content-item"
                 :is="currentSelect" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {computed} from "vue";

export default {
  props: {
    selected: {
      type: String
    },
  },
  setup(props, context) {
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

    return {defaults, titles, select, currentSelect};
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