

jQuery(document).ready(function($) {
	$.fn.calculateColumns = function(width, padding, mode) {
		return this.each(function() {
			var $container = $(this),
				containerWidth = $container.width(),
				containerPadding = (padding !== false) ? padding : 20,
				containerID = $container.attr("data-cont-id"),
				targetWidth = width ? width : 300,
				colNum = Math.round(containerWidth / targetWidth),
				tempCSS = "";
	
			if (!$("#col-style-id-"+containerID).exists()) {
				$("body").append('<style id="col-style-id-'+containerID+'" />');
			};
			var $style = $("#col-style-id-"+containerID);

			var singleWidth,
				doubleWidth,
				normalizedPadding,
				normalizedMargin;

			if (containerPadding < 10) {
				normalizedPadding = 0;
			}
			else {
				normalizedPadding = containerPadding - 10;
			};
			if (containerPadding == 0) {
				normalizedMargin = 0;
			}
			else {
				normalizedMargin = -containerPadding;
			};

			if (mode == "px") {
				singleWidth = Math.floor(containerWidth / colNum)+"px";
				doubleWidth = Math.floor(containerWidth / colNum)*2+"px";
			}
			else {
				singleWidth = Math.floor(100000 / colNum)/1000+"%";
				doubleWidth = Math.floor(100000 / colNum)*2/1000+"%";
			};

			if ( $(".cont-id-"+containerID+"").hasClass("description-under-image") ) {
				if (colNum > 1) {
					tempCSS = " \
						.cont-id-"+containerID+" { margin: -"+normalizedPadding+"px  -"+containerPadding+"px; } \
						.full-width-wrap .cont-id-"+containerID+" { margin: "+(-normalizedPadding)+"px "+containerPadding+"px; } \
						.cont-id-"+containerID+" > .wf-cell { width: "+singleWidth+"; padding: "+normalizedPadding+"px "+containerPadding+"px; } \
						.cont-id-"+containerID+" > .wf-cell.double-width { width: "+doubleWidth+"; } \
					";
				}
				else {
					tempCSS = " \
						.cont-id-"+containerID+" { margin: -"+normalizedPadding+"px  -"+containerPadding+"px; } \
						.full-width-wrap .cont-id-"+containerID+" { margin: "+(-normalizedPadding)+"px "+containerPadding+"px; } \
						.cont-id-"+containerID+" > .wf-cell { width: "+singleWidth+"; padding: "+normalizedPadding+"px "+containerPadding+"px; } \
					";
				};
			}
			else {
				if (colNum > 1) {
					tempCSS = " \
						.cont-id-"+containerID+" { margin: -"+containerPadding+"px; } \
						.full-width-wrap .cont-id-"+containerID+" { margin: "+normalizedMargin+"px  "+containerPadding+"px; } \
						.cont-id-"+containerID+" > .wf-cell { width: "+singleWidth+"; padding: "+containerPadding+"px; } \
						.cont-id-"+containerID+" > .wf-cell.double-width { width: "+doubleWidth+"; } \
					";
				}
				else {
					tempCSS = " \
						.cont-id-"+containerID+" { margin: -"+containerPadding+"px; } \
						.full-width-wrap .cont-id-"+containerID+" { margin: "+normalizedMargin+"px "+containerPadding+"px; } \
						.cont-id-"+containerID+" > .wf-cell { width: "+singleWidth+"; padding: "+containerPadding+"px; } \
					";
				};
			};
			$style.html(tempCSS);
		
			$container.trigger("columnsReady");
		});
	};

	// !- Initialise slider
	$.fn.initSlider = function() {
		return this.each(function() {
			var $_this = $(this),
				attrW = $_this.data('width'),
				attrH = $_this.data('height'); 

			$_this.royalSlider({
				autoScaleSlider: true,
				autoScaleSliderWidth: attrW,
				autoScaleSliderHeight: attrH,
				imageScaleMode: "fit",
				imageScalePadding: 0,
				slidesOrientation: "horizontal",
				disableResponsiveness: true
			});
		});
	};

	var	$isoCollection = $(".iso-container"),
		$gridCollection = $(".portfolio-grid:not(.jg-container, .iso-container), .blog.layout-grid .wf-container:not(.jg-container, .iso-container), .grid-masonry:not(.iso-container), .shortcode-blog-posts.iso-grid"),
		$combinedCollection = $isoCollection.add($gridCollection),
		$isoPreloader = dtGlobals.isoPreloader = $('<div class="tp-loader loading-label" style="position: fixed;"><svg class="fa-spinner" viewBox="0 0 48 48" ><path d="M23.98,0.04c-13.055,0-23.673,10.434-23.973,23.417C0.284,12.128,8.898,3.038,19.484,3.038c10.76,0,19.484,9.395,19.484,20.982c0,2.483,2.013,4.497,4.496,4.497c2.482,0,4.496-2.014,4.496-4.497C47.96,10.776,37.224,0.04,23.98,0.04z M23.98,48c13.055,0,23.673-10.434,23.972-23.417c-0.276,11.328-8.89,20.42-19.476,20.42	c-10.76,0-19.484-9.396-19.484-20.983c0-2.482-2.014-4.496-4.497-4.496C2.014,19.524,0,21.537,0,24.02C0,37.264,10.736,48,23.98,48z"/></svg></div>').appendTo("body").hide();

	/* !Smart responsive columns */
	if ($combinedCollection.exists()) {
		$combinedCollection.each(function(i) {
			var $container = $(this),
				contWidth = parseInt($container.attr("data-width")),
				contPadding = parseInt($container.attr("data-padding"));
	
			$container.addClass("cont-id-"+i).attr("data-cont-id", i);
			$container.calculateColumns(contWidth, contPadding, $container.hasClass("iso-container") ? "px" : "%");
	
			$(window).on("debouncedresize", function () {
				$container.calculateColumns(contWidth, contPadding, $container.hasClass("iso-container") ? "px" : "%");
			});
		});
	}

	$(".slider-masonry").initSlider();

/*
	$(".slider-masonry").each(function() {
		var $_this = $(this),
			attrW = $_this.data('width'),
			attrH = $_this.data('height'); 

		$_this.royalSlider({
			autoScaleSlider: true,
			autoScaleSliderWidth: attrW,
			autoScaleSliderHeight: attrH,
			imageScaleMode: "fit",
			imageScalePadding: 0,
			slidesOrientation: "horizontal",
			disableResponsiveness: true
		});
	});
*/
	$(".filter-extras").css("display", "none");
	$(".iso-item, .portfolio-grid .wf-cell, .blog.layout-grid .wf-container .wf-cell, .grid-masonry .wf-cell, .shortcode-blog-posts.iso-grid .wf-cell").css("opacity", "1");

	var $container = $(".filter").next('.iso-container, .portfolio-grid'),
		$items = $(".iso-item, .wf-cell", $container),
		selector = null;

	$(".filter-categories a").each(function(){
		$(this).on('click', function(e) {
			e.preventDefault();
			selector = $(this).attr('data-filter');
			$items.css("display", "none");
			$items.filter(selector).css("display", "block");
		});
	});

});


