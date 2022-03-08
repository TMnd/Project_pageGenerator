import Vue from 'vue'
import ModalDialog from '@/components/modal/modal'

export default {
  name: 'PageGeneratorPreview',

  components: {
    ModalDialog
  },
  props: {
    dados: Object,
    coreData: Array,
    pageContent: Array
  },
  data: () => ({
    dialog: false,
    exportDialog: false,
    importDialog: false,
    json: Vue.prototype.$jsonObject,
    options: {
      "mode": "text",
      "indentation": 2,
      "search": true
    },
    cont: 0
  }),
  mounted() {

    this.$root.$on('closeModal', () => {
        this.closeModal()
    });
    document.querySelector('.jsoneditor-transform').style.display = 'none';
    document.querySelector('.jsoneditor-repair').style.display = 'none';
    document.querySelector('.jsoneditor-sort').style.display = 'none';
/*     document.querySelector('.jsoneditor-poweredBy').style.display = 'none'; //COLOCAR NO ABOUT */
    
    const iconsList = ['mdi-import','mdi-export','mdi-information-variant','mdi-arrow-right-bold'];

    iconsList.forEach((value)=>{
      let lastElement = document.querySelector('.jsoneditor-menu').lastElementChild;
      var button = document.createElement('button');
      button.setAttribute("class","noBackgroundImage");
      button.setAttribute("id",`${value}`);
      var i = document.createElement('i')
      i.setAttribute("aria-hidden", true);
      i.setAttribute("class", `v-icon notranslate mdi ${value}`);
      i.setAttribute("style", "color: #afb0b2; background-image: none !important;");

      switch(`${value}`){
        case 'mdi-import':
          i.setAttribute("title", "Import a json File");
          break;
        case 'mdi-export':
          i.setAttribute("title", "Export a json File");
          break;
        case 'mdi-information-variant':
          i.setAttribute("title", "Information about the available components");
          break;
        case 'mdi-arrow-right-bold': 
        i.setAttribute("title", "Create a web page");
          break;
      }
  
      button.appendChild(i);
  
      lastElement.after(button);

      let self = this;

      document.getElementById(`${value}`).addEventListener("click", function (){
        switch(`${value}`){
          case 'mdi-import':
            self.openImportDialog();
            break;
          case 'mdi-export':
            self.openExpertDialog();
            break;
          case 'mdi-information-variant':
            self.information();
            break;
          case 'mdi-arrow-right-bold': 
            self.compile();
            break;
        }
      });
    });

    setTimeout(() => {this.compile()}, 1500);
  },
  methods: {
    onError() {
    },
    information(){
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
      this.exportDialog = false;
      this.importDialog = false;
    },
    openImportDialog(){
      this.importDialog = true;
    },
    importData(){
      const selectedFile = document.getElementById('importedFile').files[0];
      var fr=new FileReader();
      let self = this;
      fr.onload=function(){
        self.json = JSON.parse(fr.result);
      }
        
      fr.readAsText(selectedFile);
      this.importDialog = false;
    },
    openExpertDialog(){ 
      this.exportDialog = true;
    },
    exportData(){
      try {
        let fileName = document.getElementById("exportFile_Name").value;
        window.URL = window.webkitURL || window.URL;
        const blob = new Blob([JSON.stringify(this.json, undefined, 4)], { type: 'application/text' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${fileName}.json`;
        link.click();
        URL.revokeObjectURL(link.href);
        this.$toast.info('Export completed', {
            timeout: 1500
        });
      } catch (error) {
        this.$toast.error(`Error:\n${error}`, {
            timeout: 2000
        });
      }
      this.exportDialog=false;
    },
    compile() {
      let self=this;
      this.$root.$emit(
        'updateData', 
        this.json, 
        function() {
          if(self.cont>=1){
            let listOfElements = document.getElementById("mainPageBody").children;
            for (let element of listOfElements) {
              element.innerHTML="";
            }
          }
        }
      );
      this.cont++;
    }
  }
};
