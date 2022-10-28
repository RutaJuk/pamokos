$(function () {

    $('#btn').click(function () {

        // Load data once (when usersTable is hidden)
        if ($('#usersTable').is(":hidden")) {
            // Hide message
            $('#message').fadeOut();

            // Request to REST API
            $.get("https://api.github.com/users", function (response) {
                // Show usersTable
                $('#usersTable').fadeIn();
                response.forEach(function (userData) {
                    // Add new record in table
                    $('#usersTable tr:last').after(`
              <tr>
                <td>` + userData.login + `</td>
                <td>` + userData.avatar_url + `</td>
              </tr>`);
                });
            });
        } else {
            alert('Data has already loaded');
        }
    });
});