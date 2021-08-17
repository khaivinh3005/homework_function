
/**
 * Inputs:
 * Số kw điện nhập vào
 * 
 * Thực hiện:
 * 50kw đầu : 500d/kw
 * 50kw tiếp theo : 650d/kw
 * 100kw tiếp theo: 850d/kw
 * 150kw tiếp theo: 1100d/kw
 * còn lại 1300d/kw
 * 
 * 
 * Outputs:
 * Tính tiền điện
 */
document.getElementById("btn").onclick = tinhTienDien;
var kw_50 = 500;
var kw51_100 = 650;
var kw101_200 = 850;
var kw201_350 = 1100;
var kw_351 = 1300;

function tinhTienDien() {
    var input = parseFloat(document.getElementById("input").value);
    var txt = document.getElementById("txt");
    txt.classList.add("alert" , "alert-primary" ,"mt-2")
    console.log(txt);
    var total = 0;
    var title = '';
    if(input > 0 && input <= 50) {
        total = input * kw_50;     
    } else if(input > 50 && input <= 100) {
        total = 50*kw_50 + (input - 50)*kw51_100;
    } else if(input > 100 && input <= 200) {
        total = 50*kw_50 + 50*kw51_100 + (input-100)*kw101_200;
        console.log(total);
    } else if(input > 200 && input <= 350) {
        total = 50*kw_50 + 50*kw51_100 + 100*kw101_200 + (input - 200)*kw201_350;
    } else if(input > 350) {
        total = 50*kw_50 + 50*kw51_100 + 100*kw101_200 + 150*kw201_350 + (input - 350)*kw_351;
    } else {
        alert("vui long nhap lai");
        window.location.reload();
    }
    txt.innerHTML = total;
}