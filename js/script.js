/*$(document).ready(function () {
    $(".box").on("click", function () {
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red")
    });
});
/*We're using the box class and an on("click") function.
We're going to use a variable called classNames.
And we're saying that the space is what we're splitting them by here.
And we are going to change the background color to red.
Our elements have two classes. This means our classNames variable is assigned to a string containing both classes, box and 1.
In order for this function to work, we need to split the string 'box 1' wherever we encounter a space.
So we achieve this using split().
This will give us an array containing two strings.
The first string will be box and the second one will be 1.*/

$(document).ready(function () {
    $(".box").on('click', function () {
        /**
         * when we click on an element that has
         * a 'box' class, this event will be fired.
         */
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            //if this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            //Else turn all elements with a box class black
            //and then change the color of all elements
            //with the same class name as the clicked element
            //to red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
    
});