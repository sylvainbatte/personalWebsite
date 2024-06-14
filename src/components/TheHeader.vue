<script setup>
    import HeaderItem from './HeaderItem.vue';
    import swooshEnterAudioFile from '@/assets/swoosh-enter.mp3';
    import swooshExitAudioFile from '@/assets/swoosh-exit.mp3';

    var swooshEnterAudio = new Audio(swooshEnterAudioFile);
    var shooshExitAudio = new Audio(swooshExitAudioFile);

    const updateCheckbox = () => {
        playAudioOnClick();
        const checkbox = document.getElementById('active');
        checkbox.checked = false;
    }

    const playAudioOnClick = () => {
        const checkbox = document.getElementById('active');

        if (checkbox.checked) {
            shooshExitAudio.play();
        } else {
            swooshEnterAudio.play();
        }
    }
</script>

<template>
    <header>
        <input type="checkbox" id="active">
        <label for="active" class="menu-btn" @click="playAudioOnClick"><i class="fas fa-bars"></i></label>
        <div class="wrapper">
        <ul>
            <li><HeaderItem link="/presentation" name="Présentation" @clicked="updateCheckbox"/></li>
            <li><HeaderItem link="/projects" name="Projets" @clicked="updateCheckbox"/></li>
            <li><HeaderItem link="/photos" name="Photos" @clicked="updateCheckbox"/></li>
            <li><HeaderItem link="/contact" name="Contact" @clicked="updateCheckbox"/></li>
        </ul>
        </div>
    </header>
</template>

<style scoped>

    .wrapper{
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: linear-gradient(-135deg, var(--main-accent-color), rgb(197, 212, 227));
        clip-path: circle(25px at calc(100% - 45px) 45px);
        transition: all 0.3s ease-out;
        opacity: 0;

        ul {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            list-style: none;
            text-align: center;

            li {
                margin: 15px 0;
            }
        }
    }

    .menu-btn{
        cursor: none;
        position: fixed;
        z-index: 1001;
        right: 20px;
        top: 20px;
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 10px;
        font-size: 20px;
        transition: all 0.3s;
        background: var(--main-accent-color);
        box-shadow: 3px 3px 6px #c5c5c5, -3px -3px 6px #ffffff;
    }
    
    #active ~ .menu-btn i:before {
        content: "\2630";
    }
    #active:checked ~ .menu-btn i:before{
        content: "\26CC";
    }
    #active:checked ~ .menu-btn {
        box-shadow: none;
        background-color: transparent;
    }
    #active:checked ~ .wrapper{
        clip-path: circle(75%);
        opacity: 1;
    }
    
    header input[type="checkbox"]{
        display: none;
    }

</style>