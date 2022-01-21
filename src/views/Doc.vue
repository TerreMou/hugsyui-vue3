<template>
  <div class="layout">
    <TopNav class="nav"/>
    <div class="content">
      <aside v-if="asideVisible">
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
$color-aside: #c1b3a6;
$color-main: #c1b3a6;
$font-color: #2a282a;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 67px;
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
    top: 67px;
    left: 0;
    padding: 10px 16px 16px 16px;
    height: 100%;
    color: $font-color;

    > h2 {
      margin-bottom: 4px;
      color: black;
    }

    > ol {
      > li {
        padding: 4px 0;

        > a:hover {
          border-bottom: 2px solid #f65658;
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