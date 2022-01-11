
// Bài 4 Check tuổi: 
function idBai4() {
    let username = prompt("Please input your user name:");
    checkUser(username);
}

function checkUser(username) {
    if (username == "" || username == null) {
        alert(`Canceled!`)   
    } else if (username != "Admin") {
        alert(`Tôi không biết bạn!`);
    } else {
        let password = prompt("Please input your password:");
        checkPass(password);
    }
}

function checkPass(password) {
    if (password == "" || password == null) {
        alert(`Đã hủy!`);
    } else if (password != "cafedev") {
        alert(`Mật khẩu sai!`);
    } else {
        alert(`Chào mừng!`);
    }
}

// Bài 1 Toán tử dấu chấm hỏi
function checkAge() {
    let age = prompt("How old are you?");
    let question = age >= 18 ? 'Passed' : 'Did parents allow you?';
    alert(question);
}

// Bài 1 Toán tử OR
function checkAge2() {
    let age = prompt("How old are you?");
    let question2 = (age >= 18) || 'Did parents allow you?';
    alert (question2);
}
// Bài 2 Tìm Min a, b
function idBai2() {
    let a = prompt("Please input number a:");
    let b = prompt("Please input number b:");
    if (a - b < 0) {
        alert(`Min là ${a}`);
    } else if (a - b > 0) {
        alert(`Min là ${b}`);
    } else {
        alert(`Hai số bằng nhau`);
    }
}