<script setup>
import ButtonItem from '../components/ButtonItem.vue';
</script>

<template>
    <h1 class="title">Mes réseaux et contacts</h1>

    <div id="links">
        <ButtonItem link="mailto:contact@sylvainbatte.com" label="Email : contact@sylvainbatte.com"/>
        <ButtonItem link="https://www.linkedin.com/in/sylvain-b-44bb8a1b3/" label="Linkedin"/>
        <ButtonItem link="https://github.com/sylvainbatte" label="Github"/>
        <ButtonItem link="https://www.instagram.com/sylvainbatte/" label="Instagram"/>
    </div>


</template>

<style scoped>
    #links {
        margin-top: 8em;
    }
</style>