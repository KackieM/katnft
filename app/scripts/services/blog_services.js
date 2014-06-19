$resource('https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=Official%20Google%20Blogs',{},{
	fetch: {method: 'JSONP', params: {v:'1.0', callback: 'JSON_CALLBACK'}}
});

module.service('BlogList', function($rootScope, FeedLoader){
	var feeds = [];
	this.get = function(){
		var feedSources = [
			{title: 'Mashable', url: 'http://feeds.mashable.com/Mashable'}
			];
			if(feeds.length === 0){
				for (var i=0; i<feedSources.length; i++){
					FeedLoader.fetch({q: feedSources[i].url, num: 10},{},function(data){
						feeds.push(feed);

					});
				}
			}
			return feeds;
		};
	});