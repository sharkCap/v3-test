<template>
  <el-link type="primary">primary</el-link>

  <TableGroup
    :pageSize="10"
    :pageSizes="[10, 20, 50, 100]"
    :total="tableData.length"
    :pageNo="1"
    :columns="columns"
    :data="tableData"
  />
</template>
<script lang="tsx">
import TableGroup from '../components/Table/TableGroup.vue';
import { ColumnOptions } from '../components/Table/types';

import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    TableGroup
  },
  setup(props) {
    const tableData = ref([
      {
        id: 1023,
        name: '大是大非上',
        marketPrice: '1',
        sort: 1,
        abbreviateUrl: 'https://imgcdn.jingktech.com/eCommerce/image/2657324a-0137-4feb-abe4-e47cf14ea6e8.png',
        system: '1,2',
        status: 1,
        winningRate: 1,
        winningRateStr: '100.000',
        deleted: null
      },
      {
        id: 1022,
        name: '红米',
        marketPrice: '1',
        sort: 1,
        abbreviateUrl: 'https://imgcdn.jingktech.com/eCommerce/image/39076d8e-a0b1-4744-9abf-dc2fa1895c7e.png',
        system: '1,2',
        status: 1,
        winningRate: 1,
        winningRateStr: '100.000',
        deleted: null
      },
      {
        id: 1021,
        name: '蟑螂恶霸',
        marketPrice: '2',
        sort: 1,
        abbreviateUrl: 'https://imgcdn.jingktech.com/eCommerce/image/21e89f5b-0022-4efe-ac24-b87d623b704c.png',
        system: '2',
        status: 1,
        winningRate: 1,
        winningRateStr: '100.000',
        deleted: null
      },
      {
        id: 1020,
        name: '蝎子莱莱',
        marketPrice: '2',
        sort: 1,
        abbreviateUrl: 'https://imgcdn.jingktech.com/eCommerce/image/055d1717-2239-4323-8a18-f07eecccbc25.png',
        system: '2',
        status: 1,
        winningRate: 0,
        winningRateStr: '0.000',
        deleted: null
      }
    ]);
    const columns: Partial<ColumnOptions | ColumnOptions[]> = ref([
      {
        label: '商品ID',
        prop: 'id'
      },
      {
        label: '商品名称',
        prop: 'name'
      },
      {
        label: '市场价',
        prop: 'marketPrice'
      },
      {
        label: '图片',
        prop: 'abbreviateUrl',
        minWidth: '90',
        render: () => (
          <div>
            <el-button type="text" onClick={increment}>
              详情
            </el-button>
            <el-button type="text">审批进度</el-button>
          </div>
        )
      },
      {
        label: 'app端',
        prop: 'system',
        minWidth: '100'
      },
      {
        label: '状态',
        prop: 'status',
        render: (h: any, row: any) => {
          return h('span', row.row.status == 1 ? '上架' : '下架');
        }
      },
      {
        label: '操作',
        prop: 'utils',
        fixed: 'right',
        render: (h: any, row: any) => {
          return h('div', { class: { 'utils-btn': true } }, [
            h(
              'button',
              {
                class: 'el-button el-button--text',
                type: 'warning',
                onClick: () => {
                  console.log(row);
                }
              },
              '编辑'
            ),
            h(
              'el-link',
              {
                props: {
                  type: 'warning',
                  underline: false
                },
                on: {
                  click() {}
                }
              },
              '上架'
            ),
            h(
              'el-link',
              {
                props: {
                  type: 'danger',
                  underline: false
                },
                on: {
                  click() {}
                }
              },
              '删除'
            )
          ]);
        }
      }
    ]);

    const increment = () => {
      console.log(11);
    };

    return {
      columns,
      tableData
    };
  }
});
</script>
