function generate_planner() {

    // Unpack JSON
    const user_plan = JSON.parse(document.getElementById("json_contents").textContent);

    // Isolate meal arrays
    var user_meals = user_plan.Meals;

    console.log(user_plan);
    console.log(user_meals);

    // Isolate personal info
    var info = Object.values(user_plan);
    info = info.slice(0,2);

    // Build Page heading using Personal info
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode(info[0] + "'s Meal Plan");
    heading.appendChild(heading_text);
    var attr_class = document.createAttribute("class");
    attr_class.value = "heading";
    heading.setAttributeNode(attr_class);
    document.body.appendChild(heading);
    const br = document.createElement("br");
    document.body.appendChild(br);
    document.body.appendChild(br);

    const heading2 = document.createElement("h2");
    const heading2_text = document.createTextNode("This Week's Goal:")
    heading2.appendChild(heading2_text);
    document.body.appendChild(heading2);
    document.body.appendChild(br);

    const goal = document.createElement("p");
    const goal_text = document.createTextNode(info[1]);
    goal.appendChild(goal_text);
    document.body.appendChild(goal);
    document.body.appendChild(br);
    document.body.appendChild(br);

    // Populate Page with meal data: Loop for each day
    for(i = 0; i < 7; i++){
        // Each day nested in div
        var day_div = document.createElement("div");
        var attr_class = document.createAttribute("class");
        attr_class.value = "day"; 
        day_div.setAttributeNode(attr_class); // Easier CSS

        // Create a header for each Day
        var day_header = document.createElement("h1");
        var day_text = document.createTextNode(user_meals[i][0]);
        day_header.appendChild(day_text);
        day_div.appendChild(day_header);

        // Create meals individually
        var break_header = document.createElement("h3");
        var break_text = document.createTextNode("Breakfast");
        break_header.appendChild(break_text);
        day_div.appendChild(break_header);

        // Meal items will be listed in a ul
        var break_list = document.createElement("ul");
        // Loop for meals with multiple items
        for(j = 0; j < user_meals[i][1].length; j++){
            var break_item = document.createElement("li");
            var break_item_text = document.createTextNode(user_meals[i][1][j]); // [i] >> Day, [1] >> 1st Meal Array, [j] >> Items
            break_item.appendChild(break_item_text);
            break_list.appendChild(break_item);
        }
        day_div.appendChild(break_list);
        
        // Repeat for each meal -- Again can be streamlined with more efficient loops
        var s1_header = document.createElement("h3");
        var s1_text = document.createTextNode("Morning Snack");
        s1_header.appendChild(s1_text);
        day_div.appendChild(s1_header);

        var s1_list = document.createElement("ul");
        for(j = 0; j < user_meals[i][2].length; j++){
            var s1_item = document.createElement("li");
            var s1_item_text = document.createTextNode(user_meals[i][2][j]);
            s1_item.appendChild(s1_item_text);
            s1_list.appendChild(s1_item);
        }
        day_div.appendChild(s1_list);

        var lun_header = document.createElement("h3");
        var lun_text = document.createTextNode("Lunch");
        lun_header.appendChild(lun_text);
        day_div.appendChild(lun_header);

        var lun_list = document.createElement("ul");
        for(j = 0; j < user_meals[i][3].length; j++){
            var lun_item = document.createElement("li");
            var lun_item_text = document.createTextNode(user_meals[i][3][j]);
            lun_item.appendChild(lun_item_text);
            lun_list.appendChild(lun_item);
        }
        day_div.appendChild(lun_list);

        var s2_header = document.createElement("h3");
        var s2_text = document.createTextNode("Afternoon Snack");
        s2_header.appendChild(s2_text);
        day_div.appendChild(s2_header);

        var s2_list = document.createElement("ul");
        for(j = 0; j < user_meals[i][4].length; j++){
            var s2_item = document.createElement("li");
            var s2_item_text = document.createTextNode(user_meals[i][4][j]);
            s2_item.appendChild(s2_item_text);
            s2_list.appendChild(s2_item);
        }
        day_div.appendChild(s2_list);

        var din_header = document.createElement("h3");
        var din_text = document.createTextNode("Dinner");
        din_header.appendChild(din_text);
        day_div.appendChild(din_header);

        var din_list = document.createElement("ul");
        for(j = 0; j < user_meals[i][5].length; j++){
            var din_item = document.createElement("li");
            var din_item_text = document.createTextNode(user_meals[i][5][j]);
            din_item.appendChild(din_item_text);
            din_list.appendChild(din_item);
        }
        day_div.appendChild(din_list);

        document.body.appendChild(day_div);
        document.body.appendChild(br);
        document.body.appendChild(br);
    }
}