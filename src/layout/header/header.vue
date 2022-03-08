<template>
  <div class="headerStyle">
    
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
      <b-navbar-brand href="#" class="d-lg-none mx-auto titleSM webPageTitle">{{webPageTitle}}</b-navbar-brand>
      <NavMenu :menuElements=this.getMenu()></NavMenu>
      
    </b-navbar>
  </div>
</template>

<script src="./header.view.js"></script>
<style src="./header.css"></style>