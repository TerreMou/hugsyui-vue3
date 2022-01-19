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
$color-aside: #c8d0d8;
$color-main: white;

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
    padding: 70px 16px 16px 16px;
    height: 100%;

    > h2 {
      margin-bottom: 4px;
    }

    > ol {
      > li {
        padding: 4px 0;
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