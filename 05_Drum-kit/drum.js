//alert("Hello!");
//detecting button press
var numOfDrum =document.querySelectorAll(".drum").length;

for(i=0;i<numOfDrum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
       
        var buttonHTML =this.innerHTML;
        makeSound(buttonHTML);
    });
}

//detecting keybpard press
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
});
        function makeSound(key)
        {
        switch(key)
        {
            case "w":
            var audio = new Audio("sound/crash.mp3");
            audio.play();
            break;

            case "a":
                var audio = new Audio("sound/kick-bass.mp3");
                audio.play();
                break;

                case "s":
                    var audio = new Audio("sound/tom-1.mp3");
                    audio.play();
                    break;

                    case "d":
                        var audio = new Audio("sound/tom-1.mp3");
                        audio.play();
                        break;
    

                 case "j":
                        var audio = new Audio("sound/tom-2.mp3");
                        audio.play();
                        break;

                     case "k":
                            var audio = new Audio("sound/tom-3.mp3");
                            audio.play();
                            break;
                
                            case "l":
                                var audio = new Audio("sound/tom-4.mp3");
                                audio.play();
                                break;
                    

                    default:console.log(buttonHTML);

        }

    }
