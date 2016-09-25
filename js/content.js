'use strict'

$(function () {
  chrome.runtime.sendMessage({
    player: $('span.Shaman').text()
  })
})