"use strict";

var qaItems = [];

function findItemIndex(id) {
    var idx = qaItems.findIndex( 
        function(qa) { 
            return (qa.id === Number(id));
        } 
    );
    if (idx >= 0 ) {
        console.log('found element at index = ' + idx);
    }
    return idx;
}

var qaItemController = {
    
    // create
    qaItemCreate: function (qaItem) {
        
        // todo: validate if qa isn't empty
        
        // generate unique id;
        var maxId = 0;
        qaItems.forEach(function(item){
            if (item.id > maxId) {
                maxId = item.id;
            }
        }); 
        
        qaItem.id = maxId + 1;
        qaItems.push(qaItem);
        return qaItem;
    },
    
    // read
    getAll: function() { 
        return qaItems;
    },
    
    getCategory: function(category) {
        return qaItems.filter(function(item) {
            return (item.category.toLowerCase() === category.toLowerCase());
        });
    },   
        
    // update
    updateQA(item) {
        // todo: validate if qa isn't empty
        var idx = findItemIndex(item.id);
        if (idx >= 0) {
            qaItems[idx].question = item.question;
            qaItems[idx].answer = item.answer;
            // todo: finish the rest of the properties          
        }
        return qaItems[idx];
    } , 
        
    // delete
    deleteQA(id) {
        var idx = findItemIndex(id);
        
        if (idx >= 0) {
           return qaItems.splice(idx, 1);
        }
        
    }      
}

module.exports = qaItemController;