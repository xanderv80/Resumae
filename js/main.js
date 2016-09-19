
$(function(){

	$("#skilltree").delay(4500).attr('scrollamount',2);

});


$(function() {
	for (var i=0; i<30; i++) {
		var html = '<p>' + i + ' ' + lorem + '</p>';
		$('#emulated').append(html);
		$('#native').append(html);
	}
	$('#emulated').bind('mousewheel', function(event) {
		event.preventDefault();
		var scrollTop = this.scrollTop;
		this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
          //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
      });
});



$('#test2')
.mousewheel(function(event, delta) {
	loghandle(event, delta);
               return false; // prevent default
  });


/*


$(".pointer").hover(
	function(){ 
		var thisdiv = $(this).attr("data-target")
		$(thisdiv).collapse("show");
	},

	function(){
		var thisdiv = $(this).attr("data-target")
		$(thisdiv).collapse("hide");
	}
);



$(function(){
	$('#skill').on('mouseenter.collapse.data-api','[data-toggle=collapse]', function(e) {
		var $this = $(this),
		href, target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/,'')
		,
		option = $(target).data('collapse') ? 'show' : $this.data()

		$(target).collapse(option);
	})
});

*/