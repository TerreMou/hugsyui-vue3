<template>
  <div>
    <Layout main-heading="Button 按钮"
            main-description="Button 组件提供多种内置样式，并且可以手动更改状态和大小。"
            sub-heading="示例">
      <Demo :component="Button1Demo"
            description="有 5 种样式可以选择：默认方形、圆角、轮廓、链接和文字。"/>
      <Demo :component="Button2Demo"
            description="按钮有小、中、大三种尺寸，默认尺寸为中。"/>
      <Demo :component="Button3Demo"
            description="内置有普通、警告、危险三个重要性梯度。"/>
      <Demo :component="Button4Demo"
            description="添加 disabled 属性便可让按钮处于不可用状态。"/>
      <Demo :component="Button5Demo"
            description="添加 loading 属性便可让按钮处于加载状态。"/>
    </Layout>
  </div>
</template>

<script>
import Layout from './Layout.vue';
import Demo from './Demo.vue';
import Button1Demo from './code/Button1.demo.vue';
import Button2Demo from './code/Button2.demo.vue';
import Button3Demo from './code/Button3.demo.vue';
import Button4Demo from './code/Button4.demo.vue';
import Button5Demo from './code/Button5.demo.vue';

export default {
  components: {Layout, Demo},
  setup() {
    return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
  }
};
</script>