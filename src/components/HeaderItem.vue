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
        <RouterLink :to="link" @click="$emit('clicked')">{{ name }}</RouterLink>
    </div>
</template>

<style scoped>

  a {
    text-decoration: none;
    font-size: 30px;
    padding: 5px 10px;
    color: #000;
    position: relative;
    line-height: 100px;
    background: transparent;
    transition: 0.2s;
  }

  a:before {
    content: '';
    border-bottom: 1px solid #000;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0px auto;
    width: 0;
    transition: 0.5s;
  }

  a:hover:before {
    width: 100%;
    padding: 0;
  }

  a:active {
    background: #000;
    color: #fff;
    transition: 0.2s;
  }

</style>