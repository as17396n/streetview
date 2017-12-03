
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var streetStr = $('#street').val();
    var cityStr	= $('#city').val();
    var loc = streetStr + ', ' + cityStr;

    $greeting.text('So, you wnat to live at ' + loc + '?');

    var streetviewUrl = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + loc + '&key=AIzaSyAn9M7ZlLjwVisz1ku1DfBiMn85eHysgkM";
    $body.append('<img class="bgimg" src="' + streetviewUrl + ' ">');

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
