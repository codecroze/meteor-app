import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Task } from './Task';
import Tasks from '/imports/api/tasks';
import { useTracker } from 'meteor/react-meteor-data'; 

const tasks = [
	{_id:1, text:'First Task'},
	{_id:2, text:'Second Task'},	
	{_id:3, text:'Third Task'},
];

export const App = () => {
  const tasks = useTracker(() => Tasks.find({}).fetch());
  return (
  <div>
    <h1>Welcome to Meteor!</h1>

	<ul>
		{ tasks.map( task => <Task key={ task._id } task= { task  }/>)}
	</ul>
    <Hello/>
    <Info/>
  </div>
);
};
