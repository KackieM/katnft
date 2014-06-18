angular.module('katNftApp')
	.factory('CharlestonCityPaperFeed', function($resource) {
		return $resource('urlgoes here', {}, {
			get: { method: 'GET'}
		});
	});