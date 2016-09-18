
$(function(){

	$("#skilltree").delay(4500).attr('scrollamount',2);

});




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