console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count)
{
    for (i = 1; i <= count; i++)
    {
        if (count < 0)
        {
            count *= -1;
        }
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }

}
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
function checkAge(name, age)
{
    if (name == null)
    {
        let name = age;
    }
    let ofAgeMSG = `${name} is old enough to drive!`
    let notOfAgeMSG = `${name} is not old enough to drive`
    if (age < 16)
    {
        console.log(notOfAgeMSG);
    }
    else { console.log(ofAgeMSG); }

}
console.log("EXERCISE 2:\n==========\n");
function checkQuadrant(X, Y)
{
    if (X > 0 && Y > 0) {
        console.log("quadrant 1");
    }
    else if (X < 0 && Y > 0) {
        console.log("quadrant 2");
    }
    else if (X < 0 && Y < 0) {
        console.log("quadrant 3");
    }
    else if (X > 0 && Y < 0) {
        console.log("quadrant 4");
    }
    else if (X == 0 && Y == 0) {
        console.log("origin");
    }
    else if (X == 0) {
        console.log("Y axis");
    }
    else {console.log("X axis") }
}
function triangleValid(a, b, c)
{
    return a + b > c && b + c > a && c + a > b;
}
function triangleType(a, b, c)
{
    let isValid = triangleValid(a, b, c);
    if (isVald) {
        if (a == b && b == c) {
            console.log("Equilateral");
        }
        else if (a == b || b == c || a==c) {
            console.log("Isocalies")
        }
        else {console.log("Scalene") }
    }
    else console.log("Not a triangle")
}
function dataUseageFeedback(planLimit, day, usage)
{
    let period = 30;
    let currentAve = usage / day
    let projectedAve = planLimit / period
    let remainingData = planLimit - usage
    let remainingDays = period - day
    let statusMsg
    console.log(`${day} days used, ${remainingDays} days remaining`);
    console.log(`average daily use: ${currentAve} GB/Day`);
    if (currentAve > projectedAve) {
        statusMsg = "EXCEEDING"
    }
    else if (projectedAve > currentAve) {
        statusMsg = "UNDER"
    }
    else { statusMsg = "AT" }
    console.log(`you are ${statusMsg} your daily average use (${currentAve} GB/Day).
    continueing this usage you will end up using ${planLimit - (period * currentAve)} GB from your data limit`)
}