// var day=new Date().getDay()
// switch(day){
//     case 0:
//         console.log('today is sunday')
//         break

//         case 1:
//         console.log('today is mon')
//         break

//         case 2:
//         console.log('today is tue')
//         break


//         case 3:
//         console.log('today is wed')
//         break


//         case 4:
//         console.log('today is thurs')
//         break


//         case 5:
//         console.log('today is fry')
//         break

//         case 6:
//         console.log('today is sat')
//         break

//         default:
//             console.log("not a valid number")
// }







// var n=4
// debugger
// for(var i=1;i<=n;i++){
//     var result = ''
//     for(var j=1;j<=i;j++){
//         result += ' #$'
//     }
// console.log(result)
// }










// var run= true
// debugger
// while(run){
//     var rand = Math.round(Math.random()*24+1)
//     if(rand==14){
//         console.log('winner wi n sniff dinner')
//        break

//     }else{
//         console.log('got n0thing ',rand)
//     }
// }









// var str = ' madafaka'
//  var length=0
// while(true){
//     if(str.charAt(length)==''){
//         break
//     }else{
//         length++
//     }
// }

// console.log(str.length )










// debugger
// var arr = [4,456,3,32,45,6]
// var sum=0

// for (var i=0; i<arr.length;i++){
// if(arr[i]%2==0){

//    sum += arr[i]
// }

// }
// console.log(sum)




// debugger
// function sum(math , eng,sc){
//    var s=math+eng+sc

//   return s;

// }
// function percent(tt){
// var per = tt / 300*  100
// console.log(per) 
// }
// var total = sum(80,80,80)
// percent(total)





// debugger
// function sample(a,b){
//   var c = a + b
//   var d = a - b
//   var result = sum(c,d)
//   return result

// }


// function sum (a,b){
//   return a + b
// }
// // some more code...
// //what are you doing...
// //   here is the result...
// console.log(sample(2,3))



// var arr=[1,4,5,6,7,9]

// // var sum =0
// // arr.forEach(function (value, index, array) {
// //   // console.log(value, index, array)
// // sum+=value
// // })
// // console.log(sum)











// var controller = (function () {
//   var a = {
//     name: 'aladin',
//     uid: 1062
//   };
//   return a;
// })();


// var interface = (function () {
//   return 'Hello ' + controller.name;
// })();

// console.log(interface)











// var arr = [1,2,3,5,20]
// debugger



// // var squ = arr.map(function(value){
// //   return value * value
// // })
// // console.log(arr)
// // console.log(squ)



// function maap(arr){
//   debugger
//   var newarr=[]
//   for(var i=0; i<arr.length; i++){
//       var temp = arr[i] * arr[i]
//       newarr.push(temp)
//   }
// return newarr
// }
// console.log(maap(arr))

 




// var won=0
// var loss=0
// debugger
// for (var i=1;i<=5;i++){
//    var take = parseInt(prompt(`enter a number from 1 to 5:`));

// var number = Math.round(Math.random()*5)


// if(take == number){
//    console.log(`you have won  The number is  `+ number)
//    won++
// }else{
   
//    console.log(`you have lost. The number was  `+ number)
//    loss++
// }
// }
// document.write(` won time `+ won+`<br>`)
// document.write(` loss time `+ loss)



  var fak =document.querySelector(`.fak`)
function pica(){

    fak.innerHTML=`no no...i have to go for the salah`
}
function pic2(){
  
    fak.innerHTML=`yeah...i can give you atleast a kiss`
}


  var pic =document.getElementsByTagName(`image`)
function send(){
    pic.src="Screenshot_1.png"
}
function send2(){
    pic.src=`coll.jpg`
}