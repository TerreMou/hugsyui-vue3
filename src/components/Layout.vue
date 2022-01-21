<template>
  <header>
    <h1>{{ mainHeading }}</h1>
    <p>{{ mainDescription }}</p>
  </header>
  <section>
    <h2>{{ subHeading }}</h2>
    <slot/>
  </section>
</template>

<script>
export default {
  props: {
    mainHeading: String,
    mainDescription: String,
    subHeading: String
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 16px 16px;

  h1 {
    font-size: 36px;
    font-weight: 600;
  }
}
section {
  h2 {
    font-size: 28px;
    font-weight: 600;
    padding: 16px 16px 0 16px;
  }
}
</style>