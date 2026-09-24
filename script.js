document.addEventListener('DOMContentLoaded', function () {
    // FAQ Accordion functionality
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');

            // Toggle current
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');

            // Close other items
            faqToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    otherToggle.nextElementSibling.classList.add('hidden');
                    otherToggle.querySelector('i').classList.remove('rotate-180');
                }
            });
        });
    });

    // Console log to confirm script load for debugging tráfego pago
    console.log('Cartão de Todos - Landing Page carregada com sucesso para Tatiane (21) 98471-5423.');
});
