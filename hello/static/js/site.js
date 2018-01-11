//event triggered when document is ready
$(document).ready(function() {
    setTimeout(function() {
        
    	//alert( ' init ' );
    	console.log('init');
		
    	var editor = ace.edit("editor");
		editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript");
		
		// listening for changes
		editor.getSession().on('change', function(e) {
			var input = editor.getValue();
			console.log(input);
			
		});
		
    }, 2000);
});


