$(function() {
    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,
    validIndex = function(indexToCheck) {
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },
    animateItem = function($item, toOpen, speed) {
        var $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width: "420px"} : {width: "140px"},
        colorImageParam = toOpen ? {left: "0px"} : {left: "140px"};

        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam,speed);
    },
    checkAnbAnimateItem = function (indexToCheckAndAnimate) {
        if(openedIndex === indexToCheckAndAnimate) {
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
            openedIndex = -1;
        } else {
            if(validIndex(indexToCheckAndAnimate)) {
                animateItem($mainMenuItems.eq(openedIndex), false, 250);
                openedIndex = indexToCheckAndAnimate;
                animateItem($mainMenuItems.eq(openedIndex), true, 250);
            }
        }
    }
    bindEvents = function() {
        $mainMenuItems.children(".images").on({
            click: function() {
                var newIndex = $(this).parent().index();
                checkAnbAnimateItem(newIndex);
            }
        });
        // $(".button").on({
        //     hover: function() {
        //         $(this).addClass("hovered");
        //     }, 
        //     hover: function() {
        //         $(this).removeClass("hovered");
        //     }
        // })
        $(".button").on({
            click: function() {
                var newIndex = $(this).index();
                checkAnbAnimateItem(newIndex);
            }
        })
    },
    init = function() {
        bindEvents();
        if(validIndex(openedIndex)) {
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
        }
    };
    init(); // exécution de la fonction init
});