import _curry2 from '../_internal/_curry2'
import equals from '../equals'

export default _curry2(function whereEq(spec, obj) {
  for (var key in spec) {
    if (!obj.hasOwnProperty(key) || !equals(spec[key], obj[key])) return false
  }
  return true
})