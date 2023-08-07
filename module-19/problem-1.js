function result(bangla, english, math){
    const sum = bangla + english + math;
    const average = sum / 3;
    const avgValue = average.toFixed(2);
    console.log(avgValue)
    return avgValue;   
}

result(52, 80, 100);




// function foo(){
//     console.log('foo');
// }

// foo();

// function bar(){
//     console.log('bar');
// }
// bar();