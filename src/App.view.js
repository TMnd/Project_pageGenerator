import Vue from 'vue'
import PageGeneratorInput from './layout/pageGeneratorInput/pageGeneratorInput'
import PageGeneratorPreview from './layout/PageGeneratorPreview/PageGeneratorPreview'
import PageGeneratorHeader from './layout/pageGeneratorHeader/pageGeneratorHeader'
import PageGeneratorFooter from './layout/pageGeneratorFooter/pageGeneratorFooter'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',

  components: {
    PageGeneratorInput,
    PageGeneratorPreview,
    PageGeneratorHeader,
    PageGeneratorFooter
  },
  data: () => ({
    dados: Vue.prototype.$jsonObject,
    coreData: [],
    pageContent: []
  }),
  methods: {
    getCoreData(jsonObject) {
      let coreData=[];
      coreData.push(jsonObject.webSiteTitle);
      coreData.push(jsonObject.webMenu);
      return coreData;
    },
    isObjectEqual(obj1, obj2){
      return (Object.keys(obj1).length === 0 && obj1.constructor === Object) || JSON.stringify(obj2) != JSON.stringify(obj1);
    }
  },
  mounted() {
    this.$root.$on('updateData', (input, todo) => {
      let tempVar = Vue.prototype.$inputData; 
      if(this.isObjectEqual(tempVar,input)){
        Vue.prototype.$inputData = input;
        this.coreData = this.getCoreData(input);
        this.pageContent = input.content;
        todo();
      }else{
        this.$toast.warning('No change detected', {
          timeout: 1250
      });
      }
    })
  }
};