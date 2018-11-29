
/** ================ Footer list toggles start. ================ */
document.querySelector('.about-us .title').addEventListener('click', function () {
	if (mobile()) {
		if (this.querySelector('div').className === 'up') {
			this.querySelector('.up').className = 'down';
			this.parentNode.querySelector('p').style.display = 'none';
		} else if (this.querySelector('div').className === 'down') {
			this.querySelector('.down').className = 'up';
			this.parentNode.querySelector('p').style.display = 'block';
		}
	}
});

document.querySelector('.quick-links .title').addEventListener('click', function () {
	if (mobile()) {
		if (this.querySelector('div').className === 'up') {
			this.querySelector('.up').className = 'down';
			this.parentNode.querySelector('ul').style.display = 'none';
		} else if (this.querySelector('div').className === 'down') {
			this.querySelector('.down').className = 'up';
			this.parentNode.querySelector('ul').style.display = 'block';
		}
	}
});

document.querySelector('.connect-with-us .title').addEventListener('click', function () {
	if (mobile()) {
		if (this.querySelector('div').className === 'up') {
			this.querySelector('.up').className = 'down';
			this.parentNode.querySelector('.social').style.display = 'none';
		} else if (this.querySelector('div').className === 'down') {
			this.querySelector('.down').className = 'up';
			this.parentNode.querySelector('.social').style.display = 'flex';
		}
	}
});

/** ================ End of Footer list toggles. ================ */
function mobile() {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}


$(document).ready(function () {
	/**  Select Box */
	$('select').selectize({
		create: false,
    	sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	
});