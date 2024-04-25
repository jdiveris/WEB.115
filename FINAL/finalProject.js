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

    // Add event listeners to item buttons to add extra fields
    $("div.day button").click(e => {
        e.preventDefault();
        
        let class_id = $(e.target).attr('class');
        class_id = class_id.split(' ');
        let index = class_id.indexOf('add');
        $(e.target).prevAll("br.hidden").first().removeClass("hidden");
        $(e.target).prevAll("input.hidden."+class_id[index-1]).last().removeClass("hidden");
    });

    // Add event listener to clear button to reset input fields
    $("button.clear").click(e => {
        e.preventDefault();
        $("div.day > input").val("");
    })

    // Add event listener to create meal plan
    $("button.create_plan").click(e =>{
        e.preventDefault();
        generate_planner();
    })

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







function generate_planner() {
    // Create arrays for all Monday Meals 
    const mon_meals = [];
    const mon_break_values = [];
    let mon_break_inputs = document.getElementsByClassName("m b-item");

    for(let i = 0; i < mon_break_inputs.length; i++) {
        if (mon_break_inputs[i].value != "") {
            mon_break_values.push(mon_break_inputs[i].value)
        } else {
            break
        }
    }

    mon_meals.push(mon_break_values);

    const mon_snack1_values = [];
    let mon_snack1_inputs = document.getElementsByClassName("m s1-item");

    for(let i = 0; i < mon_snack1_inputs.length; i++) {
        if (mon_snack1_inputs[i].value != "") {
            mon_snack1_values.push(mon_snack1_inputs[i].value)
        } else {
            break
        }
    }
    mon_meals.push(mon_snack1_values);

    const mon_lunch_values = [];
    let mon_lunch_inputs = document.getElementsByClassName("m l-item");

    for(let i = 0; i < mon_lunch_inputs.length; i++) {
        if (mon_lunch_inputs[i].value != "") {
            mon_lunch_values.push(mon_lunch_inputs[i].value)
        } else {
            break
        }
    }
    mon_meals.push(mon_lunch_values);

    const mon_snack2_values = [];
    let mon_snack2_inputs = document.getElementsByClassName("m s2-item");

    for(let i = 0; i < mon_snack2_inputs.length; i++) {
        if (mon_snack2_inputs[i].value != "") {
            mon_snack2_values.push(mon_snack2_inputs[i].value)
        } else {
            break
        }
    }
    mon_meals.push(mon_snack2_values);

    const mon_din_values = [];
    let mon_din_inputs = document.getElementsByClassName("m d-item");

    for(let i = 0; i < mon_din_inputs.length; i++) {
        if (mon_din_inputs[i].value != "") {
            mon_din_values.push(mon_din_inputs[i].value)
        } else {
            break
        }
    }
    mon_meals.push(mon_din_values);

    console.log(mon_meals);

    // Create arrays for all Tuesday Meals 
    const tues_meals = [];
    const tues_break_values = [];
    let tues_break_inputs = document.getElementsByClassName("tu b-item");

    for(let i = 0; i < tues_break_inputs.length; i++) {
        if (tues_break_inputs[i].value != "") {
            tues_break_values.push(tues_break_inputs[i].value)
        } else {
            break
        }
    }
    tues_meals.push(tues_break_values);

    const tues_snack1_values = [];
    let tues_snack1_inputs = document.getElementsByClassName("tu s1-item");

    for(let i = 0; i < tues_snack1_inputs.length; i++) {
        if (tues_snack1_inputs[i].value != "") {
            tues_snack1_values.push(tues_snack1_inputs[i].value)
        } else {
            break
        }
    }
    tues_meals.push(tues_snack1_values);

    const tues_lunch_values = [];
    let tues_lunch_inputs = document.getElementsByClassName("tu l-item");

    for(let i = 0; i < tues_lunch_inputs.length; i++) {
        if (tues_lunch_inputs[i].value != "") {
            tues_lunch_values.push(tues_lunch_inputs[i].value)
        } else {
            break
        }
    }
    tues_meals.push(tues_lunch_values);

    const tues_snack2_values = [];
    let tues_snack2_inputs = document.getElementsByClassName("tu s2-item");

    for(let i = 0; i < tues_snack2_inputs.length; i++) {
        if (tues_snack2_inputs[i].value != "") {
            tues_snack2_values.push(tues_snack2_inputs[i].value)
        } else {
            break
        }
    }
    tues_meals.push(tues_snack2_values);

    const tues_din_values = [];
    let tues_din_inputs = document.getElementsByClassName("tu d-item");

    for(let i = 0; i < tues_din_inputs.length; i++) {
        if (tues_din_inputs[i].value != "") {
            tues_din_values.push(tues_din_inputs[i].value)
        } else {
            break
        }
    }
    tues_meals.push(tues_din_values);

    console.log(tues_meals);

    // Create arrays for all Wednesday Meals 
    const wed_meals = [];
    const wed_break_values = [];
    let wed_break_inputs = document.getElementsByClassName("w b-item");

    for(let i = 0; i < wed_break_inputs.length; i++) {
        if (wed_break_inputs[i].value != "") {
            wed_break_values.push(wed_break_inputs[i].value)
        } else {
            break
        }
    }
    wed_meals.push(wed_break_values);

    const wed_snack1_values = [];
    let wed_snack1_inputs = document.getElementsByClassName("w s1-item");

    for(let i = 0; i < wed_snack1_inputs.length; i++) {
        if (wed_snack1_inputs[i].value != "") {
            wed_snack1_values.push(wed_snack1_inputs[i].value)
        } else {
            break
        }
    }
    wed_meals.push(wed_snack1_values);

    const wed_lunch_values = [];
    let wed_lunch_inputs = document.getElementsByClassName("w l-item");

    for(let i = 0; i < wed_lunch_inputs.length; i++) {
        if (wed_lunch_inputs[i].value != "") {
            wed_lunch_values.push(wed_lunch_inputs[i].value)
        } else {
            break
        }
    }
    wed_meals.push(wed_lunch_values);

    const wed_snack2_values = [];
    let wed_snack2_inputs = document.getElementsByClassName("w s2-item");

    for(let i = 0; i < wed_snack2_inputs.length; i++) {
        if (wed_snack2_inputs[i].value != "") {
            wed_snack2_values.push(wed_snack2_inputs[i].value)
        } else {
            break
        }
    }
    wed_meals.push(wed_snack2_values);

    const wed_din_values = [];
    let wed_din_inputs = document.getElementsByClassName("w d-item");

    for(let i = 0; i < wed_din_inputs.length; i++) {
        if (wed_din_inputs[i].value != "") {
            wed_din_values.push(wed_din_inputs[i].value)
        } else {
            break
        }
    }
    wed_meals.push(wed_din_values);

    console.log(wed_meals);

    // Create arrays for all Thursday Meals 
    const thurs_meals = [];
    const thurs_break_values = [];
    let thurs_break_inputs = document.getElementsByClassName("th b-item");

    for(let i = 0; i < thurs_break_inputs.length; i++) {
        if (thurs_break_inputs[i].value != "") {
            thurs_break_values.push(thurs_break_inputs[i].value)
        } else {
            break
        }
    }
    thurs_meals.push(thurs_break_values);

    const thurs_snack1_values = [];
    let thurs_snack1_inputs = document.getElementsByClassName("th s1-item");

    for(let i = 0; i < thurs_snack1_inputs.length; i++) {
        if (thurs_snack1_inputs[i].value != "") {
            thurs_snack1_values.push(thurs_snack1_inputs[i].value)
        } else {
            break
        }
    }
    thurs_meals.push(thurs_snack1_values);

    const thurs_lunch_values = [];
    let thurs_lunch_inputs = document.getElementsByClassName("th l-item");

    for(let i = 0; i < thurs_lunch_inputs.length; i++) {
        if (thurs_lunch_inputs[i].value != "") {
            thurs_lunch_values.push(thurs_lunch_inputs[i].value)
        } else {
            break
        }
    }
    thurs_meals.push(thurs_lunch_values);

    const thurs_snack2_values = [];
    let thurs_snack2_inputs = document.getElementsByClassName("th s2-item");

    for(let i = 0; i < thurs_snack2_inputs.length; i++) {
        if (thurs_snack2_inputs[i].value != "") {
            thurs_snack2_values.push(thurs_snack2_inputs[i].value)
        } else {
            break
        }
    }
    thurs_meals.push(thurs_snack2_values);

    const thurs_din_values = [];
    let thurs_din_inputs = document.getElementsByClassName("th d-item");

    for(let i = 0; i < thurs_din_inputs.length; i++) {
        if (thurs_din_inputs[i].value != "") {
            thurs_din_values.push(thurs_din_inputs[i].value)
        } else {
            break
        }
    }
    thurs_meals.push(thurs_din_values);

    console.log(thurs_meals);

    // Create arrays for all Friday Meals 
    const fri_meals = [];
    const fri_break_values = [];
    let fri_break_inputs = document.getElementsByClassName("f b-item");

    for(let i = 0; i < fri_break_inputs.length; i++) {
        if (fri_break_inputs[i].value != "") {
            fri_break_values.push(fri_break_inputs[i].value)
        } else {
            break
        }
    }
    fri_meals.push(fri_break_values);

    const fri_snack1_values = [];
    let fri_snack1_inputs = document.getElementsByClassName("f s1-item");

    for(let i = 0; i < fri_snack1_inputs.length; i++) {
        if (fri_snack1_inputs[i].value != "") {
            fri_snack1_values.push(fri_snack1_inputs[i].value)
        } else {
            break
        }
    }
    fri_meals.push(fri_snack1_values);

    const fri_lunch_values = [];
    let fri_lunch_inputs = document.getElementsByClassName("f l-item");

    for(let i = 0; i < fri_lunch_inputs.length; i++) {
        if (fri_lunch_inputs[i].value != "") {
            fri_lunch_values.push(fri_lunch_inputs[i].value)
        } else {
            break
        }
    }
    fri_meals.push(fri_lunch_values);

    const fri_snack2_values = [];
    let fri_snack2_inputs = document.getElementsByClassName("f s2-item");

    for(let i = 0; i < fri_snack2_inputs.length; i++) {
        if (fri_snack2_inputs[i].value != "") {
            fri_snack2_values.push(fri_snack2_inputs[i].value)
        } else {
            break
        }
    }
    fri_meals.push(fri_snack2_values);

    const fri_din_values = [];
    let fri_din_inputs = document.getElementsByClassName("f d-item");

    for(let i = 0; i < fri_din_inputs.length; i++) {
        if (fri_din_inputs[i].value != "") {
            fri_din_values.push(fri_din_inputs[i].value)
        } else {
            break
        }
    }
    fri_meals.push(fri_din_values);

    console.log(fri_meals)

    // Create arrays for all Saturday Meals
    const sat_meals = [];
    const sat_break_values = [];
    let sat_break_inputs = document.getElementsByClassName("sa b-item");

    for(let i = 0; i < sat_break_inputs.length; i++) {
        if (sat_break_inputs[i].value != "") {
            sat_break_values.push(sat_break_inputs[i].value)
        } else {
            break
        }
    }
    sat_meals.push(sat_break_values);

    const sat_snack1_values = [];
    let sat_snack1_inputs = document.getElementsByClassName("sa s1-item");

    for(let i = 0; i < sat_snack1_inputs.length; i++) {
        if (sat_snack1_inputs[i].value != "") {
            sat_snack1_values.push(sat_snack1_inputs[i].value)
        } else {
            break
        }
    }
    sat_meals.push(sat_snack1_values);

    const sat_lunch_values = [];
    let sat_lunch_inputs = document.getElementsByClassName("sa l-item");

    for(let i = 0; i < sat_lunch_inputs.length; i++) {
        if (sat_lunch_inputs[i].value != "") {
            sat_lunch_values.push(sat_lunch_inputs[i].value)
        } else {
            break
        }
    }
    sat_meals.push(sat_lunch_values);

    const sat_snack2_values = [];
    let sat_snack2_inputs = document.getElementsByClassName("sa s2-item");

    for(let i = 0; i < sat_snack2_inputs.length; i++) {
        if (sat_snack2_inputs[i].value != "") {
            sat_snack2_values.push(sat_snack2_inputs[i].value)
        } else {
            break
        }
    }
    sat_meals.push(sat_snack2_values);

    const sat_din_values = [];
    let sat_din_inputs = document.getElementsByClassName("sa d-item");

    for(let i = 0; i < sat_din_inputs.length; i++) {
        if (sat_din_inputs[i].value != "") {
            sat_din_values.push(sat_din_inputs[i].value)
        } else {
            break
        }
    }
    sat_meals.push(sat_din_values);

    console.log(sat_meals);

    // Create arrays for all Sunday Meals 
    const sun_meals = [];
    const sun_break_values = [];
    let sun_break_inputs = document.getElementsByClassName("su b-item");

    for(let i = 0; i < sun_break_inputs.length; i++) {
        if (sun_break_inputs[i].value != "") {
            sun_break_values.push(sun_break_inputs[i].value)
        } else {
            break
        }
    }
    sun_meals.push(sun_break_values);

    const sun_snack1_values = [];
    let sun_snack1_inputs = document.getElementsByClassName("su s1-item");

    for(let i = 0; i < sun_snack1_inputs.length; i++) {
        if (sun_snack1_inputs[i].value != "") {
            sun_snack1_values.push(sun_snack1_inputs[i].value)
        } else {
            break
        }
    }
    sun_meals.push(sun_snack1_values);

    const sun_lunch_values = [];
    let sun_lunch_inputs = document.getElementsByClassName("su l-item");

    for(let i = 0; i < sun_lunch_inputs.length; i++) {
        if (sun_lunch_inputs[i].value != "") {
            sun_lunch_values.push(sun_lunch_inputs[i].value)
        } else {
            break
        }
    }
    sun_meals.push(sun_lunch_values);

    const sun_snack2_values = [];
    let sun_snack2_inputs = document.getElementsByClassName("su s2-item");

    for(let i = 0; i < sun_snack2_inputs.length; i++) {
        if (sun_snack2_inputs[i].value != "") {
            sun_snack2_values.push(sun_snack2_inputs[i].value)
        } else {
            break
        }
    }
    sun_meals.push(sun_snack2_values);

    const sun_din_values = [];
    let sun_din_inputs = document.getElementsByClassName("su d-item");

    for(let i = 0; i < sun_din_inputs.length; i++) {
        if (sun_din_inputs[i].value != "") {
            sun_din_values.push(sun_din_inputs[i].value)
        } else {
            break
        }
    }
    sun_meals.push(sun_din_values);

    console.log(sun_meals);
    
}