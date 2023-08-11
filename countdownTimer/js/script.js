const days=$('#days');
const hours=$('#hours');
const minutes=$('#minutes');
const seconds=$('#seconds');
/* 
1 day-24 hours
1 hour-60 minutes
1 minutes-60 seconds
1 seconds - 1000 ms
*/
function daysToGo(){
const currentYearDate=new Date();
const currentYear=new Date().getFullYear();
const newYearDate=new Date(`January 01 ${currentYear+1} 00:00:00`);
const balance=newYearDate-currentYearDate;
const  daysLeft=Math.floor((balance/1000/60/60/24));
const  hoursLeft=Math.floor((balance/1000/60/60)%24);
const  minutesLeft=Math.floor((balance/1000/60)%60);
const  secondsLeft=Math.floor((balance/1000)%60);

// const daysLeft = Math.floor(balance / (1000 * 60 * 60 * 24));
// const hoursLeft = Math.floor((balance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const minutesLeft = Math.floor((balance % (1000 * 60 * 60)) / (1000 * 60));
// const secondsLeft = Math.floor((balance % (1000 * 60)) / 1000);

days.html(daysLeft < 10 ? `0${daysLeft}` : daysLeft);
hours.html(hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft);
minutes.html(minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft);
seconds.html(secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft);

// days.html(Math.floor(daysLeft)<10?`0${daysLeft}`:`${daysLeft}`);
// hours.html('23');
// minutes.html('23');
// seconds.html('23');
}
setInterval(daysToGo,1000)