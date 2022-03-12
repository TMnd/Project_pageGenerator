<template>
    <div class="row">
      <div v-bind:style="[isDemo ? {'background-color': 'gray'} : {'background-color': ''}]">
        <div class="col-md-12 text-center" v-if="this.componentTitle">
          <h3>{{this.componentTitle}}</h3>
        </div>

        <div class="col-md-12" v-if="componentDesc">
          <p>{{componentDesc}}</p>
        </div>
      </div>

      <!-- For The info Modal -->
      <div v-if="isDemo" 
           v-bind:style="[isDemo ? {'background-color': 'gainsboro'} : {'background-color': ''}]">
          <p>* The content 1 goes here * </p>
      </div>
      <div v-if="isDemo" 
           v-bind:style="[isDemo ? {'background-color': 'antiquewhite'} : {'background-color': ''}]">
          <p>* The content 2 goes here * </p>
      </div>
      <!-- -->

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