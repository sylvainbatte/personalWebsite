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
  }

  @media screen and (max-width: 500px) {
    a {
      padding: 5px 20px;
      font-size: 20px;
      color: var(--main-text-color);
      background-color: var(--main-accent-color);
      box-shadow: 3px 3px 12px var(--main-accent-color), -4px -4px 6px #ffffff;
      border-radius: 7px;
    }
  }

  @media screen and (min-width: 501px){
    a {
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 2px;
      font-size: 25px;
      color: var(--main-text-color);
      transition: 0.4s;
      display: inline;
      position: relative;

      &::before, &::after {
        content: "";
        display: block;
        width: 0%;
        height: 1px;
        background-color: var(--main-accent-color);
        transition: 0.4s ease-in-out;
        position: absolute;
      }

      &::before {
        right: 0px;
        top: -5px;
      }

      &::after {
        left: 0px;
        bottom: -5px;
      }

      &:hover {

        letter-spacing: 7px;
        color: var(--main-text-accent-color);

        &::before, &::after {
          width: 100%;
          height: 2px;
        }
      }
    }
  }

</style>