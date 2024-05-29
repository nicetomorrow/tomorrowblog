<template>
  
</template>

<script setup lang="ts">
const colorMode = useColorMode();

function toggleDark() {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
}
</script>

<style scoped></style>
