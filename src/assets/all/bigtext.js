$(document).ready(function() {
	//set standard text onload
	$("#output pre").figlet("Big text","standard");
	//starter on textin
	$("#textin").bind("input",function(){$(this).unbind("keyup");starter($("#textin").val());}).bind("keyup",function(){starter($("#textin").val());});
	//output li pre select
	$("#output pre").click(function(){selectText($(this).attr("id"));});
	//reset fields
	$('.empty').click(function(event){event.preventDefault();$('#textin').val('');starter('');$('#textin').focus();$("#output pre").figlet("Big text","standard");});
});
//starter
function starter(){var e=$("#textin").val();var t=$(".selector .selected").find("a").attr("data-cat");if(e!=""){e=stripAccents(e);e=e.replace(/[^(\x20-\x7F]+/gi,"?");$("#output pre").figlet(e,t)}else{$("#output pre").text("")}}
//starter on selector
function selectorChoice(choice){starter()}

/*
 * Figlet JS jQuery Plugin
 * 
 * Copyright (c) 2010 Scott González
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * http://github.com/scottgonzalez/figlet-js
 */
(function() {

var Figlet = (typeof exports !== "undefined" ? exports : window).Figlet = {
	fonts: {},
	
	parseFont: function(name, fn) {
		if (name in Figlet.fonts) {
			fn();
			return;
		}
		
		Figlet.loadFont(name, function(defn) {
			Figlet._parseFont(name, defn, fn);
		});
	},
	
	_parseFont: function(name, defn, fn) {
		var lines = defn.split("\n"),
			header = lines[0].split(" "),
			hardblank = header[0].charAt(header[0].length - 1),
			height = +header[1],
			comments = +header[5];
		
		Figlet.fonts[name] = {
			defn: lines.slice(comments + 1),
			hardblank: hardblank,
			height: height,
			char: {}
		};
		fn();
	},
	
	parseChar: function(char, font) {
		var fontDefn = Figlet.fonts[font];
		if (char in fontDefn.char) {
			return fontDefn.char[char];
		}
		
		var height = fontDefn.height,
			start = (char - 32) * height,
			charDefn = [],
			i;
		for (i = 0; i < height; i++) {
			charDefn[i] = fontDefn.defn[start + i]
				.replace(/@/g, "")
				.replace(RegExp("\\" + fontDefn.hardblank, "g"), " ");
		}
		return fontDefn.char[char] = charDefn;
	},

	write: function(str, font, fn) {
		Figlet.parseFont(font, function() {
			var chars = [],
				result = "";
			for (var i = 0, len = str.length; i < len; i++) {
				chars[i] = Figlet.parseChar(str.charCodeAt(i), font);
			}
			for (i = 0, height = chars[0].length; i < height; i++) {
				for (var j = 0; j < len; j++) {
					result += chars[j][i];
				}
				result += "\n";
			}
			fn(result);
		});
	}
};

})();


(function($) {

Figlet.loadFont = function(name, fn) {
	$.ajax({
		url: "/scripts/bigtextFonts/" + name + ".flf",
		dataType: "text",
		success: fn
	});
};

$.fn.figlet = function(text, font) {
	var elems = this;
	Figlet.write(text, font || $.fn.figlet.defaultFont, function(str) {
		elems.text(str);
	});
	return this;
};

$.fn.figlet.defaultFont = "standard";

})(jQuery);