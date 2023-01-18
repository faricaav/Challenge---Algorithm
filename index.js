console.log('CHALLENGE #1 - ALGORITHM');
(function() {
    for (var a = 1; a <= 5; a++) {
        process.stdout.write(`${a} `);
    }

    console.log('\n')
    for (var b = 1; b <= 10; b++) {
        if (b % 2 === 0) {
            process.stdout.write(`${b} `);
        }
    }

    console.log('\n')
    for (var c = 3; c <= 15; c+=3) {
        process.stdout.write(`${c} `);
    }

    console.log('\n')
    for (var d = 4; d <= 20; d+=4) {
        process.stdout.write(`${d} `);
    }
    
    console.log('\n')
    for (var e = 5; e <= 25; e+=5) {
        process.stdout.write(`${e} `);
    }
})()