function trDo(){

  var array = new Array();
  var text = document.forms[0].input.value;
  var tmpTxt = "error";

  for(var count = 0; count <= 17; count++) {
    if(document.forms[0].character[count].checked){
      array = getCsv("./data/"+document.forms[0].character[count].value+".csv");
      if(array != null){
        for(var countdata=0; countdata<=array.length; countdata++){
          if(array[countdata]){
              if(array[countdata][1]){
                tmpTxt = array[countdata][1];
              } else {
                array[countdata][1] = tmpTxt;
              }
              text = replaceAll(text,array[countdata][0],array[countdata][1]);
          }
        }
      }
    } else {
      console.log("./data/"+document.forms[0].character[count].value+".csv is false.");
    }
    document.forms[0].output.value = text + " #kmrkst";
  }
}

function replaceAll(str, beforeStr, afterStr){
  var reg = new RegExp(beforeStr, "g");
  return str.replace(reg, afterStr);
}

function getCsv(url){
  //CSVファイルを文字列で取得。
  var txt = new XMLHttpRequest();
  txt.open('get', url, false);
  txt.send();

  //改行ごとに配列化
  var arr = txt.responseText.split('\n');

  //1次元配列を2次元配列に変換
  var res = [];
  for(var i = 0; i < arr.length; i++){
    //空白行が出てきた時点で終了
    if(arr[i] == '') break;

    //","ごとに配列化
    res[i] = arr[i].split(',');

    for(var i2 = 0; i2 < res[i].length; i2++){
      //数字の場合は「"」を削除
      if(res[i][i2].match(/\-?\d+(.\d+)?(e[\+\-]d+)?/)){
        res[i][i2] = parseFloat(res[i][i2].replace('"', ''));
      }
    }
  }
  if(res.length > 0){
    return res;
  }

  return null;
}
