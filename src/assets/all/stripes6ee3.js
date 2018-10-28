$(document).ready(function() {
    //starter
    var settings = [];

    function starter(e) {
        var t = e.split("");
        for (var n in arrayChars) {
            var r = arrayChars[n];
            if ($.inArray(r.id, settings) !== -1) {
                for (var i in t) {
                    if (i < t.length - 1 || t.length == 1) {
                        t[i] = r.character + t[i] + r.character
                    } else {
                        t[i] = t[i] + r.character
                    }
                }
            }
        }
        $("#output li pre").text(t.join(""));
        $("html, body").animate({
            scrollTop: 0
        }, "fast")
    }
    $('#textin').bind('input', function() {
        $(this).unbind('keyup');
        starter($('#textin').val());
    }).bind('keyup', function() {
        starter($('#textin').val());
    });
    //options
    $("#options span").click(function() {
        var e = $(this).attr("id");
        if ($.inArray(e, settings) !== -1) {
            settings = jQuery.grep(settings, function(t) {
                return t != e
            });
            $(this).removeClass("active")
        } else {
            settings.push(e);
            $(this).addClass("active")
        }
        starter($("#textin").val())
    })
    //output li pre select
    $('#output pre').click(function() {
        selectText($(this).attr('id'));
    });
    //reset fields
    $('.empty').click(function(event) {
        event.preventDefault();
        $('#textin').val('').trigger('autosize.resize');
        starter('');
        $('#textin').focus();
    });
});