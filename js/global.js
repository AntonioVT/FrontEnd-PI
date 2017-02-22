$(document).ready(function() {
	$('.fadeView').css('display', 'none');
	$('.fadeView').fadeIn(325);
	$('.link').click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$('.fadeView').fadeOut(325, newpage);
	});

	function newpage() {
		window.location = newLocation;
	}
});

var loadingSpinner, changePasswordForm, passwordCheckMark;

function getProfileReferences () {
	loadingSpinner = document.getElementById('loadingSpinner');
	changePasswordForm = document.getElementById('changePasswordForm');
	passwordCheckMark = document.getElementById('passwordCheckMark');
	loadingSpinner.style.display = 'none';
	passwordCheckMark.style.display = 'none';
}

function changePassword () {
	loadingSpinner.style.display = 'block';

	var saveChildren = changePasswordForm.innerHTML;
	var saveHeight = changePasswordForm.clientHeight;
	var spinnerHeight = loadingSpinner.clientHeight;

	var normalizedHeight = saveHeight - spinnerHeight - 48;
	var expectedHeight = 0;

	changePasswordForm.style.height = normalizedHeight + 'px';
	loadingSpinner.style.opacity = '0%';

	// transitions
	changePasswordForm.style.transition = "height .40s ease-in";
	loadingSpinner.style.transition = 'opacity .40s ease-in';

	// cambios
	changePasswordForm.innerHTML = '';
	//changePasswordForm.style.opacity = '1';
	changePasswordForm.style.height = expectedHeight + 'px';
	loadingSpinner.style.opacity = '1';
	passwordCheckMark.style.opacity = '1';

	// Horizontal
	setTimeout(function(){
		changePasswordForm.style.transition = 'width .40s ease-in, height .20s ease-in, background-color .20s ease-in, box-shadow .20s ease-in';
		// loadingSpinner.style.opacity = '100%';
	}, 250);

	setTimeout(function () {
		console.log('Done')
		loadingSpinner.style.opacity = '0';
		loadingSpinner.style.transition = 'opacity .40s ease-in';
	}, 1250);

	setTimeout(function () {
		//loadingSpinner.remove();
		passwordCheckMark.style.transition = 'opacity .40s ease-in';
		passwordCheckMark.style.display = 'block';
	}, 1300);

}

function updateCharactersLeft (textarea) {
	var charactersMessage = textarea.parentElement.getElementsByTagName("p")[0];
	var actualCharacters = textarea.value.length;
	var maxCharacters = textarea.maxLength;

	var result = maxCharacters - actualCharacters;

	charactersMessage.innerHTML = result + ' caracteres restantes.';
}