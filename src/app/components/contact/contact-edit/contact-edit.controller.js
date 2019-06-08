function ContactEditController (ContactService, cfpLoadingBar, $window){
  var ctrl = this;

  ctrl.updateContact = function () {
    cfpLoadingBar.start();

    return ContactService.updateContact(event.contact).then(function(){
      cfpLoadingBar.complete();
    }, function(){
      cfpLoadingBar.complete();
    });
  };

  ctrl.deleteContact = function(){
    var message = 'Delete '  + event.contact.name + ' from contacts?';

    if($window.confirm(message)){
      return ContactService.deleteContact(event.contact).then(function(){
        $state.go('contacts');
      });
    }

  };

}


angular.module('components.contact').controller('ContactEditController', ContactEditController);
