const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('.header a')

window.addEventListener('scroll', () => {
    return sections.forEach((section, index) => {
        if(section.offsetTop < window.pageYOffset + 400) {
            links.forEach(link => {
                link.classList.remove('active')
            })
            links[index].classList.add('active')
        }
    })
})