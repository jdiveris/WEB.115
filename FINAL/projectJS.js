// When Window loads
window.addEventListener("load", e => {
    // Add event listeners to Weekday Tab titles
    $(".title").click(e => {
        // Toggle active classes for prev tab
        $(".day").not(".inactive").toggleClass("inactive");
        $(".title.active").toggleClass("active");
    
        // Toggle active classes for new tab
        $(e.target).toggleClass("active");
        let day = e.target.id
        $("."+day).toggleClass("inactive"); // Animate this later // Oh geez it's late...
    });

    // Add event listeners to item buttons to add extra fields
    $("div.day button").click(e => {
        e.preventDefault();
        // Get the specific input section
        let class_id = $(e.target).attr('class');
        class_id = class_id.split(' ');
        let index = class_id.indexOf('add');

        // Reveal the correct input field
        $(e.target).prevAll("input.hidden."+class_id[index-1]).last().after("<br>")
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
        
        let email = document.getElementById("email")
        let email_regx = /@.+/; // Research has indicated simple is best for email validation

        // Test for valid email
        if (email_regx.test(email.value)){
            // Collect all user inputs - returns an object  
            const user_meals = get_inputs();

            // Condense obj to JSON str
            const user_meals_json = JSON.stringify(user_meals);

            // Build our basic HTML for window (most will be generated after load)
            baseHTML = ("<html>\n<head>\n<title>Planner</title>\n");
            baseHTML += ("<link rel=\"stylesheet\" href=\"planner.css\">\n");
            baseHTML += ("<script src=\"planner.js\"></script>\n</head>\n<body>\n");
            baseHTML += ("<div id=\"json_contents\">" + user_meals_json + "</div>\n"); // Include div to hold our Planner Data
            baseHTML += ("<script>\ngenerate_planner();\n</script>\n") // Call function to generate the page
            baseHTML += ("</body>\n</html>");

            // Open the window
            flyWindow = window.open('about:blank','myPop','width=700,height=850,left=400,top=10');
            flyWindow.document.write(baseHTML);
        } else {
            // If invalid email
            alert("Please enter a valid Email address")
            email.focus();
        }


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
            "backgroundColor": "#84d965"
        })
    })
})





// This function could have been designed better using loops, but I struggled to
// think of ways to do so cleanly before being well past the point of no return

function get_inputs() { 
    // Create parent array for the entire week
    var week_meals = [];

    // Create parent array for all Monday Meals 
    const mon_meals = ["Monday"]; // First value will be used when generating page
    const mon_break_values = [];
    let mon_break_inputs = document.getElementsByClassName("m b-item");

    // Filter out empty input boxes and build breakfast array
    for(let i = 0; i < mon_break_inputs.length; i++) {
        if (mon_break_inputs[i].value != "") {
            mon_break_values.push(mon_break_inputs[i].value)
        } else {
            break
        }
    }

    // Append to Monday parent
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
    
    // Append to Week Parent
    week_meals.push(mon_meals);

    // Create arrays for all Tuesday Meals 
    const tues_meals = ["Tuesday"];
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

    week_meals.push(tues_meals);

    // Create arrays for all Wednesday Meals 
    const wed_meals = ["Wednesday"];
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

    week_meals.push(wed_meals);

    // Create arrays for all Thursday Meals 
    const thurs_meals = ["Thursday"];
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

    week_meals.push(thurs_meals);

    // Create arrays for all Friday Meals 
    const fri_meals = ["Friday"];
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

    week_meals.push(fri_meals)

    // Create arrays for all Saturday Meals
    const sat_meals = ["Saturday"];
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

    week_meals.push(sat_meals);

    // Create arrays for all Sunday Meals 
    const sun_meals = ["Sunday"];
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

    // Final Array of all meals
    week_meals.push(sun_meals);
    
    // Get User Personal info & Goal
    let goal = document.getElementById("goal").value;
    let name = document.getElementById("fname").value;
    name += " ";
    name += document.getElementById("lname").value;

    // Package all our data into an Obj
    const meal_plan = {
        Name: name,
        Goal: goal,
        Meals: week_meals
    }
    console.log(meal_plan);

    // Return it to the event function
    return meal_plan;
}