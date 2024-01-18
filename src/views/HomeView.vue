<script setup>
</script>

<template>
    <div id="title">
        <h1>Sylvain Batte</h1>
    </div>

    <div class="container">

        <div class="lines">
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
        </div>

        <div class="cards">
            <div class="card">
                <h2>Actuellement</h2>
                <h3>Développeur Back-End</h3>
                <h5>Développement d'application web mobile à destination des campings</h5>
            </div>
            <div class="card">
                <h2>2023</h2>
                <h3>LP APIDAE</h3>
                <h5>Obtention d'un dîplome de licence professionnelle</h5>
            </div>
            <div class="card">
                <h2>2022-2023</h2>
                <h3>Alternant développeur web</h3>
                <h5>Développement et maintenant de site e-commerce et outils internes</h5>
            </div>
            <div class="card">
                <h2>2022</h2>
                <h3>DUT Informatique</h3>
                <h5>Obtention d'un dîplome universitaire de technologie</h5>
            </div>
            <div class="card">
                <h2>Avril 2022</h2>
                <h3>Stage développement web</h3>
                <h5>Développement d'un site PHP from scratch durant un stage de 3 mois</h5>
            </div>
            <div class="card">
                <h2>2020</h2>
                <h3>Baccalauréat scientifique</h3>
                <h5>Option Science de l'ingénieur<br>Mention assez bien</h5>
            </div>
        </div>

    </div>
</template>

<style scoped>

@keyframes entreeDroite {
  0% {
    margin-left: 300px;
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}

h1 {
    text-align: center;
    margin-top: 2em;
}

.container {

    width: 340px;
    margin: 5em auto;
    background: #ECF1F524;
    backdrop-filter: blur(15px);

    box-shadow: 0px 20px 53px -30px rgba(95, 102, 173, 0.566816);
    border-radius: 10px;

    display: flex;

    .lines {
        margin-left: 40px;
        margin-top: 6px;

        .dot {
            width: 14px;
            height: 14px;
            background: #D1D6E6;
            border-radius: 7px;
        }

        .line {
            height: 103px;
            width: 2px;
            background: #D1D6E6;
            margin-left: 5.3px;
        }
    }

    .cards {

        margin-left: 12px;
        transform: translateY(-50px);

        .card {
            width: 230px;
            height: 93px;
            padding-top: 25px;
            background: #FFFFFF;
            box-shadow: 0 2px 2px 0 #eeeeee40;
            border-radius: 10px;

            box-shadow: 0px 16px 15px -10px rgba(105, 96, 215, 0.0944602);
            margin-bottom: 10px;
            color: var(--main-text-color);

            animation: entreeDroite 2s;

            h2 {
                font-weight: bold;
                font-size: 18px;
                line-height: 19px;
                margin-left: 25px;
            }

            h3 {
                font-weight: bold;
                font-size: 12px;
                line-height: 16px;
                margin-left: 25px;
                margin-bottom: 5px;
            }

            h5 {
                font-style: italic;
                font-size: 12px;
                margin-left: 25px;
                width: 80%;
            }
        }

        .card:nth-child(2n) {
            margin-left: 15px;
        }
    }
}
</style>