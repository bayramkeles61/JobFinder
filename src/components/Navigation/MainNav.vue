<script setup lang="ts">
const menuItems = ref<string[]>([
    "Teams",
    "Locations",
    "Life at Beyaz",
    "How we hire",
    "Students",
    "Jobs",
]);
const isLoggedIn = ref<Boolean>(false);

const loginUser = function () {
    isLoggedIn.value = true;
};

const headerHeightClass = computed(() => {
    return {
        "h-16": !isLoggedIn.value,
        "h-32": isLoggedIn.value,
    };
});
</script>
<template>
    <header :class="['w-full', 'text-sm', 'font-semibold', headerHeightClass]">
        <div class="fixed top-0 left-0 w-full h-16 bg-white">
            <div class="
                    flex flex-nowrap
                    h-full
                    px-8
                    mx-auto
                    border-b border-solid border-gray-50
                ">
                <router-link :to="{ name: 'Home' }" class="flex items-center h-full text-xl">
                    Beyaz Careers
                </router-link>
                <nav class="h-full ml-12">
                    <ul class="flex h-full p-0 m-0 list-none">
                        <li v-for="menuItem in menuItems" :key="menuItem" class="h-full ml-9 first:ml-0"
                            data-test="main-nav-list-item">
                            <a href="/" class="flex items-center h-full py-2.5">
                                {{ menuItem }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="flex items-center font-bold h-full ml-auto">
                    <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
                    <ActionButton v-else text="Sign in" type="primary" data-test="login-button" @click="loginUser" />
                </div>
            </div>
            <SubNav v-if="isLoggedIn" data-test="subnav" />
        </div>
    </header>
</template>
