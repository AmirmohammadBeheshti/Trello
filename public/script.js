//input width change
$( document ).ready(function() {

$.fn.textWidth = function(text, font) {

    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);

    $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));

    return $.fn.textWidth.fakeEl.width();
    alert("a")
};

$('.width-dynamic').on('input', function() {
    var inputWidth = $(this).textWidth() + 20;
    $(this).css({
        width: inputWidth
    })
}).trigger('input');


function inputWidth(elem, minW, maxW) {
    elem = $(this);
    console.log(elem)
}

var targetElem = $('.width-dynamic');

inputWidth(targetElem);

//resize height dynamic
    $('.height-dynamic').on('input', function () {
        this.style.height = "";
        this.style.height = this.scrollHeight + "px";
    });
});
