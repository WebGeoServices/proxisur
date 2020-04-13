var initMenu = function() {
    function openMenu() {
        $('.dropdown-btn').on('click', function () {
            $(this).toggleClass('active');
            $('.header-menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    };
    openMenu()

    function changeLang() {
        $('.lang').on('click', function () {
            $('.lang').not($(this)).removeClass('active');
            $(this).addClass('active');
        })
    };
    changeLang()

    function changeHeaderMenu() {
        $('.header-menu > li').on('click', function () {
            $('.header-menu > li').not($(this)).removeClass('active');
            $(this).addClass('active');
        })
    };
    changeHeaderMenu();

    function fixedMenu() {
        if (window.scrollY > 10 && window.innerWidth < 767) {
            $('#header').css({
                                 "position": "fixed",
                                 "padding-top": "25px",
                                 "padding-bottom": "10px",
                                 "background-color": "#333333",
                             })
        } else {
            $('#header').css({
                                 "height": "",
                                 "position": "",
                                 "padding-top": "",
                                 "padding-bottom": "",
                                 "background-color": "",
                             })
        }
    }
    fixedMenu();

    $('#closeNotice').on('click', function () {
        window.setCookie('notice_seen', true);
        $('.notice').hide();
    });
    if (!window.getCookie('notice_seen')) {
        $('.notice').show();
    }
};
