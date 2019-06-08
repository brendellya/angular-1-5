function ContactController () {
  var ctrl = this;

  ctrl.selectContact = function(){
    //console.log("ctrl.contact.$id", ctrl.contact.$id, ctrl.contact);
    ctrl.onSelect({
      $event: {
        contactId: ctrl.contact.$id
      }
    });
  }

}

angular.module('components.contact').controller('ContactController', ContactController);
