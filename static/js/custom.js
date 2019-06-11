//bootstrap
$(document).ready(function () {
    $('.header').height($(window).height());
})



$(function () {

    function initMap() {

        var location = new google.maps.LatLng(35.6876288, 139.7014528);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        /*
        var x = document.getElementById("map");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
        }
        */
    }

    google.maps.event.addDomListener(window, 'load', initMap);
});

//popup namaste
var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function (e) {
    var docX = $(document).width();
    var docY = $(document).height();

    var moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
    var moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce;

    var rotateY = (e.pageX / docX * rotateForce * 2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce * 2) - rotateForce);

    $('.popup')
        .css('left', moveX + 'px')
        .css('top', moveY + 'px')
        .css('transform', 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
});