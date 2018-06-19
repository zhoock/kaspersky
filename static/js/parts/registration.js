registration: function () {

	// табы формы
	var $info = $(".js-wrapper-forms"),
			$nav = $(".js-enter__nav");

	$("form:not(:first)", $info).hide();

	$("li", $nav).on("click", function (e) {
		$("form", $info).hide();
		$("li", $nav).removeClass("current");
		$(this).addClass("current");

		var clicked = $(this).find("a").data("toggle");

		$(clicked, $info).fadeIn("slow");

		e.preventDefault();

	}).eq(0).addClass("current");


	$('.js_btn_submit').on('click', function (e) {
		e.preventDefault();
		$(this).closest('form').submit();
	});
	$('.btn__cansel').on('click', function (e) {
		e.preventDefault();
		$(this).closest('form')[0].reset();
		$(this).closest('form').find('input').each(function () {
			if ($(this).hasClass('error'))
				$(this).removeClass('error').next('.error').fadeOut('fast', function () {
					$(this).remove();
				});
		});
	});

	$('.b-registration input,.b-login input').on('keyup', function () {
		if ($(this).hasClass('error'))
			$(this).removeClass('error').next('.error').fadeOut('fast', function () {
				$(this).remove();
			});
	});
	$('.b-registration,.b-login').on('submit', function (e) {
		e.preventDefault();
		jqApp.registration.simpleValid($(this));
	});

	jqApp.registration.simpleValid = function ($formObj) {
		$formObj.find('input').each(function () {
			var $this = $(this);
			if ($this.data('validate') && !$this.prop('disabled')) {
				if (!$this.val()) {
					if ($this.next('.error').size() == 0) {
						var $obj = $('<span class="error" style="display: none">' + $this.data('validate') + '</span>');
						$this.addClass('error').after($obj.fadeIn());
					}
					else
						$this.addClass('error');
				}
				else {

					//Check password confirmation
					if ($this.attr('name') === 'pass' || $this.attr('name') === 'pass2') {
						var $form = $this.closest('form');
						var $pass = $form.find('input[name="pass"]');
						var $confirmEl = $form.find('input[name="pass2"]');
						if ($pass.val() != $confirmEl.val()) {
							if ($confirmEl.next('.error').size() == 0) {
								var $obj = $('<span class="error" style="display: none">' + $confirmEl.data('confirmvalidate') + '</span>');
								$confirmEl.addClass('error').after($obj.fadeIn());
							}
							else
								$confirmEl.addClass('error');
						}
						else if ($this.attr('name') === 'pass') {
							if (!checkPwd($this.val())) {
								if ($this.next('.error').size() == 0) {
									var $obj = $('<span class="error" style="display: none">' + $this.data('wrongpass') + '</span>');
									$this.addClass('error').after($obj.fadeIn());
								}
								else {
									$this.next('.error').html($this.data('wrongpass'));
									$this.addClass('error');
								}
							}
						}
					}
					else {
						$this.removeClass('error').next('.error').fadeOut('fast', function () {
							$(this).remove();
						});
					}
				}
			}
		});
	};

	function checkPwd(str) {
		var answer = true;
	    if (str.length < 6) {
	        //return("too_short");
			answer = false;
	    } else if (str.length > 50) {
	        //return("too_long");
			answer = false;
	    } else if (str.search(/\d/) == -1) {
	        //return("no_num");
			answer = false;
	    } else if (str.search(/[a-zA-Z]/) == -1) {
	        //return("no_letter");
			answer = false;
	    } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
	        //return("bad_char");
			answer = false;
	    }
		else {
			answer = true;
		}
	    return answer;
	}
}