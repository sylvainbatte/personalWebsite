<script setup>
    import HeaderItem from './HeaderItem.vue';
</script>

<template>
    <header>
        <nav>
            <HeaderItem link="/contact" name="Contact"/>
            <HeaderItem link="/photo" name="Photo"/>
            <HeaderItem link="/watches" name="Watches"/>
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