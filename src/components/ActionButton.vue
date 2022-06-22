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
      return ["primary", "secondary"].includes(value);
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
  <div>
    <button class="btn" :class="buttonClass">
      {{ text }}
    </button>
  </div>
</template>
