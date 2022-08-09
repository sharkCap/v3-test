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

  <el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <AEditor v-model="form.editor" height="300" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';

import ATable from '@/components/Table/Table.vue';
import AEditor from '@/components/Editor/index.vue';

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

const dialogFormVisible = ref(false);
const formLabelWidth = '140px';

const form = reactive({
  name: '',
  editor: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
});

const increment = () => {
  dialogFormVisible.value = true;
};
</script>
