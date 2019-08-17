export default function setSubpageAfterBg() {
	// set subpage's after elements bgcol to last subpage sections bgcol
	const sections = document.getElementsByClassName('Subpage-section')

	if (sections.length > 0) {
		const bgCol = window.getComputedStyle(sections[sections.length - 1], ':before')
			.backgroundColor
		const style = document.createElement('style')
		style.innerHTML = `.Subpage:after {
		background-color: ${bgCol};
	}`
		document.head.appendChild(style)
	}
}
