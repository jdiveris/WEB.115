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


})