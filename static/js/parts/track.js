trackLoader: function () {
	jqApp.trackLoader.animCars = true;
	jqApp.trackLoader.cars = {};
	Raphael("track_holder", $('#track_holder').width(), ($('#track_holder').width() * 398 / 1193), function () {
		var r = this,
				p = r.path("M679.262,254.876c0,0-58.82,1.489-78.355,3.161 c-23.202,1.988-72.259,13.045-97.396,11.229c-5.093-0.367-16.34-10.141-20.99-12.282c-5.463-2.516-8.521-4.385-14.456-5.27 c-6.055-0.904-18.316,1.341-24.389,2.108c-8.741,1.104-25.993,5.013-34.767,5.797c-10.21,0.912-30.854,2.041-40.994,0.526 c-9.417-1.406-27.996-6.911-36.324-11.595c-7.164-4.029-19.362-15.487-24.907-21.609c-4.326-4.774-11.51-16.245-12.454-22.663 c-1-6.798,0.883-18.531,2.076-25.298c1.132-6.419,7.744-20.902,7.265-27.406c-0.203-2.744-1.502-8.33-3.114-10.541 c-1.113-1.527-4.64-3.21-6.227-4.216c-4.587-2.908-14.864-7.178-18.681-11.068c-4.021-4.098-8.971-14.803-11.417-20.028 c-1.727-3.691-5.808-11.199-5.708-15.284c0.057-2.301,2.021-6.815,3.632-8.433c3.307-3.321,12.627-6.176,17.125-7.378 c13.258-3.547,40.798-5.533,54.485-6.325c4.922-0.284,14.816-0.527,19.719,0c3.694,0.397,11.077,1.769,14.529,3.163 c5.114,2.063,14.667,7.929,18.822,11.595c7.846,6.921,18.458,25.778,26.323,32.677c20.829,18.27,69.32,46.035,94.442,57.448 c5.581,2.536,17.272,6.714,23.351,7.38c5.956,0.652,17.912-2.739,23.87-2.109c4.45,0.471,13.093,3.301,17.124,5.271 c4.54,2.217,12.025,9.464,16.605,11.595c7.439,3.459,23.545,7.334,31.654,8.433c14.659,1.987,44.378,1.119,59.156,0.526 c49.048-1.966,147.354-9.459,196.147-8.959c4.911,0.049,14.638,2.368,19.199,4.215c3.947,1.599,11.43,6.011,14.529,8.961 c2.312,2.199,6.559,7.406,7.266,10.541c0.816,3.622-0.484,11.466-2.335,14.668c-2.555,4.423-11.282,10.506-15.827,12.738 c-8.158,4.009-26.302,7.218-35.286,8.433c-19.043,2.578-57.588,2.543-76.798,2.635C759.426,257.641,679.262,254.876,679.262,254.876").attr({
					stroke: "transparent",
					opacity: 0,
					"stroke-width": 0
				}),
				over = r.path().attr({stroke: "#fff"}),
				len = p.getTotalLength();

		jqApp.trackLoader.cars.e = r.rect(0,0,1,1).data('color', 'red').attr({
			opacity: 0
		});
		jqApp.trackLoader.cars.e2 = r.rect(0,0,1,1).data('color', 'green').attr({
			opacity: 0
		});
		jqApp.trackLoader.cars.e3 = r.rect(0,0,1,1).data('color', 'white').attr({
			opacity: 0
		});

		jqApp.trackLoader.paper = r;

		var c1 = r.circle(188, 182, 12).attr({
					fill: '#FCCC4E',
					stroke: 'transparent'
				}),
				ctext1 = r.text(188, 182, "+").attr({
					'font-size': 16,
					'stroke': 'transparent',
					'stroke-width': 12
				});

		r.setStart();
		var ctext1baloon = r.text(195, 152, "Monza Cathedral").attr({
			fill: '#000',
			'font-size': 14
		});
		var box = ctext1baloon.getBBox();
		var rect = r.rect(box.x - 4, box.y - 4, box.width + 8, box.height + 8).attr({
			'fill': '#FCCC4E',
			'stroke': 'transparent'
		});
		ctext1baloon.toFront();
		var c1Baloon = r.setFinish();

		r.setStart();
		var c2 = r.circle(251, 344, 12).attr({
					fill: '#FCCC4E',
					stroke: 'transparent'
				}),
				ctext2 = r.text(251, 344, "+").attr({
					'font-size': 16,
					'stroke': 'transparent',
					'stroke-width': 12
				});
		c2 = r.setFinish();

		r.setStart();
		var ctext2baloon = r.text(265, 313, "Italian cafe").attr({
			fill: '#000',
			'font-size': 14
		});
		var box = ctext2baloon.getBBox();
		var rect = r.rect(box.x - 4, box.y - 4, box.width + 8, box.height + 8).attr({
			'fill': '#FCCC4E',
			'stroke': 'transparent'
		});
		ctext2baloon.toFront();
		var c2Baloon = r.setFinish();

		r.setStart();
		var c3 = r.circle(515, 353, 12).attr({
					fill: '#FCCC4E',
					stroke: 'transparent'
				}),
				ctext3 = r.text(515, 353, "+").attr({
					'font-size': 16,
					'stroke': 'transparent',
					'stroke-width': 12
				});
		c3 = r.setFinish();

		r.setStart();
		var ctext3baloon = r.text(545, 323, "Monza park").attr({
			fill: '#000',
			'font-size': 14
		});
		var box = ctext3baloon.getBBox();
		var rect = r.rect(box.x - 4, box.y - 4, box.width + 8, box.height + 8).attr({
			'fill': '#FCCC4E',
			'stroke': 'transparent'
		});
		ctext3baloon.toFront();
		var c3Baloon = r.setFinish();

		/**
		 * Baloon animation
		 */
		var baloons = [c1Baloon, c2Baloon, c3Baloon];
		var plusButtons = [ctext1, ctext2, ctext3];
		var plusDots = [c1, c2, c3];

		var showDots = function (index) {
			baloons[index].attr({
				'opacity': 0
			})
			plusButtons[index].mouseover(function () {
				this[0].style.cursor = "default";
				plusDots[index].animate({
					'r': 15
				}, 300, 'elastic');
				baloons[index].animate({
					'opacity': 1
				}, 300);
			}).mouseout(function () {
				plusDots[index].animate({
					'r': 12
				}, 300, 'elastic')
				baloons[index].animate({
					'opacity': 0
				}, 300);
			});
		}

		for (var i = 0; i <= 2; i++) {
			showDots(i);
		}
		/**
		 * end Baloon animation
		 */

		r.setViewBox(0, 0, 1193, 398, false);

		var positions = new Array();
		var positionsAngles = new Array();
		var start = null;
		var end = null;

		for (len = 0; len <= p.getTotalLength(); len++) {
			if (!start)
				start = p.getPointAtLength(0);
			end = p.getPointAtLength(len);
			positions.push(end);
			positionsAngles.push(Raphael.angle(end.x, end.y, start.x, start.y));
			start = end;
		}

		//console.log(positions.length,positionsAngles.length);

		r.customAttributes.along = function (v) {
			var l = Math.round(v * len);
			if (l == positions.length)
				l -= 1;
			var point = positions[l];
			var i_src = getCarByAngle(positionsAngles[l]);

			var pos = {
				left: point.x,
				top: point.y,
				offset: -30
			};
			var trackwidth = $('#track_holder').width();
			var trackheigt = $('#track_holder').height();
			if (trackwidth < 1193) {
				pos.scaleW = trackwidth/1193;
				pos.scaleH = trackheigt/398;
				pos.left = point.x*pos.scaleW;
				pos.top = point.y*pos.scaleH;
			}

			this.data('v',v);

			$('#'+this.data('color')+'car').removeClass().addClass(' sprite-car-'+this.data('color')+' sprite-car'+i_src).css({
				left: pos.left,
				top: pos.top,
				transform: 'scale('+0.75*pos.scaleW+')'
			});

			//return {
			//	src: '/static/css/blocks/b-index/cars/' + this.data('color') + '/' + i_src,
			//	transform: "t" + [point.x - 30, point.y - 30]
			//};
		};

		jqApp.trackLoader.cars.e.attr({along: 0});
		jqApp.trackLoader.cars.e2.attr({along: 0});
		jqApp.trackLoader.cars.e3.attr({along: 0});

		function runOne(v) {
			var time = (v?(12500*(1-v)):12500);
			jqApp.trackLoader.cars.e.animate({along: 1}, time, function () {
				jqApp.trackLoader.cars.e.attr({along: 0});
				setTimeout(runOne);
			});
		}

		function runTwo(v) {
			var time = (v?(14500*(1-v)):14500);
			jqApp.trackLoader.cars.e2.animate({along: 1}, time, function () {
				jqApp.trackLoader.cars.e2.attr({along: 0});
				setTimeout(runTwo);
			});
		}

		function runThree(v) {
			var time = (v?(16500*(1-v)):16500);
			jqApp.trackLoader.cars.e3.animate({along: 1}, time, function () {
				jqApp.trackLoader.cars.e3.attr({along: 0});
				setTimeout(runThree);
			});
		}

		function getCarByAngle(angle) {
			degName = Math.abs(Math.ceil(angle / 4) - 90);
			return degName;

		}

		runOne();
		setTimeout(runTwo, 500);
		setTimeout(runThree, 1000);

		$(window).on('DOMContentLoaded load resize scroll', function() {
			checkCarsVisibility();
		});

		function checkCarsVisibility() {
			if (!isElementInViewport($('#track_holder'))) {
				jqApp.trackLoader.animCars = false;
				if (jqApp.trackLoader.cars.e) {
					jqApp.trackLoader.cars.e.stop();
					jqApp.trackLoader.cars.e2.stop();
					jqApp.trackLoader.cars.e3.stop();
					jqApp.trackLoader.cars.animated = false;
				}
			}
			else {
				jqApp.trackLoader.animCars = true;
				if (jqApp.trackLoader.cars.e && !jqApp.trackLoader.cars.animated) {
					runOne(jqApp.trackLoader.cars.e.data('v'));
					runTwo(jqApp.trackLoader.cars.e2.data('v'));
					runThree(jqApp.trackLoader.cars.e3.data('v'));
					jqApp.trackLoader.cars.animated = true;
				}
			}
		}

		function isElementInViewport(el) {
			//special bonus for those using jQuery
			if (typeof jQuery === "function" && el instanceof jQuery) {
				el = el[0];
			}

			var rect = el.getBoundingClientRect();

			return (
					(rect.top >= 0 && (rect.bottom + $(el).outerHeight()) < (window.innerHeight || document.documentElement.clientHeight))
					||
					(rect.bottom >= 110)
					&&
					(rect.left >= 0 &&
					rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
					)
			);
		}
	});
	$(window).resize(function () {
		if (jqApp.trackLoader.paper) {
			w = $('#track_holder').width();
			jqApp.trackLoader.paper.setSize(w, (w * 398 / 1193));
		}
	});
}