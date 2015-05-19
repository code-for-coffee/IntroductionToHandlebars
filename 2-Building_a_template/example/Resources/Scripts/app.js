(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['aboutMe.hbs'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<article>\nHi, my name is "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "! My favourite colour is "
    + alias3(((helper = (helper = helpers.colour || (depth0 != null ? depth0.colour : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"colour","hash":{},"data":data}) : helper)))
    + " and I enjoy eating at "
    + alias3(((helper = (helper = helpers.restaurant || (depth0 != null ? depth0.restaurant : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"restaurant","hash":{},"data":data}) : helper)))
    + "!\n</article>\n";
},"useData":true});
})();