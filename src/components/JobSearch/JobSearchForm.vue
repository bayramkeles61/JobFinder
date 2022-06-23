<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

const role = ref<string>("");
const location = ref<string>("");

const searchForJobs = function () {
    router.push({
        name: 'JobResults',
        query: {
            role: role.value,
            location: location.value
        }
    });
}
</script>

<template>
    <form class="
            flex
            items-center
            w-full
            h-12
            mt-14
            text-sm
            border border-solid border-gray-400
            rounded-3xl
        " @submit.prevent="searchForJobs">
        <Icon icon="ion:search" class="ml-4 mr-3 text-base" />
        <div class="flex flex-nowrap flex-1 h-full font-light">
            <div class="relative flex items-center flex-1 h-full pl-3">
                <label class="absolute left-3 -top-7">Role</label>
                <TextInput v-model="role" placeholder="Software engineer" class="h-full" />
            </div>
            <span class="
                    flex
                    items-center
                    h-full
                    px-3
                    border-l border-r border-gray-400
                    bg-gray-50
                ">in</span>
            <div class="relative flex items-center flex-1 h-full">
                <label class="absolute left-3 -top-7">Where?</label>
                <TextInput placeholder="Los Angeles" v-model="location" @handleInput="location = $event"
                    class="h-full border-transparent border-b-3 border-b-transparent hover:border-b-emerald-500" />
            </div>
        </div>
        <ActionButton text="Search" type="custom" class="
                font-bold
                hover:shadow
                border border-transparent
                hover:shadow-blue-500
                hover:bg-blue-600
                hover:text-white
                hover:rounded-r-3xl
            " />
    </form>
</template>