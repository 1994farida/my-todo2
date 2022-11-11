import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListForm from './components/ListForm';
import ListList from './components/ListList';
import ListSelect from './components/ListSelect';


function App() {

  const [lists, setLists] = useState([
    {id: 1, body: 'составить список дел', status: 'в процессе',statusNew:true},
    {id: 2, body: 'решить задачи', status: 'готово',statusNew:true},
    {id: 2, body: 'поспать', status: 'в процессе',statusNew:false}
  ])

  const createList = (newList) => {
    setLists([...lists, newList])
  }

  

  const removeList = (list) => {
    setLists(lists.filter(l => l.id !== list.id))
    // const newLists = lists.filter((list) => { return list !== id});
    // setLists(newLists)
  }

  // const changeStatus = (newList) => {

  // }

  const [selectedSort, setSelectedSort] = useState('')

  const sortLists = (sort) => {
    setSelectedSort(sort);
    setLists([...lists].sort((a,b) => a[sort].localeCompare(b[sort])))

  }




  return (
    <div className="App">
      <header className="App-header">
      <ListForm create={createList}/>
      <ListSelect value={selectedSort} onChange={sortLists} defaultValue="сортировка" options={[{value: 'body', name: 'по названию'}, {value: 'status', name: 'по статусу'} ]}/>
      <ListList remove={removeList} lists={lists} />
      
        
      </header>
    </div>
  );
}

export default App;
