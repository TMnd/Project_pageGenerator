<template>
    <footer class="page-footer font-small bg-dark fixed-bottom footerRow2">
        <div class="row">
            <div class="col-sm-4">
                <div class="footer-copyright text-center text-sm-left py-2 ml-5">
                    © {{ currentDate }} - {{ copyrightAuthor }}
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <div class="listOfComponentsClass">
                    <div v-for="(pageElement,index) in this.socialMedia" :key="index">
                        <a :href="pageElement.href" class="fixIconsStyle2" target="_blank" rel="noopener noreferrer">
                            <IconSymbol :iconContent="pageElement.content"></IconSymbol>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="footer-buttons text-center text-sm-right mr-5">
                    <ClickButton class="mr-2" componentTitle="Resume (CV)" :extraConf=resume></ClickButton>
                    <button type="button" class="btn btn-secondary" @click="openAbout()">About</button> 
                </div>
            </div>
        </div>

        <ModalDialog :dialog=aboutDialog className="aboutDialog">
            <template v-slot:title>
                About
            </template>

            <template v-slot:body>
                <p>{{about.description}}</p>
                <br>
                <b><label>Author:</label></b>
                <span style="margin-left:5px;">{{copyrightAuthor}}</span><br>
                <b><label>Project version:</label></b>
                <span style="margin-left:5px;">{{about.projectVersion}}</span><br>
                <b><label>Source code repository:</label></b>
                <a :href="about.repositoryUrl" style="margin-left:5px;">{{about.repositoryUrl}}</a>
                <br>
                <b><label>Disclaimers: </label></b>
                <p>The json editor is <a href="https://ace.c9.io/" target="_blank" class="jsoneditor-poweredBy">powered by ace</a></p> 
            </template>
        </ModalDialog>
    </footer>
</template>

<script src="./pageGeneratorFooter.view.js"></script>
<style src="./pageGeneratorFooter.css"></style>