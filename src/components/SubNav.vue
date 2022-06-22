<script setup lang="ts">
const onJobResultsPage = ref<Boolean>(true);
</script>
<template>
  <div class="w-full h-16 bg-white border-b border-solid border-gray-500">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <Icon icon="ion:search" class="text-base mr-3" />
        <span>
          <span class="text-green-600"> 1653 </span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>
