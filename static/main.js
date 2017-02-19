$( document ).ready(function() {
    console.log("Our celery task_id:", task_id);
    
    //  Here we poll the Flask API for the status of the Celery task.
    (function poll() {
	    setTimeout(function() {
		    $.get("/status/" + task_id, function(result, status){
		    	var data = jQuery.parseJSON(result);
	        console.log('Task State:', data.state);
	        //  Here we keep polling until the task has completed successfully. 
          //  Note that in a production application we would want to handle 
          //  FAILURE and REVOKED states also!
	        if (data.state === 'PENDING') {
            poll();
	        } else {
	        	if (data.state === 'SUCCESS') {
	        		console.log('Task completed successfully. Phew! I can stop polling now :)');
	        		$('#result').html(data.result.toString());
	        	} 
	        }
	      });
	    }, 500);
    })();
});
