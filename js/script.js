let checkboxes = document.querySelectorAll('.form__checkbox');

checkboxes.forEach(cb => cb.addEventListener("change", toggleAriaChecked));

function toggleAriaChecked() {
	this.setAttribute("aria-checked", this.checked);
}