//app/controllers/contact.js
import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length',5),
  isValid: Ember.computed.and('isValidEmail','isMessageValid'),

  actions: {

   sendMessage() {
      alert(`Successfully sent message ${this.get('message')} to email ${this.get('emailAddress')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message','');
    }
  }

});
