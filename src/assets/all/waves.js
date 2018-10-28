/*transfer text to output on click*/
$("#waves span").click(function(){var data = $("#textin").val();var add = $(this).text();if(data == $("#textin").attr("data-value")){data = "";}$("#textin").focus().val("").val(data + add);});

/*select on click*/
var clicked = 0;
$("#textin").click(function() {if($(this).val() != $(this).attr("data-value") || $(this).val() != ""){var tmp = $(this);if(clicked == 0){tmp.select();clicked = 1;}}}).blur(function(){clicked = 0;});

/*scrolling bar*/
var offset = $("#input").offset();var topPadding = 100;$(window).on("load scroll",function(e){if($(window).scrollTop() > offset.top){$("#input").stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});}else{$("#input").stop().animate({marginTop: 0});};});

//reset fields
$('.empty').click(function(event){event.preventDefault();$('#textin').val('');$('#textin').focus();});
