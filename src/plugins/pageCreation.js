/* import Vue from 'vue' */
import { v4 as uuidv4 } from 'uuid';
import BasicArea from '@/layout/basicArea/basicArea'
import SplitDivVertical from '@/layout/splitDivVertical/splitDivVertical' 
import SplitDivHorizontal from '@/layout/splitDivHorizontal/splitDivHorizontal'
import ImagePanel from '@/layout/imagePanel/imagePanel'
import TabSection from '@/layout/tabSection/tabSection'
import SoloArea from '@/layout/soloArea/soloArea'

import IconSymbol from '@/components/iconSymbol/iconSymbol'
import TextArea from '@/components/textArea/textArea'
import ClickButton from '@/components/button/button'
import listOfComponents from '@/components/listOfComponents/listOfComponents'
import Card from '@/components/card/card'

export default {
  install(Vue) {
    Vue.mixin({
      created(){
      },
      methods: {
        teste(input){
          return input;
        },
        generateContentUuidFromContentArray(contentArray) {
          let contentSize = contentArray.length;
          if(contentSize>0){
            for(let i = 0; i<contentSize; i++){
                this.uuidList[i] = uuidv4();
            }
          }
        },
        setDynamicStylesToContentElements(styleContentElementList){

          styleContentElementList.forEach(element => {    
            let style = "";
  
            for (let item in element.config) {
                style += `${item}: ${element.config[item]};`;
            }

            let target = (element.target == "imageParent") ? "#imageWrapper" : "#imageWrapper img";

            let getDomElement = document.querySelector(target);

            if(getDomElement){
              getDomElement.setAttribute("style",style);
            }
          }); 
        },
        pageGenerator(componentType, domElementTargetId , title, desc, inputContent, extraConf) {

          let getExistingContent = Vue.prototype.$generatedContent[domElementTargetId];
      
          let ComponentClass;
          let styleObject={};

          styleObject["componentType"] = (componentType) ? componentType : "";
          styleObject["componentIdentifier"] = (domElementTargetId) ? domElementTargetId : "";
          styleObject["componentTitle"] = (title) ? title : "";
          styleObject["componentDesc"] = (desc) ? desc : "";
          styleObject["content"] = inputContent;
          styleObject["extraConf"] = (extraConf) ? extraConf : {};

          switch(componentType){
            case 'basicArea':
              ComponentClass = Vue.extend(BasicArea);
              break;
            case "splitDivVertical": 
              ComponentClass = Vue.extend(SplitDivVertical);
              //styleObject
              break;
            case "splitDivHorizontal":
              ComponentClass = Vue.extend(SplitDivHorizontal);
              break;
            case "image":
              ComponentClass = Vue.extend(ImagePanel);
              break;
            case "textArea":
              ComponentClass = Vue.extend(TextArea);
              break;
            case "listOfComponents":
              ComponentClass = Vue.extend(listOfComponents);
              //styleObject
              break;
            case "iconSymbol":
              ComponentClass = Vue.extend(IconSymbol);
              //styleObject
              break;
            case "clickButton":
              ComponentClass = Vue.extend(ClickButton);
              //styleObject
              break;
            case "tabSection":
              ComponentClass = Vue.extend(TabSection);
              //styleObject
              break;
            case "soloArea":
              ComponentClass = Vue.extend(SoloArea);
              break;
            case "card":
              ComponentClass = Vue.extend(Card);
              break;
            default:
              ComponentClass = undefined
          }    

          if(typeof ComponentClass === 'undefined'){
            console.error("Failed to create the dom component.");
            return
          }

          var instance = new ComponentClass({
              propsData: styleObject
          });
          
      
          instance.$mount();

          let contextContent=[];
  
          if(getExistingContent > 0){
            contextContent = getExistingContent;
          }
          
          contextContent.push(instance.$el);
    
          Vue.prototype.$generatedContent[domElementTargetId] = contextContent;

          /* console.info(`Generated Area :: ${componentType}`); */
    
          return `Generated Area :: ${componentType}`;
          
        },
        startGeneration(){
          let reverseList = Object.keys(Vue.prototype.$generatedContent).reverse();
          
          try{
            reverseList.forEach(content => {
              
              for (const contentElement in Vue.prototype.$generatedContent[content]) {
      
                let contentToInject = Vue.prototype.$generatedContent[content][contentElement];
                let newNode = document.getElementById(content)
                if(typeof newNode !== 'undefined' || newNode != null){
                    newNode.appendChild(contentToInject);
                }
              }
            });
          }catch (error) {
            this.$toast.error(`Error:\n${error}`, {
                timeout: 2000
            });
          } 
          Vue.prototype.$generatedContent = [];
        }
      }
    });
  }
};