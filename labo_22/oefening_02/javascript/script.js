let elList = document.getElementById("list")
let link = 'https://api.coindesk.com/v1/bpi/currentprice.json'
fetch(link)
    .then(function(response) {
      if (response.ok) {
            return response.json();
        }
    })
    .then(function(response) {
        console.log(response)

        elList.innerHTML = "1 bitcoin heeft de waarde "+response.bpi.EUR.rate_float;
    });
let elSubmit = document.getElementById("search")
