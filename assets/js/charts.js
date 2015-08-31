var areaChart = {
  "background-color":"none",
    theme:"none",
  type: "area",
  plotarea:{
    "margin":"dynamic",
    height: "90%"
  }, 
  plot:{
    "line-width":2,
    "line-color":"#133353",
    "marker":{
      visible:0
    },
    "active-area":1
  },
 "tooltip":{
    "html-mode":true,
    "text":"<span style='font-size:14px;'>%v sessions</span>",
    shadow:0,
    "background-color":"#00b7cc"
  },
  "scale-x": {
        "transform": {
          "item":{
                "visible":false
            },
            "type": "date",
            "all": "%D, %M %d"
        },
        values: [1433116800000, 1433203200000, 1433289600000, 1433376000000, 1433462400000, 1433548800000, 1433635200000, 1433721600000, 1433808000000, 1433894400000, 1433980800000, 1434067200000, 1434153600000, 1434240000000, 1434326400000, 1434412800000, 1434499200000, 1434585600000, 1434672000000, 1434758400000, 1434844800000, 1434931200000, 1435017600000, 1435104000000, 1435190400000, 1435276800000, 1435363200000, 1435449600000, 1435536000000, 1435622400000]
    },
  "scale-y":{
    "values":"0:1500:500",
    "line-color":"none",
    "tick":{
      "line-color":"none"
    }
  },
  series : [
    {
      values : [307,1244,1214,932,998,693,553,437,544,1077,442,977,686,559,454,587,1262,1326,910,681,582,600,1017,520,311,1015,1147,1298,320,480],
      "background-color":"#00CEE6",
            alpha:0.1
    }
  ]
};

