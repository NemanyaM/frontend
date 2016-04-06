$('#click').click(function(){
	/*
	$.getJSON('data1.json', function (data){
		var items = [];
		$.each (data, function(key , val){
			items.push ('<li id="' + key + '">' + val + '</li>');
			});
			$('<ul/>' ,{
			'class' : 'interest-list',
			html: items.join('')
			
			}).appendTo('body');	
		
		});
	}); */
	
		$.ajax({
		

		url: 'data1.json',
		dataType: 'json',
		success: function (data){
			
		var items = [];
		$.each (data, function(key , val){
			items.push ('<li id="' + key + '">' + val + '</li>');
			});
			$('<ul/>' ,{
			'class' : 'interest-list',
			html: items.join('')
			
			}).appendTo('body');	
		
		
		
		},
		status code : {
			404: function (){
				alert ('Problem with the server');
			}
		}
		});
	
	});
	
});