<template>
  <v-dialog
      v-model="this.dialog"
      @click:outside="closeModal()"
      @keydown.esc="closeModal()"
      :content-class="className"
  >
      <v-card style="margin-left: 0">
        <v-card-title class="text-h5 black lighten-2 informationModal_header">
            <div class="row">
                <div class="col-sm-12">
                  <slot name="title"></slot>
                  <span style="float: right;">
                    <v-btn
                        color="black"
                        text
                        @click="closeModal()"
                        class="text-right informationModal_close"
                    >
                        <b>X</b>
                    </v-btn>
                  </span>
                </div>
            </div>
        </v-card-title>

        <v-card-text class="mt-3">
          <slot name="body"></slot>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="mt-3">
          <slot name="actions"></slot>
        </v-card-text>

      </v-card>
  </v-dialog>
</template>

<script src="./modal.view.js"></script>
<style src="./modal.css"></style>