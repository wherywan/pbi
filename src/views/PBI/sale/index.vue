<template>
  <PageWrapper>
<!--    <template #headerContent> <WorkbenchHeader /> </template>-->
    <div class="lg:flex">
      <div class="lg:w-3/10 w-full !mr-4 enter-y">
        <Card class="!my-4 enter-y" :loading="loading">
          左侧信息11
          <BasicTree :treeData="treeData" />
        </Card>

<!--        <ProjectCard :loading="loading" class="enter-y" />-->
<!--        <DynamicInfo :loading="loading" class="!my-4 enter-y" />-->
      </div>
      <div class="lg:w-7/10 w-full enter-y">
        <Card class="!my-4 enter-y" :loading="loading">
          右侧信息
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
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { defineComponent } from 'vue';
  import { BasicTree } from '/@/components/Tree';
  import { CollapseContainer } from '/@/components/Container/index';
  import { TreeItem } from '/@/components/Tree/index';
  // import WorkbenchHeader from './components/WorkbenchHeader.vue';
  import ProjectCard from './components/ProjectCard.vue';
  import QuickNav from './components/QuickNav.vue';
  import DynamicInfo from './components/DynamicInfo.vue';
  import SaleRadar from './components/SaleRadar.vue';

  const loading = ref(false);

  const treeData: TreeItem[] = [
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
