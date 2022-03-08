<template>
    <div id="previewArea" class="overflow-hidden">
        <nav>
            <Header :coreData=this.coreData :webPageTitle=this.dados.webSiteTitle></Header>
        </nav>
        <div class="container-fluid">
            <Home :content=this.pageContent></Home>
        </div>
        <footer class="container-fluid">
            <Footer :coreData=this.coreData></Footer>
        </footer>
    </div>
</template>

<script src="./PageGeneratorPreview.view.js"></script>
<style src="./PageGeneratorPreview.css"></style>