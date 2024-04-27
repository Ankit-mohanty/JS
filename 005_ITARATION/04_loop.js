const myObj={
    jd:"javaSctipt",
    java:"java",
    swift:"swift in Appple"
};
for (const key in myObj) {
    // console.log(key);//it only return the keys.
    console.log(`${key} shortcut for ${myObj[key]}`);//output
    /* jd shortcut for javaSctipt
java shortcut for java
swift shortcut for swift in Appple */ 
}

const arr=["apple","banana","cherry"];
for (const key in arr) {
//    console.log(`${key} :::::::::${arr[key]}`);//output
   /* 0 :::::::::apple
1 :::::::::banana
2 :::::::::cherry */
console.log(arr[key]);
/* Output:apple
banana
cherry*/
}

// note we can use to forIn loop in map.