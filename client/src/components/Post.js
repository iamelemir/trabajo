import React, { Component } from 'react';

class Post extends Component {

    state = {
        post:[]
    }
     
    async componentDidMount(){
        
       const res =  await fetch('http://localhost:9000/colegios/');
       const data= await res.json();
       
       this.setState({post:data})
    }


    render() {
        return (
            <div>
                <h1> Albunes Musicales</h1>
                {   
                    this.state.post.map( post =>{
                        return(
                            
                            <div key={post.id}>
                                <h1>{post.nit}</h1>
                                <p>{post.nombre}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Post;
