//alert("welcome");

//for image 1

var ren_num1 = Math.floor(Math.random() * 6) + 1;

var dice_img = "dice" + ren_num1 + ".png";

var dice_src = "images/" + dice_img;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", dice_src);

// For image second

var ren_num2 = Math.floor(Math.random() * 6) + 1;

var dice_src2 = "images/dice" + ren_num2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", dice_src2);

if (ren_num1>ren_num2)
{
    document.querySelector("h1").innerHTML = "Plyer 1 won !!🤩"
}
else if (ren_num2>ren_num1)
{
    document.querySelector("h1").innerHTML = "Plyer 2 won !!🤩"
}
else
{
    document.querySelector("h1").innerHTML= "Draw 😐"
}