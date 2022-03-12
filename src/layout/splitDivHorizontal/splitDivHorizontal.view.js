import ImagePanel from '@/layout/imagePanel/imagePanel'
import TextArea from '@/components/textArea/textArea'
import listOfComponents from '@/components/listOfComponents/listOfComponents'

export default {
    name: 'splitDivHorizontal',
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
    },
    beforeMount() {
        this.generateContentUuidFromContentArray(this.content);
    },
    unmounted() {
    }
}