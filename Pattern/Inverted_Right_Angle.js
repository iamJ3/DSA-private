let n = 5;

// 1st way

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write('* ');
    };
    console.log();

}

// 2nd way
for (let i = 1; i <= n; i++) {
    let str = ''
    for (let j = 1; j <= n - i + 1; j++) {
        str += '* '
    };
    console.log(str);
}

//3rd way
for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
        process.stdout.write('* ');
    };
    console.log();

}