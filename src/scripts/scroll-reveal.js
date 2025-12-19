import ScrollReveal from 'scrollreveal'

export default function initScrollReveal(defaultProps = null) {
    const targetElements = [
        {
            element: ".banner-text",
            animation: {
                delay: 400,
                distance: "50px",
                origin: window.innerWidth > 768 ? "left" : "bottom",
            },
        },
        {
            element: ".banner-cta",
            animation: {
                delay: 800,
                distance: "50px",
                origin: window.innerWidth > 768 ? "left" : "bottom",
            },
        },
        {
            element: ".section-title",
            animation: {
                delay: 200,
                distance: "30px",
                origin: "bottom",
            },
        },
        {
            element: ".section-content",
            animation: {
                delay: 400,
                distance: "30px",
                origin: "bottom",
            },
        },
    ];
    
    ScrollReveal({ 
        reset: false,
        duration: 800,
        easing: 'ease-in-out'
    });
    
    targetElements.forEach(({ element, animation }) => {
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
}
