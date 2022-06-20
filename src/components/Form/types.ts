import { RuleItem } from "async-validator";


const FormItemKey = 'formItemKey'

interface FormItemContext {
  handlerChange(val: string): void;
  handlerBlur(val: string): void;
}

type ValidTrigger = 'change' | 'blur';
interface AntRuleItem extends RuleItem {
  trigger?: ValidTrigger;
}


export {
  FormItemKey,
  FormItemContext,
  AntRuleItem,
  ValidTrigger
}