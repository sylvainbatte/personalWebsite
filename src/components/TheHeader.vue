<script setup>
    import HeaderItem from './HeaderItem.vue';
</script>

<template>
    <header>
        <input type="checkbox" id="active">
        <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
        <div class="wrapper">
        <ul>
            <li><HeaderItem link="/" name="Accueil"/></li>
            <li><HeaderItem link="/projects" name="Projets"/></li>
            <li><HeaderItem link="/photos" name="Photos"/></li>
            <li><HeaderItem link="/contact" name="Contact"/></li>
        </ul>
        </div>
    </header>
</template>

<style scoped>

    .wrapper{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(-135deg, #ABC, rgb(197, 212, 227));
        clip-path: circle(25px at calc(100% - 45px) 45px);
        transition: all 0.3s ease-in-out;
    }
    #active:checked ~ .wrapper{
        clip-path: circle(75%);
    }
    .menu-btn{
        position: absolute;
        z-index: 2;
        right: 20px;
        top: 20px;
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        background: #ABC;
        transition: all 0.3s;
    }
    #active ~ .menu-btn i:before {
        content: "\2630";
    }
    #active:checked ~ .menu-btn i:before{
        content: "\26CC";
    }
    .wrapper ul{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        list-style: none;
        text-align: center;
    }
    .wrapper ul li{
        margin: 15px 0;
    }
    
    input[type="checkbox"]{
        display: none;
    }


    @keyframes rotate {
        0%{
            filter: hue-rotate(0deg);
        }
        100%{
            filter: hue-rotate(360deg);
        }
    }

</style>