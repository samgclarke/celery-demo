$( document ).ready(function() {
    console.log("task_id:", task_id);

    (function poll() {
	    setTimeout(function() {
		    $.get("/status/" + task_id, function(result, status){
		    	var data = jQuery.parseJSON(result);
	        console.log('data:', data.state);
	        if (data.state === 'PENDING') {
            poll();
	        } else {
	        	console.log('That\'s it from me!');
	        	if (data.state === 'SUCCESS') {
	        		$('#result').html(data.result.toString());
	        	} 
	        }
	      });
	    }, 500);
    })();
});