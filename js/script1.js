$(document).ready(function(){
  $('.plan a').hover( 
	function() {
      $($(this).parents('.plan').children()[0]).css('background-color', '#49CBCD');
	},
	function() {
      $($(this).parents('.plan').children()[0]).css('background-color', '#485460');
	}
  );	
});