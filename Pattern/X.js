let n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        (i == j || i + j == n + 1) ? process.stdout.write('* ')
            : process.stdout.write(' ');;
    }
    console.log();
    
}