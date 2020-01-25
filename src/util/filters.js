import Vue from "vue";

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    if(value.split(' ').length > 0){
      value = value.split(' ')[0]
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value.charAt(0).toUpperCase() + value.slice(1)
  })