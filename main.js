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
marker.bindPopup("<b 9>Baldwin Dog Park!</b><br>2750 Parkside Cir, Concord, CA 94519.").openPopup();

//creating dropdown element
document.addEventListener("DOMContentLoaded", init);

function init() {
  let parklocations = [];
  // get external json data and convert it into a JS arrays
  fetch("parklocations.json")
    .then((response) => response.json())
    .then((data) => {
      parklocations = data;
      // loop through the houses array and populate the
      // dropdown with the parklocation names and codes.

      parklocations.forEach((item) => {
        const option =
          document.createElement("OPTION");
        option.value = item.code;
        option.innerText = item.name;
        parklocation.appendChild(option);
      });
    })
    .catch((err) => {
      console.log("oops ", err.message);
    });

  // DOM ref to the select dropdown

  let parklocation =
    document.getElementById('parklocation');
  // display a list of the park location members
  // when the select list has changed.

  parklocation.addEventListener("change", (e) => {
    //get the parklocation code from the select
    const code = e.target.value;
    let members = [];
    // loop through parklocation array
    // check for a matching parklocation code,
    // grab the members of that parklocation
    parklocations.forEach((item) => {
      if (item.code === code) {
        members = item.members;
      }
    });
    //DOM ref for ul to display members
    const container = document.getElementById("parks");

    // clear out any previous member names
    container.innerHTML = "";

    // handle if no house selected
    if (members.length === 0) {
      let item = document.createElement("LI");
      item.innerText = "No Parklocation Selected";
      container.appendChild(item);
    } else {
      // create the li's and append to the ul
      members.forEach((location) => {
        let item = document.createElement("LI");
        item.innerText = location;
        container.appendChild(item);
      });
    } // end if/else
  }); //end addEventListener - change
}


