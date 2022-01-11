let id = String(prompt("User Account:"));
if (id == "Admin") {
    let pw = String(prompt("User password:"));
    if (pw == "cafedev") {
        alert(`Welcome!`);
    }
    else if (pw == "") {
        alert(`Canceled`);
    }
    else if (pw !== "cafedev") {
        alert(`Wrong password!`);
    }
}
else if (id == "") {
    alert(`Canceled`);
}
else if (id !== "Admin") {
    alert(`I don't know you!`);
}


