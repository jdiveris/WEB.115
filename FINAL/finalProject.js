// When Window loads
window.addEventListener("load", e => {
    console.log("load");
    // Add event listeners to Weekday Tab titles
    $(".title").click(e => {
        // Toggle active classes for prev tab
        $(".day").not(".inactive").toggleClass("inactive");
        $(".title.active").toggleClass("active");
    
        // Toggle active classes for new tab
        $(e.target).toggleClass("active");
        let day = e.target.id
        $("."+day).toggleClass("inactive"); // Animate this later //
    });

    // Add event listeners to item buttons
    $("div.day button").click(e => {
        e.preventDefault();
        $(e.target).prevAll("br.hidden").first().removeClass("hidden");
        $(e.target).prevAll("input.hidden").first().removeClass("hidden");
    });

    // Add event listener to clear button

    // Add mouseover/mouseout events for form elements

    $("input, textarea").mouseover(e => {
        $(e.target).css({
            "border": "3px solid #0499AE"
        })
    })

    $("input, textarea").mouseout(e => {
        $(e.target).css({
            "border": "1px solid"
        })
    })

    $("button").mouseover(e => {
        $(e.target).css({
            "border": "2px solid #0499AE",
            "backgroundColor": "#50C179"
        })
    })

    $("button").mouseout(e => {
        $(e.target).css({
            "border": ".1px solid rgba(100, 187, 71, 0.7)",
            "backgroundColor": "rgb(122, 215, 90, .7)"
        })
    })
    
})