# AngularJS Wrapper for [TurnJS](http://www.turnjs.com/)

##Quick Start

- Include Angular-TurnJS library in your `index.html` :

```
<script src="https://raw.githubusercontent.com/embladev/Angular-TurnJS/master/dist/angular-turn.min.js"></script>
```

- Inject the `angular-turnJS` module into your app.js:

```
angular.module('myApp', ['angular-turnJS']);
```

## Requirements

- Angular
- jQuery 1.7 or later
##Example

```

<div ng-app="myApp" ng-controller="myController">

    <Book 
    ngb-height="200"
    ngb-width="100"
    ngb-autoCenter="true">
	
            <cover ngb-template='cover.html'/>
                <page ngb-template='firstPage.html'/> 
                <page ngb-template='Person.html'  ngb-continuous/>
                <page ngb-template='index.html'  ngb-continuous/>	
            <cover template='backcover.html' />
    </Book>

</div>
```

## Elements

- book - defines the book. ngb-height, ngb-width and ngb-autoCenter options can be added as attributes.
- page - defines a single page
- cover - defines a cover page

## Attributes

- ngb-height - sets the height of the book
- ngb-width - sets the width of the book
- ngb-autoCenter - centers the book depending on how many pages are visible
- ngb-template - url of the html template for the page
- ngb-continuous - continuous flow of data throughout the pages