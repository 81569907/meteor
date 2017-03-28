
import { Template } from 'meteor/templating';
import './body.html';
import {Tasks}from '../api/tasks.js'
import './task.js';

import './body.html';


Template.body.helpers({ 
  create: function() { 
     
  }, 
  rendered: function() { 
     
  }, 
  destroyed: function() { 
     
  }, 
  tasks(){
      return Tasks.find({},{sort:{createdAt:-1}});
    },
}); 

Template.body.events({ 
  'submit .new-task'(event, template) { 
     event.preventDefault();
     console.log(event);
     //Get value form element
     const target = event.target;
     const text = target.text.value;

     Tasks.insert({
       text,
       createdAt:new Date(),
     });

     // clear form
     target.text.value='';
  } 
}); 

