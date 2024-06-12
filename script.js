//foood menu

function foodMenu()
{
        //for food menu images
    let elemContainer = document.querySelector(".elem-container");
    let fixedImage = document.querySelector(".fixed-image");

    elemContainer.addEventListener("mouseenter" , function()
    {
        fixedImage.style.display = "block"
    })

    elemContainer.addEventListener("mouseleave" , function()
    {
        fixedImage.style.display = "none"
    })


    //display fixed image
    let elems = document.querySelectorAll(".element");
    elems.forEach(function(e)
    {
        e.addEventListener("mouseenter", function()
        {
            let image = e.getAttribute("data-image");
            fixedImage.style.backgroundImage = `url(${image})`
        })

    })
}
foodMenu();










