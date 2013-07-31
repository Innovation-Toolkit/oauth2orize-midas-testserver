var users = [
    { id: '1', username: 'bob', password: 'secret', name: 'Bob Marley', email: 'bob@hhs.gov', photo: 'http://africanaconnections.com/wp-content/uploads/2011/11/AC-PostPic-11142011a.jpg' },
    { id: '2', username: 'joe', password: 'password', name: 'Joe Biden', email: 'joe@whitehouse.gov', photo: 'http://static2.businessinsider.com/image/50749374eab8ead24f000010-1200/want-more-joe-biden-moments.jpg' }
];


exports.find = function(id, done) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.id === id) {
      return done(null, user);
    }
  }
  return done(null, null);
};

exports.findByUsername = function(username, done) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
      return done(null, user);
    }
  }
  return done(null, null);
};
