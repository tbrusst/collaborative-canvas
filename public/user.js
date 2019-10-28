function User(){





  this.id = Math.random().toString(36).substr(2, 9);
  this.color = "#"+Math.floor(Math.random()*16777215).toString(16);






};


User.prototype.register = function(data){
  var time = new Date().toJSON();
  addUser(data.user);

}

User.prototype.logoff = function(data){
  users.forEach(function(user, index){
    if(user.id == data.user.id){
      users.splice(index, 1);
    }
  })
}

User.prototype.loadAll = function(data){
  console.log(data);

  var users = data.users;

  users.forEach(function(user, index){
    addUser(user);

  });
}

User.prototype.generateColor = function(data) {
  return "#"+Math.floor(Math.random()*16777215).toString(16);
}

// User.prototype.updateColor = function(data) {
//
//   var selector = '#id-' + data.user.id;
//   $(selector).css('background', data.user.color);
// }

function addUser(user){
  if(user.mobile){
  // $('.display-view').append('<div class="avatar" id="id-' + user.id +'" style="background: ' + user.color + '">'+ user.id + '</div>');

  users.push(user);
  console.log(users);
}
}
