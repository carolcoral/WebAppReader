$.get('/ajax/category',function(d){
	new Vue({
	  el: '#app',
	  data: d
	});
},'json');