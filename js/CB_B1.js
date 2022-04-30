//*----------------------- Hiện 3 số tăng dần -----------------------*
/**
 * Input: inputNumber1, inputNumber2, inputNumber3, ketQua
 * 
 * Các bước xử lý:
 * B1: Khai báo biến
 * B2: Tìm tới thẻ bằng id
 * B3: Tạo hàm:
 * + Lấy giá trị từ form.
 * + Lập công thức kiểm tra:
 *    
 *    (a > b) yes => (b > c) yes => (c < b < a) 
 *    (a > b) yes => (b > c) no => (a > c) yes => (b < c < a)
 *    (a > b) yes => (b > c) no => (a > c) no => (b < a < c)
 *    
 *    (a > b) no => (a > c) yes => (c < a < b) 
 *    (a > b) no => (a > c) no => (a < c < b)
 *    
 *    (a > b) no => (b > c) no => (a < b < c)
 * + Hiển thị kết quả lên UI
 * B4: Gắn hàm vào sự kiện click
 * 
 * Output: hiện kết quả tăng dần
 * 
 */

  var num1 = document.getElementById("inputNumber1");
  var num2 = document.getElementById("inputNumber2");
  var num3 = document.getElementById("inputNumber3");
  var ketQua = 0;

function soTangDan(){
  var so1 = num1.value;
  var so2 = num2.value;
  var so3 = num3.value;
  

  if (so1 > so2) {
    if(so2 > so3){
      // console.log("num3 < num2 < num1");
      ketQua = so3 + " < " + so2 + " < " + so1;
    }else if(so1 > so3) {
      // console.log("num2 < num3 < num1");
      ketQua = so2 + " < " + so3 + " < " + so1;
    }else{
      // console.log("num2 < num1 < num3");
      ketQua = so2 + " < " + so1 + " < " + so3;
    }
  }else if(so2 > so3) {
    if(so1 > so3){
      // console.log("num3 < num1 < num2");
      ketQua = so3 + " < " + so1 + " < " + so2;
    }else{
      // console.log("num1 < num3 < num2");
      ketQua = so1 + " < " + so3 + " < " + so2;
    }
  }else{
    // console.log("num1 < num2 < num3");
     ketQua = so1 + " < " + so2 + " < " + so3;
  }

  document.getElementById("txtResult1").innerHTML = "Kết quả: <br>" + ketQua;
  // console.log(num1, num2, num3);
}
document.getElementById("btnCalc1").onclick = soTangDan;


