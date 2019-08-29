export default function setHomepageFooterBg() {
	// set subpage's after elements bgcol to last subpage sections bgcol
	const sections = document.getElementsByClassName('Frontpage-section')
	let styleTag = document.getElementById('FrontpageSectionAfter')

	if (sections.length > 0) {
		const bgCol = window.getComputedStyle(sections[sections.length - 1]).backgroundColor

		console.log(bgCol)

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
