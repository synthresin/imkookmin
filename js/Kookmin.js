Kookmin = (function() {
	function Kookmin(params) {
		this.view = params.view;
		this.start = this.view.find('.start');	
		this.bg = this.view.find('.bg');
		this.korean_wrapper = this.view.find('.ko');
		this.english_wrapper = this.view.find('.en');
		this.korean_units = this.korean_wrapper.find('.units');
	}
	
	Kookmin.prototype = {
		init: function() {
			var self = this;
			this.bg.show(1200, function() {
			
				$('.lang_selectors').show();
				self.korean_wrapper.show();
				
				
				
				
				
				$('.ko .unit').each(function(idx, elem){
					var x_percent = Math.random() * 90 ;
					var y_percent = Math.random() * 90 ;
					$(elem).animate({
						left: x_percent + '%',
						top: y_percent + '%'
					}).draggable().click(function(ev) {
						var param = $(elem).data('date');
						
						PubSub.publish( 'unit_clicked', param );
					});
				});	
				
				$('.en .unit').each(function(idx, elem){
					var x_percent = Math.random() * 90 ;
					var y_percent = Math.random() * 90 ;
					$(elem).animate({
						left: x_percent + '%',
						top: y_percent + '%'
					}).draggable().click(function(ev) {
						var param = $(elem).data('date');
						
						PubSub.publish( 'unit_en_clicked', param );
					});
				});	
				
				$('.lang_selectors a.to_ko').click(function(e) {
					
					self.english_wrapper.hide();
					self.korean_wrapper.show();
					$('.kor_table').show();
					$('.en_table').hide();
					
					$('.ko .unit').each(function(idx, elem){
						var x_percent = Math.random() * 90 ;
						var y_percent = Math.random() * 90 ;
						$(elem).animate({
							left: x_percent + '%',
							top: y_percent + '%'
						});
					});	
					
					PubSub.publish( 'lang_clicked');
					e.preventDefault();
				});
				
				$('.lang_selectors a.to_en').click(function(e) {
					self.english_wrapper.show();
					self.korean_wrapper.hide();
					$('.kor_table').hide();
					$('.en_table').show();
					
					$('.en .unit').each(function(idx, elem){
						var x_percent = Math.random() * 90 ;
						var y_percent = Math.random() * 90 ;
						$(elem).animate({
							left: x_percent + '%',
							top: y_percent + '%'
						});
					});	
					e.preventDefault();
					PubSub.publish( 'lang_clicked');
				});
								
				
				
				
				
				
			});
		}
	};
	
	return Kookmin;
	
})();