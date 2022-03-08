import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'home',
    data: function () {
        return {
            uuid: "",
        }
    },
    props: {
        content: Array
    },
    methods: { 
       
    },
    computed: {
        createUuid: function () {
            this.uuid = uuidv4();
            return this.uuid;
        }
    },
    mounted(){
        
    },
    beforeMount() {
        
    },
    created() {          
      /*   console.log("---------");
        console.log(this.uuidList);
        
        console.log(this.content);
        this.uuidList = this.generateContentUuidFromContentArray(this.content);
        console.log(this.uuidList); */
    }, 
    updated: function () {
        this.$nextTick(function () {
            let self = this;
            setTimeout(function() {
                self.startGeneration();
            }, 500);
            
        });
    }
}   
