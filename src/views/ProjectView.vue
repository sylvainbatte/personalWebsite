<script setup>
import ProjectCardItem from '../components/ProjectCardItem.vue';

import projectData from '../datas/project.json';

</script>

<template>
    <h1 class="title">Mes différents projets</h1>
    <div id="projects">
        <ProjectCardItem name="Portfolio" :description="projectData.descriptions.portfolio" :status="projectData.status.portfolio"/>
        <ProjectCardItem name="GitHub" :description="projectData.descriptions.github" :status="projectData.status.github"/>
        <ProjectCardItem name="Chronomètre Pomodoro" :description="projectData.descriptions.timer" :status="projectData.status.timer"/>
        <ProjectCardItem name="Utilitaire de texte" :description="projectData.descriptions.textUtil" :status="projectData.status.textUtil"/>
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