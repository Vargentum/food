// JavaScript Document
$(document).ready(function(){
	$('#div_for_figure figure').hover(function(){
		$(this).css({
			'box-shadow' : '0px 0px 6px #CFCFCF',
			'-moz-box-shadow' : '0px 0px 6px #CFCFCF',
			'-0-box-shadow' : '0px 0px 6px #CFCFCF',
			'-ms-box-shadow' : '0px 0px 6px #CFCFCF',
			'-webkit-box-shadow' : '0px 0px 6px #CFCFCF',
			});
		$('p',this).css({
			'text-decoration' : 'underline',
			'color' : '#CD1E2B'
			})	
	},
	function(){
		$(this).css({
		'box-shadow' : 'none',
		'-moz-box-shadow' : 'none',
		'-webkit-box-shadow' : 'none',
		'-o-box-shadow' : 'none',
		'-ms-box-shadow' : 'none'
		});
		$('p',this).css({
			'text-decoration' : 'none',
			'color' : '#474747'
			})
	});
});//end