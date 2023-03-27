//descending order of given 3 numbers//
let a=10;
let b=20;
let c=30;

if (a>b && a>c){
    if(a>b && b>c){
        console.log("a","b","c");
    }
    else {
        console.log("a","c","b");
    }
}
else if (b>a && b>c){
    if(b>a && a>c){
        console.log("b","a","c");
    }
    else{
        console.log("b","c","a");
    }
}
else{
    if(c>a && a>b){
        console.log("c","a","b");
    }
    else{
        console.log("c","b","a");
    }
}