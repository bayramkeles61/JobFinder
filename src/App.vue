<script setup lang="ts"></script>

<template>
    <div class="h-screen">
        <MainNav />
        <TheHero />
    </div>
</template>

<style>
*,
*::before,
*::after {
    outline: none;
    box-sizing: border-box;
    margin: 0;
    font-family: "Manrope";
    font-weight: normal;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    scrollbar-color: rgba(180, 180, 180, 0.473);
    scrollbar-width: thin;
}
:root {
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
}
::-webkit-scrollbar {
    width: 6px;
    height: 16px;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    background-color: rgba(180, 180, 180, 0.473);
    border-radius: 10px;
}
input,
input:focus {
    outline: none !important;
    user-select: auto;
    -webkit-appearance: none;
}
body {
    min-height: 100vh;
    color: var(--color-text);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#nprogress {
    pointer-events: none;
}

#nprogress .bar {
    background: rgb(13, 148, 136);
    opacity: 0.75;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
}
html.dark {
    background: #121212;
}
</style>
