let n = 5;

for (let i = 1; i <= n; i++) {

    //inverted triangle
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(' ');
    }

    //right
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
    }

    console.log();

}