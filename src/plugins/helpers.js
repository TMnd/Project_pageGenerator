export default {
  install(Vue) {
    Vue.mixin({
      created(){
      },
      methods: {
        isOdd(num) { 
          return (num % 2==0)
        },
        getClientWidthDimensions() {
          return document.documentElement.clientWidth;
        },
        formatStyleToInjectoIntoDom(inputStyleString){
          return JSON.stringify(inputStyleString).replaceAll(/{|}|"/g, "").replaceAll(",",";");
        }
      }
    });
  }
};

/* export const generalHelper = {
  created(){
  },
  methods: {
    isOdd(num) { 
      return (num % 2==0)
    },
    getClientWidthDimensions() {
      return document.documentElement.clientWidth;
    }
  }
} */