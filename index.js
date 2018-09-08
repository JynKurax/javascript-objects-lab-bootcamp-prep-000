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
    var newobject = Object.assign({}, object)
    
    
    
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
