 var imgaes1 = document.querySelector("#images1")
 var imgaes2 = document.querySelector("#images2")
 var imgaes3 = document.querySelector("#images3")
 var imgaes4 = document.querySelector("#images4")
 var imgaes5 = document.querySelector("#images5")
 var imgaes1h1 = document.querySelector("#images1 h1")
 var imgaes2h1 = document.querySelector("#images2 h1")
 var imgaes3h1 = document.querySelector("#images3 h1")
 var imgaes4h1 = document.querySelector("#images4 h1")
 var imgaes5h1 = document.querySelector("#images5 h1")

 imgaes1.addEventListener("click",function(){
    imgaes1.style.width = "900px";
    imgaes2.style.width = "100px";
    imgaes3.style.width = "100px";
    imgaes4.style.width = "100px";
    imgaes5.style.width = "100px";
    imgaes1h1.style.display= "block";
    imgaes2h1.style.display = "none";
    imgaes3h1.style.display = "none";
    imgaes4h1.style.display = "none";
    imgaes5h1.style.display = "none";
 })
  imgaes2.addEventListener("click",function(){
    imgaes1.style.width = "100px";
    imgaes2.style.width = "900px";
    imgaes3.style.width = "100px";
    imgaes4.style.width = "100px";
    imgaes5.style.width = "100px";
    imgaes1h1.style.display= "none";
    imgaes2h1.style.display = "block";
    imgaes3h1.style.display = "none";
    imgaes4h1.style.display = "none";
    imgaes5h1.style.display = "none";
 })
 imgaes3.addEventListener("click",function(){
    imgaes1.style.width = "100px";
    imgaes2.style.width = "100px";
    imgaes3.style.width = "900px";
    imgaes4.style.width = "100px";
    imgaes5.style.width = "100px";
    imgaes1h1.style.display= "none";
    imgaes2h1.style.display = "none";
    imgaes3h1.style.display = "block";
    imgaes4h1.style.display = "none";
    imgaes5h1.style.display = "none";
 })
 imgaes4.addEventListener("click",function(){
    imgaes1.style.width = "100px";
    imgaes2.style.width = "100px";
    imgaes3.style.width = "100px";
    imgaes4.style.width = "900px";
    imgaes5.style.width = "100px";
    imgaes1h1.style.display= "none";
    imgaes2h1.style.display = "none";
    imgaes3h1.style.display = "none";
    imgaes4h1.style.display = "block";
    imgaes5h1.style.display = "none";
 })
 imgaes5.addEventListener("click",function(){
    imgaes1.style.width = "100px";
    imgaes2.style.width = "100px";
    imgaes3.style.width = "100px";
    imgaes4.style.width = "100px";
    imgaes5.style.width = "900px";
    imgaes1h1.style.display= "none";
    imgaes2h1.style.display = "none";
    imgaes3h1.style.display = "none";
    imgaes4h1.style.display = "none";
    imgaes5h1.style.display = "block";
 })