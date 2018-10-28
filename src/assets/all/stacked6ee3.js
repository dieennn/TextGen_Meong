	//the Unicode combining diacritics are acdehimortuvx
	var arrReplace = {a:"ͣ",c:"ͨ",d:"ͩ",e:"ͤ",h:"ͪ",i:"ͥ",m:"ͫ",o:"ͦ",r:"ͬ",t:"ͭ",u:"ͧ",v:"ͮ",x:"ͯ"," ":" "};
	//the backup plan with fullsized characters
	var arrReplaceFaux = {a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ᶤ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ᶰ",o:"ᵒ",p:"ᵖ",q:"ᵠ",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ"," ":" "};
	
	function starter(){	
		
		var textTop = $('#textinTop').val().toLowerCase();var textBottom = $('#textinBottom').val();var output = "";

		//if standard value, skip doing anything with the toptext
		if($('#textinBottom').val() == $('#textinBottom').attr("data-value")){
			textBottom = "";
		}
		if($('#textinTop').val() == $('#textinTop').attr("data-value")){
			textTop = "";
		}else{
			//sanitize the top input, as that one requires it to be ONLY a-z
			var arr = textTop.split('');var tmpAlert = 0;
			$.each( arr, function( index, value ) {
				if (!arrReplaceFaux[value]){
					arr[index] = '';
					tmpAlert = 1;
				}
			});
			var textTop = arr.join('');
			if(tmpAlert == 1){alert('Only a-z and spaces');tmpAlert = 0;}
			$('#textinTop').val(textTop);
		}

		if(textTop.length == 0){
			//nothing to do, so chuck textBottom in output
			output = textBottom;
		}else if(textBottom.length == 0){
			//nothing to do (kind of), so chuck converted Faux textTop in output
			var i = 0;
			var arrTop = textTop.split('');
			while(i < arrTop.length){
				if(arrReplaceFaux[arrTop[i]]){
					output = output+arrReplaceFaux[arrTop[i]];	
				}
				i++;
			}
		}		
		else{
			//okay, so something needs to be done! Work work work!
			var arrTop = textTop.split('');
			var arrBottom = textBottom.split('');
			var currentTop = 0;var left = "";var right="";

			$.each( arrBottom, function( index, value ) {

				if(arrTop[currentTop] && !arrReplace[arrTop[currentTop]]){
					if(arrReplaceFaux[arrTop[currentTop]]){
						//skip one for the space
						if(arrTop[currentTop] != " "){
							left = arrReplaceFaux[arrTop[currentTop]];
						}
						currentTop = currentTop+1;
					}
				}
				
				if(arrTop[currentTop] && arrReplace[arrTop[currentTop]]){
					//skip one for the space
					if(arrTop[currentTop] != " "){
						right = arrReplace[arrTop[currentTop]];
					}
					currentTop = currentTop+1;
				}

				output = output+left+arrBottom[index]+right;left="";right="";

				//no more bottoms left, but top is still keen
				if(!arrBottom[index+1]){
					var i = currentTop;
					while(i < arrTop.length){
						if(arrReplaceFaux[arrTop[i]]){
							output = output+arrReplaceFaux[arrTop[i]];	
						}
						i++;
					}
				}
			});

		}
		$('#stacked').text(output);
	};

	//starter call for input
	$('#textinTop, #textinBottom').on('input',function(e){starter();});

$(document).ready(function() {
	//textin standard value
	$("#textinTop, #textinBottom").focus(function(){var e=$(this).attr("data-value");if($(this).val()==e){$(this).val("");}$(this).css({cursor:"text"})}).blur(function(){var e=$(this).attr("data-value");if($(this).val()==""){$(this).val(e);$(this).css({cursor:"pointer"})}})

	//output li pre select
	$('#output pre').click(function(){selectText($(this).attr('id'));});

	//reset fields
	$('.empty.top').click(function(event){event.preventDefault();$('#textinTop').val('');starter();$('#textinTop').focus();});
	$('.empty.bottom').click(function(event){event.preventDefault();$('#textinBottom').val('');starter();$('#textinBottom').focus();});
});