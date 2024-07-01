## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



















































function counter(value) {

    // console.log(value);
    setTimeout(function cb(){console.log(value); counter(value+1);}, 1000);
    // console.log("k");
    
}

counter(0);




















(Hint: setTimeout)