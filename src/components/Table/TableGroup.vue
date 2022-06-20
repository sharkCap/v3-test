<template>
  <el-table :data="data" border style="width: 100%">
    <el-table-column
      v-for="(item, index) in columns"
      :key="index"
      :align="'center'"
      :label="item.label"
      :prop="item.prop"
      :fixed="item.fixed"
      :sortable="item.sortable"
      :min-width="item.minWidth"
      :width="item.width"
    >
      <template #default="scope">
        <ex-slot v-if="item.render" :render="item.render" :row="scope.row" :index="scope.$index" :column="item" />
        <span v-else>{{ scope.row[item.prop] || '-' }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { ColumnOptions } from './types';

import exSlot from './exSlot'; //render传入函数包装方法

export default defineComponent({
  components: { exSlot },

  props: {
    options: {
      type: Object,
      required: false
    },
    pageData: {
      type: Object,
      required: false
    },
    data: {
      type: Array,
      required: false
    },
    columns: {
      type: Array as PropType<ColumnOptions[]>,
      default: []
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10
    },
    total: {
      type: Number,
      required: false,
      default: 10
    },
    pageNo: {
      type: Number,
      required: false,
      default: 1
    },
    pageSizes: {
      type: Array,
      required: false
    }
  },
  setup(props) {
    console.log(props);
  }
});
</script>
