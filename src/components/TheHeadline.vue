<script setup lang="ts">
const action = ref<string>("Build");
const interval = ref<any>(null);

const changeTitle = function () {
    interval.value = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        const currentActionIndex = actions.indexOf(action.value);
        const nextActionIndex = (currentActionIndex + 1) % 4;
        const nextAction = actions[nextActionIndex];
        action.value = nextAction;
    }, 3000);
};
changeTitle();

const actionClasses = computed(() => {
    return {
        [action.value.toLowerCase()]: true
    };
});

onBeforeUnmount(() => {
    clearInterval(interval.value);
});
</script>

<template>
    <section>
        <h1 class="font-bold tracking-tighter text-8xl mb-14">
            <span :class="actionClasses">{{ action }}</span>
            <br />
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
