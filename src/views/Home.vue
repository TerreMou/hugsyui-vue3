<template>
  <div class="topnavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>Hugsy UI</h1>
      <h2>一个轻量的 UI 框架</h2>
      <p class="actions">
        <a href="#">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"/>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"/>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-idea"/>
    </svg>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  components: {TopNav},
};
</script>

<style lang="scss" scoped>
$button: #c1b3a6;
$border-radius: 4px;
$color: #c1b3a6;

.topnavAndBanner {
  background: linear-gradient(145deg, rgba(55, 55, 55, 1) 0%, rgba(34, 34, 34, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

  .topnav {
    background: none;
    }
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $button;
      color: black;
      display: inline-block;
      text-align: center;
      padding: 8px 24px;
      border-radius: $border-radius;

    }
  }
}
</style>