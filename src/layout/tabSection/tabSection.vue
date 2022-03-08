<template>
    <div class="col-md-12 wrapper tabs__dark">
        
        <div class="col-md-12 text-center" v-if="this.componentTitle">
            <h3>{{this.componentTitle}}</h3>
        </div>

        <div v-if="componentDesc">
            <p>{{componentDesc}}</p>
        </div>

        <ul class="tabs__header">
            <li v-for="(tab,index) in tabs" 
                :key="index" 
                @click="selectTab(index)"
                :class='{"tabs__selected": (index == selectedIndex)}'
            >
                {{ tab.title }}
            </li>
        </ul>

        <tab v-for="(tab,index) in tabs" v-show="tab.isActive" :key="index" :title="`Tab ${index}`">{{tab.content}}</tab>
        
    </div>
</template>

<script src="./tabSection.view.js"></script>
<style src="./tabSection.css"></style>


<!--   <div class="mr-3 ml-3" :id="componentIdentifier">
      <b-tabs content-class="mt-3" align="center">
            <b-tab title="First" active><p>I'm the first tab</p></b-tab>
            <b-tab title="Second"><p>I'm the second tab</p></b-tab>
            <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
        </b-tabs> -->
        <!-- <b-tabs content-class="mt-3" align="center">
            <b-tab v-for="pageElement in this.content" :title="pageElement.title" :key="pageElement.title" :id="pageElement.componentIdentifier">
                <span v-bind:placeholder="pageGenerator(pageElement.content.componentType,
                                                        pageElement.content.componentIdentifier,
                                                        pageElement.content.componentTitle,
                                                        pageElement.content.componentDesc,  
                                                        pageElement.content.content,
                                                        pageElement.content.componentExtraConf)">
                </span>                               
            </b-tab>
        </b-tabs> 
    </div>-->