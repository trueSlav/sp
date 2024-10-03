const themeButtons = document.querySelectorAll('.theme-menu__theme-btn');

themeButtons.forEach((button) => {
	button.addEventListener('click', () => {
		themeButtons.forEach((btn) => {
			btn.classList.remove('theme-menu__theme-btn_active');
			btn.removeAttribute('disabled');
		});

		if ([...button.classList].includes('theme-menu__theme-btn_light')) {
			changeTheme('light');
		} else if ([...button.classList].includes('theme-menu__theme-btn_dark')) {
			changeTheme('dark');
		} else {
			changeTheme('auto');
		}

		button.classList.add('theme-menu__theme-btn_active');
		button.setAttribute('disabled', true);
	});
});

const changeTheme = (theme) => {
	document.body.className = 'page';
	document.body.classList.add(`theme_${theme}`);
	localStorage.setItem('theme', theme);
};

const initTheme = () => {
	const theme = localStorage.getItem('theme');

	if (theme) {
		changeTheme(theme);
		themeButtons.forEach((btn) => {
			btn.classList.remove('theme-menu__theme-btn_active');
			btn.removeAttribute('disabled');
		});
		document
			.querySelector(`.theme-menu__theme-btn_${theme}`)
			.classList.add('theme-menu__theme-btn_active');
		document
			.querySelector(`.theme-menu__theme-btn_${theme}`)
			.setAttribute('disabled', true);
	}
};

initTheme();
