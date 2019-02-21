import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['map-container'],
  mapElement: service(),

  didInsertElement() {
    this._super(...arguments);
    //this.canThisBeAnyName is a property we havent defined
    //within the template this is being used you can define the variable
    //by doing @canThisBeAnyName={{whateverYouNeedToUse}}
    //and if in another template, make sure to call it <LocationMap
    this.mapElement.getMapElement(this.canThisBeAnyName).then((mapElement) => {
      this.element.append(mapElement);
    });

  }
});