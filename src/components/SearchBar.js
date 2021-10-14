import React from 'react';
import PostsList from '../pantallas/PostsList';
import '../Post.css'; 
class SearchBar extends React.Component {
    state = {
        val: ''
      }

    buscar = (event) => {
        event.preventDefault()
        const body = {
            valor: event.target.valor.value
        }
        console.log('buscar',body)
        if(body !== ''){
        this.setState({
            val: body.valor
        });
        if (this.state.val.length > 0 ){
            return <PostsList val = { this.state.val }/>
        }
        console.log('PostsList',this.state.val),
        this.props.onSearch('postslist')
        }else{
            console.log('buscar_2',body)
            this.props.onSearch('buscar')
        }
        

    }

render(){
        return(
            <form onSubmit={this.buscar}>
                <div classname="col-12 col-sm-6 me-2 row mt-3">
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Buscar Post"  
                    aria-label="Search"
                    name= "valor"
                    />
                </div>
                </form>    
        )
    

}

}

export default SearchBar;