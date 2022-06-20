<template>
  <p>text: {{ text }}</p>
  <a-input v-model="text" placeholder="a-input" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AInput from './index';
export default defineComponent({
  name: 'InputDemo',
  components: {
    AInput
  },
  setup() {
    const text = ref<string>('');

    return {
      text
    };
  }
});
</script>

<style lang="less" scoped></style>
