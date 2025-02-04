// handle "Back to top" button event - it is not visible by default
// When the user scrolls down 600px from the top of the document, show the button

// on scroll event, call scrollFunction()
window.onscroll = function() {scrollFunction()};

// scrollFunction() is designed to determine if "Back to Top" button should be visible or hidden
function scrollFunction() {
	// show the button if user scrolled down more than 600px
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
        document.getElementById("button-up").style.display = "block";
    // otherwise, button should be hidden
    else 
        document.getElementById("button-up").style.display = "none";
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

// now, this is the function to handle the search in the Nuclear Reactor/Plant table:
// TO-DO later (maybe for assignment 4)