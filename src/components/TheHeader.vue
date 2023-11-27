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
    header {
        display: flex;
        background-color: yellowgreen;
        height: 10vh;
    }

    nav {
        margin: auto;
        justify-content: space-around;
        display: flex;
        background-color: yellow;
        width: 80vw;
        height: 6vh;
    }
</style>