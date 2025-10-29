// // # 📝 Vazifalar`

// // ### 1️⃣ Oddiy

// // * HTML’da `<p id="test"></p>` yozing.
// // * JavaScript orqali `innerText` yordamida unga `"Salom Dunyo!"` matnini chiqaring.

// // ✅ Natija:

// // ```html
// // <p id="test">Salom Dunyo!</p>
// // ```
// let getId = document.getElementById("test");
// getId.innerText = "Hello, World";
// // ---

// // ### 2️⃣ O‘rtacha

// // * HTML’da `<h1 id="title"></h1>` yozing.
// // * Foydalanuvchidan `prompt` orqali ismini so‘rang.
// // * `innerHTML` yordamida `title` ichiga **"Assalomu alaykum, [Ism]!"** chiqaring.

// // ✅ Masalan, agar foydalanuvchi `"Dilshod"` yozsa, natija:

// let name = prompt("Ism kiriting");
// let get = document.getElementById("title")
// get.innerText=`Assalomu alaykum, ${name}!`
// // ```html
// // <h1 id="title">Assalomu alaykum, Dilshod!</h1>
// // ```

// // ---

// // ### 3️⃣ Amaliy kalkulyator

// // Sizning kodingizga o‘xshash **mini kalkulyator** qiling:

// // * Foydalanuvchi ikkita son kiritadi (`prompt` orqali).
// // * Tugmalar orqali qo‘shish, ayirish, ko‘paytirish, bo‘lish amallarini bajaradi.
// // * Natija `<h1 id="result"></h1>` ichida ko‘rsatiladi.

// // ✅ Masalan, agar sonlar `8` va `4` bo‘lsa:

// // * `+` bosganda: `8 + 4 = 12`
// // * `-` bosganda: `8 - 4 = 4`
// // * `*` bosganda: `8 * 4 = 32`
// // * `/` bosganda: `8 : 4 = 2`
// // let num1 = prompt()
// // let num2 = prompt()
// // function start(){
// //   num1
// //   num2
// // }
// // ---

// // ### 4️⃣ Qo‘shimcha (challenge 💪)

// // * Prompt o‘rniga `<input>` ishlating.
// // * Foydalanuvchi inputga son kiritadi, siz tugmalar yordamida hisoblab natijani chiqarasiz.

// // ---

// // 👉 Siz uchun tanlov: qaysi bosqichni qilaylik?

// // * Faqat **oddiy va o‘rtacha** mashqlarni bajarasizmi?
// //   yoki
// // * To‘g‘ridan-to‘g‘ri **kalkulyator loyihasi (challenge)** qilamizmi?
// //

// // ---

// // # 📌 DOM haqida kengroq ta’rif

// // **DOM (Document Object Model)** — bu HTML hujjatining **obyektlar daraxti** shaklidagi modeli.

// // 👉 Har bir HTML tegi (`<h1>`, `<p>`, `<button>`, `<img>`, `<div>`) DOM’da **obyekt** sifatida mavjud.
// // 👉 JavaScript shu obyektlarni **topadi**, **o‘qiydi**, **o‘zgartiradi**, **o‘chiradi**, **yangi qo‘shadi**.

// // Shu sababli, DOM — bu **HTML va JavaScript o‘rtasidagi ko‘prik** hisoblanadi.

// // ---

// // # 📖 DOM bilan asosiy amallar va misollar

// // ? 1️⃣ Elementni olish



// const element = document.getElementById("title");
// console.log(element.innerText); // "Salom"

// ```

// // ➡️ Bu kod `<h1>` ichidagi matnni olib beradi.



// // ? 2️⃣ Matnni o‘zgartirish

// //html
// // <h1 id="title">Salom</h1>
// // <button onclick="change()">O'zgartir</button>

// // <script>
// // function change(){
// //   document.getElementById("title").innerText = "Assalomu alaykum!";
// // }
// // </script>
// // ```

// // ➡️ Tugmani bossangiz, DOM’dagi matn o‘zgaradi.


// //? 3️⃣ Rasmni almashtirish

// // ```html
// // <img id="pic" src="old.png" width="200">
// // <button onclick="changePic()">Change</button>

// // <script>
// // function changePic(){
// //   document.getElementById("pic").src = "new.png";
// // }
// // </script>
// // ```

// // ➡️ DOM orqali rasm manbasi (`src`) o‘zgartirildi.



// // ?? 4️⃣ Style (CSS) qo‘shish

// // ```html
// // <p id="text">Bu oddiy matn</p>
// // <button onclick="makeRed()">Qizil qil</button>

// // <script>
// // function makeRed(){
// //   document.getElementById("text").style.color = "red";
// // }
// // </script>
// ```

// // ➡️ DOM yordamida CSS xususiyatlari o'zgartiriladi.



// // ? 5️⃣ Yangi element qo'shish

// // html
// // <ul id="list">
// //   <li>Olma</li>
// // </ul>
// // <button onclick="add()">Yangi qo'shish</button>

// // <script>
// // function add(){
// //   const li = document.createElement("li"); // yangi <li> yaratish
// //   li.innerText = "Banan"; // matn berish
// //   document.getElementById("list").appendChild(li); // ro'yxatga qo'shish
// // }
// // </script>
// // ```

// // ➡️ DOM orqali yangi `<li>` qo‘shildi.



// //? 6️⃣ Elementni o‘chirish

// // ```html
// // <p id="removeMe">Meni o'chiring</p>
// // <button onclick="del()">O'chirish</button>

// // <script>
// // function del(){
// //   const el = document.getElementById("removeMe");
// //   el.remove();
// // }
// // </script>
// // ```

// // ➡️ DOM orqali element butunlay o‘chirildi.


// // ? 7️⃣ Hodisalarni qo‘shish (`addEventListener`)

// ```html
// <button id="btn">Meni bos</button>
// <p id="result"></p>

// <script>
// document.getElementById("btn").addEventListener("click", function(){
//   document.getElementById("result").innerText = "Tugma bosildi!";
// });
// </script>
// ```

// // ➡️ DOM orqali tugmaga **event listener** qo‘shildi.

// // # ✅ Xulosa

// // DOM yordamida siz:

// // 1. **Elementni topasiz** → `getElementById`, `querySelector`
// // 2. **O‘qish va yozish** → `innerText`, `innerHTML`, `value`
// // 3. **CSS bilan ishlash** → `style.color`, `style.fontSize`
// // 4. **Yangi element yaratish** → `createElement`, `appendChild`
// // 5. **Elementni o‘chirish** → `remove()`
// // 6. **Hodisalarni boshqarish** → `onclick`, `addEventListener`

