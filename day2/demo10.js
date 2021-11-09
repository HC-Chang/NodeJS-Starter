// try catch

function oops() {
    // type1
    //throw new Error("something strange happen")
    
    // type2
    //throw new TypeError("haha type error")
    
    // type3
    throw new RangeError("some range error")
}

console.log("begin something that might have exception")
try {

    oops()
} catch (e) {
    console.log('something error happen, reason:', e.toString())
    console.log(typeof e)
    if (e instanceof TypeError) {
        console.log("something type error")
    } else if (e instanceof RangeError) {
        console.log("range error...")
    } else {
        console.log("other error")
    }
} finally {
    console.log("no matter what, this line will run")
}
//oops()
console.log("end of oops")