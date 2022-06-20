<template>
  <div id="app">
    <p>{{ num }}</p>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
console.log(111);
const num = ref(1);

const emit = defineEmits<{
  (event: 'change'): void;
  (event: 'update', id: number): void;
}>();
</script>

<style lang="less"></style>
