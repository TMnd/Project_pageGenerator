import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import NavMenu from '@/layout/menu/navMenu'

export default {
    name: 'pageFooter',
    components: {
        BootstrapVue,
        IconsPlugin,
        NavMenu
    },
    props: {
        coreData: Array
    },
    data: function () {
        return {
            currentDate: new Date().getFullYear(),
            copyright: "Copyright - João Luís Amaral"
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