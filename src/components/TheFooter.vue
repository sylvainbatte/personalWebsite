<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const soundStatus = computed(() => store.getters.getSoundStatus);

    const toggleSound = () => {
        store.dispatch('toggleSoundStatus');
    };
</script>

<template>
    <footer>
        <img class="sound-status" v-show="soundStatus" @click="toggleSound" src="../assets/sounds-enabled.png">
        <img class="sound-status" v-show="!soundStatus" @click="toggleSound" src="../assets/sounds-disabled.png">
    </footer>
</template>

<style scoped>
    img {
        position: fixed;
        width: 30px;
        bottom: 0.6em;
        left: 0.6em;
        padding: 10px;
    }
</style>