<template>
    <div>
        <v-jsoneditor v-model="json" :options="options" :plus="false" height="84vh" @error="onError"></v-jsoneditor>

        <ModalDialog :dialog=importDialog className="importDialog">
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

        <ModalDialog :dialog=exportDialog className="exportDialog">
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

        <ModalDialog :dialog=dialog className="informationDialog">
            <template v-slot:title>
                Available Components
            </template>

            <template v-slot:body>
               <div>
                    <b-tabs content-class="mt-3">
                        <b-tab title="Base config" active><p>I'm the first tab</p></b-tab>
                        <b-tab title="basicArea"><p>I'm the second tab</p></b-tab>
                        <b-tab title="splitDivHorizontal"><p>splitDivHorizontal</p></b-tab>
                        <b-tab title="splitDivVertical"><p>splitDivVertical</p></b-tab>
                        <b-tab title="image"><p>image</p></b-tab>
                    </b-tabs>
                </div>
            </template>
        </ModalDialog>
    </div>
</template>

<script src="./pageGeneratorInput.view.js"></script>
<style src="./pageGeneratorInput.css"></style>