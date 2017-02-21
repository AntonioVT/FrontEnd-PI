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

var loadingSpinner, changePasswordForm;

function getProfileReferences () {
	loadingSpinner = document.getElementById('loadingSpinner');
	changePasswordForm = document.getElementById('changePasswordForm');
	loadingSpinner.style.display = 'none';
}


function changePassword () {
	var saveChildren = changePasswordForm.innerHTML;
	var saveHeight = changePasswordForm.style.height
	changePasswordForm.innerHTML = '';
	changePasswordForm.style.opacity = '1';
	changePasswordForm.style.height = '20px';
	changePasswordForm.style.position = 'inherit';
	loadingSpinner.style.display = 'block';
	console.log(saveChildren);
	console.log(saveHeight);
}

function updateCharactersLeft (textarea) {
	var charactersMessage = textarea.parentElement.getElementsByTagName("p")[0];
	var actualCharacters = textarea.value.length;
	var maxCharacters = textarea.maxLength;

	var result = maxCharacters - actualCharacters;

	charactersMessage.innerHTML = result + ' caracteres restantes.';
}