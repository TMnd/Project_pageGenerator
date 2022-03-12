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