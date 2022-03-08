<template>
  <div id="mainPageBody">
    <div v-for="(pageElement,index) in this.content" 
          :key="index"
          :id="(pageElement.componentIdentifier) ? pageElement.componentIdentifier : createUuid">

      <span v-bind:placeholder="pageGenerator(pageElement.componentType,
                                              (pageElement.componentIdentifier) ? pageElement.componentIdentifier : uuid,
                                              pageElement.componentTitle,
                                              pageElement.componentDesc,  
                                              pageElement.content,
                                              pageElement.componentExtraConf)">
      </span>

     
    </div> 
  </div>
</template>

<script src="./home.view.js"></script>
<style src="./home.css"></style>