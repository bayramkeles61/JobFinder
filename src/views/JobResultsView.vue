<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter()

const experiment = computed(() => {
    return "Irrelevant";
});
const goToHome = () => {
    router.push({
        name: "Home"
    });
};
</script>

<template>
    <div>
        <h1 class="text-6xl font-bold">
            Job Results View
        </h1>
        <button @click="goToHome" class="border p-2">
            Go to Home Page
        </button>
        {{ experiment }}
    </div>
</template>