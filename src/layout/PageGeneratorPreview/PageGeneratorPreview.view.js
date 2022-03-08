import Home from '@/views/home/home.vue'
import Header from '@/layout/header/header.vue'
import Footer from '@/layout/footer/footer.vue'

export default {
  name: 'PageGeneratorPreview',

  components: {
    Home,
    Header,
    Footer,
  },
  props: {
    dados: Object,
    coreData: Array,
    pageContent: Array
  },
  data: () => ({}),
  methods: {
  },
  mounted() {
 
  }
};