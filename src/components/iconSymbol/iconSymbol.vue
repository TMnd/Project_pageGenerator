<template>
    <font-awesome-icon :icon="[
                            this.iconContent.iconPrefix, 
                            this.iconContent.icon
                            ]"  
                    :size="this.iconContent.iconSize"
                    fixed-width />
    <!-- <span>
        <p>{{this.iconIndentification}}</p>
        <p>{{this.iconContent}}</p>
    </span> -->
</template>

<script src="./iconSymbol.view.js"></script>
<style src="./iconSymbol.css"></style>