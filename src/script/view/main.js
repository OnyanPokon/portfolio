

const main = () => {

    const header = document.querySelector('header');
    const main = document.querySelector('main');

    const navbar = document.createElement('navbar-menu');
    const hero = document.createElement('hero-section');
    const about = document.createElement('about-section');
    

    header.appendChild(navbar);
    main.appendChild(hero);
    main.appendChild(about);


    var headElement = document.querySelector('header');
    var scrollCount = 0;

    window.addEventListener('scroll', function () {
    var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > scrollCount) {
        // Scroll ke bawah, tambahkan kelas active
        scrollCount = currentScrollTop;
        headElement.classList.add('bg-black');
    } else {
        // Scroll ke atas
        scrollCount = currentScrollTop;
        if (scrollCount === 0) {
        // Hapus kelas active saat scroll mencapai 0
        headElement.classList.remove('bg-black');
        }
    }
    });
}

export default main;