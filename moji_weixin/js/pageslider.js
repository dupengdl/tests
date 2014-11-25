/**
 * Created by sunlan on 14/10/27.
 */
var a = 10;
$(document).on("touchmove", function (a) {
    a.preventDefault()
}),
    $.fn.pageSlider = function () {
        for (var b = this, c = {length: b.length, currentIndex: 0}, d = {next: function () {
            if (c.currentIndex + 1 < c.length) {
                var a = b[c.currentIndex];
                $(a).removeClass("slidedown in").addClass("slidedown out reverse"), c.currentIndex++, $(b[c.currentIndex - 1]).trigger("leave"), $(b[c.currentIndex]).trigger("enter")
            }
        }, prev: function () {
            if (c.currentIndex > 0) {
                var a = b[c.currentIndex - 1];
                $(a).removeClass("slidedown out reverse").addClass("slidedown in"), c.currentIndex--, $(b[c.currentIndex + 1]).trigger("leave"), $(b[c.currentIndex]).trigger("enter")
            }
        }}, e = c.length - 1; e >= 0; e--)$(b[e]).css("z-index", a + c.length - e);
        return b.css("visibility", "visible"), b.on("swipeUp",function () {
            d.next()
        }).on("swipeDown",function () {
            d.prev()
        }).on("mousewheel", function () {
                var a = new Date;
                return function (b) {
                    var c = b.wheelDelta, e = new Date, f = e - a;
                    a = e, c && f > 186 && (0 > c ? d.next() : d.prev())
                }
            }()), this
    }