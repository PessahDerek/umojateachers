
// commarise numbers
exports.commarise = (value) => typeof(value) === 'undefined' ? "" : value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");