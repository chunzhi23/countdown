document.getElementById("addBtn")
.addEventListener("click", function(){
    let settings = document.getElementById("settings");
    if (settings.style.visibility == ''){
        settings.style.visibility = "unset";
    } else if (settings.style.visibility == "hidden"){
        settings.style.visibility = "unset";
    } else {
        settings.style.visibility = "hidden";
    }
});

document.getElementById("submit")
.addEventListener("click", function(){
    let date =  document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let gmt = document.getElementById("gmt").value;

    if (date == '' || time == '' || gmt == ''){
        alert("You must have to insert the value in all boxes.");
    } else {
        let target = new Date(date +"T"+ time);
        target.setHours(target.getHours() - gmt);
        
        setCookie("timestamp", target.getTime()/1000);
        setCookie("GMT", gmt);
        
        alert("All settings are successfully applied!");
        location.reload();
    }
});