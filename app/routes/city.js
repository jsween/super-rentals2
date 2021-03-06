import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },
  actions: {
    save(params) {
      var newRental = this.store.createRecord('rental', params);
      var city = params.city;
      city.get('rentals').addObject(newRental);
      console.log(city);
      newRental.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', params.city);
    }
  }
});
