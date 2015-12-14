// var postsData = [
//   {
//     title: "Introducinf telescope",
//     url: "http://monkeybaby.co"
//   },
//   {
//     title: "meteor",
//     url: "http://meteor.com"
//   }
// ];

Template.postsList.helpers({
  posts: function(){
    return Posts.find();
  }
})