jQuery(document).ready(function(a){a.fn.calculateColumns=function(b,c,d){return this.each(function(){var r=a(this),p=r.width(),i=(c!==false)?c:20,q=r.attr("data-cont-id"),o=b?b:300,f=Math.round(p/o),h="",j=false;if(!a("#col-style-id-"+q).exists()){if(!a("html").hasClass("old-ie")){var m=document.createElement("style");m.id="col-style-id-"+q;m.appendChild(document.createTextNode(""));document.head.appendChild(m)}}else{var m=document.getElementById("col-style-id-"+q)}var e=a("#col-style-id-"+q);var l,s,k,n;if(i<10){k=0}else{k=i-10}if(i==0){n=0}else{n=-i}if(d=="px"){l=Math.floor(p/f)+"px";s=Math.floor(p/f)*2+"px"}else{l=Math.floor(100000/f)/1000+"%";s=Math.floor(100000/f)*2/1000+"%"}if(a(".cont-id-"+q+"").hasClass("description-under-image")){if(f>1){h=" 						.cont-id-"+q+" { margin: -"+k+"px  -"+i+"px; } 						.full-width-wrap .cont-id-"+q+" { margin: "+(-k)+"px "+i+"px; } 						.cont-id-"+q+" > .wf-cell { width: "+l+"; padding: "+k+"px "+i+"px; } 						.cont-id-"+q+" > .wf-cell.double-width { width: "+s+"; } 					"}else{h=" 						.cont-id-"+q+" { margin: -"+k+"px  -"+i+"px; } 						.full-width-wrap .cont-id-"+q+" { margin: "+(-k)+"px "+i+"px; } 						.cont-id-"+q+" > .wf-cell { width: "+l+"; padding: "+k+"px "+i+"px; } 					"}}else{if(f>1){h=" 						.cont-id-"+q+" { margin: -"+i+"px; } 						.full-width-wrap .cont-id-"+q+" { margin: "+n+"px  "+i+"px; } 						.cont-id-"+q+" > .wf-cell { width: "+l+"; padding: "+i+"px; } 						.cont-id-"+q+" > .wf-cell.double-width { width: "+s+"; } 					"}else{h=" 						.cont-id-"+q+" { margin: -"+i+"px; } 						.full-width-wrap .cont-id-"+q+" { margin: "+n+"px "+i+"px; } 						.cont-id-"+q+" > .wf-cell { width: "+l+"; padding: "+i+"px; } 					"}}if(a("html").hasClass("old-ie")){a("#static-stylesheet").prop("styleSheet").cssText=h}else{e.html(h);var g=m.sheet.cssRules.length;m.sheet.insertRule(".webkit-hack { }",g);m.sheet.deleteRule(g)}r.trigger("columnsReady")})};a.fn.heightHack=function(){return this.each(function(){var e=a(this);if(e.hasClass("height-ready")||e.parents(".post-rollover").exists()){return}var d=parseInt(e.attr("width")),b=parseInt(e.attr("height")),c=d/b;if(e.parents(".testimonial-vcard, .dt-format-gallery, .team-container, .shortcode-blog-posts.iso-grid ").exists()){e.wrap("<div />")}e.parent().css({"padding-bottom":100/c+"%",height:0,display:"block"});e.attr("data-ratio",c).addClass("height-ready")})};a.fn.initSlider=function(){return this.each(function(){var c=a(this),d=c.data("width"),b=c.data("height");c.royalSlider({autoScaleSlider:true,autoScaleSliderWidth:d,autoScaleSliderHeight:b,imageScaleMode:"fit",imageScalePadding:0,slidesOrientation:"horizontal",disableResponsiveness:true})})};a.fn.showItems=function(){return this.each(function(){var b=a(this),c=b.find(".preload-me").first();if(c.exists()){c.loaded(function(){var d=a(this);setTimeout(function(){d.parents(".iso-item, .wf-cell").css({opacity:1})},1)},null,true)}else{setTimeout(function(){b.css({opacity:1})},1)}})}});jQuery(document).ready(function(d){var f=d(".iso-container, .portfolio-grid");d(".filter:not(.without-isotope, .with-ajax) .filter-categories a").on("click.presscorFilterCategories",function(h){var g=d(this).attr("data-filter");f.isotope({filter:g});return false});d(".filter:not(.without-isotope, .with-ajax) .filter-extras .filter-by a").on("click",function(i){var h=d(this).attr("data-by"),g=d(this).parents(".filter-extras").find(".filter-sorting > a.act").first().attr("data-sort");f.isotope({sortBy:h,sortAscending:"asc"==g});return false});d(".filter:not(.without-isotope, .with-ajax) .filter-extras .filter-sorting a").on("click",function(i){var g=d(this).attr("data-sort"),h=d(this).parents(".filter-extras").find(".filter-by > a.act").first().attr("data-by");f.isotope({sortBy:h,sortAscending:"asc"==g});return false});var e=d(".iso-container"),c=d(".portfolio-grid:not(.jg-container, .iso-container), .blog.layout-grid .wf-container.description-under-image:not(.jg-container, .iso-container), .grid-masonry:not(.iso-container), .shortcode-blog-posts.iso-grid"),a=e.add(c),b=dtGlobals.isoPreloader=d('<div class="tp-loader loading-label" style="position: fixed;"><svg class="fa-spinner" viewBox="0 0 48 48" ><path d="M23.98,0.04c-13.055,0-23.673,10.434-23.973,23.417C0.284,12.128,8.898,3.038,19.484,3.038c10.76,0,19.484,9.395,19.484,20.982c0,2.483,2.013,4.497,4.496,4.497c2.482,0,4.496-2.014,4.496-4.497C47.96,10.776,37.224,0.04,23.98,0.04z M23.98,48c13.055,0,23.673-10.434,23.972-23.417c-0.276,11.328-8.89,20.42-19.476,20.42	c-10.76,0-19.484-9.396-19.484-20.983c0-2.482-2.014-4.496-4.497-4.496C2.014,19.524,0,21.537,0,24.02C0,37.264,10.736,48,23.98,48z"/></svg></div>').appendTo("body").hide();if(a.exists()){a.each(function(g){var j=d(this),k=parseInt(j.attr("data-width")),h=parseInt(j.attr("data-padding"));j.addClass("cont-id-"+g).attr("data-cont-id",g);j.calculateColumns(k,h,"px");d(window).on("debouncedresize",function(){j.calculateColumns(k,h,"px")})})}if(e.exists()||c.exists()){b.fadeIn(50);e.each(function(h){var j=d(this);d(".preload-me",j).heightHack();d(".slider-masonry",j).initSlider();var g;if(dtGlobals.isTablet){g="css"}else{if(dtGlobals.isDesktop){g="best-available"}}j.one("columnsReady",function(){j.isotope({itemSelector:".iso-item",resizable:false,layoutMode:"masonry",animationEngine:g,masonry:{columnWidth:1},getSortData:{date:function(i){return i.attr("data-date")},name:function(i){return i.attr("data-name")}}});d(window).on("columnsReady",function(){d(".royalSlider",j).each(function(){d(this).data("royalSlider").updateSliderSize()});j.isotope("reLayout")})});d("> .iso-item",j).showItems()});c.each(function(h){var j=d(this);d(".preload-me",j).heightHack();d(".slider-simple",j).initSlider();var g;if(dtGlobals.isTablet){g="css"}else{if(dtGlobals.isDesktop){g="best-available"}}j.one("columnsReady",function(){j.isotope({itemSelector:".wf-cell",resizable:false,layoutMode:"fitRows",animationEngine:g,masonry:{columnWidth:1},getSortData:{date:function(i){return i.attr("data-date")},name:function(i){return i.attr("data-name")}}});j.on("columnsReady",function(){d(".royalSlider",j).each(function(){d(this).data("royalSlider").updateSliderSize()});j.isotope("reLayout")})});d("> .wf-cell",j).showItems()});b.stop().fadeOut(300)}});