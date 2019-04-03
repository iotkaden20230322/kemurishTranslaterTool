function trDo(){

	var count = 17;
  var arryAllCharacters = new array(1);
/*
	while(count) {
		if(document.forms[0].character[count].checked){
		    var xhr = new XMLHttpRequest();
		    xhr.onload = function() {
		    arryAllCharacters.push(createArray(xhr.responseText));
		    };
		    xhr.open("get", "./data/"+document.forms[0].character[count].value+".csv", true);
		    xhr.send(null);
		}
		count--;
	}
*/
	    text    = document.forms[0].input.value;
        text    = replaceAll(text,"とても", "めっさ");
        text    = replaceAll(text,"好き", "…好きだ。");
        text    = replaceAll(text,"です", "なのナ");
        text    = replaceAll(text,"ます", "ますニャ");
				text    = replaceAll(text,"ました", "たじゃん");
				text    = replaceAll(text,"考えていない", "意味見ていない");
				text    = replaceAll(text,"ムシ", "ヌシ(ムシ違う)");
        document.forms[0].output.value = text;
}

function replaceAll(str, beforeStr, afterStr){
  var reg = new RegExp(beforeStr, "g");
  return str.replace(reg, afterStr);
}

function createArray(csvData) {
    var tempArray = csvData.split("\n");  //行
    var csvArray = new Array();     //列
    for(var i = 0; i<tempArray.length;i++){
    csvArray[i] = tempArray[i].split(",");
    }
    return csvArray;
}
