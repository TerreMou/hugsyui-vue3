<template>
  <div>
    <Layout main-heading="Button 按钮"
            main-description="This Button component replaces the standard HTML button.
            It offers multiple built-in styles and allows a user to change status and size manually."
            sub-heading="示例">
      <Demo :component="Button1Demo"
            description="We have 3 styles available: outlined, flat and square."/>
      <Demo :component="Button2Demo"
            description="The size prop is used to fit your button to any place on your web page."/>
      <Demo :component="Button3Demo"
            description="It’s used to apply a gradient style to a background."/>
      <Demo :component="Button4Demo"
            description="The disabled prop prevent any actions with button."/>
      <Demo :component="Button5Demo"
            description="You can add loading state to the button"/>
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