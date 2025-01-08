// function scopeTest() {
//     if (true) {
//         var testVar = 'var variable';
//         let blockVar = 'let variable';
//         const blockConst = 'const variable';
//     }

//     console.log(testVar);
//     console.log(blockVar);
//     console.log(blockConst);
// }

// scopeTest();

function scopeTest1() {
    if (true) {
        var testVar = 'var variable';
        let blockVar = 'let variable';
        const blockConst = 'const variable';
        console.log(blockVar);
        console.log(blockConst);
    }

    console.log(testVar);
}

scopeTest1();

function scopeTest2() {
    if (true) {
        var testVar = 'var variable';
        var blockVar = 'let variable';
        var blockConst = 'const variable';
    }

    console.log(testVar);
    console.log(blockVar);
    console.log(blockConst);
}

scopeTest2();
