// perintah : bikin pengecekan nilai, kalau misal minimal 75 maka dia lulus, kalau dibawah itu maka dia nggak lulus, pake alert
// let nilai = 70;
// if (nilai >= 75) {
//   alert("lulus");
// }
// alert("lulus");

// grade -> minimal 80 -> B, minimal 90 -> A, dibawah 80 dia C
// let grade = 81;
// if (grade >= 90) {
//   alert("a");
// } else if (grade >= 80) {
//   alert("b");
// } else {
//   alert("c");
// }

// function (named function, function with parameter)
// named function
// function hello() {
//   alert("Hello Word");
// }
// hello();

// function penjumlahan() {
//   let bilanganPertama = 20;
//   let bilanganKedua = 30;
//   alert(`hasil penjumlahan: ${bilanganPertama + bilanganKedua}`);
// }
// penjumlahan();

// function with parameter
// function perkalian(angka1, angka2) {
//   alert(`hasil perkalian: ${angka1 * angka2}`);
// }
// perkalian(2, 5);

// looping (for loop, while loop, do-while)
// for (let x = 0; x < 10; x++) {
//   console.log(x);
// }

function submitData(event) {
  event.preventDefault();
  // DOM -> Document Object Model (untuk memanipulasi element HTML melalui javascript)

  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  // console.log(name);

  let objectData = {
    name,
    email,
    phone,
    subject,
    message,
  };
  let arrayData = [name, email, phone, subject, message];

  console.log(objectData);
  // untuk semua data yang belum diisi
  if (name != "" && email != "" && phone != "" && subject != "" && message != "") {
    return true;
  } else {
    alert("Semua harus diisi!");
  }
  // sebagian data yang belum diisi
  if (name === "") {
    return alert("Nama harus diisi!");
  } else if (email === "") {
    return alert("Email harus diisi!");
  } else if (phone === "") {
    return alert("Phone Namber harus diisi!");
  } else if (subject === "") {
    return alert("Subject harus diisi!");
  } else if (message === "") {
    return alert("Pesan harus diisi!");
  }

  // console.log(name);
  // console.log(email);
  // console.log(phone);
  // console.log(subject);
  // console.log(message);
  // alert(
  //   `name : ${name} \n
  //   email : ${email} \n
  //   phone : ${phone} \n
  //   subject : ${subject} \n
  //   message : ${message} \n`
  // );
  const emailReceiver = "fajarshadow20@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name},\n${message}, silahkan kontak saya di nomor berikut : ${phone}`;
  a.click();
}
