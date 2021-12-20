function setCookie(name, value){
    document.cookie = name +"="+ (value || "") +"; path=/";
}

function getCookie(name){
    let cookieList = document.cookie.split(";");
    for (let i = 0; i < cookieList.length; i++){
        var cookiePair = cookieList[i].split("=");

        if (name  == cookiePair[0].trim()){
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return false;
}