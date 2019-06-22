import React from 'react';
import AddItem from './AddItem';

class App extends React.Component {

    render(){
        return(
            <div><h1>My Wishlist</h1>
            <AddItem />
            </div>
        )
    }
}

export default App