interface FormItemContext {
  [PropsName: string]: any
}
import { h ,defineComponent} from 'vue';

export default defineComponent({
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  
  render: (data: any) => {
    const params: FormItemContext = {
      row: data.row,
      index: data.index
    };

    if (data.column) params.column = data.column;
    return data.render(h, params);

  }
})


