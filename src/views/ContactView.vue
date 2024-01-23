<script setup>
import ButtonItem from '../components/ButtonItem.vue';
</script>

<template>
    <h1 class="title">Me contacter</h1>

    <ButtonItem link="https://www.linkedin.com/in/sylvain-b-44bb8a1b3/" label="Linkedin"/>
    <ButtonItem link="https://github.com/sylvainbatte" label="Github"/>

    <h2>Email : contact@sylvainbatte.com</h2>
</template>

<style scoped>
    h2 {
        text-align: center;
        margin: 2em auto 1em;
        width: 360px;
        padding: 10px 0;
        border-radius: 15px;
        background: rgba(95, 102, 173, 0.03);
        box-shadow: 20px 20px 53px -20px rgba(95, 102, 173, 0.5);
    }
</style>