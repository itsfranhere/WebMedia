$(document).ready(function() {
    var $tabContent = $(".tab-content"),
        $tabs = $(".alt-nav ul li"),
        tabId;

    $tabContent.hide();
    $(".alt-nav ul li:first").addClass("active").show();
    $tabContent.first().show();

    $tabs.click(function() {
        var $this = $(this);
        $tabs.removeClass("active");
        $this.addClass("active");
        $tabContent.hide();
        var activeTab = $this.find("a").attr("href");
        $(activeTab).fadeIn();
        //return false;
    });

    // Grab the ID of the .tab-content that the hash is referring to
    tabId = $(window.location.hash).closest('.tab-content').attr('id');

    // Find the anchor element to "click", and click it
    $tabs.find('a[href=#' + tabId + ']').click();
});

$('a').not('.alt-nav ul li a').on('click', function(evt) {
    evt.preventDefault();
    var whereTo = $(this).attr('goto');
    $tabs = $(".alt-nav ul li");
    $tabs.find('a[href=#' + whereTo + ']').trigger('click');
    //alert(attr('name'));
//alert( $('#'+whereTo+' a').offset().top );
    $('html, body').animate({
        scrollTop: $('#'+whereTo+' a').offset().top
    });

});

