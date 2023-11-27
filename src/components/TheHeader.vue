<script setup>
    import HeaderItem from './HeaderItem.vue';
</script>

<template>
    <header>
        <nav>
            <HeaderItem link="/" name="Accueil"/>
            <HeaderItem link="/projects" name="Projets"/>
            <HeaderItem link="/photos" name="Photo"/>
            <HeaderItem link="/contact" name="Contact"/>
        </nav>
    </header>
</template>

<style scoped>
    *{
        display: flex;
        justify-content: space-around;
        background-color: yellowgreen;
    }
</style>