fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then(data => { 
  let img = data.message;
  displayDog(img);
  console.log(data)
})
  .catch((error) => console.error(error));
  
  //display the dog 
  function displayDog(img) {
    const pic = `<img src="${img}">`;
    document.getElementById("dog").innerHTML = pic;
  };

     //dog park map

     var map = L.map('map').setView([37.98415, -122.02766], 13);
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([37.98415, -122.02766],).addTo(map);
marker.bindPopup("<b>Baldwin Dog Park!</b><br>2750 Parkside Cir, Concord, CA 94519.").openPopup()