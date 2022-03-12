import BasicArea from '@/layout/basicArea/basicArea'
import SplitDivHorizontal from '@/layout/splitDivHorizontal/splitDivHorizontal'
import SplitDivVertical from '@/layout/splitDivVertical/splitDivVertical'
import ImagePanel from '@/layout/imagePanel/imagePanel'
import ListOfComponents from '@/components/listOfComponents/listOfComponents'
import Button from '@/components/button/button'
import TextArea from '@/components/textArea/textArea'
import TabSection from '@/layout/tabSection/tabSection'
import Card from '@/components/card/card'

export default {
  name: 'PageGeneratorPreview',

  components: {
    BasicArea,
    SplitDivHorizontal,
    SplitDivVertical,
    ImagePanel,
    ListOfComponents,
    Button,
    TextArea,
    TabSection,
    Card
  },
  props: {
    title: String,
    exampleJson: String
  },
  data: () => ({
    
  }),
  mounted() {

  },
  methods: {
    getObjectContent(){
      let obj = JSON.parse(this.exampleJson);
      return obj.content;
    },
    getObjectStyle(){
      let obj = JSON.parse(this.exampleJson);
      return obj.componentExtraConf;
    }
  }
};
