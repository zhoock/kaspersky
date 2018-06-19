maploading: function () {

	canvasMap = {
		ctx: null,

		init: function () {
			var canvas = document.getElementById('mapcanvas');
			this.ctx = canvas.getContext('2d');
			this.cw = canvas.width;
			this.ch = canvas.height;
			this.ctx.lineWidth = 0.5;

			this.drawMap();

			//this.highlightCountry();
			//setTimeout(scaleMap, 2000)
		},

		drawMap: function () {
			this.ctx.strokeStyle = '#90908F';
			this.ctx.fillStyle = '#525252'

			var paths = [];
			// console.log(paths);
			for (var i = 0, len = mapPaths.shapes.length; i < len; i++) {
				var p = new Path2D(mapPaths.shapes[i]);
				this.ctx.stroke(p);
				this.ctx.fill(p);
			}
		},

		highlightCountry: function () {
			var p = new Path2D('M795.663,359.542l-0.314-0.962l0.604-1.356h-1.41l-1.478-0.969 l-0.199-2.326l-1.141-1.164l0.671-0.71l1.075-0.129l0.265-1.485l-0.87-0.774l-0.133-1.099l0.402-0.452l1.073,0.387l1.812-1.292 l1.209,0.517l1.679-2.779l1.073,0.647l-0.136,1.034l1.48,0.71l0.468,0.904l0.939-1.615v-1.227l2.015,0.517l0.806-0.066 l0.806,0.646l0.201-1.679l1.813-0.388l-0.472-1.422l0.939-1.099l1.547,0.646l2.416-1.356l1.006,0.259l1.609-0.13l-0.133,0.904 l2.282,1.292l2.819,0.517l1.545-0.128l0.669,0.58l-1.07,1.486l0.331,0.71l-0.601,0.904l0.226,1.527l-1.048-0.252l-0.633,0.305 l-0.669,0.643h-1.019l-0.953,0.812l-1.018,0.135l-0.354,0.678l0.497,0.948l0.631,0.778l-0.705,1.014l-0.423,0.339l0.531,1.118 l0.138,1.286l0.493,0.677l2.043,1.049l1.124,0.576l0.562,0.744l3.026,2.945l0.07,0.778l0.387,0.204l0.036,0.915l0.633,0.88 l0.845,0.83l0.666,0.999l1.364,1.014l0.657,0.649l0.862,0.165l0.599,0.346l1.759-0.008l0.739,0.203l1.126-0.169l0.81,0.406 l-0.177,0.608l-1.159,0.78l-0.034,0.404l0.452,0.712h0.952l1.76,0.407l3.658,1.896l1.425,1.025l0.931,0.938l1.513,0.373 l0.771,0.514l0.354,0.604l-0.142,1.15l-0.393,0.55l0.112,0.726l-0.251,0.196l-0.039,0.257l-0.821-0.33l-0.644-0.78l-0.389-0.82 l0.109-0.674l-0.504-0.29l-1.435-0.02l-0.284-0.406l-0.947-0.439l-0.63,0.083l-0.424,0.255l-0.318,1.085l-0.527,0.542 l0.052,0.576l-0.159,0.676l-0.67,0.44l0.008,0.664l0.312,0.453l0.737,0.104l1.303,1.183l0.254,0.51l-0.15,1.15l0.247,0.407 l-0.316,0.642l-0.81,0.203l-0.773,0.78l-0.106,2.064l-1.264,0.982l-0.176,0.947l-0.67,0.88l-1.338,0.102l-1.021-0.982 l-0.034-0.678l0.224-0.34l0.563-0.302l0.55-0.61l0.119-0.846l-0.119-0.88l0.267-0.153l0.368-0.017l0.492-0.576l0.034-0.813 l-0.526-0.743l-0.389-1.592l-0.493-0.61l-0.21-1.355l-0.423-1.42l-0.667-0.406l-0.526,0.305l-1.196-0.271l-0.389-0.745 l-0.947-0.068l-0.459-0.439l0.213-0.372l0.104-0.88l-0.597-0.745l-0.844-0.069l-0.811,0.036l0.07-0.611l-0.773-0.271 l-0.527,0.204l-0.599-0.372l-0.983-1.76l-0.917-0.068l-0.95-0.374l-0.595,0.542h-0.845l-0.177-0.744l-0.773-0.508l-0.879-0.136 l-1.833-1.321l-1.896-2.334l-0.601-0.203l-0.173-0.711l-0.846-1.083l-1.336-0.034l-0.142-0.812l-1.269-1.15l-0.703-0.847 l-1.091-0.508l0.037-1.254l-0.738-0.438l-0.036-0.78l-0.842-1.32l-0.377-0.688l-0.266-0.48l-0.389-0.712l-1.362-0.388 l-0.913-0.575l-3.097-0.778l-2.394,1.285l-0.034,0.745l-0.812,0.982L795.663,359.542L795.663,359.542z M799.068,374.638 l0.302-0.042l0.076-0.404l0.392-0.42l-0.366-0.308l-0.151,0.437l-0.287,0.153L799.068,374.638L799.068,374.638z M810.909,367.346 l0.538,0.242l-0.186-0.403L810.909,367.346L810.909,367.346z M807.218,364.788l-0.405,0.405l0.504,0.193l0.957-0.323l0.739,0.032 l-0.118-0.484l-0.436-0.501l-0.218,0.291L807.218,364.788L807.218,364.788z M801.479,386.685l0.351-0.203l0.456,0.203l0.669-0.27 l0.07-1.016l0.279-0.608l0.883,0.066l0.561,0.542h0.529l0.353-0.644v-1.658l0.176-0.474l-0.212-1.793l0.351-1.625l-1.196-1.015 l1.021-0.645l0.141-0.677l-0.246-1.049l-0.6-0.643l-0.669-1.186l-0.349,0.338l-0.811-0.609l-0.703,0.068l-1.688,1.93l-0.74,0.032 l-1.054-0.61v0.983l-0.177,0.642l0.737,0.713l0.178,0.676l0.595,0.508v1.049l-0.665,0.677l0.28,0.542l0.915,0.068v0.372 l-0.562,0.643l-0.423,1.556l0.385,0.577l0.46,1.829L801.479,386.685L801.479,386.685z M830.922,398.467l-0.073-1.117l0.46-0.543 l-0.105-0.981l-0.846-1.117l0.846-2.167l0.845-0.744l0.173-1.185l-0.699-0.813l-1.164,1.083l-0.491-0.068l-1.021-0.54 l-0.985,1.015l-2.109-0.135l-1.725,0.508l-1.231-0.238l-0.878-0.575l-1.02,0.102l-0.564,0.439l-0.316-0.407l-1.126,0.509 l-0.138,1.456l0.983,0.881l0.983-0.171l1.759,1.151l0.949,0.238l0.88,0.915l2.078,0.743l0.423-0.27l0.91,0.643l0.176,0.71 l2.149,0.814L830.922,398.467z');
			this.ctx.fillStyle = '#CEA54E'
			this.ctx.fillOpacity = 0;
			this.ctx.stroke(p);
			this.ctx.fill(p);
		},

		angle: 1,
		offset: 1,
		linewidth: 1,

		scaleMap: function () {
			this.ctx.clearRect(0, 0, this.cw, this.ch);
			this.ctx.save();
			this.ctx.setTransform(1, 0, 0, 1, 0, 0);
			this.ctx.translate(-this.offset, -this.offset * 0.44);
			this.ctx.scale(this.angle, this.angle);
			this.ctx.lineWidth = this.linewidth;

			this.drawMap();

			this.highlightCountry();
			this.ctx.restore;

			this.angle += 1.888*2;
			this.offset += 1520*2;
			this.linewidth -= 0.0025/2;
			if (this.offset >= 198560) {
				clearInterval(this.intervalTimer);
				if (this.intervalCallback && typeof this.intervalCallback === "function")
					this.intervalCallback();
			}
		},

		interval: function(intervalCallback) {
			this.intervalCallback = intervalCallback;
			var that = this;
			this.intervalTimer = setInterval(function(){
				that.scaleMap.apply(that);
			},1);
		}
	}

	var storageDate = localStorage.getItem('maploader');
	var cDate = new Date().getTime();
	var debug = ((storageDate && storageDate >= cDate) ? true : false);
	if (!debug && storageDate)
		localStorage.removeItem('maploader');
	//var debug = true;
	//var fulldebug = true;
	var fulldebug = false;

	jqApp.maploading.cities = [];
	jqApp.maploading.citiesT = [];
	jqApp.maploading.races = [];
	jqApp.maploading.paper = null;
	jqApp.maploading.elements = {};

	if (fulldebug) {
		$('.mainpage').removeClass('mainpage');
		$('.maploader').remove();
		return false;
	}

	if (!debug) {
		Raphael('maploader', '100%', '100%', function () {
			var r = this;
			jqApp.maploading.paper = r;
			r.setViewBox(0, 0, 1600, 900, true);

			r.setStart();
			var loader = drawpath(r, mapLoader, 2500, {
				'fill': 'transparent',
				'fill-opacity': 0,
				'stroke': '#fff',
				'stroke-width': 3,
				'transform': 't600,280'
			}, null);

			var circle = r.circle(795, 445, 290).attr({
				'stroke': '#FBCA64',
				'stroke-opacity': 0,
				'stroke-width': 10
			});
			var circleLoader = drawpath(r, circle.getPath(), 2500, {
				'stroke': '#FBCA64',
				'stroke-width': 10,
			}, null);

			jqApp.maploading.elements.loader = r.setFinish();

			setTimeout(function () {
				jqApp.maploading.elements.loader.animate({
					'opacity': 0
				}, 500);
			},2500)
			setTimeout(function () {
				//if (mapData) {
				if (!jQuery.browser.opera) {
					canvasMap.init();
				}
				else {
					jqApp.maploading.paper.image("/css/blocks/b-index/map_static.png", 0, 0, 1600, 897);
				}
					initMapElements()
				//}
				//else
				//	initTimerProgress = false;
			}, 3000);
		});
		

		function initMapElements() {
			var r = jqApp.maploading.paper;

			/**
			 * Рисуем города где проводятся гонки
			 */

			jqApp.maploading.elements.titleRows = [];
			var ww_ = $(window).width();
			for (var row in raceTitle) {
				var row_ = raceTitle[row];
				r.setStart();
				for (var el in row_) {
					r.path(row_[el][1]).attr({
						"stroke": "transparent",
						"fill-opacity": 1,
						"fill": row_[el][0],
						"transform": 't-' + ww_ + ',0'
					});
				}
				jqApp.maploading.elements.titleRows.push(r.setFinish());
			}

			/**
			 * Рисуем города где проводятся гонки
			 */
			r.setStart();
			for (var city in mapCities) {
				$city = r.path(mapCities[city]).attr({
					"stroke": "transparent",
					"fill-opacity": 0,
					"fill": "#CDCDCB"
				});
				jqApp.maploading.cities.push($city);
			}
			jqApp.maploading.elements.dots = r.setFinish();


			/**
			 * Заголовки городов где проводятся гонки
			 */
			r.setStart();
			for (var cityT in mapCitiesTitles) {
				// hot fix for Italy - Monza
				if (cityT <= 101 || cityT >= 107) {
					$cityT = r.path(mapCitiesTitles[cityT]).attr({
						"stroke": "transparent",
						"fill-opacity": 0,
						"fill": "#CDCDCB"
					});
					jqApp.maploading.citiesT.push($cityT);
				}
			}
			jqApp.maploading.elements.dotsNames = r.setFinish();

			jqApp.maploading.animateCities();

			jqApp.maploading.animateCitiesTitle();

			$('.maploader .spin').hide();

			/**
			 * Вылетают заголовки
			 */
			var titleRowsTiming = 0;
			$(jqApp.maploading.elements.titleRows).each(function () {
				var $this = this;
				setTimeout(function () {
					$this.animate({
						"transform": 't0,0'
					}, 500, '<');
				}, titleRowsTiming);
				titleRowsTiming += 400;
			});

			setTimeout(function () {
				/**
				 * Рисуем места проедения конкурсов
				 */
				r.setStart();
				for (var race in mapRaces) {
					$race = r.circle(mapRaces[race][0], mapRaces[race][1], 4.5).attr({
						"fill": "#1A3249",
						"stroke": "#0D7260",
						"stroke-width": 3,
						"stroke-opacity": 0,
						"fill-opacity": 0
					});
					jqApp.maploading.races.push($race);
				}
				jqApp.maploading.elements.dotsRaces = r.setFinish();
				jqApp.maploading.animateRaces();
			}, 2000);
		}

		jqApp.maploading.animateCities = function () {

			var timing = 0;

			$(jqApp.maploading.cities).each(function (indx) {
				setTimeout(function () {
					jqApp.maploading.cities[indx].animate({
						"fill-opacity": 1
					}, 200)
				}, timing);
				timing += 100;
			});

		}
		jqApp.maploading.animateCitiesTitle = function () {

			var timing = 0;

			$(jqApp.maploading.citiesT).each(function (indx) {
				setTimeout(function () {
					jqApp.maploading.citiesT[indx].animate({
						"fill-opacity": 1
					}, 200)
				}, timing);
				timing += 5;
			});

		}

		jqApp.maploading.animateRaces = function () {
			var timing = 0;

			jqApp.maploading.elements.racePaths = [];
			$(jqApp.maploading.races).each(function (indx) {
				setTimeout(function () {
					jqApp.maploading.races[indx].animate({
						"stroke-opacity": 1,
						"fill-opacity": 1
					}, 2000, "elastic", function () {

					});
					if (indx < 3) {
						var res = drawpath(jqApp.maploading.paper, mapRacespaths[indx], 1000, {
							'fill': 'transparent',
							'fill-opacity': 0,
							'stroke': '#0D7260',
							'stroke-width': 3
						}, null);
						jqApp.maploading.elements.racePaths.push(res);
					}
					if (indx == 3) {
						setTimeout(jqApp.maploading.moveMap, 500);
					}
				}, timing);
				timing += 1000;
			});

		}

		jqApp.maploading.moveMap = function () {
			if (!jQuery.browser.opera) {
				canvasMap.highlightCountry();
			}
			jqApp.maploading.removeDots(0);
		}

		jqApp.maploading.removeDots = function (index) {
			jqApp.maploading.elements.dotsRaces[index].animate({
				opacity: 0
			}, 100, function () {
				if (index == 3) {
					jqApp.maploading.scaleMap();
				}
				if (index < 3) {
					jqApp.maploading.elements.racePaths[index].animate({
						'opacity': 0
					}, 500, function () {
						this.remove();
						jqApp.maploading.removeDots(index + 1);
					})
				}
			})
		}

		//hotfix - defaultscrolltop
		$('html, body').animate({
			scrollTop: 0
		}, 900);

		jqApp.maploading.scaleMap = function () {
			jqApp.maploading.elements.dots.animate({
				'transform': 's0.1'
			}, 2500, function () {
				jqApp.maploading.elements.dots.remove();
				delete jqApp.maploading.elements.dots;
			})
			jqApp.maploading.elements.dotsNames.animate({
				'fill-opacity': 0
			}, 1500, function () {
				jqApp.maploading.elements.dotsNames.remove();
				delete jqApp.maploading.elements.dotsNames;
			})
			jqApp.maploading.elements.dotsRaces.animate({
				'stroke-opacity': 0,
				'fill-opacity': 0
			}, 2500, function () {
				jqApp.maploading.elements.dotsRaces.remove();
				delete jqApp.maploading.elements.dotsRaces;
			})

			$(jqApp.maploading.elements.racePaths).each(function () {
				var $this = this;
				$this.animate({
					'stroke-width': 0
				}, 2500, function () {
					$this.remove();
				})
			})

			setTimeout(function () {
				if (!jQuery.browser.opera) {
					canvasMap.interval(jqApp.maploading.controlsInit);
				}
				else {
					jqApp.maploading.paper.animateViewBox(780, 320, 3, 2, ((jQuery.browser.msie||jQuery.browser.opera) ? 40 : 100), '<>', function () {
						jqApp.maploading.controlsInit();
					})
				}
				$('.maploader_wrap').addClass('animated');

				//maploader flag
				localStorage.setItem('maploader', new Date().getTime() + 60 * 60 * 24 * 1000);

			}, 2600);

		}

	}

	jqApp.maploading.controlsInit = function () {

		$('.print_text .d_row').each(function () {
			var $this = $(this);
			var characters = $this.text().split("");
			$this.empty();
			$.each(characters, function (i, el) {
				$this.append("<i>" + el + "</i");
			});
		})

		jqApp.trackLoader();

		$('.maploader').fadeOut(1400, function () {
			$('.maploader').remove();

			$('body').removeClass('scrolldisabled');

			if (!debug)
				jqApp.maploading.paper.remove();
			$('body').addClass('map_anim');
			setTimeout(function () {
				$('body').addClass('heading_anim');
			}, 2000)
			setTimeout(function () {
				$('body').addClass('pin_animation');

				var pause = 0;
				$('.print_text:eq(0) i').each(function () {
					$(this).delay(pause).animate({
						opacity: 1
					})
					pause += 20;
				}).promise().done(function () {
					$('.btn__start').addClass('btn_animated');
					var pause = 0;
					$('.print_text.b-date-race i').each(function () {
						$(this).delay(pause).animate({
							opacity: 1
						})
						pause += 20;
					});
				});
			}, 3000)
		});
	};

	if (debug) {
		jqApp.maploading.controlsInit();
	}

	Raphael.fn.animateViewBox = function animateViewBox(x, y, w, h, duration, easing_function, callback) {
		var cx = this._viewBox ? this._viewBox[0] : 0,
				dx = x - cx,
				cy = this._viewBox ? this._viewBox[1] : 0,
				dy = y - cy,
				cw = this._viewBox ? this._viewBox[2] : this.width,
				dw = w - cw,
				ch = this._viewBox ? this._viewBox[3] : this.height,
				dh = h - ch,
				self = this;
		;
		easing_function = easing_function || "linear";

		var interval = 1;
		var steps = duration / interval;
		var current_step = 0;
		var easing_formula = Raphael.easing_formulas[easing_function];

		var intervalID = setInterval(function () {
			var ratio = current_step / steps;
			self.setViewBox(cx + dx * easing_formula(ratio),
					cy + dy * easing_formula(ratio),
					cw + dw * easing_formula(ratio),
					ch + dh * easing_formula(ratio), true);
			if (current_step++ >= steps) {
				clearInterval(intervalID);
				callback && callback();
			}
		}, interval);
	}

	function drawpath(canvas, pathstr, duration, attr, callback, removablePath) {
		if (!removablePath) {
			var guide_path = canvas.path(pathstr).attr({stroke: "none", fill: "none"});
			var path = canvas.path(guide_path.getSubpath(0, 1)).attr(attr);
		}
		else {
			var guide_path = canvas.path(removablePath.getPath()).attr({stroke: "none", fill: "none"});
			var path = canvas.path(guide_path.getSubpath(0, 1)).attr(attr);
			removablePath.remove();
			//var guide_path = removablePath;
			//var path = removablePath;
		}
		var total_length = guide_path.getTotalLength();
		var last_point = guide_path.getPointAtLength(0);
		var start_time = new Date().getTime();
		var interval_length = 50;
		var result = path;

		var interval_id = setInterval(function () {
			var elapsed_time = new Date().getTime() - start_time;
			var this_length = elapsed_time / duration * total_length;
			if (removablePath) {
				var subpathstr = guide_path.getSubpath(this_length, total_length);
			}
			else
				var subpathstr = guide_path.getSubpath(0, this_length);
			attr.path = subpathstr;

			path.animate(attr, interval_length);
			if (elapsed_time >= duration) {
				clearInterval(interval_id);
				if (callback != undefined) callback();
				guide_path.remove();
				if (removablePath) {
					path.remove();
				}
			}
		}, interval_length);
		return result;
	}

	$('.pin_winners').on('click', function () {
		$(this).addClass('hidden_pin');
		$('.b-tribune-wrap').fadeIn('fast', function () {
			var $scrollTo;
			if ($(window).width() < 1025) {
				$scrollTo = $('.print_text.show-for-medium-down');
				$('html, body').animate({
					scrollTop: $scrollTo.offset().top - 110
				}, 900);
			}
		});
		return false;
	});
}