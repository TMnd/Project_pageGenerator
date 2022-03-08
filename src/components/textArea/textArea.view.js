export default {
    name: 'textArea',
    components: {
    },
    props: {
        content: Object,
        componentIdentifier: String,
        extraConf: Object
    },
    methods: {
        getStyleData() {
            return this.formatStyleToInjectoIntoDom(this.extraConf.style[0].config);
        }
    }
}