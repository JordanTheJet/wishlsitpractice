import React from 'react';

class AddItem extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            itemInput : "",
            availableArray : ["item one", "item two", "item three"],
            wishListArray : ["item one", "item two"],
        }
    }
    inputChange=(e)=>{
        this.setState({
            itemInput: e.target.value
        })

        
    }
    addToAvailable=()=>{
        let i=this.state.itemInput
        console.log(i)
        this.setState({
            availableArray: [...this.state.availableArray, i]
        })
    }
    addToWishList=(item)=>{
        this.setState({
            wishListArray: [...this.state.wishListArray, item]
        })
    }
    removeFromWishList=(item)=>{
        let arr = [...this.state.wishListArray]
        let index = this.state.availableArray.indexOf(item)
        arr.splice(index, 1)
        this.setState({
            wishListArray: arr
        })
    }
    render(){
        return(
            <div>
            <div>Avaiable Numbers {this.state.availableArray.length} 
            <input onChange={this.inputChange}></input><button onClick = {this.addToAvailable}>Add to Availble</button>

            <ul>
                {this.state.availableArray.map(item => 
                    <div><li>{item}</li> <button onClick = {()=>this.addToWishList(item)}>Add to Wishlist</button>
                    </div>
                    )}
            </ul>
            </div>

            <div>My Wish List{this.state.wishListArray.length}

            <ul>
                {this.state.wishListArray.map(item => 
                    <div><li>{item}</li> <button onClick = {()=>this.removeFromWishList(item)}>Remove from Wish List</button>
                    </div>
                    )}
            </ul>
            </div>
            </div>
        )
    }
}
export default AddItem