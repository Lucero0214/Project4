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
     //dog pic