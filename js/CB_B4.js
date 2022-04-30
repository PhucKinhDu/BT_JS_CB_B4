// *----------------------- Đoán Hình Tam Giác -----------------------*
/**
 * Input: edge1, edge2, edge3
 * 
 * Các bước xử lý:
 *   B1: Khai báo và tìm thẻ bằng id
 *   B2: Tạo hàm:
 *     - Lấy giá trị từ form
 *     - Lập công thức kiểm tra:
 *      * Kiểm tra 3 cạnh có phải là 1 Tam Giác?
 *        + Tổng 2 cạnh bất kỳ phải lớn hơn cạnh còn lại
 *          (a+b > c) && (a+c > b) && (b+c > a) = > đây là 1 tam giác
 * 
 *        + Nếu (a*a == b*b + c*c) || (b*b == a*a + c*c) || (c*c == a*a + b*b) => Tam giác vuông
 *        + Nếu (a==b) && (b==c) => Tam giác đều
 *        + Nếu (a==b) || (b==c) || (c==a) => Tam giác cân
 * 
 *     - Hiện kết quả lên UI
 *   B3: Gắn hàm vào sự kiện click    
 * Output: Hiện kết quả
 */

var edge1 = document.getElementById("inputEdge1");
var edge2 = document.getElementById("inputEdge2");
var edge3 = document.getElementById("inputEdge3");

function tinhTamGiac() {
  
  var a = edge1.value;
  var b = edge2.value;
  var c = edge3.value;
  var ketQua = '';

  // if((a+b>c) || (a+c>b) || (b+c>a)){
  //   if((a*a == b*b + c*c) || (b*b == a*a + c*c) || (c*c == a*a + b*b)){
  //     ketQua = 'Tam Giác Vuông';
  //   }else if((a==b) && (b==c)){
  //     ketQua = 'Tam Giác Đều';
  //   }else if((a==b) || (b==c) || (c==a)){
  //     ketQua = 'Tam Giác Cân';
  //   }else{
  //     ketQua = 'Tam Giác Thường';
  //   }
  // }else{
  //   ketQua = 'Đây không phải là Tam Giác';
  // }

  if((a*a == b*b + c*c) || (b*b == a*a + c*c) || (c*c == a*a + b*b)){
    ketQua = 'Tam Giác Vuông';
  }else if((a==b) && (b==c)){
    ketQua = 'Tam Giác Đều';
  }else if((a==b) || (b==c) || (c==a)){
    ketQua = 'Tam Giác Cân';
  }else{
    ketQua = 'Tam Giác Khác';
  }

  document.getElementById('txtResult4').innerHTML = 'Kết quả : ' + ketQua;
}
document.getElementById('btnCalc4').onclick = tinhTamGiac;
