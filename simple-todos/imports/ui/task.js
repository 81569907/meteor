import {Tasks} from "../api/Tasks.js";
import {Template} from "meteor/tmeplating";
import "./task.html";

Template.task.helpers({ 
    create: function() { 
         
    }, 
    rendered: function() { 
         
    }, 
    destroyed: function() { 
         
    }, 
}); 

Template.task.events({ 
    'click .toggle-checked': function(event, template) {

        Tasks.update(this._id,{
            $set:{checked:!this.checked},
        }); 
         
    },
    "click .delete":function(){
        Tasks.remove(this._id);
    }
}); 
