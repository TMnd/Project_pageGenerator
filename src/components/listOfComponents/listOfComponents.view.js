import { v4 as uuidv4 } from 'uuid'; 
import IconSymbol from '@/components/iconSymbol/iconSymbol'
import Button from '@/components/button/button'

export default {
    name: 'listOfComponents',
    components: {
        IconSymbol,
        Button
    },
    data: function () {
        return {
            uuid:uuidv4()
        }
    },
    props: {
        content: Array,
        componentTitle: String,
        extraConf: Object
    },
    methods: {
        getIconPrefix(inputPrefix){
            return (inputPrefix == "fab") ? "fab" : "fas";
        },
        getIconSize(inputSize){
            return (inputSize) ? inputSize : "3x";
        },
        getStyleData() {
            return this.formatStyleToInjectoIntoDom(this.extraConf.style[0].config);
        }
    }
}