import { defineComponent, PropType, provide } from "vue";
import { AntRuleItem, FormItemKey, ValidTrigger } from "./types";

import Schema from 'async-validator';


export default defineComponent({
  name: 'AFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: [Object, Array] as PropType<AntRuleItem | AntRuleItem[]>,
      default: () => {
        return []
      }
    }
  },
  setup(props, { slots, attrs }){
    const renderLabel = () => {
      return slots.label ? slots.label() : <label class="item-label">{ props.label }</label>;
    }

    const getRules = (trigger?: ValidTrigger): AntRuleItem[] => {
      const rules = props.rules;
      if (rules) {
        const ruleArr = Array.isArray(rules) ? rules : [rules];

        // if (trigger) {
        //   return ruleArr.filter(item => item.trigger === trigger);
        // }
        // return ruleArr;
        return ruleArr.filter(item => {
          const itemTrigger = item.trigger || 'change'
          return itemTrigger === trigger
        });
      }
      return [];
    }

    // const validate = (value: string, rules: AntRuleItem[]): Promise<any> => {
    //   const trueRules = rules || getRules();
    //   if (trueRules.length) {
    //     const schema = new Schema({ [props.prop]: trueRules });
    //     return schema.validate({ [props.prop]: value }).then(() => {
    //       errMsg.value = '';
    //       return true
    //     }).catch(({ errors }) => {
    //       errMsg.value = errors[0].message;
    //       return Promise.reject(errors);
    //     })
    //   }
    //   return Promise.resolve(true);
    // }
    const validate = (value: string, rules: AntRuleItem[]): Promise<any> => {
      console.log(value, rules);
      
      return Promise.resolve(true);
    }
    
    const handlerChange = (val: string) => {
      const rules =  getRules('change');
      console.log(rules);
      
      if (rules.length) {
        validate(val, rules);
      }

    }
    const handlerBlur = (val: string) => {
      const rules =  getRules('blur');
      console.log(rules);
      
      if (rules.length) {
        validate(val, rules);
      }

    }

    provide(FormItemKey,{
      handlerChange,
      handlerBlur
    })

    return () => {
      return (
        <div class="ant-form-item">
        { renderLabel() }
        <div class="item-content">
          <div class="item-control-wrap">
            { slots.default!() }
          </div>
        </div>
      </div>
      );
    }
  }
})