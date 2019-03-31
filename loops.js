
var thing=[];
function forLoop(thing){
var i;
for (let i=0;i<25;i++){
 if (i==1){
   thing.push("I am 1 strange loop."); 
 } 
  else 
  {
    thing.push(`I am ${i} strange loops.`);
  }
}
  return thing;
}

function whileLoop (n){
  
}

function doWhileLoop (n){
  while (n>0){
  console.log (n);
  }
  return "done";
}

