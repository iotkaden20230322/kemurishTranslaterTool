function trDo(){
/*
	var count = 16;

	while(count) {
		if(document.forms[0].character[count].checked){
		    var xhr = new XMLHttpRequest();
		    xhr.onload = function() {
		    createArray(xhr.responseText);
		    };
		 
		    xhr.open("get", "./data/"+document.forms[0].character[count].value+".csv", true);
		    xhr.send(null); 
		}
		count--;
	}

*/
	    text    = document.forms[0].input.value;
        text    = text.replace("とても", "めっさ");
        text    = text.replace("好き", "…好きだ。");
        text    = text.replace("です", "なのナ");
        document.forms[0].output.value = text;
}
/*
function createArray(csvData) {
    var tempArray = csvData.split("\n");
    var csvArray = new Array();
    for(var i = 0; i<tempArray.length;i++){
    csvArray[i] = tempArray[i].split(",");
    }
}

*/