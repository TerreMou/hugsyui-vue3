<demo>默认</demo>
<template>
  <div>
    <Button @click="toggle">Show dialog</Button>
    <Dialog v-model:visible="bool" :closeOnClickOverlay="true"
            :cancel="f1" :ok="f2">
      <template v-slot:title>
        <strong>Overview</strong>
      </template>
      <template v-slot:content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Alias animi aspernatur atque blanditiis,
          consequatur corporis deleniti exercitationem expedita facilis
          fugit inventore laborum nam nobis odit,
          quae quas repudiandae vitae voluptates.
        </p>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const bool = ref(false);
    const toggle = () => {
      bool.value = !bool.value;
    };
    const f1 = () => {
      console.log('cancel');
    };
    const f2 = () => {
      console.log('ok');
    };
    return {toggle, bool, f1, f2};
  }
};
</script>