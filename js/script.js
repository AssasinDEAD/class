// class Strana {
//    constructor(name, language, money, land, citizens) {
//       this.name = name
//       this.language = language
//       this.money = money
//       this.land = land
//       this.citizens = citizens

//       // this.d = this.land / this.citizens != 0 ? this.land / this.citizens : "Фигня"
//    }

//    sayS() {
//       if (this.land / this.citizens == 0) {
//          console.log("Введи параметры!")
//       } else {
//          console.log(this.land / this.citizens)
//       }
//    }
// }

// let strana = new Strana("Russia", "Russian", "Rubl", 10000, 1000)

// console.log(strana);

let url = "https://my-json-server.typicode.com/Nurikenov/testdb/students"


// fetch('https://my-json-server.typicode.com/Nurikenov/testdb/students')
//    .then(response => response.json())
//    .then(commits => console.log(commits[1]))
// async function start() {
//    let response = await fetch('https://my-json-server.typicode.com/Nurikenov/testdb/posts/', {
//       method: 'POST',
//       headers: {
//          'Content-Type': 'application/json;charset=utf-8'
//       },
//       body: JSON.stringify({ id: 1 })
//    });
// }

// start();

// fetch('https://my-json-server.typicode.com/Nurikenov/testdb/students', {
//    method: 'POST',
//    body: JSON.stringify({
//       id_num: 77777777
//    }),
//    headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//    },
// })
//    .then((response) => response.json())
//    .then((json) => console.log(json));

let obj;

fetch('https://my-json-server.typicode.com/Nurikenov/testdb/memleketter')
   .then(response => response.json())
   .then(memleketter => memleketter.forEach((memleket) => {
      let li = document.createElement('li');
      let ol = document.getElementById("list")
      ol.appendChild(li);
      li.textContent = memleket.name + " " + memleket.code;
      // for (let i = 0; i < memleketter.length; i++) {
      //    if (i % 2 == 0) {
      //       $("li").addClass("active")
      //    }
      //    console.log(memleketter);
      // };
   }));


// let a = memleketter

// memleketter.forEach((memleket) => {
//    let li = document.createElement('li');
//    let ol = document.getElementById("list")
//    ol.appendChild(li);
//    li.textContent = memleket.name + " " + memleket.code;
//    if (memleket[]%2==0){}
// }));

// memleketter.forEach((memleket) => {
//    document.getElementById("list").innerHTML += '<li >' + memleket.name + " | " + memleket.code + '</li>'
// }))

// students.forEach((student) => {
//    document.getElementById("list").innerHTML += '<li >' + student + '</li>';
// });

// students.forEach((student) => {
//    let li = d.createElement('li');
//    ol.appendChild(li);
//    li.textContent = student;
// });




