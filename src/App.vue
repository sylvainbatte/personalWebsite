<script setup>
import { onMounted } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { setupCursor } from './utils/cursor.js';

onMounted(() => {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    setupCursor();
  }
});
</script>

<template>
    <TheHeader />
    <RouterView></RouterView>
    <TheFooter />
    <div id="cursor" class="cursor">
        <div class="cursor__content"></div>
    </div>
</template>

<style scoped>
</style>
