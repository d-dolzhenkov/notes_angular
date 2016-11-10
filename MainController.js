app.controller('MainController', MainController);

function MainController() {
    
    var _this = this;
    _this.notes = [];
    
    _this.add = function (data)
    {
        _this.notes.push(data);
        _this.text = " ";
    };
    
    _this.delete = function (index) {
        _this.notes.splice(index, 1)
    };
}