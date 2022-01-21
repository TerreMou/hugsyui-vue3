<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-h1"/>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>

    <svg class="icon toggleAside"
         @click="toggleAside">
      <use xlink:href="#icon-menu2"/>
    </svg>

  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); //get
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
  }
};

</script>

<style lang="scss" scoped>
$color: #c1b3a6;
$bg:#373737;
.topnav {
  color: $color;
  background: $bg;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: none;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }


  @media (max-width: 500px) {
    > .menu {display: none}
    > .logo {margin: 0 auto;}
    > .toggleAside {display: inline-block;}
  }
}
</style>