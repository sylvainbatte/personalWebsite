<script setup>
import ProjectCardItem from '../components/ProjectCardItem.vue';

// TODO : aller chercher les valeurs de data dans un fichier json
let data = {
    "timer" : "Description timer",
    "string" : "Description string",
    "test" : "Description du test"
}

</script>

<template>
    <h1 class="title">Mes différents projets</h1>
    <div id="projects">
        <ProjectCardItem name="Timer" :description="data.timer" />
        <ProjectCardItem name="String" :description="data.string" />
        <ProjectCardItem name="Le Test" :description="data.test" />
    </div>
</template>

<style scoped>
    #projects {
        display: flex;
        flex-direction: column;
        gap: 3em;
        width: 80%;
        margin: 5em auto 0px;
    }
</style>