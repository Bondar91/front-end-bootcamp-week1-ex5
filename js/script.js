(function($){

	var getBtn = $("#getBtn"),
		getUser = $("#getUser");

	getBtn.on("click", function(e) {
		e.preventDefault();

		$.getJSON("https://jsonplaceholder.typicode.com/users", function(data){
			$.each(data, function(i, val){
				var list = "<p>Name: "+data[i].name+"</p>"+
							"<p>UserName: "+data[i].username+"</p>"+
							"<p>Email: "+data[i].email+"</p>"+
							"<p>Phone: "+data[i].phone+"</p>";

					getUser.append("<li>"+list+"</li>");
			});
		});

		$(this).attr("disabled", true);
	});

})(jQuery);