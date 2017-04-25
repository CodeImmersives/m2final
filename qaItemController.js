"use strict";

var qaItems = [];


var qaItemController = {
    
    // create
    qaItemCreate: function (qaItem) {
        qaItem.id = qaItems.length + 1;
        qaItems.push(qaItem);
        return qaItem;
    },
    
    // read
    getAll: function() { 
        return qaItems;
    },
    
    getCategory: function(category) {
        return qaItems.filter(function(item) {
            return (item.category === category);
        });
    },   
        
    // update: todo
        
    // delete: todo
        
}

module.exports = qaItemController;