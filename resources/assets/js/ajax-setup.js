import $ from 'jquery'

const headers = {
  Accept: 'application/x.grt.v1+json',
}

if (window.Laravel) {
  headers['Authorization'] = `Bearer ${Laravel.apiToken}`
}

$.ajaxSetup({headers})

$(document).ajaxError((event, jqxhr) => {
  Messenger().post({
    message: jqxhr.responseJSON.message,
    type: 'error',
  })
})
