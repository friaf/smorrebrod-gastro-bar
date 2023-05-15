// Initialize and add the map
function initMap() {
    // Latitude and longitude of the selected location
    const myLatLng = { lat: 51.897692, lng: -8.480438 };

    // The map, centered at selected location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: myLatLng
    });

// The marker, positioned at selected location
const marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: 'Smorrebrod Gastro Bar'
});
}
window.initMap = initMap;        

$(document).ready(function(){
    // Activate Carousel
    $("#CarouselExampleCaptions").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#CarouselExampleCaptions").carousel(0);
    });
    $(".item2").click(function(){
      $("#CarouselExampleCaptions").carousel(1);
    });
    $(".item3").click(function(){
      $("#CarouselExampleCaptions").carousel(2);
    });
    $(".item4").click(function(){
      $("#CarouselExampleCaptions").carousel(3);
    });
    $(".item5").click(function(){
      $("#CarouselExampleCaptions").carousel(4);
    });
    $(".item6").click(function(){
      $("#CarouselExampleCaptions").carousel(5);
    });
    $(".item7").click(function(){
      $("#CarouselExampleCaptions").carousel(6);
    });
    $(".item8").click(function(){
      $("#CarouselExampleCaptions").carousel(7);
    });
 
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#CarouselExampleCaptions").carousel("prev");
    });
    $(".right").click(function(){
      $("#CarouselExampleCaptions").carousel("next");
    });
  });