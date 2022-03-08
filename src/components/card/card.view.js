export default {
    name: 'card',
    components: {
        
    },
    props: {
        content: Object,
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

    },
    methods: {
        getStyleData() {
            return this.formatStyleToInjectoIntoDom(this.extraConf.style);
        }
    }
}