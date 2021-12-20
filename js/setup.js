const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

if (getCookie("timestamp")){
    let timestamp = parseInt(getCookie("timestamp"));
    let GMT = parseInt(getCookie("GMT"));

    let interval = setInterval(() => {
        let date = new Date();
        let target = new Date(timestamp * 1000)
        target.setHours(date.getHours() + GMT-3);

        var diff = target.getTime() - date.getTime();
        var parse_diff = diff / (24 * 60 * 60 * 1000);

        days.innerHTML = Math.floor(parse_diff);
        parse_diff = parse_diff%1*24;
        
        hours.innerHTML = ('0'+ (Math.floor(parse_diff))).slice(-2);
        parse_diff = parse_diff%1*60;
        
        mins.innerHTML = ('0'+ Math.floor(parse_diff)).slice(-2);
        parse_diff = parse_diff%1*60;
        
        secs.innerHTML = ('0'+ Math.floor(parse_diff)).slice(-2);
    }, 1000);
} else {
    
}