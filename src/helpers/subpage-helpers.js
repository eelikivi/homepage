export default function setSubpageAfterBg() {
	// set subpage's after elements bgcol to last subpage sections bgcol
	const sections = document.getElementsByClassName('Subpage-section')
	let styleTag = document.getElementById('SubpageSectionAfter')

	if (sections.length > 0) {
		const bgCol = window.getComputedStyle(sections[sections.length - 1], ':before')
			.backgroundColor
		if (styleTag === null) {
			const style = document.createElement('style')
			style.setAttribute('id', 'SubpageSectionAfter')
			document.head.appendChild(style)
			styleTag = document.getElementById('SubpageSectionAfter')
		}
		styleTag.innerHTML = `.Subpage:after {
			background-color: ${bgCol};
		}`
	}
}
