<template>
    <p class="profileText" :id="this.componentIdentifier" :style="this.getStyleData()">
        {{ content.text }}
    </p>
</template>

<script src="./textArea.view.js"></script>
<style src="./textArea.css"></style>