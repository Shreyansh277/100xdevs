
let s=0,m=0,h=0;


function clock()
{



    setInterval(function cb(){
       console.log(h,m,s);
       s++;
       m+= parseInt(s/60);
       s%=60;
       h+=parseInt(m/60);
       h%=12;

    },100);

}

clock();