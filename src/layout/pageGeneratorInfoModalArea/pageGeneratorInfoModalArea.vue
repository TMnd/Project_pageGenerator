<template>
    <div>
        <h4>{{this.title}}</h4>
        <div class="row">
            <div class="col-sm-6">
                <textarea v-model="this.exampleJson" name="modalTeste" id="modalTeste" cols="50" rows="10"></textarea>
            </div>
            <div class="col-sm-6 text-center">
                <span v-if="title=='Base config'">N/D</span>
                <span v-else-if="title=='basicArea'">
                    <BasicArea
                        :content=[]
                        componentTitle="*componentTitle*"
                        componentDesc="*componentDesc*"
                        :extraConf={}
                        :isDemo="true"
                    ></BasicArea>  
                </span>
                <span v-else-if="title=='splitDivHorizontal'">
                    <SplitDivHorizontal
                        :content=[]
                        componentTitle="*componentTitle*"
                        componentDesc="*componentDesc*"
                        :isDemo="true"
                    ></SplitDivHorizontal>  
                </span>
                <span v-else-if="title=='splitDivVertical'">
                    <SplitDivVertical
                        :content=[]
                        componentTitle="*componentTitle*"
                        componentDesc="*componentDesc*"
                        :isDemo="true"
                    ></SplitDivVertical>  
                </span>
                <span v-else-if="title=='image'">
                    <ImagePanel
                        :content="this.getObjectContent()"
                        :extraConf="this.getObjectStyle()"
                    ></ImagePanel>  
                </span> 
                <span v-else-if="title=='listOfComponents'">
                    <ListOfComponents
                        :content="this.getObjectContent()"
                        :extraConf="this.getObjectStyle()"
                        componentTitle="*componentTitle*"
                    ></ListOfComponents>  
                </span>
                <span v-else-if="title=='button'">
                    <Button
                        :content="this.getObjectContent()"
                        :extraConf="this.getObjectStyle()"
                        componentTitle="*componentTitle*"
                    ></Button>  
                </span>
                <span v-else-if="title=='textArea'">
                    <TextArea
                        :content="this.getObjectContent()"
                        componentIdentifier=""
                        :extraConf="this.getObjectStyle()"
                    ></TextArea>  
                </span>
                <span v-else-if="title=='tab'">
                    <TabSection
                        :content="this.getObjectContent()"
                        componentIdentifier=""
                        :extraConf="this.getObjectStyle()"
                        componentTitle="*componentTitle*"
                        componentDesc="*componentDesc*"
                    ></TabSection>
                </span>
                <span v-else-if="title=='card'">
                    <Card
                        :content="this.getObjectContent()"
                        componentTitle="*componentTitle*"
                        componentDesc="*componentDesc*"
                        :extraConf="this.getObjectStyle()"
                        componentIdentifier=""
                    ></Card>
                </span>
                
                <span v-else> show stuff</span>
            </div>
        </div>
    </div>
</template>

<script src="./pageGeneratorInfoModalArea.view.js"></script>
<style src="./pageGeneratorInfoModalArea.css"></style>