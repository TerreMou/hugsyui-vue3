<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-h1"/>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <a href="#">GitHub</a>
      </li>
    </ul>

    <svg class="icon toggleAside"
         v-if="toggleAsideButtonVisible"
         @click="toggleAside">
      <use xlink:href="#icon-menu"/>
    </svg>

  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  props: {
    toggleAsideButtonVisible: {
      type: Boolean,
      default: false
    }
  },
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
$bg: #373737;
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
    cursor: pointer;
  }


  @media (max-width: 500px) {
    > .menu {display: none}
    > .logo {margin: 0 auto;}
    > .toggleAside {display: inline-block;}
  }
}
</style>