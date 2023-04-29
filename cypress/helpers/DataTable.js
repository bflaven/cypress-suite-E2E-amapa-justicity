var _ = require("lodash");
module.exports = {
  getDataTableFormatted: function (dataTable) {
    if (Array.isArray(dataTable)) {
      let formattedDataTable = {};
      dataTable.forEach((row) => {
        //if type is not set (empty or we have only two column) we set string
        row["type"] =
          typeof row["type"] === "undefined" || row["type"].trim().length < 1
            ? "string"
            : row["type"];
      });
      formattedDataTable = this.formatArray(dataTable);
      return formattedDataTable;
    }
    return dataTable;
  },

  formatArray: function (dataTable) {
    let formattedDataTable = {};
    let arrayKey = [];
    let formattedArrayRow = {};
    //iterate over all rows of the table
    dataTable.forEach((row) => {
      formattedArrayRow = {};
      //the case we should manage an array or nested object
      if (row["key"].includes("->")) {
        //attributes->0->key ===> [attributes,0,key]
        arrayKey = row["key"].split("->");
        let lastArrayToEvaluate = "";
        //need this variable to create dynamically nested object or array
        // e.g: eval(lastArrayToEvaluate + '=[]'); will be transformed to formattedArrayRow=[]
        let arrayToEvaluate = "formattedArrayRow";
        //iterate over items gotten when split row[key] e.g [attributes,0,key]
        arrayKey.forEach((rowKey) => {
          //formattedArrayRow['attributes']
          arrayToEvaluate = arrayToEvaluate.concat("['" + rowKey + "']");
          // we will set the current element type (array/object) only if we know the type of the next element (integer=>array/string=>object)
          // e.q: for 'attributes->0->key' we can determine attributes type only when the current element is '0' ==> so 'attribute' is an array
          // we can determine type of the first element of attribute[0] only when the current element is 'key' ==> so 'attribute[0]' is an object
          // if it's the first element 'attributes' we don't know yet if it's an array or object
          if (rowKey !== arrayKey[0]) {
            if (
              eval("'" + typeof " + arrayToEvaluate + " + '\' !== "undefined"')
            ) {
              if (Number.isInteger(parseInt(rowKey))) {
                eval(lastArrayToEvaluate + "=[]");
              } else {
                eval(lastArrayToEvaluate + "={}");
              }
            }
          }
          //allow us to set the type(array/object) of current element based on the type (integer/string) of the previous one
          lastArrayToEvaluate = arrayToEvaluate;
        });
        //set value e.g: formattedArrayRow['attributes'][0]['key'] = 'test'
        if (row["type"].trim().toLowerCase() == "string") {
          //set value e.g: formattedArrayRow['attributes'][0]['key'] = 'test'
          eval(
            arrayToEvaluate +
              "='" +
              this.convertToRequestedType(row["value"], row["type"]) +
              "';"
          );
        } else {
          //set value e.g: formattedArrayRow['attributes'][0]['key'] = 1
          eval(
            arrayToEvaluate +
              "=" +
              this.convertToRequestedType(row["value"], row["type"]) +
              ";"
          );
        }

        formattedDataTable = _.merge(formattedDataTable, formattedArrayRow);
      } else {
        formattedArrayRow[row["key"]] = this.convertToRequestedType(
          row["value"],
          row["type"]
        );
        formattedDataTable = _.merge(formattedDataTable, formattedArrayRow);
      }
    });
    return formattedDataTable;
  },

  convertToRequestedType: function (value, type) {
    let newValue;
    switch (type.toLowerCase()) {
      case "integer":
        newValue = Number.parseInt(value);
        break;
      case "boolean":
        newValue = value.toLowerCase().trim() == "true";
        break;
      case "string":
        newValue = value;
        break;
      default:
        throw (
          "type:<" +
          type +
          "> of value:<" +
          value +
          ">is not supported.Please try one of this list [string,integer,boolean]"
        );
    }
    return newValue;
  },

  getVariableName: function (someVar) {
    const varToString = (varObj) => Object.keys(varObj)[0];
    let variableName = varToString({ someVar });
    return variableName;
  },
};
