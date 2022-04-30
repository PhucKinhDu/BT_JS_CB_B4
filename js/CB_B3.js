// *----------------------- Đếm Số Lẻ Số Chẵn -----------------------*
/**
 * Input:
 * num1, num2, num3, soChan, soLe, soDu
 * 
 * Các bước xử lý:
 * B1: Khai báo và tìm thẻ bằng id
 * B2: Tạo hàm:
 *     + Lấy giá trị từ form
 *     + Lập công thức kiểm tra
 *        Nếu % 2 = số chẵn => (count = count + 1)
 *        Ngược lại = số lẽ => (count = count + 1)
 *        Kết quả = 3 - (tổng số chẵn) = (só lẻ)
 *     + Hiện kết quả lên UI
 * B3: Gắn hàm vào sự kiện click
 * Output:
 *  Hiện kết quả.
 */

//Cách 1: Toán tử 3 ngôi

// var num1 = document.getElementById("inputNumb1");
// var num2 = document.getElementById("inputNumb2");
// var num3 = document.getElementById("inputNumb3");
// var soChan = 0;
// var soLe = 0;

// function soChanLe(){
//   var so1 = num1.value;
//   var so2 = num2.value;
//   var so3 = num3.value;

//   so1 % 2 == 0 ? soChan++ : soLe++;
//   so2 % 2 == 0 ? soChan++ : soLe++;
//   so3 % 2 == 0 ? soChan++ : soLe++;

//   document.getElementById('txtResult3').innerHTML = "Tổng số chẵn : " + soChan + "<br>" + "Tổng số lẻ : " + soLe;

// }
// document.getElementById('btnCalc3').onclick = soChanLe;



// ----------------------------------------------------------------
// Cách 2: If-Else

var num1 = document.getElementById("inputNumb1");
var num2 = document.getElementById("inputNumb2");
var num3 = document.getElementById("inputNumb3");
var outPut1 = '';
var outPut2 = '';
var outPut3 = '';

function soChanLe(){

  var soChan = 0;
  var soLe = 0;
  var ketQua1 = '';
  var ketQua2 = '';
  var ketQua3 = '';

  var so1 = num1.value;
  var so2 = num2.value;
  var so3 = num3.value;

  if(so1 % 2 == 0){
    ketQua1 = 'so chan';
    ++soChan
  }else{
    ketQua1 = 'so le';
    ++soLe
  }
  if(so2 % 2 == 0){
    ketQua2 = 'so chan';
    ++soChan
  }else{
    ketQua2 = 'so le';
    ++soLe
  }
  if(so3 % 2 == 0){
    ketQua3 = 'so chan';
    ++soChan
  }else{
    ketQua3 = 'so le';
    ++soLe
  }

  // console.log(so1, so2, so3);
  // console.log(soChan, soLe);

  // document.getElementById('txtResult3').innerHTML = 'So thu nhat : la ' + ketQua1 + '<br>' + 'So thu hai : la ' + ketQua2 + '<br>' + 'So thu ba : la ' + ketQua3;
  
  document.getElementById('txtResult3').innerHTML = 'Tổng số chẵn : ' + soChan + '<br>' + 'Tổng số lẻ : ' + soLe;

}
document.getElementById('btnCalc3').onclick = soChanLe;















