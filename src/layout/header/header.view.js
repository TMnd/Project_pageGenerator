import NavMenu from '@/layout/menu/navMenu'

export default {
    name: 'pageHeader',
    components: {
        NavMenu
    },
    props: {
        coreData: Array,
        webPageTitle:String
    },
    data: function () {
        return {
        }
    },
    methods: {
        getTitle() {
            return this.coreData[0];
        },
        getMenu() {
            return this.coreData[1];
        }
    }
}