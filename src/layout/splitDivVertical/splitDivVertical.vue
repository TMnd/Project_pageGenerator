<template>
    <div class="row">
      <span v-if="this.componentTitle" v-bind:style="[isDemo ? {'background-color': 'gray'} : {'background-color': ''}]">
        <div class="col-md-12 text-center">
          <h3>{{this.componentTitle}}</h3>
        </div>
      </span>

      <!-- For The info Modal -->
      <div class="col-sm-6" v-if="isDemo" 
             v-bind:style="[isDemo ? {'background-color': 'gainsboro'} : {'background-color': ''}]">
          <p>* Content 1 goes here * </p>
      </div>
      <div class="col-sm-6" v-if="isDemo" 
             v-bind:style="[isDemo ? {'background-color': 'antiquewhite'} : {'background-color': ''}]">
          <p>* Content 2 goes here * </p>
      </div>
      <!-- -->

      <div v-for="(pageElement,index) in this.content" 
           v-bind:class="(setColSizeFor2cCollumns(index,content)) ? 'col-lg-12' : 'col-lg-6'"
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

<script src="./splitDivVertical.view.js"></script>
<style src="./splitDivVertical.css"></style>