import {createApp, h} from "vue";
import Dialog from "./Dialog.vue";

const openDialog = (options) => {
  const {closeOnClickOverlay, title, content, ok, cancel} = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    dialogApp.unmount(div);
    div.remove();
  };
  const dialogApp = createApp({
    render() {
      return h(Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {if (newVisible === false) {close();}},
          ok, cancel, closeOnClickOverlay
        },
        {title, content}
      );
    }
  });
  dialogApp.mount(div);
};

export {openDialog};