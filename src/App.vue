<template>
  <v-app class="asd">
    <PageGeneratorHeader></PageGeneratorHeader>
    <main role="main" class="container-fluid">
      <div class="row" style="max-height:86vh;">
        <div class="col-md-5" style="border-right: 1px solid rgba(236, 236, 236, .8);">
          <PageGeneratorInput></PageGeneratorInput>
        </div>
        <div class="col-md-7" style="max-height:86vh; overflow:auto;">
          <PageGeneratorPreview 
            :dados=this.dados 
            :coreData=this.coreData 
            :pageContent=this.pageContent>
          </PageGeneratorPreview>
        </div>
      </div>
    </main>
    <PageGeneratorFooter></PageGeneratorFooter>
  </v-app>
</template>

<script src="./App.view.js"></script>
<style src="./App.css"></style>