var A = 0;
var B = 0;
var C = 0;
var dt_1 = 0;
var dt_2 = 0;
var dt_3 = 0;

var less1 = document.getElementById("less1");
var less2 = document.getElementById("less2");
var less3 = document.getElementById("less3");

document.querySelector("button").onclick = function () {
    var less1 = parseFloat(document.getElementById("less1").value);
    var less2 = parseFloat(document.getElementById("less2").value);
    var less3 = parseFloat(document.getElementById("less3").value);
    var diemChuan = parseFloat(document.getElementById("diemChuan").value);

    var x = document.getElementById("mySelect");
    if (x.value == 'A') {
        A = 2;
        B = 0;
        C = 0;
    } else if (x.value == 'B') {
        B = 1;
        A = 0;
        C = 0;
    } else if (x.value == 'C') {
        C = 0.5;
        B = 0;
        A = 0;
    } else {
        A = 0;
        B = 0;
        C = 0;
    }

    var y = document.getElementById("mySelect2");
    if (y.value == 1) {
        dt_1 = 2.5;
        dt_2 = 0;
        dt_3 = 0;
    } else if (y.value == 2) {
        dt_2 = 1.5;
        dt_1 = 0;
        dt_3 = 0;
    } else if (y.value == 3) {
        dt_3 = 1;
        dt_1 = 0;
        dt_2 = 0;
    } else {
        dt_1 = 0;
        dt_2 = 0;
        dt_3 = 0;
    }


    var total = less1 + less2 + less3 + A + B + C + dt_1 + dt_2 + dt_3;
    if (less1 == 0 || less2 == 0 || less3 ==0) {
        console.log("liet");
        var title = "Rớt , do có điểm nhỏ hơn hoặc bằng 0";
    } else if(total > 0 && total < diemChuan) {
        console.log("rớt" , total);
        var title = `Rớt , tổng điểm : ${total} thấp hơn điểm chuẩn`;
    } else if (total > 0 && total >= diemChuan) {
        console.log("Dau" ,  total)
        var title = `Đậu , tổng điểm : ${total}`;
    } else {
        var title = `Vui lòng nhập đầy đủ thông tin`;
    }

    document.getElementById("txt").style.display = "block";
    document.getElementById("txt").classList.remove("text-danger");
    document.getElementById("txt").innerHTML = title;
}

