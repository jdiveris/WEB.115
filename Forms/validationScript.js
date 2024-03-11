    // JavaScript code for form validation
	// Prevent form from submitting
  const form = document.getElementById("myForm");
  
  form.addEventListener("submit", function(e){
    e.preventDefault();
    validateInput();
  });
  
  function validateInput(){
    // Retrieve the input field value
    var inputVal = document.getElementById("inputField").value;
    console.log(inputVal);

    // Regular expression pattern for alphanumeric input
    var regex = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (!regex.test(inputVal)) {
      alert("Invalid format. Please enter an Alphanumeric Value");
      console.log(inputVal);
      form.reset();
    } else if (regex.test(inputVal)){
      alert("Format accepted. Form Submitted");
      form.submit();
    };
  };

        