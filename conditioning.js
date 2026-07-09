let age=25;
if (age>=18){
    console.log("eligible for voting")
}
else{
    console.log("not eligible for voting")
}

//ternary
let num1=30;
let num2=20

let largest=(num1>num2)?console.log("largest is:",num1):console.log("largest is:",num2)

//else if
let dayNum=1
if(dayNum=="1"){
    console.log("monday")
}else if(dayNum=="2"){
    console.log("tuesday")
}
else if(dayNum=="3"){
    console.log("wednesday")
}else if(dayNum=="4"){
    console.log("thursday")
}else if(dayNum=="5"){
    console.log("friday")
}else if(dayNum=="6"){
    console.log("friday")
}else if(dayNum=="7"){
    console.log("saturday")
}

//nested if
let a=30;
let b=80;
let c=90;
if (a>b){
    if (a>c){
        console.log("a is largest",a)
    }
    else{
        console.log("c is largest ",c)
    }
}else{
    if(b>c){
        console.log("b is largest",b)
    }else{
        console.log("c is largest",c)
    }
}