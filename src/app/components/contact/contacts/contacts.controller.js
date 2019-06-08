function ContactsController ($filter, $state) {
  var ctrl = this;
  var contacts;

  ctrl.$onChanges = function(changes){
      if(changes.contacts){
        console.log("changes", changes, ctrl.contacts);
        contacts = ctrl.contacts;
        ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter);
      }
      //console.log("filter ", ctrl.filter, ctrl.contacts, " This: ", );
  };


  ctrl.gotoContact = function(event){
    console.log("goto ", event);
    $state.go('contact');
  };

}

angular.module('components.contact').controller('ContactsController', ContactsController);
