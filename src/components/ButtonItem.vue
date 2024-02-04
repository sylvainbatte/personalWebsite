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
    <a :href="link" target="_blank">{{ label }}</a>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    width: 340px;
    justify-content: center;
    margin: 2em auto;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    font-size: 25px;
    color: var(--main-text-color);
    transition: 0.4s;
    display: inline;
    position: relative;
  }

  a::before, a::after {
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background-color: var(--main-accent-color);
    transition: 0.4s ease-in-out;
    position: absolute;
  }

  a::before {
    right: 0px;
    top: -5px;
  }

  a::after {
    left: 0px;
    bottom: -5px;
  }

  a:hover {
    letter-spacing: 7px;
    color: var(--main-text-accent-color);

    &::before, &::after {
      width: 100%;
      height: 2px;
    }
  }
</style>