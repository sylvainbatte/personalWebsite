<script setup>
  defineProps({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-front">
          <h2>{{ name }}</h2>
          <img src="../assets/repeter.png" alt="Carte retournable">
      </div>
      <div class="card-back">
          <p>{{ description }}</p>
          <div class="projectStatus">{{ status.name }}</div>
          <img src="../assets/repeter.png" alt="Carte retournable">
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
    height: 25vh;

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

        img {
          width: 1em;
          height: 1em;
          position: absolute;
          top: 1em;
          right: 1em;
          filter: invert(18%) sepia(9%) saturate(499%) hue-rotate(192deg) brightness(86%) contrast(86%);
        }
      }
      
      .card-back {
        background-color: var(--main-text-color);
        color: var(--main-background-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: rotateX(180deg);

        p {
          text-align: center;
          padding: 0 3em;
          margin-bottom: 1em;
          color: var(--main-text-white-color);
        }

        .projectStatus {
          background-color: v-bind(status.color);
          color: var(--main-text-color);
          padding: 0.5em 1em;
          border-radius: 1em;
        }

        img {
          width: 1em;
          height: 1em;
          position: absolute;
          bottom: 1em;
          right: 1em;
          filter: invert(91%) sepia(18%) saturate(325%) hue-rotate(339deg) brightness(104%) contrast(102%);
        }
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