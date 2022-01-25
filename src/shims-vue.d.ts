// declare module "*.vue" {
//   import {ComponentOptions} from "vue";
//   const componentOptions: ComponentOptions;
//   export default componentOptions;
// }
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.md" {
  import {ComponentOptions} from "vue";
  const str: String;
  export default str;
}