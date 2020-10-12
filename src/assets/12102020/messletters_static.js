$(document).ready(function () {
  var settings = [];
  $('#options .optionToggle').click(function () {
    var id = $(this).attr('id');
    if ($.inArray(id, settings) !== -1) {
      settings = jQuery.grep(settings, function (value) {
        return value != id;
      });
      $(this).removeClass('active');
    } else {
      settings.push(id);
      $(this).addClass('active');
    }
    starter($('#textin').val());
  });

  function starter(textin) {
    if (settings.length > 0) {
      var input_text_array = textin.split('');
      if ($.inArray('checkReverse', settings) !== -1) {
        input_text_array = input_text_array.reverse();
      }
      var tmp = [];
      for (var i in input_text_array) {
        var char = input_text_array[i];
        if ($.inArray('checkBreeze', settings) !== -1) {
          if (i & 1) {
            char = char.toUpperCase();
          } else {
            char = char.toLowerCase();
          }
        }
        if ($.inArray('checkUpperline', settings) !== -1) {
          char = char + '̅';
        }
        if ($.inArray('checkUnderline', settings) !== -1) {
          char = char + '̲';
        }
        if ($.inArray('checkStrike', settings) !== -1) {
          char = char + '̶';
        }
        if ($.inArray('checkWave', settings) !== -1) {
          if (input_text_array[i] != ' ') {
            char = char + '̃';
          }
        }
        if ($.inArray('checkSmoke', settings) !== -1) {
          if (input_text_array[i] != ' ') {
            char = '͕͗' + char + '͕͗';
          }
        }
        if ($.inArray('checkBox', settings) !== -1) {
          if (input_text_array[i] != ' ') {
            char = '[̲̅' + char + '̲̅]';
          }
        }
        tmp.push(char);
      }
      var input_text_array = tmp;
      textin = input_text_array.join('');
    }
    var foreignChars = {
      "ä": "ä",
      "á": "á",
      "à": "à",
      "â": "â",
      "ã": "ã",
      "ç": "ç",
      "ë": "ë",
      "é": "é",
      "è": "è",
      "ê": "ê",
      "ï": "ï",
      "í": "í",
      "ì": "ì",
      "î": "î",
      "ñ": "ñ",
      "ö": "ö",
      "ó": "ó",
      "ò": "ò",
      "ő": "ő",
      "ô": "ô",
      "õ": "õ",
      "ü": "ü",
      "ú": "ú",
      "ù": "ù",
      "ű": "ű",
      "û": "û",
      "ӳ": "y̋",
      "Ä": "Ä",
      "Á": "Á",
      "À": "À",
      "Â": "Â",
      "Ã": "Ã",
      "Ç": "Ç",
      "Ë": "Ë",
      "É": "É",
      "È": "È",
      "Ê": "Ê",
      "Ï": "Ï",
      "Í": "Í",
      "Ì": "Ì",
      "Î": "Î",
      "Ñ": "Ñ",
      "Ö": "Ö",
      "Ó": "Ó",
      "Ò": "Ò",
      "Ő": "Ő",
      "Ô": "Ô",
      "Õ": "Õ",
      "Ü": "Ü",
      "Ú": "Ú",
      "Ù": "Ù",
      "Ű": "Ű",
      "Û": "Û",
      "Ӳ": "Y̋"
    };
    textin = strtr(textin, foreignChars);
    for (var mess_index_key in mess_index) {
      var tmp = mess_index[mess_index_key]['id'];
      let experimental = 1;
      if (experimental == 0 && mess_index[mess_index_key]['experimental'] == 1) {} else {
        textout = textin;
        textout = strtr(textout, arrayReplace[tmp]);
        $('#output' + tmp + ' .output').text(textout);
      }
    }
  }
  $('#textin').bind('input', function () {
    $(this).unbind('keyup');
    starter($('#textin').val());
  }).bind('keyup', function () {
    starter($('#textin').val());
  });
  $('.go').click(function () {
    starter($('#textin').val());
  });
  $('.empty').click(function (event) {
    event.preventDefault();
    $('#textin').val('').trigger('autosize.resize');
    settings = [];
    $('#options li').removeClass('active');
    starter('');
    $('#textin').focus();
  });

  function searchReset() {
    $('.field').show();
    $('.MessOutputGad').show();
    $('#output .tmppread').addClass('pread');
    $('#output .pread').removeClass('tmppread');
    $('#output .ad').attr('style', '');
    $('.search .reset').hide();
    $('.search input').val('');
    $('#searchMsg').hide();
  }
  $("#search").on("input", function () {
    if ($(this).val() != "") {
      $('.MessOutputGad').hide();
      $('#output .pread').addClass('tmppread');
      $('#output .pread').removeClass('pread');
      $('#output .ad').hide();
      $('.field').hide();
      if (!$('[data-search*="' + $(this).val().toLowerCase() + '"]').show().length) {
        $('#searchMsg').html('<p>' + $('#searchMsg').attr('data-searchMsg') + '</p>').show();
      } else {
        $('#searchMsg').hide();
      }
      $('.search .reset').show();
    } else {
      searchReset();
    }
  });
  $('.search .reset').click(function () {
    searchReset();
  });
  $('#textin').focus(function () {
    var e = $(this).attr("data-value");
    if ($(this).val() == e) {
      $(this).val('').trigger('autosize.resize')
    }
    $(this).css({
      cursor: "text"
    })
  }).blur(function () {
    var e = $(this).attr("data-value");
    if ($(this).val() == '') {
      $(this).val(e).trigger('autosize.resize');
      $(this).css({
        cursor: 'pointer'
      })
    }
  })
  var processing = false;

  function vote(el) {
    processing = true;
    var sibling = el.siblings('[data-vote]');
    var item = el.attr("data-vote").split('-');
    var id = item[0];
    var vote = item[1];
    var removesibling = 0;
    if (el.hasClass('active')) {
      el.removeClass('active');
      action = 0;
    } else {
      el.addClass('active');
      action = 1;
      if (sibling.hasClass('active')) {
        sibling.removeClass('active');
        removesibling = 1;
      }
    }
    $.post("/scripts/popular.php", {
      type: "messletters",
      id: id,
      vote: vote,
      removesibling: removesibling,
      action: action
    }, function (data, status) {
      processing = false;
    });
  };

  function votechecker(el) {
    if (processing) {
      setTimeout(function () {
        votechecker(el);
      }, 100);
    } else {
      vote(el);
    }
  }
  $('[data-vote]').click(function () {
    votechecker($(this));
  });
  $('.copy').click(function () {
    var el = $(this).closest('.field').find('.output');
    if (el.text().length) {
      if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        event.preventDefault();
        el.focus();
        document.execCommand('selectAll', false, null);
        document.execCommand('copy');
        document.getSelection().removeAllRanges();
        el.blur();
      } else {
        var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(el.text()).select();
        document.execCommand("copy");
        $temp.remove();
      }
      $('.msgCopy').remove();
      $(this).append('<div class="msgCopy">Copied!</div>').fadeIn(300);
      $('.msgCopy').delay(900).fadeOut(900, function () {
        $(this).remove()
      });
    }
  });
  var clicked = 0;
  $(".output").click(function () {
    var tmp = $(this);
    if (clicked == 0) {
      document.execCommand('selectAll', false, null);
      clicked = 1;
    }
  }).blur(function () {
    clicked = 0;
  });
});