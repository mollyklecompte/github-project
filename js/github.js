var apiKey = require('./../.env').apiKey;

User = function() {

}

User.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username +  '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);

    response.forEach(function(repo) {
      if (repo.description !== null)
       {$('.reposText').append("<strong>Name:</strong> " + repo.name + " <strong>Description:</strong> " + repo.description + "<br>");}

       else {
        $('.reposText').append("<strong>Repository:</strong> " + repo.name + " <strong>Description:</strong> (no description)<br>");
       }
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.userModule = User;
