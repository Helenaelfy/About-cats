function openSlide()
{
   document.getElementById("gallery").style.display = "block";
}
function closeSlide()
{
   document.getElementById("gallery").style.display = "none";
}

let index = 1;
showSliders(index);

function plusPhoto(n)
{
   showSliders(index += n);
}
function numberPhoto(n)
{
   showSliders(index = n);
}
function showSliders(n)
{
let slider = document.getElementsByClassName("slider");
let demo = document.getElementsByClassName("demo");

if ( n > slider.length)
{
   index = 1;
}
if ( n < 1)
{
   index = slider.length;
}

for (let i = 0; i < slider.length; i++)
{
   slider[i].style.display = "none";
}
for (let j = 0; j < demo.length; j++)
{
   demo[j].className = demo[j].className.replace(" active", "");
}
slider[index - 1].style.display = "block";
demo[index - 1].className += " active";
}