var elements = document.getElementsByClassName("markup-2BOw-j");
var intervalID = setInterval(function(){
    for (var i=0; i<elements.length; i++) {
        var message = elements[i].innerHTML;
        if (message == "pagchomp") {
            var res = message.replace("pagchomp", '<img src="https://cdn.discordapp.com/emojis/505060647483080735.png" class="emoji jumboable">');
        } else {
              var res = message.replace(/alt=":pagchomp.*\:"/, '');      
              var res = res.replace("pagchomp", '<img src="https://cdn.discordapp.com/emojis/505060647483080735.png" class="emoji">');
        }
        elements[i].innerHTML = res;
}
}, 1000);
