function birthdayCakes(){
    let cakee = document.getElementById("cake").value

    let totalcake = cakee * 50;

    document.getElementById("cakePrice").innerHTML = totalcake;

    return totalcake;

}

function partyCups(){

    let cups = document.getElementById("cup").value

    let totalcups = cups * 5;
    
    document.getElementById("partyCupPrice").innerHTML = totalcups;

    return totalcups;

}

function beerKegs(){

    let beer = document.getElementById("beer").value

    let totalbeer = beer * 46;

    document.getElementById("beerPrice").innerHTML = totalbeer;

    return totalbeer;
}

function beef(){

    let beeef = document.getElementById("pound").value

    let totalbeef = beeef * 15;

    document.getElementById("poundPrice").innerHTML = totalbeef

    return totalbeef
}

function bulletVest(){

    let vestt = document.getElementById("vest").value

    let totalvest = vestt * 450;

    document.getElementById("bulletPrice").innerHTML = totalvest

    return totalvest;
}

function totalPrice(){
    let cake = document.getElementById('cake').value*50
    let cup = document.getElementById('cup').value*5
    let beer = document.getElementById('beer').value*46
    let beef = document.getElementById('pound').value*15
    let vest = document.getElementById('vest').value*450

    let totalPrice = cake + cup + beer + beef + vest;

    document.getElementById('total').innerHTML = totalPrice;
    
}

function order(){
    if(document.getElementById('total').innerHTML !== '0'){
        alert('Your Order Has Been Placed')
        return true;
    }
    else{
        alert('Error!! Your Cart is Empty')
        return false;
    }

}
