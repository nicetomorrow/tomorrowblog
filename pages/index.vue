<template>
    <div>
        主页
        <h1>Welcome to the Homepage</h1>
        <AppAlert>
            this is an auto-imported component.
        </AppAlert>
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
// console.log(runtimeConfig)
console.log(appConfig.theme)
</script>

<style scoped>

</style>