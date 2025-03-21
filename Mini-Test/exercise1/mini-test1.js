//Exercise 1
function getStringHasMaxLength(arr) {
  if (arr.length === 0) return [];

  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return arr.filter((str) => str.length === maxLength);
}
console.log("Mảng các chuỗi có độ dài lớn nhất");
console.log(getStringHasMaxLength(["aba", "aa", "ad", "c", "vcd"]));

//Exercise 2
users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

function filterUsers(users) {
  return users.filter((user) => user.age > 25 && user.isStatus === true);
}
function sortUsersByAge(users) {
  return [...users].sort((a, b) => a.age - b.age);
}
console.log("Users có age > 25 và isStatus = true:");
console.log(filterUsers(users));

console.log("Users sắp xếp theo age tăng dần:");
console.log(sortUsersByAge(users));

//Exercise 3
function getCountElement(arr) {
  const result = {};
  for (let element of arr) {
    if (result[element]) {
      result[element]++;
    } else {
      result[element] = 1;
    }
  }
  return result;
}
console.log("hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần");
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
