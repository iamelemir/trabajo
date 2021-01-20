import React, { Component } from 'react'
import './student.css'

export default class Buscar extends Component {
   
       
       state = {
            post:[]
        }
    
     
    async componentDidMount(){
        
       const res =  await fetch('http://localhost:9000/pregunta/');
       const data= await res.json();
       
       this.setState({post:data})
    }
    render() {
    
        return (
            <div id="panel">
                {   
                    this.state.post.map( post =>{
                        return(
                            
                            <div key={post.id}>
                                 <p>{post.id}--{post.enunciado}</p>                                                      
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
