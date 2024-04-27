for (let i = 0; i < 10; i++) {
    let element = i;
    // if (element===5) console.log("5 Is Best Number");
    // console.log(element);
}
for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loope ${j} and Inner Loope ${i}`);
        // console.table(i + "*" + j + "=" + (i * j))
    }
}

let myArr = ["ironman", "batman", "superman"];
let len = myArr.length;
for (let index = 0; index < len; index++) {
    const element = myArr[index];
    // console.log(element);
}

// Break and Continue
for (let index = 0; index <= 20; index++) {
    if (index===5) {
        console.log(`detect 5`);
        break;// When 5 is detect the loop is automatically stop.
    }
    console.log(`value of index ${index}`);
    
}
// Continue
for (let index = 0; index <= 20; index++) {
    if (index===5) {
        // console.log(`detect 5`);
        continue;//When continue is encountered, the remaining code inside the loop for the current iteration is skipped, and the loop proceeds to the next iteration.
    }
    console.log(`value of index ${index}`);
    
}
