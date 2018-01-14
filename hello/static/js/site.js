//event triggered when document is ready
$(document).ready(function() {
    setTimeout(function() {
        
    	//alert( ' init ' );
    	console.log('init');
		
    	var editor = ace.edit("editor");
		editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript");
        editor.setFontSize(15);
        editor.setAutoScrollEditorIntoView(true);
		
		// listening for changes
		editor.getSession().on('change', function(e) {
			
			var input = editor.getValue();
			//console.log('site - input changed = ' + input);
			
			if (String(input).indexOf(';') > -1) {
				console.log('input contains Comma');
				String(input).split(';').forEach( function (line) {
					if ( String($.trim(line)).length > 1) {
						console.log (line + ';');
						ajaxPost(line + ';');
					}
				});
			}
		});
		
    }, 2000);
});

function ajaxPost(line) {
	
	// send ajax to compute
	$.ajax( {
		method: 'post',
		url :  "compute",
		data: '&data=' + encodeURIComponent(line),
		async : true,
		success: function(data, status) {
			console.log ("Site - data received: " + data + "\nStatus: " + status);
			var dataJson = eval(data);
			console.log('variable= ' + dataJson['variable'])
			console.log('results= ' + dataJson['results'])
			console.log('histories= ' + dataJson['histories'])
			
		},
		error: function(data, status) { 
			alert("Error - site computing: " + status ); 
			
		},
		complete: function() {
			console.log('ajax post completed');
		}
	} );
}


