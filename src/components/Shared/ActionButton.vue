<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        reqired: true,
    },
    type: {
        type: String,
        required: false,
        default: "primary",
        validator(value: any) {
            return ["primary", "secondary", "custom"].includes(value);
        },
    },
});

const buttonClass = computed(() => {
    return {
        [props.type]: true,
    };
});
</script>
<template>
    <button :class="buttonClass">
        {{ text }}
    </button>
</template>

<style scoped>
button {
    @apply px-5 py-3 font-semibold;
}

.primary {
    @apply rounded text-white bg-blue-600 hover: shadow hover:shadow-blue-500;
}

.secondary {
    @apply text-blue-600 hover: bg-blue-600 hover:text-white;
}
</style>
