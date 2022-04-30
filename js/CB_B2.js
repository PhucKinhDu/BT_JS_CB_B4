//*----------------------- Chào hỏi Gia Đình -----------------------*
/**
 * Input: inputName
 * 
 * Các bước xử lý:
 * B1: Tìm thẻ bằng id
 * B2: Tạo hàm:
 *      + Lấy giá trị từ form
 *      + Lập công thức kiểm tra
 *          Bố = "Xin Chào Bố!"
 *          Mẹ = "Xin Chào Mẹ!"
 *          Anh Trai = "Xin Chào Anh Trai!"
 *          Em Gái = "Xin Chào Em Gái!"
 *      + Hiện lời chào lên UI
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: Hiện lời chào lên UI
 * 
 */

var inputName = document.getElementById("selectName");
var content = "";

function tenThanhVien() {
  var thanhVien = inputName.value;
  // console.log(thanhVien);

  switch (thanhVien) {
    case "B":
      // console.log("Bố");
      content = "Bố Ạ!";
      break;
    case "M":
      // console.log("Mẹ");
      content = "Mẹ Ạ!";
      break;
    case "A":
      // console.log("Anh Trai");
      content = "Anh Trai!";
      break;
    case "E":
      // console.log("Em Gái");
      content = "Em Gái!";
      break;
    default:
      // console.log("Chưa chọn thành viên!")
      content = "Người Lạ Ơi!"
      break;
  }
  
  document.getElementById("txtResult2").innerHTML = "Xin Chào " + content;

}
document.getElementById("btnCalc2").onclick = tenThanhVien;











