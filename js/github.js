var apiKey = require('./../.env').apiKey;

User = function() {

}

User.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username +  '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);

    response.forEach(function(repo) {
       $('.reposText').append("<strong>Repository:</strong> " + repo.name + " <strong>Description:</strong> " + repo.description + "<br>");
    });

    // for (var i=0; i < response.length; i++) {
    //   $('.reposText').append("Repository: " + i.name + " Description: " + i.description + "<br>");
    // }
    // $('.showRepos').text(response.repos_url);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.userModule = User;
