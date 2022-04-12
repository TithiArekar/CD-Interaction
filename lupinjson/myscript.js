console.log("Hello world.")

fetch('mydata.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

var mainContainer = document.getElementById("data_holder");

function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.classList.add("gallerydiv");
    div.innerHTML = '<img src="' + data[i].fileName + '" class="galleryphoto">' + data[i].caption;
    mainContainer.appendChild(div);
  }
}
