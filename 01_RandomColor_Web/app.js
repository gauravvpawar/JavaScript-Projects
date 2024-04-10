const randomColor = function(){
    const hex = '0123456789ABCDEF';
     let color = "#";
    for(let i = 0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)];

    }
    return color;
};

const text  = document.querySelector('.colortxt');

//console.log(randomColor())

const startcolorChange = function()
{
    document.body.style.backgroundColor = randomColor();
    text.innerHTML = `     Color code:-${randomColor()}`
}


const space = document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        console.log("Clicking");
     startcolorChange();
    }
  });