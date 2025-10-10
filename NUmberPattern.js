let n = 5;

// number star

// 1st method

for (let i = 1; i <=n; i++) {
    let str = ""
    for (let j = 1; j <=i; j++) {        
        process.stdout.write(j +" ");
    }
    console.log()
    
}

 
// 2nd method

for (let i = 1; i <= n; i++) {
    let str = ""
    for (let j = 1; j <= i; j++) {
        str += j;
    }
    console.log(str)
}