<script setup lang="ts">
const role = ref<string>("");
const location = ref<string>("");

// const updateRole = function ($event: any) {
//     role.value = $event.target.value;
// };
// const updateLocation = function ($event: any) {
//     jobLocation.value = $event.target.value;
// };
</script>

<template>
    <div
        class="
            flex
            items-center
            w-full
            h-12
            mt-14
            text-sm
            border border-solid border-gray-400
            rounded-3xl
        "
    >
        <Icon icon="ion:search" class="ml-4 mr-3 text-base" />
        <div class="flex flex-nowrap flex-1 h-full font-light">
            <div class="relative flex items-center flex-1 h-full pl-3">
                <label class="absolute left-3 -top-7">Role {{ role }}</label>
                <input
                    type="text"
                    v-model="role"
                    placeholder="Software engineer"
                    class="
                        w-full
                        h-full
                        font-normal
                        text-sm
                        border-none
                        focus:outline-none focus:ring-0
                    "
                />
            </div>
            <span
                class="
                    flex
                    items-center
                    h-full
                    px-3
                    border-l border-r border-gray-400
                    bg-gray-50
                "
                >in</span
            >
            <div class="relative flex items-center flex-1 h-full pr-3">
                <label class="absolute left-3 -top-7">Where?</label>
                <input
                    type="text"
                    v-model="location"
                    placeholder="Los Angeles"
                    class="
                        w-full
                        h-full
                        font-normal
                        text-sm
                        border-none
                        focus:outline-none focus:ring-0
                    "
                />
            </div>
        </div>
        <ActionButton
            text="Search"
            type="custom"
            class="
                font-bold
                border border-transparent
                hover:shadow
                hover:shadow-blue-500
                hover:bg-blue-600
                hover:text-white
                hover:rounded-r-3xl
            "
        />
    </div>
</template>