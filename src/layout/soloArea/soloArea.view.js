export default {
    name: 'soloArea',
    components: {
        
    },
    props: {
        content: Array,
        componentTitle:String,
        componentDesc:String,
        componentIdentifier: String,
        extraConf: Object
    },
    data () {
        return {
            uuidList:[]
        }
    },
    created () {
        
    },
    mounted () {
    },
    beforeMount() {
        this.generateContentUuidFromContentArray(this.content);
    },
    methods: {
        getStyleData() {
            return this.formatStyleToInjectoIntoDom(this.extraConf.style);
        }
    }
}