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
        target.setHours(target.getHours() + GMT);

        var diff = target.getTime() - date.getTime();
        var parse_diff = diff / (24 * 60 * 60 * 1000);

        var day = Math.floor(parse_diff);
        days.innerHTML = day < 0 ? '+'+ Math.abs(day) : day;
        parse_diff = parse_diff%1*24;
        
        var hour = Math.floor(parse_diff)
        hours.innerHTML = ('0'+ (Math.abs(hour))).slice(-2);
        parse_diff = parse_diff%1*60;
        
        var min = Math.floor(parse_diff)
        mins.innerHTML = ('0'+ Math.abs(min)).slice(-2);
        parse_diff = parse_diff%1*60;
        
        var sec = Math.floor(parse_diff)
        secs.innerHTML = ('0'+ Math.abs(sec)).slice(-2);
    }, 1000);
} else {
    
}