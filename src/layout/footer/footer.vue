<template>
  <v-row class="bv-example-row text-center">
    <b-col>
      <b-row class="footerRow1_1">
        <b-col>
          <p class="footerText">{{ this.getTitle() }}</p>
        </b-col>
        <b-col>
          <b-navbar type="dark">
            <NavMenu :menuElements=this.getMenu()></NavMenu>
          </b-navbar>
        </b-col>
      </b-row>
  <!--     <b-row
        class="font-weight-medium footerRow2"
        id="footerRow2"
      >
        <b-col>@{{ currentDate }} {{ copyright }}</b-col>
      </b-row> -->
    </b-col>
  </v-row>
</template>

<script src="./footer.view.js"></script>
<style src="./footer.css"></style>