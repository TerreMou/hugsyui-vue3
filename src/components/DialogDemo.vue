<template>
  <div>
    <Layout main-heading="Dialog 对话框"
            main-description="Classic modal overlay which represents a dialog box"
            sub-heading="示例">
      <Demo :component="Dialog1Demo"
            description="<Dialog>, by default, has the OK and Cancel buttons
            in the footer. You can provide a custom message and title
            with the message and title props respectively."/>
      <Demo :component="Dialog2Demo"
            description="<Dialog> supports close on overlay click (disabled by default).
            This feature may be enabled by setting the prop closeOnClickOverlay."/>
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