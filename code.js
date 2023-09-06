let a = [1,2,3,4,5,6,7];

function sum(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

b = sum(a);
console.log(a);
