/**
 * Share to social network
 * @param type {string} social type
 * @param obj {obj} DOM object
 * @return {boolean}
 */

socialShare: function ($obj) {
	var type, share, popupWindowOptions, shareUrl, shareTitle;
	type = $obj.attr('class');
	if (type) {
		popupWindowOptions = [
			'left=50%',
			'marginnLeft=-250px',
			'top=50%',
			'marginTop=150px',
			'width=500',
			'height=250',
			'personalbar=0',
			'toolbar=0',
			'scrollbars=1',
			'resizable=1'
		];
		share = {
			shareTitle: $obj.data('sharetitle'),
			shareImage: $obj.data('shareimage'),
			shareText: $obj.data('sharetext'),
			shareLink: $obj.data('sharelink')
		};

		shareUrl = null;
		if (type == 'google') {
			shareUrl = 'https://plus.google.com/share?' +
			'url=' + encodeURIComponent(share.shareLink)
			'prefilltext=asasda'
		}

		if (type == 'tw') {
			shareTitle = share.shareTitle;
			if (shareTitle.length > 110) {
				shareTitle = shareTitle.trunc(110);
			}
			console.log(share.shareTitle,shareTitle);
			shareUrl = 'https://twitter.com/share'
			+ '?url=' + encodeURIComponent(share.shareLink)
			+ '&text=' + encodeURIComponent(shareTitle)
		}

		if (type == 'fb') {
			FB.ui({
						method: 'feed',
						name: htmlDecode(share.shareTitle),
						link: share.shareLink,
						picture: (share.shareImage ? share.shareImage : ''),
						caption: 'moto.kaspersky.ru',
						description: htmlDecode(share.shareText)
					}, function (response) {
						if (response && response.post_id) {
							//success
						} else {
							//fail
						}
					}
			);
		} else {
			var newWindow = window.open(shareUrl, '', popupWindowOptions);

			if (window.focus) {
				newWindow.focus();
			}
		}
	}
	return false;
}