var apiUrl="https://api.fda.gov/drug/event.json?search=receivedate:[20040101+TO+20081231]&limit=1"

var apiUrl2="https://api.fda.gov/device/enforcement.json?search=classification:Class "

    var pokemonName = document.querySelector(".resultElement");

    function getDrugData() {
	axios.get(apiUrl)
       
        .then(function (response) {
        	pokemonName.innerHTML =Success(response.data.results);
        })
        .catch(function (error) {
        	 pokemonName.innerHTML =ErrorHTML(error);
        });
    }

    var button = document.querySelector(".output_one");
    button.addEventListener("click", getDrugData);

     var input = document.querySelector(".input_one");

    function getProductData() {
	axios.get(apiUrl2 + input.value)
        .then(function (response) {
        	pokemonName.innerHTML =Success(response.data.results);
        })
        .catch(function (error) {
        	 pokemonName.innerHTML =ErrorHTML(error);
        });
    }

    var button = document.querySelector(".output_two");
    button.addEventListener("click", getProductData);
  
function Success(response) {
    return '<h4>Result:</h4>' +
    '<pre>' + JSON.stringify(response, null, '\t') + '</pre>';
  }
  
  function ErrorHTML(error) {
    return  '<h4>Result:</h4>' +
            '<h5>Message:</h5>' +
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5>' +
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
  }