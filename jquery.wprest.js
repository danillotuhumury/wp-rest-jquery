var wp = (function($) {

	var api = {},
	endpoint = 'YOUR_API_ENDPOINT';

	function request(route, method, params) {
		var d = $.Deferred(),
			data = params || {};

		$.ajax({ type: method, url: endpoint+route, data: data})
			.done(function(res){
				d.resolve(res);
			})
			.fail(function(res){
				d.reject(res);
			});

		return d.promise();
	};

	api.posts = function(params) {
		return request('/posts', 'GET', params);
	};

	api.pages = function(params) {
		return request('/pages', 'GET', params);
	};

	api.media = function(params) {
		return request('/media', 'GET', params);
	};

	api.comments = function(params) {
		return request('/comments', 'GET', params);
	};

	api.categories = function(params) {
		return request('/categories', 'GET', params);
	};

	api.taxonomies = function(params) {
		return request('/taxonomies', 'GET', params);
	};

	api.tags = function(params) {
		return request('/tags', 'GET', params);
	};

	api.users = function(params) {
		return request('/users', 'GET', params);
	};

	return api;

})(jQuery);

