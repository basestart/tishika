
var myLatlng = new qq.maps.LatLng(39.916527,116.397128);
var myOptions = {
    zoom: 15,
    center: myLatlng,
    mapTypeId: qq.maps.MapTypeId.ROADMAP
}
var map = new qq.maps.Map(document.getElementById("map"), myOptions);

qq.maps.event.addListener(map, 'click', function(e) {
    console.log(e);
    alert('您点击了地图.');
});

// get location
