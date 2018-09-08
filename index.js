var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
     var cloneObj = Object.assign({}, object, {[key]:value})
     return cloneObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
    var newObj = Object.assign({}, object)
    delete newObj[key]
    return newobj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
