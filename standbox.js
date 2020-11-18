// array methods
// let ninjas = ['shubham', 'diship', 'mayank'];
// let result = ninjas.join('/');
// let result = ninjas.indexOf('shubham');
// let result = ninjas.concat(['hritik', 'ankit', 'jatin']);
 // let result = ninjas.push('mudrankit');
 // result = ninjas.pop();
// console.log(ninjas);


// booleans and comparisions
// methods can return boolean
// let email = 'ashusom022@gmail.com';
// let result = email.includes('@');
// let names = ['hindustani bhaau', 'carry minati', 'bhuvan bam'];
// let result = names.includes('hindustani bhaau');

// console.log(result);

// comparision operators
// let age = 35;
/* console.log(age==35);
console.log(age==35);
console.log(age==35);
console.log(age==35);
console.log(age==35); */

// let name = 'jhaatu';
// console.log(name=='jhaatu');
// loose comparision(different types can still be equal)
// let age = 25;
// console.log(age == 25);
// console.log(age == '25');


//  strict comparision(different types cannot be equal)
// console.log(age === 25);
// console.log(age !=='25');
// console.log(age !==25);

// type conversion

// let score = '100';
// score = Number(score);
// console.log(score + 1);
// let result = Boolean(100);
// let result = Boolean('0');
// console.log(result, typeof result);


// for loops
//for(let i = 0; i<5; i++){
   // console.log('in loop', i);
   //  console.log('loop finished');
//}
// const names = ['shaun', 'mario', 'luigi'];
 // for(let i = 0; i<names.length; i++){
   // console.log('happy newyear', names[i], i);
   // let html = '<div>${names[i]}</div>';
   // console.log(html);
//}

// while loops
// let i = 0;
// while(i<5){
    // console.log(i);
    //i++;
// }
// const names = ['ankit', 'tyagi', 'vishaant'];
// let i = 0;
// while(i<names.length){
   // console.log('tu bhot bada gaandu hai', names[i]);
   // i++;
// }
// do while loop
// let i = 5;
// do{
    // console.log('value of i is', i)
    // i++;

// } // while(i<5);


// if statement

// const age = 20;
// if(age>15){
   // console.log('your age is more than 15 i.e', age);
// }
/* const ninjas = ['shaun', 'miekel', 'kaalu', 'bhura'];
if(ninjas.length > 2){
   console.log('thats a lot of ninjas');
}*/

/*const password = 'passcodes';
if(password.length >= 8){
   console.log('password is strong enough');
}*/
 
// else if statement
/*onst password = 'pawirtiiiw';
if(password.length >= 12){
   console.log('password is might strong');
} else if(password.length >= 8){
   console.log('password is strong enough');
} else {
   console.log('password is not strong');
}*/

// logival operators- or || and AND &&

/*const password = 'pass';
if(password.length >= 12 && password.includes('@')){
   console.log('password is might strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
   console.log('password is strong enough');
} else {
   console.log('password is not strong');
}*/

// logical NOT (!)

/*let user = false;
if(!user){
   console.log('you must be logged in to continue');
}*/


// break and continue

/*const scores = [35, 0, 36, 45, 98, 65];
for(let i = 0; i < scores.length; i++){
   if(scores[i]===98){
      console.log('congratulations you got the highest score')
      break/continue;
   }*/

   /*console.log('your score is', scores[i]);
   

   if(scores[i]===98){
      console.log('fuck you you got the highest score', scores[i]);
      break;
   }
}*/


// switch statement
/*const grade = 'D';
// using if statement
if(grade === 'A'){

} else if(grade === 'B'){

} else if(grade === 'C'){

} else if(grade === 'D'){

} else if(grade === 'E'){

} else(){

}*/

//switch statement
/*let grade = 'A';
switch(grade){
   case 'A':
      console.log('you got an A');
      break;
   case 'B':
      console.log('you got a B');
      break;
   case 'C':
      console.log('you got a C');
      break;
   case 'D':

      console.log('you got a D');
      break;
   case 'E':
      console.log('you got an E');
      break;
   default:
      console.log('invalid grade');

}*/
// varriable and block scope 

/**let age = 30;
if(true){
   let age = 78;
   let name = 'MAHA BAKCHOD';
   console.log('inside first codeblock:', age, name);
   if(true){
      console.log('inside second code block', name, age);
   }

}
console.log('outside code block', age);**/




