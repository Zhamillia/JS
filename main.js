// const users = [
//   {
//     name: "Rustam",
//     age: 18,
//     password: "12345",
//     isLogin: "rustam_05",
//   },
//   {
//     name: "Aizat",
//     age: 21,
//     password: "67890",
//     isLogin: "_aizat_01",
//   },
//   {
//     name: "Kanykei",
//     age: 20,
//     password: "54321",
//     isLogin: "kani",
//   },
// ];

// let newUser = {
//   age: null,
//   name: null,
//   password: null,
//   isLogin: false,
// };
// const userName = prompt("");

// newUser.name = userName;

// function registerUser() {
//   const { age, name, password } = newUser;
//   if (age !== null || name !== null || password !== null) {
//     const findUser = users.find(item => item.name === newUser.name);
//     if (findUser) return alert("Error");
//     users.push(newUser);
//   }
// }
// function isLoginUser() {}

const users = [
  {
    name: "Rustam",
    age: 19,
    password: "13579",
    isLogin: true,
  },
  {
    name: "Aizat",
    age: 20,
    password: "Salam",
    isLogin: true,
  },
  {
    name: "Kanykei",
    age: 19,
    password: "what",
    isLogin: true,
  },
];

let newUser = {
  name: null,
  age: null,
  password: null,
  isLogin: false,
};

let accountConfirm = function () {
  let answer = confirm("do you have an account?");
  if (answer) {
    login();
  } else {
    registerUser();
  }
};
accountConfirm();
let userName = prompt("name");
let userAge = prompt("age");
let userPassword = prompt("password");
let checkPassword = prompt("Введите пароль еще раз");
if (checkPassword != userPassword) {
  let checkPassword = prompt("Введите пароль еще раз");
}

newUser.name = userName;
newUser.age = userAge;
newUser.password = userPassword;

function registerUser() {
  let { age, name, password } = newUser;
  if (age !== null && name !== null && password !== null) {
    const checkUniqueUsername = users.find(item => item.name === newUser.name);
    if (checkUniqueUsername) return alert("Такое имя пользователя уже есть");
    users.push(newUser);
  }
}
function checkRegister() {
  const checkLogin = users.find(item => item.name === newUser.name);
  if (checkLogin) newUser.isLogin = true;
}
function edit() {
  let passwordForEdit = prompt("enter password");
  if (passwordForEdit == password) {
    let changingData = prompt("What do yo want change?");
    for (let i in users) {
      if (changingData == i) {
        let newData = prompt("the chanched one");
        users.i = newData;
      }
    }
  }
}
registerUser();
checkRegister();
console.log(newUser);
console.log(users);
