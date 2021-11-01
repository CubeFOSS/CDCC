function save(){
    let oldc = document.getElementById("classic").checked;
    browser.storage.sync.set({
        old: {c:oldc}
    });
    console.log(oldc);
      let status = document.getElementById("status");
      status.textContent = "Saved!";
      setTimeout(function(){
          status.textContent = "";
      }, 2000);
}
function restore() {
  let a = browser.storage.sync.get("old");
  a.then(onGot, onError)
}
function onGot(item){
  document.getElementById("classic").checked = item.old.c;
  console.log(item.old.c)
}
function onError(error){
  console.log(`Error: ${error}`);
}
document.addEventListener('DOMContentLoaded', restore);
document.getElementById('save').addEventListener('click',
    save);