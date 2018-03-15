new Vue({
	el: '#app_search',
	data: {
		search:[],
		condition:true,
		empty:false
	},
	methods: {
		doSearch: function(e) {
			var keyword = $('#search_box').val();
			var _this = this;
			$.get('/ajax/search',{
				keyword:keyword
			},function(d){
				_this.condition = false;
				_this.search = d.items;
				if(_this.search.length == 0){
					_this.empty = true;
				}else{
					_this.empty = false;
				}
			},'json')
		}
	}
});