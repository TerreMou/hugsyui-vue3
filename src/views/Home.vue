<template>
  <div class="topnavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>Hugsy UI</h1>
      <h2>一个轻量的 UI 框架</h2>
      <p class="actions">
        <router-link to="/doc/intro">文档</router-link>
        <router-link to="/doc/getstarted">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-idea"/>
        </svg>
        <h3>代码轻量易读</h3>
        <p>每个组件的源代码都很简洁</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue1"/>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"/>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  components: {TopNav},
};
</script>

<style lang="scss" scoped>
$button: #00e080;
$border-radius: 4px;
$color: white;
$font: #003c3c;

.topnavAndBanner {
  background: linear-gradient(142deg, rgba(23, 93, 93, 1) 0%, rgba(0, 60, 60, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

  .topnav {
    background: none;
  }
}

.banner {
  color: $color;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    padding-bottom: 16px;
  }

  > .actions {
    padding: 36px 0 0 0;
    margin-top: 8px;

    a {
      margin: 0 8px;
      background: $button;
      color: $color;
      display: inline-block;
      text-align: center;
      padding: 4px 20px;
      border-radius: $border-radius;

    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;
  color: $font;

  @media (max-width: 450px) {
    width: 300px;
  }

  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      justify-content: start;
      align-content: space-between;
      width: 400px;
      margin: 16px 0;
      padding: 8px 16px;
      display: grid;
      grid-template-areas:
          "icon h3"
          "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: h3;
      }

      > p {
        grid-area: text;
      }
    }
  }
}

</style>