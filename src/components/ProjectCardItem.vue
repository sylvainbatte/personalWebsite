<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-front">
          <h2>{{ name }}</h2>
      </div>
      <div class="card-back">
          <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

  @keyframes rightEntrance {
    0% {
      margin-right: 300px;
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
  }
  
  @keyframes leftEntrance {
    0% {
      margin-left: 300px;
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
  }

  .container {
    width: 70%;

    margin-bottom: 30px;
    perspective: 1000px;
    height: 20vh;

    .card {
      position: relative;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;

      .card-front, .card-back {
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        height: 100%;
        width: 100%;
        border-radius: 1em;
        box-shadow: 20px 20px 40px -25px var(--main-shadow-color);
      }

      .card-front {
        background-color: var(--main-background-color);
        color: var(--main-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .card-back {
        background-color: var(--main-text-color);
        color: var(--main-background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotateX(180deg);
      }
    }
  }

  .container:hover .card {
    transform: rotateX(180deg);
  }

  .container:nth-child(2n) {
    align-self: flex-start;
    text-align: left;
    animation: leftEntrance 2s;
  }
  
  .container:nth-child(2n - 1) {
    align-self: flex-end;
    text-align: right;
    animation: rightEntrance 2s;
  }
</style>