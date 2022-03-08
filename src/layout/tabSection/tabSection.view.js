import tab from '../../components/tab/tab'

export default {
    name: 'tabSection',
    components: {
        tab
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
          selectedIndex: 0, // the index of the selected tab,
          tabs: []         // all of the tabs
        }
    },
    created () {
        this.tabs = this.content
    },
    mounted () {
        this.selectTab(0)
    },
    methods: {
        selectTab (i) {
            this.selectedIndex = i
    
            this.content.forEach((tab, index) => {
                tab.isActive = (index === i);
            })
        }
     }
}