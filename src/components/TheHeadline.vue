<script setup lang="ts">
import nextElementInList from "../utils/nextElementInList";

const action = ref<string>("Build");
const interval = ref<any>(null);

const changeTitle = function () {
    interval.value = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        action.value = nextElementInList(actions, action.value);
    }, 3000);
};
changeTitle();

const actionClasses = computed(() => {
    return {
        [action.value.toLowerCase()]: true,
    };
});

onBeforeUnmount(() => {
    clearInterval(interval.value);
});
</script>

<template>
    <section>
        <h1 class="font-bold tracking-tighter text-8xl mb-14" data-test="action-phrase">
            <span :class="actionClasses">{{ action }}</span>
            <br />
            for everyone
        </h1>
        <h2 class="text-3xl font-light">Find your next job at Beyaz Corp.</h2>
    </section>
</template>

<style scoped>
.build {
    color: #1a73e8;
}
.create {
    color: #34a853;
}
.design {
    color: #f9ab00;
}
.code {
    color: #d93025;
}
</style>
