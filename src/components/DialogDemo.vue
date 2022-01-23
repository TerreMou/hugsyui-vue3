<template>
  <div>
    <Layout main-heading="Dialog 对话框"
            main-description="在当前页面正中打开一个浮层对话框，可以设置是否能够点击遮罩层关闭。"
            sub-heading="示例">
      <Demo :component="Dialog1Demo"
            description="基础对话框，含有确认和取消按钮，支持点击遮罩层关闭对话框：
            设置 closeOnClickOverlay 属性为 true 即可。"/>
      <Demo :component="Dialog2Demo"
            description="可调用内置的 openDialog 函数，一键调用 Dialog 对话框。"/>
    </Layout>
  </div>
</template>

<script>
import Layout from './Layout.vue';
import Demo from './Demo.vue';
import Dialog1Demo from './code/Dialog1.demo.vue';
import Dialog2Demo from './code/Dialog2.demo.vue';

export default {
  components: {Layout, Demo},
  setup() {
    return {Dialog1Demo, Dialog2Demo};
  }
};
</script>