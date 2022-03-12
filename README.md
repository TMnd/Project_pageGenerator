# WebSite generator - Alpha

Using Vue.js

## Componentes disponíveis
### Base config
```
{
  "webSiteTitle": "*Web site title*",
  "webMenu": [
    {
      "label": "*Menu label 1*",
      "href": "*Menu href 1*"
    }
  ],
  "content": []
}
```
### Componentes 'wrappers':
#### Basic area
```
{
    "componentType": "basicArea",
    "componentIdentifier": "*DOM component ID*", //If is not specified, the id will be generated.
    "componentTitle": "*Component title*",
    "componentDesc": "*Component description*",
    "componentExtraConf":{
        "isMajorTitle": true || false,
        "isPagetitle": true || false
    },
    "content":[]
}
```
#### Split Div By Horizontal
```
{
    "componentType": "splitDivHorizontal",
    "componentIdentifier": "*DOM component ID*", //If is not specified, the id will be generated.
    "componentTitle": "*Component title*",
    "componentDesc": "*Component description*",
    "content": []
}
```
#### Split Div By Vertical
```
{
    "componentType": "splitDivVertical",
    "elementIdentifier": "*DOM component ID*",
    "componentTitle": "*Component title*",
    "componentDesc": "*Component description*",
    "content": []
}
```
### Componentes isolados:
#### Images
```
{
    "componentType": "image",
    "elementIdentifier": "*DOM component ID*",
    "style": [
        {
            "target":"imageParent", // class=imageWrapper
            "config":{ 
                border: 0.3rem solid red;
                width: fit-content;
                margin: 0 auto;
                border-radius: 50%;"
            }
        },
        {
            "target":"image", // imagem em si
            "config":{ 
                border: 0.4rem solid #343a40;
                border-radius: 50%;
                object-fit: cover;
                object-position: center;
            }
        }
    ],
    "styleMobile": [],
    "content": {
        "source": "johnDoe.jpg",
        "alt": "sdaa",
        "style": {
            "widht": 150,
            "height": 150
        }
    }
}
```
#### Lista de Icons
```
{
    "componentType": "listOfComponents",
    "elementIdentifier": "*DOM component ID*",
    "style": {
        "text-align": "center"
    },
    "content": [
        {
            "componentType": "iconSymbol",
            "elementIdentifier": "icon1",
            "content":{
                "icon":"github-square",
                "iconPrefix":"fab",
                "iconSize": "2x",
                "href":"href123"
            }
        }
    ]
}
```
#### Botão
```
{
    "componentType": "button",
    "elementIdentifier": "*DOM component ID*",
    "componentTitle": "*Component title*",
    "style": {},
    "content": []
}
```
#### Area de Texto
```
{
    "componentType": "textArea",
    "elementIdentifier": "*DOM component ID*",
    "style": {},
    "styleMobile": {},
    "content": {
        "text":"*Component Text*"
    }
}
```
#### Tabs
```
{
    "componentType": "tab",
    "elementIdentifier": "*DOM component ID*",
    "style": {},
    "content": [
        {
            "tabText":"*Tab text*",
            "tabIcon":"*Tab icon if disire*",
            "tabIdentifier":"*Tab identifier*",
            "content":{
                //Content para mostrar nesta tab 
            }
        }
    ]
}
```
#### Card
```
{
    "componentType": "card",
    "elementIdentifier": "*DOM component ID*",
    "componentTitle":"....",
    "componentDesc":"....",
    "imageRef":"..."
}
```


---------------------------------

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
