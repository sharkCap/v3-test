<template>
  <div class="test-child">
    <ul>
      <li v-for="(item, index) in arr2" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

interface ArrItf {
  name: string;
  age: number;
}

const props = defineProps({
  arr: {
    type: Array,
    // type: Array as PropType<ArrItf[]>,
    default: () => {
      return [];
    }
  }
});
const arr2 = props.arr as ArrItf[];
console.log(props, 1);
</script>

<style lang="less" scoped></style>

<!-- <template>
  <div class="test-child">11</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    arr: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup(props) {
    console.log(props, 1);
  }
});
</script> -->
