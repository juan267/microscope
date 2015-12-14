if (Posts.find().count() === 0) {
  Posts.insert({
    title: "Introducing meteor",
    url: "http://meteor.com"
  });

  Posts.insert({
    title: "Meteor",
    url: "http://meteor.com"
  });

  Posts.insert({
    title: "The meteor book",
    url: "http://meteor.com"
  });
}
