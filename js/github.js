var apiKey = require('./../.env').apiKey;

User = function() {

}

User.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username +  '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);

    response.forEach(function(repo) {
      $('.showRepos').text("Repository: " + repo.name + " Description: " + repo.description);
    });
    // $('.showRepos').text(response.repos_url);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
