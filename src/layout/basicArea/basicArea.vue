<template>
    <div class="row text-center">
        <span v-if="componentTitle">    
            <div class="col-md-12 mt-5" v-if="extraConf.isMajorTitle">
                <h1 v-bind:class="extraConf.isPagetitle ? 'd-none d-md-block' : ''">{{componentTitle}}</h1>
            </div>
            <div class="col-md-12 mt-5" v-else>
                <h3>{{componentTitle}}</h3>
            </div>
        </span>

        <div class="col-md-12" v-if="componentDesc">
            <p>{{componentDesc}}</p>
        </div>

        <div v-for="(pageElement, index) in this.content" 
          :key="index"
          :id="(pageElement.componentIdentifier) ? pageElement.componentIdentifier : createUuid">


            <span v-bind:placeholder="pageGenerator(pageElement.componentType,
                                                    (pageElement.componentIdentifier) ? pageElement.componentIdentifier : createUuid,
                                                    pageElement.componentTitle,
                                                    pageElement.componentDesc,  
                                                    pageElement.content,
                                                    pageElement.componentExtraConf)">
            </span>

        </div>
    </div>
</template>

<script src="./basicArea.view.js"></script>
<style src="./basicArea.css"></style>