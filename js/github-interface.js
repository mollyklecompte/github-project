var User = require('./../js/github.js').userModule;

$(document).ready(function() {
  var currentUserObject = new User();
  $('#user-form').submit(function(event) {
    event.preventDefault();

    var username = $('#user-name').val();
    currentUserObject.getRepos(username);

  });
});
