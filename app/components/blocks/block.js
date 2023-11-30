export const ButtonCustom = [
    {
        "category": "Custom Button",
        "tags": ['button'],
        "data": {
            "id": "S9MzjusZE6",
            "cells": [1],
            "columns": [{
                "id": "pt0v8190Fc",
                "contents": [{
                    "id": "-v0LnkkIuf",
                    "type": "html",
                    "values": {
                        "html": "<div style=\"display: flex; font-size: 18px;\">\n  <button style=\"\n                 background-color: rgb(25, 144, 198);\n                 font-size: 18px;\n                 padding: 10px;\n                 border: none;\n                 border-radius: 5px;\n                 color: white;\n  \" href=\"{{ customer.reset_password_url }}\">\n    Reset your password\n  </button>\n  <p style=\"margin: 10px;\"> or\n  </p>\n  <a style=\"\n            text-decoration: none;\n            margin: 10px 0;\n\t\" href:\"{{shop.url}}\">\n    \tVisit our store\n\t</a>\n</div>\n\n",
                        "displayCondition": null,
                        "containerPadding": "10px",
                        "anchor": "",
                        "_meta": {
                            "htmlClassNames": "u_content_html"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    }
];
export const ProductGrid = [
    {
        "category": "Product Grid",
        "tags": ['product', 'grid', 'product grid'],
        "data": {
            "id": "u-im2hKd1M",
            "cells": [1, 1, 1],
            "columns": [{
                "id": "UqsNz9HsUI",
                "contents": [{
                    "id": "TRXjO7hEuN",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/product-6.png",
                            "width": 500,
                            "height": 750
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "https://cdn1.avada.io/get-market/template-icons/product-6.png",
                                "target": "_blank"
                            },
                            "attrs": {
                                "href": "{{href}}",
                                "target": "{{target}}"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "2z5hPQJfAb",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><a target=\"_blank\" data-gjs-type=\"avada-link\" data-avada-type=\"product-name\" data-avada-color=\"title\">Baseball Shoes</a></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #e03e2d; line-height: 19.6px;\">$19.99</span></p>"
                    }
                }, {
                    "id": "NIddNdp5aE",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#ba372a",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\">SHOP NOW</span>",
                        "calculatedWidth": 118,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "EjSI2SwjUD",
                "contents": [{
                    "id": "Zs6PJXF6EX",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/product-7.png",
                            "width": 500,
                            "height": 750
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "ByaqtFcAyi",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><a target=\"_blank\" data-gjs-type=\"avada-link\" data-avada-type=\"product-name\" data-avada-color=\"title\">Leather Sneaker</a></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #e03e2d; line-height: 19.6px;\">$19.99</span></p>"
                    }
                }, {
                    "id": "fp75cytiTh",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#ba372a",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\">SHOP NOW</span>",
                        "calculatedWidth": 118,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "04ufO4gt9d",
                "contents": [{
                    "id": "pjgGxk2fTw",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/product-8.png",
                            "width": 500,
                            "height": 750
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "iZGu1639w8",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><a target=\"_blank\" data-gjs-type=\"avada-link\" data-avada-type=\"product-name\" data-avada-color=\"title\">Grey Light Shoes</a></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #e03e2d; line-height: 19.6px;\">$19.99</span></p>"
                    }
                }, {
                    "id": "fvShFCH54s",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#e03e2d",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\">SHOP NOW</span>",
                        "calculatedWidth": 118,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    },
    {
        "category": "Product Grid",
        "tags": ['product', 'grid', 'product grid'],
        "data": {
            "id": "uQY0iRM9hh",
            "cells": [1, 1],
            "columns": [{
                "id": "qzFC8qvBBJ",
                "contents": [{
                    "id": "mbaj0DahjM",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "28px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">01.</p>\n<p style=\"line-height: 140%;\"><strong>Title Goes Here</strong></p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><span style=\"line-height: 39.2px;\">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dignissim risus. Donec ullamcorper nisl a eros efficitur.</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><span style=\"color: #e03e2d; line-height: 39.2px;\">$120.45</span></p>"
                    }
                }, {
                    "id": "lFTNNAFJy2",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#000000",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "left",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\">Button Text</span>",
                        "calculatedWidth": 110,
                        "calculatedHeight": 37
                    }
                }, {
                    "id": "EiovWH_aIw",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/newsletters_1.png",
                            "width": 360,
                            "height": 240
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "attrs": {
                                "href": "{{href}}",
                                "target": "{{target}}"
                            },
                            "values": {
                                "href": "https://cdn1.avada.io/get-market/template-icons/newsletters_1.png",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "mVSzF6tR86",
                "contents": [{
                    "id": "0-9qP0u6yq",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "28px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">02.</p>\n<p style=\"line-height: 140%;\"><strong>Title Goes Here</strong></p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet dignissim risus. Donec ullamcorper nisl a eros efficitur.</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><span style=\"color: #e03e2d; line-height: 39.2px;\">$350.00</span></p>"
                    }
                }, {
                    "id": "9kAjrtG_Xf",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#000000",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "left",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\">Button Text</span>",
                        "calculatedWidth": 110,
                        "calculatedHeight": 37
                    }
                }, {
                    "id": "2hAkGSQJm6",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/newsletters_1.png",
                            "width": 360,
                            "height": 240
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    },
    {

        "category": "Product Grid",
        "tags": ['product', 'grid', 'product grid'],
        "data": {
            "id": "uv_iJSohii",
            "cells": [1, 1],
            "columns": [{
                "id": "4613vt16TL",
                "contents": [{
                    "id": "rB2FWbESFA",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/newsletters_8.png",
                            "width": 600,
                            "height": 401
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "GHmkmG_iar",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "14px",
                        "textAlign": "left",
                        "lineHeight": "120%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 120%;\">30 APRIL, 2021 BY AVADA</p>\n<p style=\"line-height: 120%;\"> </p>\n<p style=\"line-height: 120%;\"> </p>\n<p style=\"line-height: 120%;\"><strong>What I need when travel alone?</strong></p>"
                    }
                }, {
                    "id": "Xb3k_GdUEq",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#000000",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "left",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "READ MORE",
                        "calculatedWidth": 125,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "nZcZ46GkcJ",
                "contents": [{
                    "id": "5VIqtHkO1p",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/newsletters_7.png",
                            "width": 600,
                            "height": 401
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "QMnS0LRS4N",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "14px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">06 MARCH, 2021 BY AVADA</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><strong>Flower Dress to have with your bestie!</strong></p>"
                    }
                }, {
                    "id": "_yD7vLhP5m",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#000000",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "left",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "READ MORE",
                        "calculatedWidth": 125,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    },
    {
        "category": "Product Grid",
        "tags": ['product', 'grid', 'product grid'],
        "data": {
            "id": "uv_iJSohii",
            "cells": [1, 1],
            "columns": [{
                "id": "4613vt16TL",
                "contents": [{
                    "id": "U9OwsUKp27",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/newsletters_13.jpg",
                            "width": 600,
                            "height": 900
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "nZcZ46GkcJ",
                "contents": [{
                    "id": "QMnS0LRS4N",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "21px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><strong>OUR MONTHLY EDITORIAL</strong></p>\n<p style=\"line-height: 140%;\">The New Denim Stype</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur nisl. In facilisis est quis fringilla commodo.</p>"
                    }
                }, {
                    "id": "_yD7vLhP5m",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#000000",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "left",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "SHOP NOW",
                        "calculatedWidth": 118,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    },
    {
        "category": "Product Grid",
        "tags": ['product', 'grid', 'product grid'],
        "data": {
            "id": "uv_iJSohii",
            "cells": [1, 1],
            "columns": [{
                "id": "4613vt16TL",
                "contents": [{
                    "id": "I7tai2z_TB",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "29px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><strong>Get Latest Discount, Offer on Style</strong></p>\n<p style=\"line-height: 140%;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed ac efficitur nisl</p>"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "nZcZ46GkcJ",
                "contents": [{
                    "id": "90a5j6k11h",
                    "type": "image",
                    "values": {
                        "containerPadding": "1px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/newsletters_15.jpg",
                            "width": 600,
                            "height": 900
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    },
    {
        "category": "Product Grid",
        "tags": ['product', 'grid', 'product grid'],
        "data": {
            "id": "uv_iJSohii",
            "cells": [1],
            "columns": [{
                "id": "4613vt16TL",
                "contents": [{
                    "id": "qMiu5-WCWh",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/newsletters_9.png",
                            "width": 600,
                            "height": 400
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "l3ClMZztJM",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">The energy brings to improving the apparel industry and minimizing its impact on the planet is infectious.The resulting bricks are used to build affordable homes.</p>"
                    }
                }, {
                    "id": "d5qs_lB0HH",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#000000",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\">READ ABOUT US</span>",
                        "calculatedWidth": 153,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    },
    {
        "category": "Product Grid",
        "tags": ['product', 'grid', 'product grid'],
        "data": {
            "id": "uv_iJSohii",
            "cells": [1, 1],
            "columns": [{
                "id": "4613vt16TL",
                "contents": [{
                    "id": "5pczByWKVc",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/newsletters_3.png",
                            "width": 300,
                            "height": 300
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "g3EGOXPhzl",
                "contents": [{
                    "id": "gjqjyJtrjF",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "20px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<div><strong>What to wear this fall</strong></div>\n<p style=\"line-height: 140%;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>\n<p style=\"line-height: 140%;\"><a target=\"_blank\" data-avada-color-prop=\"color\" data-avada-color=\"primary\" data-gjs-type=\"avada-link\">READ LATEST TREND</a></p>"
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    },
    {

        "category": "Product Grid",
        "tags": ['product', 'grid', 'product grid'],
        "data": {
            "id": "uv_iJSohii",
            "cells": [1, 1],
            "columns": [{
                "id": "4613vt16TL",
                "contents": [{
                    "id": "vXYtWugNBt",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "20px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">#Women's</p>\n<p style=\"line-height: 140%;\">From its medieval origins to the digital everything there is to know about the ubiquitous</p>\n<p style=\"line-height: 140%;\"><a target=\"_blank\" data-gjs-type=\"avada-link\" data-avada-color=\"primary\" data-avada-color-prop=\"color\">SHOP LOOK</a></p>"
                    }
                }, {
                    "id": "yz0wiGXfWU",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/product-23.png",
                            "width": 251,
                            "height": 412
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "g3EGOXPhzl",
                "contents": [{
                    "id": "MttEUPaJ4S",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/product-10.png",
                            "width": 278,
                            "height": 434
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "ZYwv2Wvu1O",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/product-24.png",
                            "width": 250,
                            "height": 287
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    },
    {

        "category": "Product Grid",
        "tags": ['product', 'grid', 'product grid'],
        "data": {
            "id": "uv_iJSohii",
            "cells": [1, 1],
            "columns": [{
                "id": "4613vt16TL",
                "contents": [{
                    "id": "vXYtWugNBt",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "24px",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><strong>TWO.</strong></p>\n<p style=\"line-height: 140%;\"><strong>The Denim Short</strong></p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">From its medieval origins to the digital know about</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><a target=\"_blank\" data-gjs-type=\"avada-link\" data-avada-color=\"primary\" data-avada-color-prop=\"color\">VIEW COLLECTION</a></p>"
                    }
                }, {
                    "id": "yz0wiGXfWU",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/product-9.png",
                            "width": 277,
                            "height": 225
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "g3EGOXPhzl",
                "contents": [{
                    "id": "MttEUPaJ4S",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn1.avada.io/get-market/template-icons/product-10.png",
                            "width": 278,
                            "height": 434
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    }
];
export const ProductInfo = [
    {
        "category": "Product Info",
        "tags": ['product info', 'product', 'info'],
        "data": {
            "cells": [1, 1],
            "columns": [{
                "contents": [{
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/169579/1689324018577-newsletters_13.jpg",
                            "width": 600,
                            "height": 900
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    },
                    "backgroundColor": "",
                    "padding": "0px"
                }
            }, {
                "contents": [{
                    "type": "heading",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "headingType": "h1",
                        "fontFamily": {
                            "label": "Cabin",
                            "value": "'Cabin',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Cabin:400,700",
                            "defaultFont": true,
                            "weights": [400, 700]
                        },
                        "fontWeight": 400,
                        "fontSize": "17px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true,
                            "body": false
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "OUR MONTHLY EDITORIAL"
                    }
                }, {
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontFamily": {
                            "label": "Chau Philomena One",
                            "value": "Chau Philomena One",
                            "url": "https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap"
                        },
                        "fontSize": "31px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><span style=\"color: #000000; text-align: -webkit-left; white-space: normal; float: none; display: inline; line-height: 43.4px;\">The New Denim Stype</span></p>"
                    }
                }, {
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "14px",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><span style=\"color: #939393; text-align: -webkit-left; white-space: normal; float: none; display: inline; line-height: 19.6px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur nisl. In facilisis est quis fringilla commodo.</span></p>"
                    }
                }, {
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#000000",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "left",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "0px",
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\">Shop now</span>",
                        "calculatedWidth": 102,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
    },
    {
        "category": "Product Info",
        "tags": ['product info', 'product', 'info'],
        "data": {
            "cells": [1, 1],
            "columns": [{
                "contents": [{
                    "type": "heading",
                    "values": {
                        "containerPadding": "40px 10px 10px",
                        "anchor": "",
                        "headingType": "h1",
                        "fontWeight": 700,
                        "fontSize": "25px",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "Follow us now"
                    }
                }, {
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/169579/1689325082949-newsletters_ins.png",
                            "width": 120,
                            "height": 120,
                            "autoWidth": false,
                            "maxWidth": "25%"
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><span style=\"color: #939393; text-align: -webkit-center; white-space: normal; float: none; display: inline; line-height: 19.6px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur nisl. In facilisis est quis fringilla commodo</span></p>"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlClassNames": "u_column"
                    },
                    "backgroundColor": "",
                    "padding": "0px"
                }
            }, {
                "contents": [{
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/169579/1689324863578-newsletters_12.jpg",
                            "width": 600,
                            "height": 711
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
    },
    {
        "category": "Product Info",
        "tags": ['product info', 'product', 'info'],
        "data": {
            "cells": [1],
            "columns": [{
                "contents": [{
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/169579/1689325443560-newsletters_9.png",
                            "width": 600,
                            "height": 400
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><span style=\"color: #000000; text-align: -webkit-center; white-space: normal; float: none; display: inline; line-height: 19.6px;\">The energy brings to improving the apparel industry and minimizing its impact on the planet is infectious.The resulting bricks are used to build affordable homes.</span></p>"
                    }
                }, {
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#000000",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "0px",
                        "displayCondition": null,
                        "_meta": {
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "Read about us",
                        "calculatedWidth": 131,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            },
            "schemaVersion": 15
        },
        "displayMode": "email",
        "schemaVersion": 15
    }
];
export const DegistBlock = [{
    "category": "Degist Block",
    "tags": ['degist', 'block', 'degist block'],
    "data": {
        "id": "S9MzjusZE6",
        "cells": [40.93, 59.07],
        "columns": [{
            "id": "pt0v8190Fc",
            "contents": [{
                "id": "zQNVF7OHLH",
                "type": "image",
                "values": {
                    "containerPadding": "15px 10px 10px",
                    "anchor": "",
                    "src": {
                        "url": "https://assets.unlayer.com/projects/169579/1689523109700-Screenshot%20from%202023-07-16%2022-58-13.png",
                        "width": 204,
                        "height": 207
                    },
                    "textAlign": "center",
                    "altText": "",
                    "action": {
                        "name": "web",
                        "values": {
                            "href": "",
                            "target": "_blank"
                        }
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_image"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }],
            "values": {
                "_meta": {
                    "htmlClassNames": "u_column"
                },
                "border": {},
                "padding": "0px",
                "borderRadius": "0px",
                "backgroundColor": ""
            }
        }, {
            "id": "bFmOeoetEP",
            "contents": [{
                "id": "6hRiYnriyB",
                "type": "heading",
                "values": {
                    "containerPadding": "10px",
                    "anchor": "",
                    "headingType": "h1",
                    "fontSize": "22px",
                    "textAlign": "left",
                    "lineHeight": "140%",
                    "linkStyle": {
                        "inherit": true,
                        "linkColor": "#0000ee",
                        "linkHoverColor": "#0000ee",
                        "linkUnderline": true,
                        "linkHoverUnderline": true
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_heading"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true,
                    "text": "<strong>What to wear this fall</strong>"
                }
            }, {
                "id": "HRfBDnn38d",
                "type": "text",
                "values": {
                    "containerPadding": "10px",
                    "anchor": "",
                    "fontSize": "16px",
                    "color": "#5d5d5d",
                    "textAlign": "left",
                    "lineHeight": "140%",
                    "linkStyle": {
                        "inherit": true,
                        "linkColor": "#0000ee",
                        "linkHoverColor": "#0000ee",
                        "linkUnderline": true,
                        "linkHoverUnderline": true
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_text"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true,
                    "text": "<p style=\"line-height: 140%;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>"
                }
            }, {
                "id": "_3tqgu1tXV",
                "type": "text",
                "values": {
                    "containerPadding": "10px 10px 4px",
                    "anchor": "",
                    "fontSize": "17px",
                    "textAlign": "left",
                    "lineHeight": "140%",
                    "linkStyle": {
                        "inherit": true,
                        "linkColor": "#0000ee",
                        "linkHoverColor": "#0000ee",
                        "linkUnderline": true,
                        "linkHoverUnderline": true
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_text"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true,
                    "text": "<p style=\"line-height: 140%;\"><strong>READ LATEST TREND</strong></p>"
                }
            }, {
                "id": "gUouj9g_zB",
                "type": "divider",
                "values": {
                    "width": "100%",
                    "border": {
                        "borderTopWidth": "2px",
                        "borderTopStyle": "solid",
                        "borderTopColor": "#000000"
                    },
                    "textAlign": "center",
                    "containerPadding": "10px",
                    "anchor": "",
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_divider"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }],
            "values": {
                "backgroundColor": "",
                "padding": "0px",
                "border": {},
                "borderRadius": "0px",
                "_meta": {
                    "htmlClassNames": "u_column"
                }
            }
        }],
        "values": {
            "displayCondition": null,
            "columns": false,
            "backgroundColor": "",
            "columnsBackgroundColor": "",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "custom",
                "position": "center"
            },
            "padding": "0px",
            "anchor": "",
            "hideDesktop": false,
            "_meta": {
                "htmlClassNames": "u_row"
            },
            "selectable": true,
            "draggable": true,
            "duplicatable": true,
            "deletable": true,
            "hideable": true
        },
        "schemaVersion": 15
    },
    "displayMode": "email",
    "schemaVersion": 15
}]
export const LogoBlock = [{
    "category": "Logo",
    "tags": ['logo'],
    "data": {
        "id": "S9MzjusZE6",
        "cells": [1],
        "columns": [{
            "id": "pt0v8190Fc",
            "contents": [{
                "id": "dCAMtmcIJb",
                "type": "image",
                "values": {
                    "containerPadding": "10px",
                    "anchor": "",
                    "src": {
                        "url": "https://assets.unlayer.com/projects/169579/1689524858286-logo.png",
                        "width": 800,
                        "height": 264
                    },
                    "textAlign": "center",
                    "altText": "",
                    "action": {
                        "name": "web",
                        "values": {
                            "href": "",
                            "target": "_blank"
                        }
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_image"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }],
            "values": {
                "_meta": {
                    "htmlClassNames": "u_column"
                },
                "border": {},
                "padding": "0px",
                "borderRadius": "0px",
                "backgroundColor": ""
            }
        }],
        "values": {
            "displayCondition": null,
            "columns": false,
            "backgroundColor": "",
            "columnsBackgroundColor": "",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "custom",
                "position": "center"
            },
            "padding": "0px",
            "anchor": "",
            "hideDesktop": false,
            "_meta": {
                "htmlClassNames": "u_row"
            },
            "selectable": true,
            "draggable": true,
            "duplicatable": true,
            "deletable": true,
            "hideable": true
        },
        "schemaVersion": 15
    },
    "displayMode": "email",
    "schemaVersion": 15
}]
export const ImageGallery = [{
    "category": "Image Gallery",
    "tags": ['image gallery', 'image', 'gallery'],
    "data": {
        "id": "S9MzjusZE6",
        "cells": [50.33, 49.67],
        "columns": [{
            "id": "pt0v8190Fc",
            "contents": [{
                "id": "XAojO26S1d",
                "type": "image",
                "values": {
                    "containerPadding": "5px",
                    "anchor": "",
                    "src": {
                        "url": "https://assets.unlayer.com/projects/169579/1689524236800-Screenshot%20from%202023-07-16%2023-17-10.png",
                        "width": 293,
                        "height": 441
                    },
                    "textAlign": "center",
                    "altText": "",
                    "action": {
                        "name": "web",
                        "values": {
                            "href": "",
                            "target": "_blank"
                        }
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_image"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "x_Sh0m8fKF",
                "type": "image",
                "values": {
                    "containerPadding": "5px",
                    "anchor": "",
                    "src": {
                        "url": "https://assets.unlayer.com/projects/169579/1689524387566-Screenshot%20from%202023-07-16%2023-19-41.png",
                        "width": 292,
                        "height": 180
                    },
                    "textAlign": "center",
                    "altText": "",
                    "action": {
                        "name": "web",
                        "values": {
                            "href": "",
                            "target": "_blank"
                        }
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_image"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "wOW3cP49Rk",
                "type": "image",
                "values": {
                    "containerPadding": "10px",
                    "anchor": "",
                    "src": {
                        "url": "https://assets.unlayer.com/projects/169579/1689524407310-Screenshot%20from%202023-07-16%2023-20-00.png",
                        "width": 292,
                        "height": 332
                    },
                    "textAlign": "center",
                    "altText": "",
                    "action": {
                        "name": "web",
                        "values": {
                            "href": "",
                            "target": "_blank"
                        }
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_image"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }],
            "values": {
                "_meta": {
                    "htmlClassNames": "u_column"
                },
                "border": {},
                "padding": "0px",
                "borderRadius": "0px",
                "backgroundColor": ""
            }
        }, {
            "id": "bFmOeoetEP",
            "contents": [{
                "id": "FthNerLBXM",
                "type": "image",
                "values": {
                    "containerPadding": "5px",
                    "anchor": "",
                    "src": {
                        "url": "https://assets.unlayer.com/projects/169579/1689524269756-Screenshot%20from%202023-07-16%2023-17-43.png",
                        "width": 295,
                        "height": 181
                    },
                    "textAlign": "center",
                    "altText": "",
                    "action": {
                        "name": "web",
                        "values": {
                            "href": "",
                            "target": "_blank"
                        }
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_image"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "jfmF3RkZVz",
                "type": "image",
                "values": {
                    "containerPadding": "5px",
                    "anchor": "",
                    "src": {
                        "url": "https://assets.unlayer.com/projects/169579/1689524323714-Screenshot%20from%202023-07-16%2023-18-32.png",
                        "width": 292,
                        "height": 391
                    },
                    "textAlign": "center",
                    "altText": "",
                    "action": {
                        "name": "web",
                        "values": {
                            "href": "",
                            "target": "_blank"
                        }
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_image"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "My_DnOIgqx",
                "type": "image",
                "values": {
                    "containerPadding": "5px",
                    "anchor": "",
                    "src": {
                        "url": "https://assets.unlayer.com/projects/169579/1689524343681-Screenshot%20from%202023-07-16%2023-18-55.png",
                        "width": 292,
                        "height": 391
                    },
                    "textAlign": "center",
                    "altText": "",
                    "action": {
                        "name": "web",
                        "values": {
                            "href": "",
                            "target": "_blank"
                        }
                    },
                    "displayCondition": null,
                    "_meta": {
                        "htmlClassNames": "u_content_image"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }],
            "values": {
                "backgroundColor": "",
                "padding": "0px",
                "border": {},
                "borderRadius": "0px",
                "_meta": {
                    "htmlClassNames": "u_column"
                }
            }
        }],
        "values": {
            "displayCondition": null,
            "columns": false,
            "backgroundColor": "",
            "columnsBackgroundColor": "",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "custom",
                "position": "center"
            },
            "padding": "0px",
            "anchor": "",
            "hideDesktop": false,
            "_meta": {
                "htmlClassNames": "u_row"
            },
            "selectable": true,
            "draggable": true,
            "duplicatable": true,
            "deletable": true,
            "hideable": true
        },
        "schemaVersion": 15
    },
    "displayMode": "email",
    "schemaVersion": 15
}]