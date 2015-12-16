Template.commentSubmit.onCreated(function() {
  Session.set('commentSubmitErrors', {})
})

Template.commentSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('commentSubmitErrors')[field]
  },
  errorClass: function(field) {
    return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
  }
})

Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var comment = {
      body: e.target.body.value,
      postId: template.data._id
    };

    var errors = {};
    if (!comment.body) {
      errors.body = "Please write some content";
      return Session.set('commentSubmitErrors', errors)
    }

    Meteor.call('commentInsert', comment, function(error, commentId) {
      if(error){
        throwError(error.reason)
      } else {
        console.log(e.target.body.value)
      }
    })
  }
})