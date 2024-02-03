type voter={
    name:string,
    age:number
}
function isl(a:voter):boolean{
    if(a.age>18){
        return true;
    }
    return false;
}

console.log(isl({
    name:"John",
    age:25
}));