
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

    // YOUR CODE GOES HERE!
	
	var street = $("#street").val();
	var city = $("#city").val();
	var address = street + ", "+city;
	
	
	$greeting.text('So, you want to live at '+ address +'?');
	
	var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+ address + '';
	$body.append('<img class="bgimg" src="'+streetviewUrl+'">');
	
	// your NY Time ajax resquest goes here
	
	var nytimeUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ city +"&sort=newst&api-key=d2156e52a9b14292b6254dc927e38ae3";
	
	$.getJSON(nytimeUrl, function(data){
		$nytHeaderElem.text('New york Time Articles About ' + city);
		articles = data.response.docs;
		for(var i=0; i< article.length; i++){
			var article = articles[i];
			$nytElem.append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>' + article.snippet + '</p>'+'</li>');
		};
	}).error(function(e){
		$nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
	});

    return false;
};

$('#form-container').submit(loadData);
