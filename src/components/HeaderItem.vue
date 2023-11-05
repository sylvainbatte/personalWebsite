<script setup>
defineProps({
  name: {
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
        <a :href="link">{{ name }}</a>
    </div>
</template>

<style scoped></style>