<template>
  <div class="layout">
    <TopNav class="nav" toggle-aside-button-visible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">如何安装</router-link>
          </li>
          <li>
            <router-link to="/doc/getstarted">快速开始</router-link>
          </li>
        </ol>

        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import {inject, Ref} from "vue";

export default {
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
$color-aside: #373737;
$color-main: #c1b3a6;
$font-color: #c1b3a6;
$selected: #f65658;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
    background: none;
    color: #2a282a;
    @media (max-width: 500px) {
      background: #373737;
    }
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
    background: $color-aside;
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    color: $font-color;

    > h2 {
      padding: 0 16px;
    }

    > ol {
      margin-bottom: 16px;

      > li {
        a {
          display: block;
          padding: 8px 20px;
          position: relative;

          &:hover::after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: $selected;
          }
        }

        .router-link-active {

          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: $selected;
          }
        }

      }
    }
  }

  > main {
    overflow: auto;
    flex-grow: 1;
    padding: 16px;
    background: $color-main;
  }
}
</style>