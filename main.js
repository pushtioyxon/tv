let img = document.getElementById("img");
if (!img) {
  console.error("Elemet did not found");
}

document
  .getElementById("nextBtn")
  .addEventListener("click", nextImg);
document
  .getElementById("prevBtn")
  .addEventListener("click", prevImg);
// let url = [
//   "https://cff2.earth.com/uploads/2023/04/05094255/shutterstock_15188570453-scaled.jpg",
//   "https://sun9-2.userapi.com/impg/c855724/v855724079/8089a/2EvBgXXfrPw.jpg?size=959x959&quality=96&sign=a16e3d38cc09bcb9f1e1d2b82f3184b8&type=album",
//   "https://lh3.googleusercontent.com/YiHxHCxngm1kn_yoHW45Utlrgy86ijRJDdnKS2zRgURzi-YgVKOEtNf6AHMNnFGYrmxrmLVxIwdR-gkU4euzV7B3h4vL6V3rLR6e0Fj8uND_MLJes6oT-EzuG5qyVD855qELsnPdJ2Iq0SbA6A",
// ];

let urls = [
  "https://img.freepik.com/premium-photo/full-pink-moon-black-water-night-sky-photorealistic-cinematic-look_1089669-32659.jpg",
  "https://cdn.cosmonova.org/cosmonova/images/blog/namestar_img1.jpg",
  "https://media.licdn.com/dms/image/v2/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695825196046?e=2147483647&v=beta&t=2zU71mKLxGihkNQB5eMDjCgbD7srasN1gyEqowXMGV4",
];
let count = 0
function showImg(){
    img.setAttribute("src",urls[count])
}
function nextImg(){
    count =(count+1)%urls.length
    showImg()
}
function prevImg(){
 count = ((count - 1) + urls.length)%urls.length
    showImg()
}
showImg()
