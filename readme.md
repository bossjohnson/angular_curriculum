# Angular Curriculum Questions

#### Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?



#### People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?

1. It's really complex and takes a minute to learn.  It is therefore not necessarily a good solution for simple two-way data binding if that is all you hope to get out of it.
2. The way Angular binds $scope (using a recursive check of all scope properties) can cause serious performance issues if too much data is bound.
3. Angular 2 is going to change just about everything about how Angular works, and so migrating older apps to Angular 2 has the potential to be a huge headache.



#### Is Angular an MVC framework?

Angular is described as an MVC-like framework.  It is also sometimes described as a MVVM (model view view-model) framework.  It closely mirrors the MVC pattern but does not necessarily adhere *strictly* to the pattern.



#### Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?

ng-app is an attribute which is added to the <html> tag to define an Angular app.  This is a necessary tag for Angular functionality to work.  "ng" stands for A**ng**ular.



#### What does ng-model do?

ng-model is an attribute which binds the data in an input to a name in the data model (the M of MVC).  For example, if you give a text input the attribute ng-model="name", then you can access the value of that input elsewhere with {{ name }}.



#### What is "dirty checking"?



#### Find a way to set the initial value of "name" as "BoJack" (without writing a controller).



#### What are those {{ }} expressions? Are they Handlebars?
Curly braces represent an angular expression or a data binding.
An expression (e.g. 1 + 2) inside of them will be evaluated (in this case, 1 + 2 would evaluate to 3).  A variable name (e.g. firstName) placed inside the curly braces will be replaced by the corresponding value from the model - that is, if firstName is defined as "Larry" in the model, then anywhere that {{ firstName }} appears Angular will insert the string "Larry".  They look like handlebars and function similarly, but they are not exactly the same.  



#### Explain what two-way data binding is.

Two-way data binding allows changes in data to be reflected in real time in two different locations.  That is, a change in the view will be reflected in the model, and vice versa.  This makes maintaining data integrity easier and more robust, since we no longer have to manually update the view or model when the other changes.



#### BONUS: Research the $digest loop

OK, I will.



#### What are Angular expressions? How do they compare to tags from templating engines you've used before?

Angular expressions are expressions surrounded by double curly braces - i.e. {{ expression }}.  If these expressions contain variable names that are present in the data model, their values will be rendered in the view.  Mathematical operators in expressions will also be evaluated - so if total = 5 and tax = .08 in the model, {{ total * tax }} will render as 0.4 in the view.  This is similar to the behavior of tags in templating engines like Jade and Handlebars, but more powerful in that entire expressions may be passed in and evaluated, rather than simply the properties of a locals object.



#### What happens when you write invalid code in an expression? What type of error do you get?

If there is invalid code in an expression the interpreter will throw a syntax error (specifically, a parsing error).  This will be immediately obvious without looking at the console because ***all*** Angular expressions will suddenly render in the view with literal {{ }} around them and no expressions or data bindings will be evaluated.  



#### What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.

Angular filters take data and format or manipulate it in a predictable, meaningful way.  The currency filter, for example, takes a number and prepends a currency symbol and rounds it to two decimal places.  The uppercase filter takes a string and returns a capitalized version; the lowercase filter, likewise, returns a lower-cased string.  The date filter takes a date and returns a formatted string; the desired format can be specified as an argument to the filter.

#### What's the syntax for filters?

{{ expression | filter : argument1 : argument2 ... }}

#### Can you use more than one filter?

Heck yeah!  Just chain 'em together like so:  
{{ expression | filter 1 | filter 2 ... | filter n }}

#### We'll soon see how to create custom filters. What is a use case for a custom filter?
