<script setup>
defineEmits(["update:modelValue"])
defineProps({
    placeholder: {
        type: String,
        required: false,
        default: "",
    },
    modelValue: {
        type: String,
        default: "",
    },
})
</script>
<template>
    <input 
        type="text" 
        :placeholder="placeholder" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" 
        class="w-full text-sm font-normal border-none focus:outline-none focus:ring-0" 
    />
</template>
