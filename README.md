# jQuery WordPress REST API Wrapper
This jQuery plugin provides a wrapper arround the WordPress REST API and can be used in any jQuery project.

## Instalation
Simply copy the file into your project and replace YOUR_API_ENDPOINT 
with the correct URL. e.g. http://www.danillo.nl/wp-json/wp/v2

## Usage
```javascript
wp.posts()
	.done(function(posts){
		// Loop through the posts
		$(posts).each(function(){
			console.log(post.title.rendered);
			console.log(post.content.rendered);
		});
	})
	.fail(function(){
		console.log('Oops something went wrong');
	});
}
```

## Documentation
For a more extended documentation go to the WordPress REST API Reference 
documentation at http://v2.wp-api.org/reference/

### Posts
```javascript
wp.posts([params])
```

### Pages
```javascript
wp.pages([params])
```

### Media
```javascript
wp.media([params])
```

### Comments
```javascript
wp.comments([params])
```

### Categories
```javascript
wp.categories([params])
```

### Taxonomies
```javascript
wp.taxonomies([params])
```

### Tags
```javascript
wp.tags([params])
```

### Users
```javascript
wp.users([params])
```
