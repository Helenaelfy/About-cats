function openSlider()
{
    document.getElementById("myFoto").style.display = "block";
}

function closeSlider()
{
    document.getElementById("myFoto").style.display = "none";
}

let index = 1;
showCats(index);

function plusFoto(n)
{
    showCats(index += n);
}
function numberFoto(n)
{
    showCats(index = n);
}

function showCats(n)
{  
    let foto = document.getElementsByClassName("fotoSlider");
    let demo = document.getElementsByClassName("demo");
    if (n > foto.length)
    {
        index = 1;
    }
    if (n < 1)
    {
        index = foto.length;
    }
    for (let i = 0; i < foto.length; i++)
    {
        foto[i].style.display = "none";
    }
    for (let j = 0; j < demo.length; j++)
    {
        demo[j].className = demo[j].className.replace(" active", "");
    }
    foto[index - 1].style.display = "block";
    demo[index - 1].style.display = " active";
}


