import ImagePanel from '@/layout/imagePanel/imagePanel'
import TextArea from '@/components/textArea/textArea'
import listOfComponents from '@/components/listOfComponents/listOfComponents'
/* import { pageCreationHelper } from '@/helpers/pageCreationHelper'
import { generalHelper } from '@/helpers/generalHelper' */

export default {
    name: 'splitDivVertical',
    components: {
        ImagePanel,
        TextArea,
        listOfComponents
    },
    data: function () {
        return {
            uuidList:[]
        }
    },
    props: {
        content:Array,
        componentTitle:String,
        componentDesc:String,
        isDemo:Boolean
    },
    methods: {
        setColSizeFor2cCollumns(index, content){
            return (index==content.length-1 && !this.isOdd(content.length)) ? true : false;
        }/* ,
        init(styleContext) { 
            this.setDynamicStylesToContentElements(this.content, styleContext);
        },
        autoResize(){
            let getWidthValue =  this.getClientWidthDimensions();
            this.init(getWidthValue);
        } */
    },
    beforeMount() {
        this.generateContentUuidFromContentArray(this.content);
    },
    mounted() {
        /* this.$nextTick(function () {
            let self = this;
            setTimeout(function() {
                self.autoResize();
            }, 110);
        });
        
        window.addEventListener('resize', this.autoResize); */
    },
    unmounted() {
         /* window.removeEventListener('resize', this.autoResize); */
    }
}