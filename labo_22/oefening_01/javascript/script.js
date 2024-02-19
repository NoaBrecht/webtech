fetch('https://api.coindesk.com/v1/bpi/currentprice.json') // 404 Error
    .then(function(response) {
      if (response.ok) {
            return response.json();
        }
    })
    .then(function(response) {
        console.log(response)
        element.innerHTML = "1 bitcoin heeft de waarde "+response.bpi.EUR.rate_float;
    });

    let element = document.getElementById('waarde');