export default class UnsplashAPIservice {
	_urlBase = "https://api.unsplash.com/photos/";
	_apiKey = "?client_id=xrpahHs_Zf41ZP7NZNWo_hxfyQI1wTyFMsxVcv3xibw";

	async getPictures() {
		const res = await fetch(`${this._urlBase}${this._apiKey}&per_page=3&page=1`);

		const body = res.json();

		if(!res.ok) {
			throw new Error("Error");
		}

		return body.then(( value ) => value.map( this._transformPicturesData ));
	};

	_transformPicturesData(picture) {
		return {
			id: picture.id,
			description: picture.description,
			picFullUrl: picture.urls.full,
			picThumbUrl: picture.urls.thumb,
			userName: picture.user.name
		};
	};
} 