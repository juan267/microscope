Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function(){ return Meteor.subscribe('posts')} // for every route on the app we eant to be subscirbe to the posts collection
});

Router.route('/', {name: "postsList"});
