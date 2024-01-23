<script setup>
</script>

<template>
    <h1 class="title">Sylvain Batte</h1>

    <div class="responsive-container">

        <div id="description">
            <h2>Présentation</h2>
            <p>
                Développeur web et photographe amateur, ce site est là pour présenter mes différents projets,
                qu'ils soient liés au développement ou à la photographie
                <br><br>
                Le site est développé entièrement en VueJS par mes soins, et est à l'heure actuelle toujours
                en développement.
                <br>
                Le design est donc succeptible de changer, et de nouvelles fonctionnalitées peuvent être ajoutées.
                Il se peut également que certains bugs se produisent.
            </p>
        </div>

        <img src="../assets/self_portrait.jpg" alt="Self portrait" id="selfPortrait">

        <div id="container">

            <div id="lines">
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

            <div id="cards">
                <div class="card">
                    <h2>Actuellement</h2>
                    <h3>Développeur Back-End</h3>
                    <p>Développement d'application web mobile à destination des campings</p>
                </div>
                <div class="card">
                    <h2>2023</h2>
                    <h3>LP APIDAE</h3>
                    <p>Obtention d'un dîplome de licence professionnelle</p>
                </div>
                <div class="card">
                    <h2>2022-2023</h2>
                    <h3>Alternant développeur web</h3>
                    <p>Développement et maintenant de site e-commerce et outils internes</p>
                </div>
                <div class="card">
                    <h2>2022</h2>
                    <h3>DUT Informatique</h3>
                    <p>Obtention d'un dîplome universitaire de technologie</p>
                </div>
                <div class="card">
                    <h2>Avril 2022</h2>
                    <h3>Stage développement web</h3>
                    <p>Développement d'un site PHP from scratch durant un stage de 3 mois</p>
                </div>
                <div class="card">
                    <h2>2020</h2>
                    <h3>Baccalauréat scientifique</h3>
                    <p>Option Science de l'ingénieur<br>Mention assez bien</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

@keyframes rightEntrance {
  0% {
    margin-left: 300px;
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}

h2 {
    font-weight: bold;
    font-size: 20px;
    line-height: 19px;
}

p {
    font-style: italic;
    font-size: 14px;
    margin: 10px auto;
    width: 80%;
}

#selfPortrait {
    width: 340px;
    box-shadow: 20px 20px 53px -20px rgba(95, 102, 173);
    border-radius: 20px;
}

#description {
    width: 340px;
    background: var(--main-background-color);

    box-shadow: 0px 20px 53px -30px rgba(95, 102, 173, 0.5);
    border-radius: 10px;

    h2 {
        text-align: center;
        margin-top: 25px;
    }

    p {
        text-align: center;
        font-size: 15px;
    }
}

#container {
    width: 340px;
    background: #ABC2;

    box-shadow: 0px 20px 53px -30px rgba(95, 102, 173, 0.5);
    border-radius: 10px;

    display: flex;

    #lines {
        margin-left: 40px;
        margin-top: 6px;

        .dot {
            width: 14px;
            height: 14px;
            background: var(--main-accent-color);
            border-radius: 7px;
        }

        .line {
            height: 103px;
            width: 2px;
            background: var(--main-accent-color);
            margin-left: 5.3px;
        }
    }

    #cards {

        margin-left: 12px;
        transform: translateY(-50px);

        .card {
            width: 230px;
            height: 100px;
            padding-top: 25px;
            background: var(--main-background-color);
            border-radius: 10px;

            box-shadow: 0px 16px 15px -10px rgba(105, 96, 215, 0.0944602);
            margin-bottom: 10px;
            color: var(--main-text-color);

            animation: rightEntrance 2s;

            h2, h3, p {
                margin-left: 25px;
            }

            h3 {
                font-weight: bold;
                font-size: 14px;
                line-height: 16px;
                margin-bottom: 5px;
            }

            p {
                margin-top: 5;
                font-size: 14px;
                line-height: 13px;
            }
        }

        .card:nth-child(2n) {
            margin-left: 2em;
        }
    }
}
</style>