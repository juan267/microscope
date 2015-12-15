Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function(){ return Meteor.subscribe('posts')} // for every route on the app we eant to be subscirbe to the posts collection
});

Router.route('/', {
  name: "postsList"
});

Router.route('/posts/:_id', {
  name: 'postPage',
  data: function(){ return Posts.findOne(this.params._id)}
});

Router.route('/submit', {
  name: 'postSubmit'
})

Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function(){ return Posts.findOne(this.params._id)}
})

var requireLogin = function(){
  if (!Meteor.user()){
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate)
    } else {
      this.render('accessDenied')
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'postSubmit'})

Router.onBeforeAction('dataNotFound', {
  only: 'postPage'
})
