

(function(){
	

alert("working");

	angular.module("angularTurn").directive("book", function () {
    var directive = {};
    directive.restrict = 'E';
    directive.transclude = true;
    directive.template = "<h1>Made by a directive!</h1>";
    directive.compile = function (element, attributes) {
        var linkFunction = function ($scope, element, attributes) {
			
alert("working");
            var bookTitle = attributes.ngbTitle;
            element.html("<h1>" + bookTitle + "</h1>");
        }
        return linkFunction;
    }
    return directive;
	});
})();





