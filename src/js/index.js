import 'slick-carousel'
import 'selectize'
import ymaps from 'ymaps';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// input mask
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

$(function() {

    let isMapVisible = false,
        transitionSpeed = 300;

    // Sticky header

    let $stickyHeader = $('.sticky-header'),
        $toggleAside = $('.aside-left aside .toggle-aside'),
        $aside = $('aside'),
        $overlay = $('#overlay');

    $(window).on('scroll', function () {
        toggleStickyHeader();
    });

    toggleStickyHeader();

    function toggleStickyHeader() {
        if ($(window).scrollTop() >= 200) {
            $stickyHeader.addClass('visible');
            $toggleAside.addClass('visible');
        } else {
            if (!isMapVisible) {
                $stickyHeader.removeClass('visible');
                $toggleAside.removeClass('visible');
                $aside.removeClass('open');
                $overlay.removeClass('visible');

                setTimeout(function () {
                    $aside.find('.wrapper').scrollTop(0);
                }, transitionSpeed);
            }
        }
    }

    $toggleAside.click(function() {
        toggleAside();
    });

    function toggleAside() {
        $aside.toggleClass('open');
        $overlay.toggleClass('visible');
    }

    // Top menu

    $('.sticky-header .menu, .sticky-header .menu .overlay > a').click(function() {
        toggleTopMenu();
        return false;
    });

    function toggleTopMenu() {
        $('.sticky-header .menu').toggleClass('open');
    }

    // Misc

    // $('.chosen-select').chosen({
    // 	no_results_text: 'Ничего не найдено',
    // 	width: '100%'
    // });

    $('.chosen-select').selectize({
        render: {
            option: function(data, escape) {
                return '<div class="option">' + escape(data.text) + '<span>' + data.total + '</span></div>';
            },
        }
    });

    $('.select').selectize({
        render: {
            option: function(data, escape) {
                return '<div class="option">' + escape(data.text) + '</div>';
            },
        }
    });

    $('select.simple').selectize({
        persist: false,
        create: false,
        render: {
            option: function(data, escape) {
                return '<div class="option">' + escape(data.text) + '</div>';
            },
        }
    });

    // popup
    let $modals = $('.modal'),
        $modalLink = $('a.popup-link'),
        $modalClose = $modals.find('a.close');

    $modalLink.click(function() {
        $overlay.addClass('active');
        $modals.removeClass('active');
        $($(this).attr('href')).addClass('active');
        return false;
    });

    $modalClose.click(function() {
        $modals.removeClass('active');
        $overlay.removeClass('active');
        return false;
    });

    $overlay.click(function() {
        $modals.removeClass('active');
        $overlay.removeClass('active');
        return false;
    });

    function initPlaceSlider() {
        $('.big-images').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.small-images'
        });

        $('.small-images').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.big-images',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }

    initPlaceSlider();

    // Places map
    ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=29e898fe-24cc-4ef2-b717-acae9666bf9e&lang=ru_RU').then(maps => {

        if (document.getElementById('places-map')) {
            let myMap = new maps.Map('places-map', {
                center: [59.939095, 30.315868],
                zoom: 12,
                controls: []
            });

            myMap.controls.add('zoomControl', {position: {top: 200, left: 10}});

            let $toggleMap = $('.toggle-map, #places-map-cont .btn-close, .main-filter .on-map'),
                $placesMapCont = $('#places-map-cont');

            $toggleMap.click(function() {
                toggleMap();
            });

            let clusterer = new maps.Clusterer({
                    preset: 'islands#violetClusterIcons',
                    groupByCoordinates: false,
                }),
                geoObjects = [];

            for (var i = 0; i < 100; i++) {
                let longitude = getRandomInt(59831453, 60039231) / 1000000,
                    latitude = getRandomInt(29976432, 30516135) / 1000000;

                let myPlacemark = new maps.Placemark([longitude, latitude], {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/marker.png',
                    iconImageSize: [37, 48],
                    iconImageOffset: [-18, -48]
                });

                geoObjects.push(myPlacemark);
            }

            clusterer.add(geoObjects);
            myMap.geoObjects.add(clusterer);

            // myMap.setBounds(clusterer.getBounds(), {
            // 	checkZoomRange: true
            // });

            function toggleMap() {
                if ($placesMapCont.hasClass('visible')) {
                    $placesMapCont.removeClass('visible');
                    $toggleMap.find('span').text('Показать карту кальянных');
                    toggleStickyHeader();
                    isMapVisible = false;
                } else {
                    $placesMapCont.addClass('visible');
                    $toggleMap.find('span').text('Скрыть карту кальянных');
                    $stickyHeader.addClass('visible');
                    myMap.container.fitToViewport();
                    isMapVisible = true;
                }
                toggleStickyHeader();
            }
        }

        /////////////////////////////////////////////////////////////////////
        if (document.getElementById('place-map')) {
            $('#place-map').height($('.place-slider').height());

            let placeMap = new maps.Map('place-map', {
                center: [59.939095, 30.315868],
                zoom: 12,
                controls: []
            });

            let longitude = 59.939095,
                latitude = 30.315868;

            let myPlacemark = new maps.Placemark([longitude, latitude], {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/marker.png',
                iconImageSize: [37, 48],
                iconImageOffset: [-18, -48]
            });

            placeMap.geoObjects.add(myPlacemark);

            $('.toggle-mode').each(function() {
                let $buttons = $(this).find('button');

                $buttons.click(function () {
                    $buttons.removeClass('btn-primary').addClass('btn-default');
                    $(this).removeClass('btn-default').addClass('btn-primary');

                    if ($(this).hasClass('slider')) {
                        $('.place-slider').show();
                        $('#place-map').hide();
                        initPlaceSlider();
                    } else {
                        $('.place-slider').hide();
                        $('#place-map').show();
                    }
                });
            });
        }
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

});
