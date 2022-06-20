import { defineComponent, inject, toRefs } from "vue";
import { FormItemKey, FormItemContext } from "../Form/types";

export default defineComponent({
  name: 'AInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false,
  emits: ['update:modelValue'],
  
  setup(props, { emit, attrs }){
    const formItemCtx = inject<FormItemContext>(FormItemKey);

    const onInput = (event: Event) =>{
      const value = (event.target as HTMLInputElement).value;
      if (value !== props.modelValue) {
        emit('update:modelValue', value);
        formItemCtx?.handlerChange(props.modelValue);
      }
    }
    const onBlur = () =>{
      formItemCtx?.handlerBlur(props.modelValue);
    }

    return () => {
      return (
        <div class="ant-field-wrap">
          <input
            class="ant-field"
            autocomplete="new-password"
            placeholder={ attrs.placeholder as string }
            onInput={ onInput }
            onBlur={ onBlur }
            // placeholder={ props.placeholder }
            value={ props.modelValue }
          />
        </div>
      );
    }
  }
})