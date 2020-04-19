// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.



function bindLaunch() {
  b = document.querySelector('#test')
  b.onsubmit = function(e) {
    e.preventDefault()
    $('#gg').modal({backdrop: 'static', keyboard: false});
    $('#gg').modal('show')
    document.querySelector('.progress-bar').style.width = '10%'
  }
}

bindLaunch()