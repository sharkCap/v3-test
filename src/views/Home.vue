<template>
  <!-- <div class="home">
    <form-demo />
  </div> -->
  <!-- <Test :arr="arr" /> -->
  <a-table :config="state.config" size="small">
    <template #header-l>
      <el-button type="primary" size="mini">新增</el-button>
    </template>
  </a-table>
</template>

<script lang="tsx">
import { defineComponent, ref, reactive } from 'vue';
import FormDemo from '../components/Form/index.vue';
import Test from '@/components/Test/index.vue';

import ATable from '@/components/Table/Table.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Test,
    ATable,
    FormDemo
  },
  setup() {
    const state = reactive({
      config: {
        table: {
          columns: [
            { type: 'selection', minWidth: 40 },
            { label: '出差人', prop: 'name', minWidth: 100, align: 'center' },
            { label: '部门名称', prop: 'department', minWidth: 100, align: 'center' },
            { label: '项目名称', prop: 'project', minWidth: 140, align: 'center' },
            { label: '目的地', prop: 'destination', minWidth: 200, align: 'center' },
            { label: '出发时间', prop: 'startTime', minWidth: 180, align: 'center' },
            { label: '出差天数', prop: 'day', minWidth: 100, align: 'center' },
            { label: '出行工具', prop: 'TravelTool', minWidth: 100, align: 'center' },
            {
              label: '流程状态',
              prop: 'status',
              minWidth: 100,
              align: 'center',
              render: (row: any) => console.log(row)
            },
            {
              label: '操作栏',
              prop: 'action',
              minWidth: 120,
              align: 'center',
              render: () => (
                <div>
                  <el-button type="text" onClick={increment}>
                    详情
                  </el-button>
                  <el-button type="text">审批进度</el-button>
                </div>
              )
            }
          ]
        }
      }
    });

    const increment = () => {
      console.log(11);
    };

    return {
      state
    };
  }
});
</script>
