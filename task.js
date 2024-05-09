// ================bubble sort=======================


// let arr = [8,9,7,4,6,2,5,56]


// for(let i = 0;i<arr.length;i++){
//     let swap=false;
//     for(let j = 0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//             swap=true;
//             let temp = arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);


// =========================secltion sort===============================

// let arr = [8, 2, 6, 7, 9, 8, 5]


// for (let i = 0; i < arr.length; i++) {
//     mid = i;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[mid] > arr[j]) {

//             mid = j;
//         }
//     }
//     if (i != mid) {
//         temp = arr[i]
//         arr[i] = arr[mid]
//         arr[mid] = temp;
//     }
// }
// console.log(arr);



//==========================queue===========================






// class queue {
//     constructor() {
//         this.queue = []
//         this.size = 5;
//     }
//     insert(element){
//         if(this.queue.length<this.size){
//             this.queue.push(element)
//         }
//     }
//     remove(){
//         if(this.queue.length!=0){
//             for(let i = 0;i<this.queue.length;i++){
//                 if(this.queue[0]!=this.queue[i]){
//                     console.log(this.queue[i]);
//                 }
//             }
//         }
//     }
//     travel(){
//         this.queue.map((val,ind)=>{
//             console.log(val);
//         })
//     }
//     firstele(){
//         if(this.queue.length !=0){
//             console.log("first element",this.queue[0]);
//         }
//     }
//     lastele(){
//         if(this.queue.length !=0){
//             console.log("last element",this.queue[this.queue.length-1]);
//         }
//     }
//     lastsecondele(){
//         if(this.queue.length !=0){
//             console.log("last second element",this.queue[this.queue.length-2]);
//         }
//     }
// }

// let q1=new queue()
// q1.insert(1)
// q1.insert(2)
// q1.insert(3)
// q1.insert(4)
// q1.insert(5)

// q1.remove()
// q1.travel()
// q1.firstele()
// q1.lastele()
// q1.lastsecondele()


// ==================================================


// binery sore
let arr = [1, 2, 3, 4, 5, 6]

let serch = (arr, element, strat, end) => {
    let mid = (strat + end) / 2;

    if (arr[mid] === element) {
        return mid;
    }
    else if (arr[mid] < element) {
        return serch(arr, element, strat, mid - 1)
    }
    else {
        return serch(arr, element, mid + 1, end)
    }
}
let res = serch(arr, 3, 0, arr.length - 1)
console.log(res);





