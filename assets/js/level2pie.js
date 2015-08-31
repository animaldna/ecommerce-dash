{
  theme:"none",
  type: "pie", 
  title:{
      text:'<span style="font-style:italic;">Other Products</span>',
      alpha: 0.4,
      "font-size":11,
      "text-align":"left"
  },
  "tooltip":{
      "html-mode":true,
      "text":"<span style='font-size:14px;'>%t</span><br><span style='font-size:14px;'>%v% of total sales</span>",
      shadow:0
    },
  "plot":{
      "slice":50,
      "shadow":0,
      "border-width":"5px",
      "border-color":"white",
      "value-box":{
          "placement":"in",
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
            values : [50.3],
            text:"Bottle Caps",
            "background-color":"#00CEE6"
        },  
        {
          values:[33.5],
          text:"Cardboard Box",
          "background-color":"#9B9BD7"
        },
        {
          values:[14.2],
          text:"Discarded Milk Rings",
          "background-color":"#6EDA55"
        },
        {
          values:[2],
          text:"Frayed Carpet",
          "background-color":"#FBB755"
        }
    ]
}

