# Introduction to Handlebars

## Points Touched Upon
- Introduce Handlebars and why it is awesome
- How to create and use a Handlebars template
- Solving a real world problem with Handlebars

### Introduction
- I'll discuss Who I am, what I do, and why I'm here today!
- I'l mention that you should help your partners out if they run into problems - teamwork is key!
- So, why are templates great?
- Next, I'll talk about this Github repository and how it is designed to be used.

### An Introduction to Handlebars.js
Topics that will be discussed:
- Discuss the Handlebars compilation pipeline.
- Why the runtime library exists and how much space it saves.
  - handlebars.min.js = 65KB
  - handlebars-runtime.min.js = 10KB
- If you have used Mustache, you've used Handlebars!
- An overview of Handlebars syntax

### How to build a Handlebars Templates
We will discuss and walk through:
- Creating a Handlebars.js template.
- How to use the `node` cli to compile the template.
- Including Handlebars and the template in your project.
- How to access the template via `handlebars.templates` namespace.
- How to render the template using the `Handlebars.template['myTemplate'](data);` syntax.
- Examples on how this would look in other template frameworks.

### Real world problem: Building interactive input elements
We will Leverage pre-compiled templates to create interactive input elements.
- We have a problem: it would be nice to create form input elements that could toggle from interactive to read-only.
- Using precompiled Handlebars templates, we can use a model-template design pattern to achieve this.
- Walk through creating a model and creating two templates (input type=`text`) that allow input.
- Walk through rendering a model and the template
- Create an element that toggles states of the templates on the page
- Create event listeners to toggle states of the templates on the page
- Show the working version!

### Closing
- Recap on the topics discussed.
- Further reading.
- Contact information.
