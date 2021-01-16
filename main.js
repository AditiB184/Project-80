function GetParagraph1(){
    var inputs = [];
for (var i=1; i<=6; i++)
{
inputs.push(document.getElementById("box" + i).value);
}
inputs.join(".");
document.getElementById("ShowParagraph1").innerHTML=inputs.join(". ");
}

function GetParagraph2(){
    var inputs2 = [];
for (var i=7; i<=12; i++)
{
inputs2.push(document.getElementById("box" + i).value);
}
inputs2.join(".");
document.getElementById("ShowParagraph2").innerHTML=inputs2.join(". ");
}

