$(function(){

	$("#about").click(function(){
		$("#story").text('Stuff about me');
	});
	$("#work").click(function(){
		$("#story").text('Work History');
	});
	$("#refer").click(function(){
		$("#story").text('References');
	});

});

$(function(){

	$("#skilltree").delay(4500).attr('scrollamount',2);

});