function save(){
  let oldc = document.getElementById("classic").checked;
  chrome.storage.sync.set({
      old: oldc
  }, function(){
      let status = document.getElementById("status");
      status.textContent = "Saved!";
      setTimeout(function(){
          status.textContent = "";
      }, 2000);
  });
}
function restore() {
chrome.storage.sync.get({
  old: false
}, function(items) {
  document.getElementById("classic").checked = items.old;
});
}
document.addEventListener('DOMContentLoaded', restore);
document.getElementById('save').addEventListener('click',
  save);