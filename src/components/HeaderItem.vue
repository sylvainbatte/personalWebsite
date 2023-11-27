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
        <RouterLink :to="link">{{ name }}</RouterLink>
    </div>
</template>

<style scoped></style>