$(document).ready(function() {
	//starter
	$('#textin').bind('input',function(){$(this).unbind('keyup');starter($('#textin').val());}).bind('keyup',function(){starter($('#textin').val());});

	//output li pre select
	$('#output pre').click(function(){selectText($(this).attr('id'));});

	//reset fields
	$('.empty').click(function(event){event.preventDefault();$('#textin').val('').trigger('autosize.resize');starter('');$('#textin').focus();});

});

//reversers
function reverseN(s){return s.split("\n").reverse().join("\n");}
function reverse(s){return s.split("").reverse().join("");}