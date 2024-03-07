// index.js

// Hàm tính phép chia lấy phần dư của hai số
function moduloDivision(dividend, divisor) {
    return dividend % divisor;
  }
  
  // Nhận giá trị từ dòng lệnh
  const args = process.argv.slice(2);
  const dividend = parseFloat(args[0]);
  const divisor = parseFloat(args[1]);
  
  // Kiểm tra xem đầu vào có hợp lệ không
  if (isNaN(dividend) || isNaN(divisor)) {
    console.log('Vui lòng nhập hai số hợp lệ.');
  } else {
    // Tính phép chia lấy phần dư và hiển thị kết quả
    const result = moduloDivision(dividend, divisor);
    console.log(`Phép chia lấy phần dư của ${dividend} và ${divisor} là: ${result}`);
  }
  