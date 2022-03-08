<template>
    <div :style="getStyleData()">
        <h4 v-if="componentTitle">{{componentTitle}}</h4>
        
        <div class="listOfComponentsClass">
            <div v-for="(pageElement,index) in this.content" :key="index">
                <a v-if="pageElement.componentType === 'iconSymbol'" :href="pageElement.href" class="fixIconsStyle" target="_blank" rel="noopener noreferrer">
                    <IconSymbol :iconContent="pageElement.content"></IconSymbol>
                </a>
                <p v-else-if="pageElement.componentType === 'clickButton'">
                    <Button :componentTitle="pageElement.componentTitle" :content=pageElement.content :extraConf=pageElement.componentExtraConf></Button>
                </p>
            </div>
        </div>
    </div>
</template> 

<script src="./listOfComponents.view.js"></script>
<style src="./listOfComponents.css"></style>
