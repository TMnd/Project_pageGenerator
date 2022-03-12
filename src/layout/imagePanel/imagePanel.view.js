export default {
    name: 'imagePanel',
    components: {
        
    },
    data: function () {
        return {
        }
    },
    props: {
        content: Object,
        extraConf: Object
    },
    mounted() {
    },
    methods: {
        init(arg) { 
            this.setDynamicStylesToContentElements(arg);
        },
        getImageSrc() {
            return require(`@/assets/images/${this.content.source}`);
        },
        getParentStyleData() {
            return this.formatStyleToInjectoIntoDom(this.extraConf.style.imageParentConfig);
        },
        getImgStyleData(){
            return this.formatStyleToInjectoIntoDom(this.extraConf.style.imageConfig);
        }
    }
}