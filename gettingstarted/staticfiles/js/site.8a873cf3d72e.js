//event triggered when document is ready
$(document).ready(function() {
    setTimeout(function() {
        
    	//alert( ' init ' );
    	//console.log('init');
		
    	var editor = ace.edit("editor");
		editor.setTheme("ace/theme/chrome");
        editor.getSession().setMode("ace/mode/javascript");
        editor.setFontSize(15);
        editor.setAutoScrollEditorIntoView(true);
		
		// listening for changes
		editor.getSession().on('change', function(e) {
			
			var input = editor.getValue();
			//console.log('site - input changed = ' + input);
			
			if (String(input).indexOf(';') > -1) {
				//console.log('input contains Comma');
				
				// clean the results output
				$("#results").children().remove();

				// send all the lines to the server
				ajaxPost(input);
			}
		});
		
    }, 2000);
});

function isEven(n) {
	return n % 2 == 0;
}

function ajaxPost(input) {
	
	// send ajax to compute
	$.ajax( {
		method: 'post',
		url :  "compute",
		data: '&data=' + encodeURIComponent(input),
		async : true,
		success: function(data, status) {
			
			if (status == "success") {
					
					//console.log ("Site - data received: " + data + "\nStatus: " + status);
					var dataJson = eval(data);
					console.log("ok or nok= " + dataJson["ok"]);
					
					if ( dataJson['ok'] == true ) {

						//console.log('results= ' + dataJson['results']);
						console.log('histories= ' + dataJson['histories']);
						
						var results = dataJson['results'];

						// remove all rows from the table
						$('[id="removeVariable"]').remove();
						// the python view sends a dictionary with the name of the variable as a key
						for (var variable in results) {
							if ( results.hasOwnProperty(variable) ) {
								//$( "#results" ).append( "<p>" + String(variable) + " = " + String(results[variable]) + "</p>" );
								// add the rows
								var $row = $('<tr id="removeVariable">'+
									      '<td>'+ String(variable)+'</td>'+
									      '<td>'+ '='+'</td>'+
									      '<td>'+ String(results[variable])+'</td>'+
									      '</tr>');    
								// append the row to the table body
								$('#variables> tbody').append($row);
							}
						}
						
						var histories = dataJson['histories'];
						
						$('[id="removeHistory"]').remove();
						// the python view sends a dictionary with the name of the variable as a key
						var index = 0;
						for (var variable in histories) {
							if ( histories.hasOwnProperty(variable) ) {
								
								var historyArray = histories[variable];
								historyArray.forEach( function (history) {
									var $row ;
									if ( isEven (index) ) {
										$row = $('<tr id="removeHistory" class="colorRed">'+'<td>'+ String(history)+'</td>'+ '</tr>');  
									} else {
										$row = $('<tr id="removeHistory" class="colorBlue">'+'<td>'+ String(history)+'</td>'+ '</tr>');
									}
									$('#histories> tbody').append($row);
								});
							}
							index = index + 1;
						}
					} else {
						console.log("exception= " + dataJson["exception"]);
					}
			}
		},
		error: function(data, status) { 
			alert("Error - site computing: " + status ); 
			
		},
		complete: function() {
			console.log('ajax post completed');
		}
	} );
}


