'use strict'

$(function () {
  chrome.tabs.getSelected(null, function (tab) {
    $('#test').click(function () {
      $('h2').text(tab.url)
    })
  })
})