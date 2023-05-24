function vazirmatn(){
	// Select head element
	const head = document.getElementsByTagName("head")[0]
	// create link element to styles file
	const vazirmatnFontFace = "<link rel='stylesheet' href='./src/font-face/vazirmatn.css'>"
	// append new Link element to head of html file
	head.insertAdjacentHTML("beforeend",vazirmatnFontFace )

}
export {vazirmatn}
