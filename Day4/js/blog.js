// let name = "Hello fajar";
// console.log(name);

// bikin 3 variable untuk nama  3 orang, terus lakukan console log untuk ketiganya
// variabel
// let name1 = "Fajar";
// let name2 = "Rohino";
// let name3 = "Eannoy";
// console.log(name1);
// console.log(name2);
// console.log(name3);

// kita akan tampung data ketiga variable nama tadi dalam sebuah array dan lakukan print ke console dari array yang dibuat

// array
// let arrayName = ["fajar", "rohino", "eannoy"];
// console.log(arrayName);
// memanggil salah satu value di dalam array
// console.log(arrayName[0]);
// console.log(arrayName[1]);
// console.log(arrayName[2]);

// perbedaan object dan array adalah
// object memiliki key dan value sedangkan array hanya memiliki value

// object
// let orang = {
//   name: "fajar",
//   address: "rembang",
// };
// console.log(orang);
// memanggil salah satu key
// console.log(orang.name);
// console.log(orang.address);

// buat kalimat ini
// hallo namaku Fajar Rohino, dipanggil Eannoy, asal jawa tengah

// const aku = {
//   name: ["fajar", "rohino", "eannoy"],
//   address: "jawa tengah",
// };
// console.log("hallo namaku " + aku.name[0] + " " + aku.name[1] + ", " + "dipanggil " + aku.name[2] + " asal " + aku.address);

// ARRAY OF OBJECT
// const users = [
//   {
//     name: "Soekarno",
//     presiden: "Presiden Pertama",
//   },
//   {
//     name: "Suharto",
//     presiden: "Presiden Kedua",
//   },
//   {
//     name: "B.J Habibi",
//     presiden: "Presiden Ketiga",
//   },
//   {
//     name: "Gus Dur",
//     presiden: "Presiden Keempat",
//   },
//   {
//     name: "Megawati",
//     presiden: "Presiden kelima",
//   },
//   {
//     name: "SBY",
//     presiden: "Presiden keenam",
//   },
//   {
//     name: "Joko Widodo",
//     presiden: "Presiden ketuju",
//   },
// ];
// console.log(users);
// // ambil data presiden ke 4
// console.log(users[3]);
// // ambil data presiden ke 4 (name, presiden)
// console.log(users[3].name);
// console.log(users[3].presiden);

// PUSHING OBJECT TO ARRAY
// let products = [];
// function addData(event) {
//   event.preventDefault();
//   let product = {
//     name: "popok bayi",
//     price: 100500,
//     qty: 3,
//   };
//   products.push(product);
//   console.log(products);
// }
// let blogs = [];
// function addData(event) {
//   event.preventDefault();
//   let title = document.getElementById("input-blog-title").value;
//   let content = document.getElementById("input-blog-content").value;
//   //   console.log(title);
//   //   console.log(content);
//   let blog = {
//     title,
//     content,
//   };
//   blogs.push(blog);
//   console.log(blogs);
// }

let dataBlog = [];
const addBlog = (event) => {
  event.preventDefault();
  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  //   console.log(title);
  //   console.log(content);
  //   console.log(image);
  //   blob image
  image = URL.createObjectURL(image[0]);
  let blog = {
    title,
    content,
    image,
    postAt: "4 Juni 2023",
    author: "eannoy",
  };
  dataBlog.push(blog);
  renderBlog();
  console.log(dataBlog);
};
function renderBlog() {
  document.getElementById("contents").innerHTML = "";
  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
            <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Delete Post</button>
            </div>
            <h1>
                <a href="blog-detail.html" target="_blank">${dataBlog[index].title}</a>
            </h1>
            <div class="detail-blog-content">
                ${dataBlog[index].postAt} | ${dataBlog[index].author}
            </div>
            <p>
                ${dataBlog[index].content}
            </p>
            </div>
        </div>`;
  }
}
