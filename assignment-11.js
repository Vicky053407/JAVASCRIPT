let a=5;
let b=15;
let c=10;
if (a<b && a<c){
    if(a<b && b<c){
        console.log("a","b","c")
    }
    else{
        console.log("a","c","b")
    }
}
else if (b<a && b<c){
    if (a<c && a>b){
        console.log("b","a","c")
    }
    else{
        console.log("b","c","a")
    }
}
else{
    if(c<a && a<b){
        console.log("c","a","b")
    }
    else{
        console.log("c","b","a")
    }
}