function centimeterToMeter(sentimeter){
    let meter = sentimeter/100;
    return meter;
}

// result = result.toFixed(3);
const result = centimeterToMeter(10);
console.log('sentimeter to meter: ', result);