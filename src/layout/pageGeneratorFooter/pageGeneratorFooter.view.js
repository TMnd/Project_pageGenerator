import Vue from 'vue'
import ClickButton from '@/components/button/button'
import IconSymbol from '@/components/iconSymbol/iconSymbol'
import ModalDialog from '@/components/modal/modal'

export default {
  name: 'PageGeneratorPreview',
  components: {
    ClickButton,
    IconSymbol,
    ModalDialog
  },
  props: {},
  data: () => ({
    currentDate: new Date().getFullYear(),
    copyrightAuthor: Vue.prototype.$authorInformation.author,
    resume: Vue.prototype.$authorInformation.resume,
    socialMedia: Vue.prototype.$authorInformation.socialMedia,
    about: Vue.prototype.$authorInformation.aboutInformation,
    aboutDialog: false
  }),
  methods: {
    getRepositoryUrl(){
      return this.about.$aboutInformation;
    },
    openAbout(){
      this.aboutDialog = true;
    },
    closeModal() {
      this.aboutDialog = false;
    },
  },
  mounted() {
    this.$root.$on('closeModal', () => {
        this.closeModal()
    })
  }
};