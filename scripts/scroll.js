const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('.header a')

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        if(section.offsetTop < window.pageYOffset + 400) {
            links.forEach(link => {
                link.classList.remove('active')
             })
            if(links[index].classList.contains('active') === false) links[index].classList.add('active')
            else return
        }
    })
})