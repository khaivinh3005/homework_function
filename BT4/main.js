function myFunction() {
    var x = document.getElementById("mySelect");
    var inputKN = document.querySelector(".inputKN");
    if (x.value == "DN") {
        inputKN.classList.add("myStyle");
    } else {
        inputKN.classList.remove("myStyle");

    }

}



const ND_HD = 4.5;
const ND_DV = 20.5;
const ND_KENH = 7.5;

const DN_HD = 15;
const DN_DV = 75;
const DN_KENH = 50;

document.querySelector("button").onclick = function () {
    var input = document.getElementById("mySelect").value;
    var inputMAKH = document.getElementById("inputMAKH").value;
    var inputKENH = parseInt(document.getElementById("inputKENH").value);
    var inputKN = parseInt(document.querySelector(".inputKN").value);
    var tienCap = 0;
    if (input == 'ND') {
        if (inputKENH > 0) {
            tienCap = ND_HD + ND_DV + (inputKENH * ND_KENH);
        } else {
            tienCap = ND_HD + ND_DV;
        }
    } else if (input == 'DN') {
        if (inputKN > 10) {
            tienCap = DN_HD + DN_DV + (inputKENH * DN_KENH) + ((inputKN - 10) * 5);
        } else {
            tienCap = DN_HD + DN_DV + (inputKENH * DN_KENH);
        }
    } else {
        alert("vui lòng nhập đầy đủ thông tin");
    }
    const FORMAT = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' });
    
    if(inputMAKH == "") {
        document.getElementById("txt").style.display = "block";
        document.getElementById("txt").classList.add("border" , "border-danger" , "text-danger");
        document.getElementById("txt").innerHTML = `vui lòng nhập mã khách hàng`;
    } else {
        document.getElementById("txt").style.display = "block";
        document.getElementById("txt").classList.remove("border" , "border-danger" , "text-danger");
    document.getElementById("txt").innerHTML = `MÃ KHÁCH HÀNG: ${inputMAKH} , TIỀN CÁP: ${FORMAT.format(tienCap)}`;
    }
}