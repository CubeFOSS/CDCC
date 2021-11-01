browser.storage.sync.get("old").then(function OnGot(item){
    if(item){
        document.getElementsByClassName("block cc_discordWidget")[0].getElementsByClassName("block-container")[0].style.backgroundColor = "#738BD7";
}
else{
    document.getElementsByClassName("block cc_discordWidget")[0].getElementsByClassName("block-container")[0].style.backgroundColor = "#5865F2";
}
}, function OnError(error){console.log(`Error: ${error}`);});