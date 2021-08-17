/**
 * Inputs:
 * Họ tên,
 * tổng thu nhập,
 * số người phụ thuộc
 * 
 * Thực hiện:
 * Tạo biến : tongThuNhap , nguoiPhuThuoc , thueCaNhan , phanTramThue;
 * Từ 1->60tr : phanTramThue = 5%
 * Từ 60->120tr : phanTramThue = 10%
 * Từ 120->210tr : phanTramThue = 15%
 * Từ 210->384tr : phanTramThue = 20%
 * Từ 384->624tr : phanTramThue = 20%
 * Từ 624->960tr : phanTramThue = 30%
 * >960tr : phanTramThue = 35%
 * 
 * 
 * Outputs:
 * Tiền thuế thu nhập cá nhân
 * 2.720 
 */

document.querySelector("button").onclick = function () {
    var inputName = document.getElementById("inputName").value;
    var inputThuNhap = parseFloat(document.getElementById("inputThuNhap").value);
    var inputNguoi = parseInt(document.getElementById("inputNguoi").value);
    var thuNhapChiuThue = inputThuNhap - (4e+6) - (inputNguoi * (1.6e+6));
    var thuNhapCaNhan = 0;
    var phanTramThue = 0;
    const NUMBERFORMAT = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' });
    if (thuNhapChiuThue > 0 && thuNhapChiuThue <= (60e+6)) {
        phanTramThue = 5;
        thuNhapCaNhan = thuNhapChiuThue * (phanTramThue) / 100;
    } else if (thuNhapChiuThue > (60e+6) && thuNhapChiuThue <= (120e+6)) {
        phanTramThue = 10;
        thuNhapCaNhan = thuNhapChiuThue * (phanTramThue) / 100;
    } else if (thuNhapChiuThue > (120e+6) && thuNhapChiuThue <= (210e+6)) {
        phanTramThue = 15;
        thuNhapCaNhan = thuNhapChiuThue * (phanTramThue) / 100;
    } else if (thuNhapChiuThue > (210e+6) && thuNhapChiuThue <= (384e+6)) {
        phanTramThue = 20;
        thuNhapCaNhan = thuNhapChiuThue * (phanTramThue) / 100;
    } else if (thuNhapChiuThue > (384e+6) && thuNhapChiuThue <= (624e+6)) {
        phanTramThue = 25;
        thuNhapCaNhan = thuNhapChiuThue * (phanTramThue) / 100;
    } else if (thuNhapChiuThue > (624e+6) && thuNhapChiuThue <= (960e+6)) {
        phanTramThue = 30;
        thuNhapCaNhan = thuNhapChiuThue * (phanTramThue) / 100;
    } else if (thuNhapChiuThue > (960e+6)) {
        phanTramThue = 35;
        thuNhapCaNhan = thuNhapChiuThue * (phanTramThue) / 100;
    } else if (!thuNhapChiuThue || !inputNguoi || inputThuNhap <= (6e+6) ) {
        alert("vui lòng điền đủ thông tin và hợp lệ")
    } 
    
    var total = NUMBERFORMAT.format(thuNhapCaNhan);
    document.getElementById("txt").style.display = "block";
    document.getElementById("txt").innerHTML = `Họ tên : ${inputName} ,
    Tiền thuế thu nhập cá nhân : ${total}`;

}