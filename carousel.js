const carouselContainer = query('.carousel-container')
const btnNext = query('.btn-next')
const btnPrevious = query('.btn-previous')
const img = query('.img')

const btnGoToRepository = query('.btn-go-to-repository')

let counter = 6

const showNextImage = () => {
	counter++

	if (counter > 6) {
		counter = 1
	}

	changeImage(counter)
}
const showPreviousImage = () => {
	counter--

	if (counter < 1  ) {
		counter = 6
	}

	changeImage(counter)
}

function changeImage (counter) {
	img.style.backgroundImage = `url('./images/i${counter}.jpg')`
}

let id = null
let isRunning = false
const runCarousel = () => {
	id = setInterval(showNextImage, 1000)
}

const stopCarousel = () => {
	clearInterval(id)	
}

const initializeCarousel = () => {
	showNextImage()
	runCarousel()
}

btnNext.addEventListener('click', () => {
	isRunning = false
	showNextImage()
})

btnPrevious.addEventListener('click', () => {
	isRunning = false
	showPreviousImage()
})

img.addEventListener('mouseover', () => {
	isRunning = false
	stopCarousel()
})

img.addEventListener('mouseout', () => {
	
	if (!isRunning) {

		runCarousel()
	}	

	isRunning = true
})

window.addEventListener('load', initializeCarousel)

function goToRepository () {
	const repositoryName = 'https://github.com/gerafimjoaquim/carousel-simples'

	setAttribute(btnGoToRepository, 'target', '_blank')
	setAttribute(btnGoToRepository, 'href', repositoryName)
}
btnGoToRepository.addEventListener('click', goToRepository)