<template>
    <div id="imageWrapper" :style="this.getParentStyleData()">
        <img :src="this.getImageSrc()" :alt=this.content.alt :width="this.content.style.widht" :height="this.content.style.height" :style="this.getImgStyleData()">
    </div>
</template>

<script src="./imagePanel.view.js"></script>
<style src="./imagePanel.css"></style>
