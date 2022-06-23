<script setup lang="ts">
import { useRoute } from 'vue-router'

const currentJobId = computed(() => {
    const route = useRoute();
    return route.params.jobId;
});
</script>

<template>
    <div>
        Job Page for job {{ currentJobId }}
    </div>
</template>