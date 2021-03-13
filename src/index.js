
exports.min = function min (array) {
  if (array != undefined) {
    if (array.length != 0) {
      let arrMin = array.sort(function(a,b) {
        return a - b;
      })
      return arrMin[0]
    }
  }
  return 0;
}

exports.max = function max (array) {
  if (array != undefined) {
    if (array.length != 0) {
      let arrMax = array.sort(function(a,b) {
        return a - b;
      }).reverse()
      return arrMax[0]
    }
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array != undefined) {
    if (array.length != 0) {
      let sum = 0
      for (let i=0; i < array.length; i++) {
        sum += array[i]
      } return (sum / array.length)
    }
  } return 0;
}
