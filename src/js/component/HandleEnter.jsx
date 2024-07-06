import React from 'react';

const [ inputValue, setInputValue ] = useState('');
const [ allTasks, setAllTasks ] = useState([]);

const handleInputEnter = (event) => {
    if(event.key == 'Enter'){
        setAllTasks([...allTasks, event.target.value]);
        setInputValue('');
    }
}