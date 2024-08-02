// Async javaScript //
// Using to achive multi tasking //
// Concurrency //
// Using CallBack Function //
function washing (callBack:()=>void){
    console.log("washing start");
    setTimeout(()=>{
        console.log("washing done");
        callBack();
    },5000);
}
function soaking (callBack:()=>void){
    console.log("soaking start");
    setTimeout(()=>{
        console.log("soaking done");
        callBack();
    },3000);
}
function drying (){
    console.log("drying start");
    setTimeout(()=>{
        console.log("drying done");
    },2000);
}
washing(()=>{
    soaking(()=>{
        drying();
    })
})
// Using Promise //
function wash(){
    console.log("Washing started");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("washing done");
        },5000);
    });
}
function soak (){
   console.log("soaking start");
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("soaking done")
    },3000);
   });
}
function dry (){
    console.log("drying start");
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve("drying done")
     },2000);
    });
 }
 wash().then((v)=>{
    console.log(v);
    return soak();
 }).then((v)=>{
    console.log(v);
    return dry();
 }).then((v)=>{
    console.log(v);})
// Using Async Await //
function washer (){
    console.log("washer start");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("washer done");
        },3000);
    })
}
function soaker (){
    console.log("soaker start");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("soaker done");       
        },2000);
    })
}
function dryer (){
    console.log("dryer start");
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
        resolve("dryer done");
        },1000);
    })
}
async function newFunc(){
    try{
   const r1 = await washer();
   console.log(r1);
   const r2 = await soaker();
   console.log(r2);
   const r3 = await dryer();
   console.log(r3);
    }catch(error){
        console.log(error);
    }
}
newFunc();