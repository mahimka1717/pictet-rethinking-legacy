(function () {
	let mediaElements = [
		...document.querySelectorAll('video'),
		...document.querySelectorAll('audio'),
	];

	console.log(mediaElements);

	let intervalRef;
	const intervalTime = [1, 25, 50, 75];

	mediaElements &&
		mediaElements.forEach((el, i) => {
			console.log(el);
			el.addEventListener('loadedmetadata', (e) => {
				const duration = el.duration;
				const type = e.srcElement.localName;
				const finalArray = [];

				el.addEventListener('play', (e) => {
					// on play, push the event, start the timer
					console.log('playing');

					dataLayer.push({
						event: 'Play',
						mediaTitle: document.title + el.dataset.name,
						mediaState: 'play',
						mediaType: type === 'video' ? 'Video' : 'Audio',
					});

					startTimer(e.target, duration, type, finalArray);
				});

				el.addEventListener('pause', (e) => {
					console.log(el.readyState);
					if (el.readyState === 4) {
						dataLayer.push({
							event: 'Pause',
							mediaTitle: document.title + el.dataset.name,
							mediaState: 'pause',
							mediaType: type === 'video' ? 'Video' : 'Audio',
						});
					}
				});
			});
		});

	const startTimer = (media, duration, type, finalArray) => {
		console.log(media);
		clearInterval(intervalRef);
		intervalRef = setInterval(() => {
			const currentTime = Math.round((media.currentTime / duration) * 100);
			console.log(currentTime);
			if (
				intervalTime.includes(currentTime) &&
				!finalArray.includes(currentTime)
			) {
				finalArray.push(currentTime);
				console.log('here');
				dataLayer.push({
					event: 'Playing',
					mediaTitle: document.title + media.dataset.name,
					mediaType: type === 'video' ? 'Video' : 'Audio',
					mediaProgress: `${currentTime}%`,
				});
			}

			if (media.ended) {
				finalArray.length = 0;
				dataLayer.push({
					event: 'Ended',
					mediaTitle: document.title + media.dataset.name,
					mediaType: type === 'video' ? 'Video' : 'Audio',
					mediaProgress: '100%',
				});
				clearInterval(intervalRef);
			} else {
			}
		}, [500]);
	};
})();
