import IconSymbol from '@/components/iconSymbol/iconSymbol'
//import axios from 'axios'

export default {
    name: 'clickButton',
    components: {
        IconSymbol
    },
    props: {
        content: Object,
        componentTitle: String,
        extraConf: Object
    },
    methods: {
        haveIcon(){
            return Object.keys(this.extraConf.icon).length === 0;
        },
        haveHRef(){
            return (this.extraConf.href).length > 0;
        },
        getStyleData() {
            if(this.extraConf.style){
                return this.formatStyleToInjectoIntoDom(this.extraConf.style[0].config);
            }
            return "";
        }
        /* async downloadItem(label){
            const response = await axios.get('https://drive.google.com/file/d/1GL8GNkcKKui80a7UJm4kzvXIOWR16pFE/view?usp=sharing', { responseType: "blob" });
            const blob = new Blob([response.data], { type: "application/pdf" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = label;
            link.click();
            URL.revokeObjectURL(link.href);
        } */
    }
}