function trDo(logicChose){

  var array = new Array();
  var text = document.forms[0].input.value;
  var text2 = "";
  var tmpTxt = "error";

  for(var count = 0; count <= 18; count++) {
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

            if(logicChose==1){
              text = replaceAll(text,array[countdata][0],array[countdata][1]);
            }else{
              text2 = text2 + array[countdata][0] + " -> " + array[countdata][1] + "\n";
            }
          }
        }
      }
    }

    if(logicChose==1){
      document.forms[0].output.value = text + " #kmrkst #ケムリクサ 翻訳 #Kemurikusa";
    }else{
      document.forms[0].output.value = text2;
    }
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

// 「全て選択」チェックで全てにチェック付く
  function AllChecked(){
    var all = document.form.all.checked;
    for (var i=0; i<document.form.test.length; i++){
      document.form.test[i].checked = all;
    }
  }

  // 一つでもチェックを外すと「全て選択」のチェック外れる
  function　DisChecked(){
    var checks = document.form.test;
    var checksCount = 0;
    for (var i=0; i<checks.length; i++){
      if(checks[i].checked == false){
        document.form.all.checked = false;
      }else{
        checksCount += 1;
        if(checksCount == checks.length){
          document.form.all.checked = true;
        }
      }
    }
  }
