let u = document.getElementById("user").value;
let p1 = document.getElementById("password").value;
let sub = document.getElementById("submit");


if(u== "") {
alert("Vui lòng nhập tên!");
return false;
}
if(p1 == "") {
alert("Vui lòng nhập mật khẩu!");
return false;
}
if(p2 == "") {
alert("Vui lòng xác minh mật khẩu!");
return false;
}
    
alert("Xin hãy điền đúng thông tin!")
    
return true;










// let id = String(prompt("User Account:"));
// let pw = String(prompt("User password:"));
// function login(id, pw) {
//     if (id == "Admin") {
//         if (pw == "cafedev") {
//             alert(`Welcome to the world!`)
//         }
//         else if (pw !== "cafedev");
//             alert(`Wrong password!!!`);
//         }
//         else if (pw = null ) {
//             alert(`ĐÃ HỦY`);
//         }
//         else if (id == "" || "Ecs") {
//             alert(`Canceled`);
//         }
//         else if (id !== "Admin", "", "Ecs") {
//             alert(`I don't know you`);
//         }    
//     }


