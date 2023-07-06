// Hoisting is a consept where you can also access the part of the coad even without declaring it 
// this is because a context of memory execution
// as js uses a memory and coad method to execute


// for eg if this is a normal coad will run as it is 

// var a = 5;

// function hello(){
//     console.log("hiii")
// }

// hello();
// console.log(a)





// but if we do this way it will seen different output

// hello();
// console.log(a)

// var a = 5;

// function hello(){
//     console.log("hiii")
// }

// hear hello and a is called before it asign any value but still we didn't get any error
// as JS uses memory execution method and asign var in memory before even program runs as undefined
// and hello as it is a function it will give it's value wanever we call again because of memory excution method  



// but in this case we have used arrow function instade of normal function
// then it will not display tae same as arrow function is indirectly a var


console.log(a)

var a = 5;

 hello=()=>{
    console.log("hiii")
}