var salesMap = {
    "graphset":[
        {
            "background-color":"none",
            labels:[
              {
                text:"$0",
                color:"#333",
                alpha: 0.8,
                x:3,
                y:-5
              },
              {
                text:"$100+",
                color:"#333",
                alpha: 0.8,
                x:262,
                y:-5
              }
            ],
            "shapes":[
                {
                  type:"rectangle",
                  width:60,
                  height:15,
                  "background-color":"#e1e1e1",
                  x:52
                },
                {
                  type:"rectangle",
                  width:60,
                  height:15,
                  x:112,
                  "background-color":"#b9f0f7"
                },
                {
                  type:"rectangle",
                  width:60,
                  height:15,
                  "background-color":"#00CAE6",
                  x:172
                },
                {
                  type:"rectangle",
                  width:60,
                  height:15,
                  "background-color":"#006C7B",
                  x:232
                },
                {
                    "type":"zingchart.maps",
                    "options":{
                        "id":"map",
                        "name":"usa",
                        "scale":true,
                        "x":0,
                        "y":0,
                        "style":{
                            //"background-color":"#d1cccf",
                            "border-color":"#afacae",
                            "hover-state":{
                              //"shadow-distance":4,
                              //"shadow-angle":100
                            },
                            tooltip:{
                              "border-radius":0,
                              shadow: 0,
                              color:"#fff",
                              "border-color":"white",
                              "background-color":"#bfbfbf",
                              //alpha:0.8
                              "font-size":14
                            },
                            "label":{
                              "visible":0 
                            },
                            items:{
                                //top sales
                                //top
                              "CA":{
                                  "background-color":"#006C7B",
                                  "hover-state":{
                                      "background-color":"#006C7B",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "WA":{
                                  "background-color":"#006C7B",
                                  "hover-state":{
                                      "background-color":"#006C7B",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "OR":{
                                  "background-color":"#006C7B",
                                  "hover-state":{
                                      "background-color":"#006C7B",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "VT":{
                                  "background-color":"#006C7B",
                                  "hover-state":{
                                      "background-color":"#006C7B",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "CT":{
                                  "background-color":"#006C7B",
                                  "hover-state":{
                                      "background-color":"#006C7B",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "UT":{
                                  "background-color":"#006C7B",
                                  "hover-state":{
                                      "background-color":"#006C7B",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "NH":{
                                  "background-color":"#006C7B",
                                  "hover-state":{
                                      "background-color":"#006C7B",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "DE":{
                                  "background-color":"#006C7B",
                                  "hover-state":{
                                      "background-color":"#006C7B",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              //fewer
                              "IN":{
                                  "background-color":"#00899C",
                                  "hover-state":{
                                      "background-color":"#00899C",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "OH":{
                                  "background-color":"#00899C",
                                  "hover-state":{
                                      "background-color":"#00899C",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "PA":{
                                  "background-color":"#00899C",
                                  "hover-state":{
                                      "background-color":"#00899C",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "MD":{
                                  "background-color":"#00899C",
                                  "hover-state":{
                                      "background-color":"#00899C",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              //least
                              "ND":{
                                  "background-color":"#00CAE6",
                                  "hover-state":{
                                      "background-color":"#00CAE6",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "GA":{
                                  "background-color":"#00CAE6",
                                  "hover-state":{
                                      "background-color":"#00CAE6",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "MA":{
                                  "background-color":"#00CAE6",
                                  "hover-state":{
                                      "background-color":"#00CAE6",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "MN":{
                                  "background-color":"#00CAE6",
                                  "hover-state":{
                                      "background-color":"#00CAE6",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "KS":{
                                  "background-color":"#00CAE6",
                                  "hover-state":{
                                      "background-color":"#00CAE6",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "WI":{
                                  "background-color":"#00CAE6",
                                  "hover-state":{
                                      "background-color":"#00CAE6",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "AL":{
                                  "background-color":"#b9f0f7",
                                  "hover-state":{
                                      "background-color":"#b9f0f7",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "WV":{
                                  "background-color":"#b9f0f7",
                                  "hover-state":{
                                      "background-color":"#b9f0f7",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "NV":{
                                  "background-color":"#b9f0f7",
                                  "hover-state":{
                                      "background-color":"#b9f0f7",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              },
                              "LA":{
                                  "background-color":"#b9f0f7",
                                  "hover-state":{
                                      "background-color":"#b9f0f7",
                                      "shadow-distance":4,
                                      "shadow-angle":100
                                  }
                              }
                          }
                        }
                      }
                    }
            ]
        }
    ]
};

var profitMarginBar = {
    watermark:{
      position: "bl",
      "offset-x": 100
    },
    graphset:[{
    theme:"none",
    type: "hbar", 
    "scale-x":{
      "label":{
        "text":"Product",
        color:"#333"
      },
      "line-color":"none",
      "tick":{
        visible:0
      },
      "values":['']
    },
    "scale-y":{
        "label":{
          text:"Profit Margin",
          color:"#333"
        },
        "line-color":"#666",
        tick:{
          "line-color":"#666"
        },
        item:{
          color:"#666"
        }
    },
    plotarea:{
        margin:"dynamic",
        "margin-right":50
    },
    "tooltip":{
      "html-mode":true,
      "text":"<span style='font-size:14px;'>%t</span><br>Profit Margin: <span style='font-size:14px;'>%v%</span>",
      shadow:0
    },
    "plot":{
      "value-box":{
         text:"%v%",
         color:"#333"
      },
      shadow:0,
      "bar-space":25
      //"shadow-color":"none" -- maybe come back and add shadows back. something smoother.
    },
    series : [
      {
            values : [18.4],
          "background-color":"#00CEE6",
          text: "Litter Robot II"
        },
        {
            values : [57],
            "background-color":"#9B9BD7",
            text:"Catnip Carrots"
        },
        {
            values : [43.4],
            "background-color":"#6EDA55",
            text:"Classy Kitty Condo"
        },
        {
            values : [73.6],
            "background-color":"#FC7570",
            text:"Crinkle Katsak"
        },
        {
            values : [32],
            "background-color":"#FBB755",
            text: "Cat Man Doo Bonita Flakes"
        }
    ]
}]};

var topSellersPie = {
  history:{
    x:0,
    y:20
  },
  graphset:[
    {
        id:"level1Pie",
        title:{
            text:'<span style="font-style:italic;">Click "Other Products" to drill down.</span>',
            alpha: 0.4,
            "font-size":11,
            "text-align":"left"
        },
      theme:"none",
      type: "pie", 
      "tooltip":{
          "html-mode":true,
        "text":"<span style='font-size:14px;'>%t</span><br><span style='font-size:14px;'>%v% of sales</span>",
        shadow:0
        },
      "plot":{
          "slice":50,
          "shadow":0,
          "border-width":"5px",
          "border-color":"white",
          "value-box":{
              "placement":"in",
              //"placement":"out",
              "font-size":"10px",
              "font-color":"#333"
          },
          "animation":{
              "effect":"2",
              "delay":"1000",
              "speed":"500",
              "method":"5",
              "sequence":"1"
          }
      },
        series : [
            {
                values : [38.1],
                text:"Litter Robot II",
                "background-color":"#00CEE6"
            },  
            {
              values:[29.5],
              text:"Catnip Carrots",
              "background-color":"#9B9BD7"
            },
            {
              values:[9],
              text:"Classy Kitty Condo",
              "background-color":"#6EDA55"
            },
            {
              values:[23.4],
              text:"Other Products",
              "background-color":"#E1E1E1",
              url:"http://www.zingchart.com/demos/ecommerce-dashboard/assets/js/level2pie.js",
              target: "graph=level1Pie"
            }
        ]
    }
  ]
};

var rateBullets = {
    theme: "none",
    "graphset": [{
        type: "hmixed",
        margin:"dynamic",
        "tooltip":{
          "html-mode":true,
          "text":"<span style='font-size:14px;'>%v%</span>",
          shadow:0
        },
        shapes:[
          {
            type:"rectangle",
            height: 10,
            width: 10,
            x: "5%",
            y: 40,
            label:{
              text: "Industry Average",
              color:"#333",
              "offset-x":60
            },
            "background-color":"#FBB755"
          },
          {
            type:"rectangle",
            height: 10,
            width: 10,
            x: "5%",
            y: 60,
            label:{
              text: "Our Goal",
              color:"#333",
              "offset-x":38
            },
            "background-color":"#FC7570"
          }
        ],
        title: {
            text: "Conversion Rate",
            "text-align":"left",
            alpha: 0.3
        },
        "scale-x": {
            "visible": 0
        },
        "scale-y":{
          "guide":{
              visible:0
          },
          "line-color":"#333",
          tick:{
            "line-color":"#333"
          },
          "format":"%v%",
          values:"0:5:1"
        },
        series: [{
            type: "hbar",
            "max-trackers":1,
            values: [3.2],
            "hover-state":{
              "visible":0
            },
            shadow:0,
            "offset-y":-5,
            "background-color":"#00CEE6"
        }, {
            type: "hscatter",
            values: [2.3],
            "marker": {
                shadow:0,
                "type": "rectangle",
                "height": 40,
                "width": 5,
                "offset-y":-5,
                "background-color":"#FC7570"
            }
        },
        {
            type: "hscatter",
            values: [4.3],
            "marker": {
                shadow:0,
                "type": "rectangle",
                "height": 40,
                "width": 5,
                "offset-y":-5,
                "background-color":"#FBB755"
            }
        }]
    }, {
        type: "hmixed",
        margin:"dynamic",
        title: {
            text: "Cart Abandonment Rate",
            alpha: 0.3,
            "text-align":"left"
        },
        "tooltip":{
          "html-mode":true,
          "text":"<span style='font-size:14px;'>%v%</span>",
          shadow:0
        },
        shapes:[
          {
            type:"rectangle",
            height: 10,
            width: 10,
            x: "5%",
            y: 40,
            label:{
              text: "Industry Average",
              color:"#333",
              "offset-x":60
            },
            "background-color":"#FBB755"
          },
          {
            type:"rectangle",
            height: 10,
            width: 10,
            x: "5%",
            y: 60,
            label:{
              text: "Our Goal",
              color:"#333",
              "offset-x":38
            },
            "background-color":"#FC7570"
          }
        ],
        "scale-x": {
            "visible": 0
        },
       "scale-y":{
          "guide":{
              visible:0
          },
          "format":"%v%",
           "line-color":"#333",
          tick:{
            "line-color":"#333"
          },
        },
        series: [{
            type: "hbar",
            values: [54.3],
            "offset-y":-5,
            shadow:0,
            "background-color":"#00CEE6",
            "hover-state":{
              "visible":0
            }
        }, {
            type: "hscatter",
            values: [68.8],
            "marker": {
                shadow:0,
                "offset-y":-5,
                "type": "rectangle",
                "height": 40,
                "width": 5,
                "background-color":"#FC7570"
            }
        },
        {
            type: "hscatter",
            values: [50.8],
            "marker": {
                shadow:0,
                "offset-y":-5,
                "type": "rectangle",
                "height": 40,
                "width": 5,
                "background-color":"#FBB755"
            }
        }]
    }]
};

var waterfall = {
    theme:"none",  

    "type": "hwaterfall",
    "plot":{
      "bar-width":22
      },
    "plotarea":{
       margin:"dynamic"
        },

    "tooltip":{
      "html-mode":true,
      "text":"<span style='font-size:14px;'>$%v</span>",
      shadow:0
    },
    "scale-x":{
        "guide":{
            "visible":false
            },
        "line-color":"none",
        "tick":{
            visible:0
            },
        "item":{
            "color":"#333"
            },
        "mirrored":true,
        "labels":["Revenue","COGS","Gross Profit","R & D","Sales Expenses","Interest & Taxes","Net Income","Total"]
        },
        "scale-y":{
            "thousands-separator":",",
            "format":"$%v",
            "label":{
                "color":"#333",
                "text":"(in thousands)",
                "font-weight":"none"
                },
            "guide":{
                visible:0
            },
            "line-color":"none",
            "tick":{
               visible:0
            },
        },
    "options":{
        "positive":{
            "background-color":"#6EDA55",
            shadow:0
            },
        "negative":{
            "background-color":"#FC7570",
            shadow:0

            },
        "intermediate":{
            "background-color":"#00CEE6",
            shadow:0
            },
        "final":{
            "background-color":"#8D8D8D",
            shadow:0
            },
            "line":{
                "line-style":"solid",
                "line-color":"none"
                }
        },
    "series": [
         {
            "values": [
                4000,
                -1000,
                "SUM",
                -500,
                -200,
                700,
                -200,
                "SUM"
            ]
        }
    ]
};
