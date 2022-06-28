let tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});

let tabs2 = document.querySelectorAll('.tabs2__toggle'),
    contents2 = document.querySelectorAll('.tabs2__content');

tabs2.forEach((tab2, index) => {
    tab2.addEventListener('click', () => {
        contents2.forEach((content2) => {
            content2.classList.remove('is-active2');
        });
        tabs2.forEach((tab2) => {
            tab2.classList.remove('is-active2');
        });
        contents2[index].classList.add('is-active2');
        tabs2[index].classList.add('is-active2');
    });
});