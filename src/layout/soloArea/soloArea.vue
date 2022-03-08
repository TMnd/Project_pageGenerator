<template>
    <div class="col-lg-12 text-center" :style="getStyleData()">
        <div v-for="(pageElement,index) in this.content" 
            :key="index"
            :id="(pageElement.componentIdentifier) ? pageElement.componentIdentifier : uuidList[index]">

        <span v-bind:placeholder="pageGenerator(pageElement.componentType,
                                                (pageElement.componentIdentifier) ? pageElement.componentIdentifier : uuidList[index],
                                                pageElement.componentTitle,
                                                pageElement.componentDesc,  
                                                pageElement.content,
                                                pageElement.componentExtraConf)">

        </span>
      </div>
    </div>
</template>

<script src="./soloArea.view.js"></script>
<style src="./soloArea.css"></style>