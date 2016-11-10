app.directive('note', NoteDirective);

function NoteDirective() {
    return {
      scope: {
          value: '=',
          delete: '&',
          index: '='
      },
      restrict: 'E',
      templateUrl: 'note_template.html',
      controller: NoteController,
      bindToController: true,
      controllerAs: 'vm'

    };
}

function NoteController() {
    this.onClick = function () {
        this.delete();
    };
}
