<template>
    <div>
        <v-jsoneditor v-model="json" :options="options" :plus="false" height="84vh" @error="onError"></v-jsoneditor>

        <ModalDialog :dialog=importDialog className="importDialog" modalID="importDialog">
            <template v-slot:title>
                Import Data
            </template>

            <template v-slot:body>
                <form>
                    <div class="form-group">
                        <label for="importedFile">File input</label><br>
                        <input type="file" class="form-control-file" id="importedFile">
                    </div>
                </form>
            </template>

            <template v-slot:actions>
               <button  @click="importData()" type="button" class="btn btn-primary exportButton">Import</button>
            </template>
        </ModalDialog>

        <ModalDialog :dialog=exportDialog className="exportDialog" modalID="exportDialog">
            <template v-slot:title>
                Export
            </template>

            <template v-slot:body>
                <div class="form-group">
                    <label for="exportFile">Insert fileName</label>
                    <input type="email" class="form-control" id="exportFile_Name" aria-describedby="emailHelp" placeholder="Enter file name">
                </div>
            </template>

            <template v-slot:actions>
               <button  @click="exportData()" type="button" class="btn btn-primary exportButton">Export</button>
            </template>
        </ModalDialog>

        <ModalDialog :dialog=dialog className="informationDialog" modalID="informationDialog">
            <template v-slot:title>
                Available Components
            </template>

            <template v-slot:body>
               <div>
                    <b-tabs content-class="mt-3">
                        <b-tab title="Base Configuration" active>
                            <PageGeneratorInfoModalAreaView
                                title="Base config"
                                :exampleJson="getInfoModalcontent('baseConfiguration')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                        <b-tab title="Basic Area">
                            <PageGeneratorInfoModalAreaView
                                title="basicArea"
                                :exampleJson="getInfoModalcontent('basicArea')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                        <b-tab title="Area horizontal split">
                            <PageGeneratorInfoModalAreaView
                                title="splitDivHorizontal"
                                :exampleJson="getInfoModalcontent('splitDivByHorizontal')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                        <b-tab title="Area vertical split">
                            <PageGeneratorInfoModalAreaView
                                title="splitDivVertical"
                                :exampleJson="getInfoModalcontent('splitDivByVertical')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                        <b-tab title="Image">
                            <PageGeneratorInfoModalAreaView
                                title="image"
                                :exampleJson="getInfoModalcontent('images')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                        <b-tab title="Listing elements">
                            <PageGeneratorInfoModalAreaView
                                title="listOfComponents"
                                :exampleJson="getInfoModalcontent('listOfComponents')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                        <b-tab title="Button">
                            <PageGeneratorInfoModalAreaView
                                title="button"
                                :exampleJson="getInfoModalcontent('button')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                        <b-tab title="Text Area">
                            <PageGeneratorInfoModalAreaView
                                title="textArea"
                                :exampleJson="getInfoModalcontent('textArea')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                        <b-tab title="Tab Area">
                            <PageGeneratorInfoModalAreaView
                                title="tab"
                                :exampleJson="getInfoModalcontent('tabsArea')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                        <b-tab title="Card Area">
                            <PageGeneratorInfoModalAreaView
                                title="card"
                                :exampleJson="getInfoModalcontent('card')"
                            ></PageGeneratorInfoModalAreaView>
                        </b-tab>
                    </b-tabs>
                </div>
            </template>
        </ModalDialog>
    </div>
</template>

<script src="./pageGeneratorInput.view.js"></script>
<style src="./pageGeneratorInput.css"></style>