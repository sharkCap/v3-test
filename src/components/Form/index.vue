<template>
  <p>{{ formValues.name }}</p>
  <a-form-item label="姓名：" prop="name" :rules="nameRules">
    <a-input v-model="formValues.name" placeholder="请输入姓名" />
  </a-form-item>
  <a-form-item label="密码：" prop="password">
    <a-input v-model="formValues.password" />
  </a-form-item>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

import { AntRuleItem } from './types';

type T = number;

interface formValues {
  name: string;
  password: string;
}

interface arrItf {
  [idx: number]: number | string;
}
interface fnItf {
  (p: string): string;
}
interface ObjItf {
  objFn: (PropName: string) => void;
}

type PromiseData = {
  a: number;
  b: number;
};
interface PromiseRes {
  code: number;
  data: PromiseData[];
  message: string;
}

export default defineComponent({
  name: 'FormDemo',
  setup() {
    const formValues: formValues = reactive({
      name: '',
      password: ''
    });

    const arr: Array<T> = [1];
    const arr2: Array<number | string> = [1, '1'];
    const arr3: number[] = [1];
    const arr4: arrItf = [1, '1'];

    const obj: ObjItf = {
      objFn: (str) => {}
    };
    obj.objFn('1');

    const p: Promise<PromiseRes> = new Promise((resolve, reject) => {
      resolve({
        code: 200,
        data: [
          { a: 1, b: 2 },
          { a: 3, b: 4 }
        ],
        message: ''
      });
    });

    p.then((res) => {
      console.log(res);
    });

    // const fn: fnItf = (p) => {
    //   return p;
    // };
    const fn = <V>(p: V): V => {
      return p;
    };

    fn<string>('');

    // function fun<T>(v: T){

    // }
    // fun<string>('');

    const nameRules = ref<AntRuleItem[]>([
      { required: true, message: '请输入姓名', trigger: 'blur' },
      { max: 6, message: '最大不得超过6位' }
    ]);

    return {
      formValues,
      nameRules
    };
  }
});
</script>

<style lang="less" scoped></style>
