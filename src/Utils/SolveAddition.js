

exports.solveShares = (value) => {
    let strValue = value.toString(), splits = [], add=true;
    if(strValue.includes(",")) splits = strValue.split(",");
    if(strValue.includes(".")) splits = strValue.split(".");
    if(strValue.includes("-")){
        splits = strValue.split("-");
        add = false
    }
    if(splits.length <= 1) return value
    if(add) return(Number(splits[0])+Number(splits[1]));
    return Number(splits[0]) - Number(splits[1]);    
}