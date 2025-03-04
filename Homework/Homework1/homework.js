// Bài 1: Tính giai thừa của một số nguyên dương
function calculateFactorial(n) {
  if (n < 0) return "Số phải là số nguyên dương!";
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(calculateFactorial(5)); // 120

// Bài 2: Đảo ngược chuỗi
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // 'olleh'

// Bài 3: Dịch lời chào theo mã quốc gia
function translate(countryCode) {
  switch (countryCode) {
    case "VN":
      return "Xin chào";
    case "EN":
      return "Hello";
    case "FR":
      return "Bonjour";
    case "JP":
      return "こんにちは";
    default:
      return "Không tìm thấy lời chào!";
  }
}

console.log(translate("VN")); // "Xin chào"
console.log(translate("EN")); // "Hello"
console.log(translate("FR")); // "Bonjour"

// Bài 4: Cắt chuỗi dài hơn 15 ký tự
function subString(str) {
  return str.length > 15 ? str.slice(0, 10) + "..." : str;
}

console.log(subString("Techmaster"));
console.log(subString("Techmaster homework 1"));
