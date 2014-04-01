Table = (function() {
	
	function Table(params) {
		this.view = params.view;
		this.width = params.width;
		this.height = params.height;
		this.hidden = true;
		this.type = params.type;
		this.reposition_handler = function(ev) {
			ev.data.self.reposition();
		};
		this.reposition_scroll_handler = function(ev) {
			ev.data.self.reposition_scroll();
		};
			
		
	}
	
	Table.prototype = {
		init: function(hide) {
			var self = this;
		// 세로 위치 조절하도록 하기.
			this.deactivate();

			if(!hide) this.view.show();	
			
			this.view.click(function() {
				PubSub.publish( 'table_clicked', self );
				/*
if (self.hidden) {
					self.activate();
				} else {
					self.deactivate();
				}
*/
			});
		},
		
		activate: function() {
			var self = this;
			this.hidden = false;
			// 원하는 위치로 이동...
			//$("html, body").animate({ scrollTop: 0 });
			$(window).off('resize', self.reposition_handler );
			$(window).off('scroll', self.reposition_scroll_handler );
			
			if(this.type == 0) {
				var new_margin_left = this.width / 2
				
				this.view.stop().animate({
						top: 90,
						left: 50 + '%',
						marginLeft: - new_margin_left,
						marginTop: 0
					});	
			} else if (this.type == 1){
				var new_margin_right = this.width / 2
				
				this.view.stop().animate({
					top: 90,
					right: 50 + '%',
					marginRight: - new_margin_right,
					marginTop: 0
				});
			} else if (this.type == 2){
				this.view.stop().animate({
					top: 90,
					marginTop: 0
				});
			} else if (this.type == 3){
				var new_margin_left =   - this.width / 2 ;
				this.view.stop().animate({
					top: 90,
					marginTop: 0,
					left: 50 + '%',
					marginLeft: new_margin_left
				});
			} else if (this.type == 4){
				var new_margin_right =   - this.width / 2 ;
				this.view.stop().animate({
					top: 90,
					marginTop: 0,
					right: 50 + '%',
					marginRight: new_margin_right
				});
			} else if (this.type == 5){
				this.view.stop().animate({
					top: 90,
					marginTop: 0
				});
			} 
			
		},
		
		deactivate: function() {
			// 자동 조절이 되야 한다.
			var self = this;
			this.hidden = true;
			
			this.reposition();
			
			$(window).on('resize', { self : self }, self.reposition_handler );
			
			$(window).on('scroll', { self : self }, self.reposition_scroll_handler );
			
			
		},
		
		reposition: function() {
			if(this.type == 0) {
				var $window_height = $(window).height();
				var new_top = ($window_height - this.height) / 2;
				var new_margin_left = 22 - this.width ;
				this.view.stop().animate({
					top: new_top, 
					marginLeft: new_margin_left, 
					left:0
				});
				
			} else if (this.type == 1){
				var $window_height = $(window).height();
				var new_top = ($window_height - this.height) / 2;
				var new_margin_right = 22 - this.width ;
				this.view.stop().animate({
					top: new_top, 
					marginRight: new_margin_right, 
					right:0 + '%'
				});
			} else if (this.type == 2){
				var new_top = 22 - this.height;
				var new_margin_left =   - this.width / 2 ;
				this.view.stop().animate({
					top: new_top, 
					marginLeft: new_margin_left
				});
			} else if (this.type == 3){
				var new_top = 31 - this.height;
				var new_margin_left =   - this.width / 10 * 8 ;
				this.view.stop().animate({
					top: new_top, 
					left:0 + '%',
					marginLeft: new_margin_left
				});
			} else if (this.type == 4){
				var new_top = 31 - this.height;
				var new_margin_right =   - this.width / 10 * 8 ;
				this.view.stop().animate({
					top: new_top, 
					right:0 + '%',
					marginRight: new_margin_right
				});
			} else if (this.type == 5){
				var new_top = 15 - this.height;
				var new_margin_left =   - this.width / 2 ;
				this.view.stop().animate({
					top: new_top, 
					marginLeft: new_margin_left
				});
			}
			
			this.reposition_scroll();
		},
		
		reposition_scroll: function() {
			if(this.type == 0) {
				var scroll_top = $(window).scrollTop();
				this.view.css({marginTop: scroll_top });	
			} else if (this.type == 1){
				var scroll_top = $(window).scrollTop();
				this.view.css({marginTop: scroll_top });	
			} else if (this.type == 2){
				var scroll_top = $(window).scrollTop();
				this.view.css({marginTop: scroll_top });	
			} else if (this.type == 3){
				var scroll_top = $(window).scrollTop();
				this.view.css({marginTop: scroll_top });	
			} else if (this.type == 4){
				var scroll_top = $(window).scrollTop();
				this.view.css({marginTop: scroll_top });	
			} else if (this.type == 5){
				var scroll_top = $(window).scrollTop();
				this.view.css({marginTop: scroll_top });	
			}
		}
		
	};
	
	return Table;
	
})();