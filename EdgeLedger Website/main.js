

function initMap() {

    const loc = { lat : 25.197197 , lng : 55.274376};

    const map = new google.maps.Map(document.querySelector(".map") , {
        zoom: 14,
        center: loc
    });
    

    const marker = new google.maps.Marker({position : loc , map: map});
}