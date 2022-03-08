import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'basicArea',
    data: function () {
        return {
            uuid: "",
        }
    },
    props: {
        content:Array,
        componentTitle:String,
        componentIdentifier:String,
        componentDesc:String,
        extraConf:Object
    },
    methods: {
        
    },
    computed: {
        createUuid: function () {
            this.uuid = uuidv4();
            return this.uuid;
        }
    }
}   
