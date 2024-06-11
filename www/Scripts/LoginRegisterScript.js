function encryptPassword(password) {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    return hashedPassword;
}

function Login() {
    var log = document.getElementById("log");
    log.innerHTML = "";
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var encryptedPassword = encryptPassword(password);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            if (xhttp.status == 200){
                log.innerHTML = "Redirecting to game page in 2 seconds.";
                setTimeout(() => {
                    window.location.href = "/game";
                }, 2000)
            } else {
                log.innerHTML = data.log;
            }
        }
    };

    var data = {
        "username": username,
        "password": encryptedPassword
    }

    xhttp.open("POST", "/Account/Login", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
}

function Register() {
    var message = document.getElementById("Message");
    message.innerHTML = "";
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var password2 = document.getElementById("Password2").value;

    var encryptedPassword = encryptPassword(password);
    var encryptedPassword2 = encryptPassword(password2);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            if (xhttp.status == 200){
                message.innerHTML = data.log;
                message.innerHTML += "<br>Redirecting to login page in 5 seconds";
                setTimeout(() => {
                    window.location.replace("../login.html");
                }, 5000)
            } else {
                message.innerHTML = data.log;
                message.style.color = "red";
            }
        }
    };

    var data = {
        "username": username,
        "password": encryptedPassword,
        "password2": encryptedPassword2
    }

    xhttp.open("POST", "Account/Register", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
}