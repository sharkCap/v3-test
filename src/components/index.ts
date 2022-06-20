import { App } from "vue";
import Input from "./Input";
import FormItem from "./Form/FormItem";

const components = [
  Input,
  FormItem
]

export default function (app: App) {
  components.forEach(item => app.component(item.name, item));
}