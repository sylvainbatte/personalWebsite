<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div>
        <a :href="link">{{ label }}</a>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 2em auto;
    }

    a {
        text-decoration: none;
        font-size: 30px;
        padding: 5px 15px;
        color: var(--main-text-color);
        background: var(--main-accent-color);
        border-radius: 10px;
        transition: 0.2s;
        box-shadow: 0px 20px 53px -30px rgba(95, 102, 173);
    }

    a:hover {
        background: var(--main-text-color);
        color: var(--main-accent-color);
        transition: 0.2s;
    }
</style>