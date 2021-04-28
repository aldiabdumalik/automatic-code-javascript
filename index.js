var str = "0001";
var arr = str.split("");
var length = arr.length;
var inx = 1;
var save;
for (let i = 0; i < length; i++) {
    if(arr[length-inx] == "9"){
        if((length-inx) == 0 && arr[length-inx] == "9"){
            arr[length-inx] = parseInt(arr[length-inx]) + 1;
            break;
        }else{
            arr[length-inx] = 0;
        }
    }else{
        arr[length-inx] = parseInt(arr[length-inx]) + 1;
        break;
    }
    inx++;
}
console.log(arr.join(''));