<template>
    <span v-if="extraConf.href.length > 0">
        <a type="button" class="btn btn-secondary" style="background-color: rgb(0, 102, 153); color: white;" :href="extraConf.href" download>
            {{componentTitle}}
            <IconSymbol v-if="!haveIcon()" iconIndentification=".." :iconContent="extraConf.icon"></IconSymbol>
        </a>
    </span>
    <span v-else>
        <button class="btn btn-outline-primary" :style="getStyleData()">
            {{componentTitle}}
        </button>
    </span>
    
</template>

<script src="./button.view.js"></script>
<style src="./button.css"></style>