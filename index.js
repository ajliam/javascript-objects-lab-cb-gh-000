


var recipes = {key: 'value'}

function updateObjectWithKeyAndValue(object, key, value){
  var copy =  Object.assign({}, object)
  copy[key] = value
  return copy
}
