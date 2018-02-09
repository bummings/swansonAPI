var swansonURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quoteBox = document.getElementById('quote');



// X M L H T T P R E Q U E S T  ( X H R )

var xhrBtn = document.getElementById('xhr');
xhrBtn.addEventListener('click', function(){
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){
			xhrResult = JSON.parse(XHR.responseText)
			// console.log(xhrResult);
			quoteBox.innerText = xhrResult;
		}
	}
	XHR.open('GET', swansonURL);
	XHR.send();
})




// F E T C H

var fetchBtn = document.getElementById('fetch');
// response but no quote
fetchBtn.addEventListener('click', function(){
	fetch(swansonURL)
	.then(function(data){
		console.log(data);
		return data.json()
		.then (function(data){
			console.log(data);
			quoteBox.innerText = data;
		})
	})
	.catch(function(e){
		console.log(e);
	})
})





// J Q U E R Y

var jqueryBtn = document.getElementById('jquery');   // all good
jqueryBtn.addEventListener('click', function(){
	$.ajax({
		method: 'GET',
		url: swansonURL,
		dataType: 'json'
	})
	.done(jQueryDisplay)
	.fail(function(){
		alert('no way bruh');
	})
})


function jQueryDisplay(data){
	// console.log(data);
	quoteBox.innerText = data;
}




// A X I O S 

var axiosBtn = document.getElementById('axios');
//all good
axiosBtn.addEventListener('click', function(){
	axios.get(swansonURL)
	.then(function(res){
		// console.log(res.data);
		// alert(res.data);
		quoteBox.innerText = res.data;
	})
	.catch(function(e){
		console.log(e);
	})
})







