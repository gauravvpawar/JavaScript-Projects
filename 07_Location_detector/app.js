let LocationInfo = document.querySelector(".locationInfo")
let LocationBtn = document.querySelector(".getLocation")

LocationBtn.addEventListener("click",() => {
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(setPosition);
    }
    else
    {
        LocationInfo.innerHTML = `Geolocation is not supported by this Browser`
    }
})

async function setPosition(position)
{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    LocationInfo.innerHTML = `${data.address.state_district}- ${data.address.postcode} ,  ${data.address.state}`;
}