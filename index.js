function save(){
    let oldc = document.getElementById("classic").checked;
    browser.storage.sync.set({
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
  browser.storage.local.get("old").then(function OnGot(item){document.getElementById("classic").checked = item;}, function OnError(error){console.log(`Error: ${error}`);})
}
document.addEventListener('DOMContentLoaded', restore);
document.getElementById('save').addEventListener('click',
    save);