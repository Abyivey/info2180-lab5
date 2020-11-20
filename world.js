window.onload= start;
function start(){
    let countrybutton = document.getElementById('lookup_1');
    let citybutton = document.getElementById('lookup_2');
    let info = document.getElementById('result');
    console.log(countrybutton)
    countrybutton.addEventListener('click',function(element){
        element.preventDefault();
        var my_form = document.getElementById("country").value;
        console.log ("Error!");
        fetch("world.php"+"? country=" + my_form)
        .then(response =>{
            if (response.ok){
                return response.text()
            } else{
                return Promise.reject("Something went wrong")
            }
        
        })
        .then(data => {
            info.innerHTML = data;
        })
        .catch(error => console.log('There was an error: ' + error));
    });
    citybutton.addEventListener('click',function(element){
        element.preventDefault();
        var mi_form = document.getElementById("country").value;
        var cities= document.getElementById("country").value;
        console.log ("Error");
        fetch("world.php"+"?country=" + mi_form + "&context=cities")
        .then(response =>{
            if (response.ok){
                return response.text()
            } else{
                return Promise.reject("Something went wrong")
            }
        
        })
        .then(data => {
            info.innerHTML = data;
        })
        .catch(error => console.log('There was an error: ' + error));
    });

}