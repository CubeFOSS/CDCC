chrome.storage.sync.get(["old"], function(result){
    if(result.old){
        document.getElementsByClassName("block cc_discordWidget")[0].getElementsByClassName("block-container")[0].style.backgroundColor = "#738BD7";
}
else{
    document.getElementsByClassName("block cc_discordWidget")[0].getElementsByClassName("block-container")[0].style.backgroundColor = "#5865F2";
}
})