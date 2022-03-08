<template>
    <div class="card mr-5 mb-3" :style="getStyleData()">
        <div class="card-body">
            <h5 class="card-title">{{this.componentTitle}}</h5>
            <p class="card-text">{{this.componentDesc}}</p>
            <a href="#">Go somewhere</a>
        </div>
        <img class="card-img-top" :src="this.content.imageSrc" alt="Card image cap">
    </div>
</template>

<script src="./card.view.js"></script>
<style src="./card.css"></style>