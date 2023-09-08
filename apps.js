// typing speed//

var typed = new Typed(".typing",{
    strings:["Web Designer", "Web Developer" , "Blogger"],
    typeSpeed:80,
    backSpeed:80,
})
// about typed speed//
var typep = new Typed (".typing-2",{
    strings :["Web Designer" , "Web Developer" , "Blogger"],
    typeSpeed:100,
    backSpeed:80,
})

//show/hide Faqs ans//  
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })
})