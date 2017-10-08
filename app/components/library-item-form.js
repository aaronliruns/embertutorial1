import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'Save',

  actions: {
    //When a component is used inside a template, 
    //it has the ability to send actions to that template's controller and routes.
    //Here param == item == model == library
    buttonClicked(param) {
      this.sendAction('action', param);
    }

  }
});