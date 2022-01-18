<template>
  <div>导航栏 |
    <router-link to="/">Terre</router-link> |
    <router-link to="/xxx">Terre2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>
