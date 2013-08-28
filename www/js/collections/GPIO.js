/**
 * Created with IntelliJ IDEA.
 * User: bphan
 * Date: 4/13/13
 * Time: 11:46 AM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone', 'models/GPIO'], function (Backbone, GPIOModel){
    var GPIOCollection = Backbone.Collection.extend({
        defaults: {
            command:"ls"
        },
        model:GPIOModel,
        url:"http://phan-tastic.dyndns.org/HomeController/gpio/list",
	parse: function(response) {
            var data = [];
            $.each(response, function(key, item) {
                data.push(item);
	    });
	    return data; 
        }
    });
  
    return GPIOCollection;
});
