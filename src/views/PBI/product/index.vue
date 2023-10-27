<template>
  <PageWrapper>
    <!--    <template #headerContent> <WorkbenchHeader /> </template>-->
    <div class="lg:flex">
      <div class="lg:w-3/10 w-full !mr-4 enter-y">
        <Card class="!my-4 enter-y" :loading="loading" :style="cardHeight">
          产品目录
          <!--          <BasicTree :treeData="treeData" />-->
          <ElTree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
        </Card>

        <!--        <ProjectCard :loading="loading" class="enter-y" />-->
        <!--        <DynamicInfo :loading="loading" class="!my-4 enter-y" />-->
      </div>
      <div class="lg:w-7/10 w-full enter-y">
        <Card class="!my-4 enter-y" :loading="loading" :style="cardHeight">
          <el-tabs type="border-card">
            <el-tab-pane label="基本信息">
              <div>进度条</div>
              User
            </el-tab-pane>
            <el-tab-pane label="规格参数">Config</el-tab-pane>
            <el-tab-pane label="相关型号">Role</el-tab-pane>
            <el-tab-pane label="产品文档">Task</el-tab-pane>
          </el-tabs>
        </Card>
        <!--        <QuickNav :loading="loading" class="enter-y" />-->

        <!--        <Card class="!my-4 enter-y" :loading="loading">-->
        <!--          <img class="xl:h-50 h-30 mx-auto" src="../../../assets/svg/illustration.svg" />-->
        <!--        </Card>-->

        <!--        <SaleRadar :loading="loading" class="enter-y" />-->
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { ElTree, ElTabs, ElTabPane } from 'element-plus';
  import { TreeItem } from '/@/components/Tree/index';

  const loading = ref(false);

  interface Tree {
    parentNodeCode: string;
    parentNodeName: string;
    parentNodeType: string;
    childNodeCode: string;
    childNodeName: string;
    level: number;
    children?: Tree[];
  }

  const handleNodeClick = (data: Tree) => {
    console.log(data);
  };

  const cardHeight = computed(() => {
    let winHeight = window.innerHeight - 100;
    return {
      height: winHeight + 'px',
    };
  });

  const data: Tree[] = [
    {
      parentNodeCode: 'PBI-0000000001',
      parentNodeName: '产品目录',
      parentNodeType: '产品目录',
      childNodeCode: 'PBI-0000000002',
      childNodeName: '工业自动化',
      level: 1,
      children: [
        {
          parentNodeCode: 'PBI-0000000002',
          parentNodeName: '工业自动化',
          parentNodeType: '板块',
          childNodeCode: 'PBI-0000000003',
          childNodeName: '变频器产品线',
          level: 2,
          children: [
            {
              parentNodeCode: 'PBI-0000000003',
              parentNodeName: '变频器产品线',
              parentNodeType: '组织产品线',
              childNodeCode: 'PBI-0000000004',
              childNodeName: '低压机械传动产品线',
              level: 3,
              children: [
                {
                  parentNodeCode: 'PBI-0000000003',
                  parentNodeName: '变频器产品线',
                  parentNodeType: '组织产品线',
                  childNodeCode: 'PBI-0000000004',
                  childNodeName: '低压机械传动产品线',
                  level: 4,
                  children: [
                    {
                      parentNodeCode: 'PBI-0000000003',
                      parentNodeName: '变频器产品线',
                      parentNodeType: '组织产品线',
                      childNodeCode: 'PBI-0000000004',
                      childNodeName: '低压机械传动产品线',
                      level: 5,
                      children: [
                        {
                          parentNodeCode: 'PBI-0000000003',
                          parentNodeName: '变频器产品线',
                          parentNodeType: '组织产品线',
                          childNodeCode: 'PBI-0000000004',
                          childNodeName: '低压机械传动产品线',
                          level: 6,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const defaultProps = {
    children: 'children',
    label: 'childNodeName',
  };

  const _treeData: TreeItem[] = [
    {
      title: 'parent 1',
      key: '0-0',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '0-0-0' },
        {
          title: 'leaf',
          key: '0-0-1',
          children: [
            { title: 'leaf', key: '0-0-0-0' },
            { title: 'leaf', key: '0-0-0-1' },
          ],
        },
      ],
    },
    {
      title: 'parent 2',
      key: '1-1',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '1-1-0' },
        { title: 'leaf', key: '1-1-1' },
      ],
    },
    {
      title: 'parent 3',
      key: '2-2',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '2-2-0' },
        { title: 'leaf', key: '2-2-1' },
      ],
    },
  ];

  // setTimeout(() => {
  //   loading.value = false;
  // }, 1500);
</script>
