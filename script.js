document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#color-form').onsubmit = function() {
        // Get the color entered by the user
        const color = document.querySelector('#color').value.trim();

        // Change the color of the heading
        if (color !== '') {
            document.querySelector('#hello').style.color = color;
        }

        // Clear the text field
        document.querySelector('#color').value = '';

        // Stop the form from submitting (reloading the page)
        return false;
    };

});
