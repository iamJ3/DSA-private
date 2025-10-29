let n = 5;


// 1st method
for (let i = 1; i <= n; i++) {
  let ch = 65;
  for (let j = 1; j <=i; j++) {
    let ascii = String.fromCharCode(ch)
    process.stdout.write(ascii.trim()+' ');
    ch++;
  }
  console.log();

}


for (let i = 1; i <= n; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(64 + j)+ " ";
    }
    console.log(row.trim());

}