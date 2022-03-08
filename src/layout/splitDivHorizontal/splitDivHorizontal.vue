<template>
    <div class="row">
      
      <div class="col-md-12 text-center" v-if="this.componentTitle">
        <h3>{{this.componentTitle}}</h3>
      </div>

      <div class="col-md-12" v-if="componentDesc">
        <p>{{componentDesc}}</p>
      </div>

      <div class="align-self-center mb-4" 
            v-for="(pageElement, index) in this.content" 
            :key="pageElement.componentType"
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

<script src="./splitDivHorizontal.view.js"></script>
<style src="./splitDivHorizontal.css"></style>