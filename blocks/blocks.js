[Blockly.Blocks['transform'] = {
  init: function() {
    this.jsonInit({
      "type": "transform",
      "message0": "transform: (x: %1 ) (y: %2 ) (z: %3 )",
      "args0": [
        {
          "type": "field_number",
          "name": "x",
          "value": 0
        },
        {
          "type": "field_number",
          "name": "y",
          "value": 0
        },
        {
          "type": "field_number",
          "name": "z",
          "value": 0
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 0,
      "tooltip": "Move object along one of the 3 axis (x,y,z)",
      "helpUrl": ""
    });
  }
},
]