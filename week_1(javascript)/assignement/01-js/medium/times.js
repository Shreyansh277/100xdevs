/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function Sum(n)
{
    let sum = 0;

    for(let i=1;i<=n;i++)
    {
        sum += i;
    }
    return sum;
}



function calculateTime(n) {
    

    // let date = new Date();
    let startTime =  new Date().getTime() ;
    Sum(100);
    let endTime = new Date().getTime();
    
    let time = endTime-startTime;

    console.log(" timetaken " +time);

    // let date = new Date();
     startTime =  new Date().getTime() ;
    Sum(100000000);
     endTime = new Date().getTime();
    
     time = endTime-startTime;

    console.log(" timetaken " +time);


    //  date = new Date();
     startTime =  new Date().getTime() ;
    Sum(10000000000);
     endTime = new Date().getTime();
    
     time = endTime-startTime;

    console.log(" timetaken " +time);
}

calculateTime();