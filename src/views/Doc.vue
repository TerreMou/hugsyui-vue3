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
            <router-link to="/doc/getstarted">开始使用</router-link>
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
$color-aside: #e5eef0;
$color-main: white;
$font-color: #00312d;
$selected: #00e080;
$selected-bg: lighten($selected, 50%);

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 256px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    z-index: 10;
    flex-shrink: 0;
    background: $color-aside;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 100px;
    height: 100%;
    color: $font-color;

    > h2 {
      padding: 0 16px 4px 32px;
      font-size: 14px;
      color: #003633;
    }

    > ol {
      margin-bottom: 16px;

      > li {
        a {
          display: block;
          padding: 8px 16px 8px 48px;
          position: relative;

          &:hover {
            background-color: $selected-bg;
          }
        }

        .router-link-active {
          background-color: $selected-bg;

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

@media(max-width: 500px) {
  .content {
    padding-left: 0;

    > aside {
      width: 150px;

      > h2 {
        padding: 0 16px;
      }

      > ol {
        > li {
          a {
            padding: 8px 20px;
          }
        }
      }
    }
  }
}

</style>