import React, { Component } from 'react'
import './UserPost.jsx'
import Content from '../../template/content/Content'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl ='http://localhost:3001'
const url = `${baseUrl}/users`



export default class UserPost extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            curso:'',
            semestre:'',
            password:''}
    }

    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        if((this.state.name==='') || 
        (this.state.curso==='') ||
        (this.state.semestre==='') ||
        (this.state.email==='') ||
        (this.state.password==='')){
             return Swal.fire({
                position: 'top-end',
                width: '25rem',
                confirmButtonColor:'#FF0040',
                confirmButtonText:'Entendi',
                // icon: 'error',
                // title: 'Preencha todos os campos com *!',
                text: 'Preencha todos os campos com *',
                showConfirmButton: true
              })
        } else {
            e.preventDefault()
            axios.post(url, this.state).then(resp =>{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    confirmButtonColor:'#2EFE64',
                    confirmButtonText:'Sucesso!',
                    title: 'Usuário cadastrado com sucesso!',
                    showConfirmButton: true
                }).then(e =>{
                    this.setState({name:'', email:'', curso:'', semestre:'', password:''})
                })
            })
        }
    }


    cancel(){
        window.location='/users'
    }
   
    render(){
        const {name, email, curso, semestre, password} = this.state
        return(
            <Content>
                <div className='UserPost'>
                    <button onClick={this.cancel} className="btn btn-outline-primary mb-4">Voltar</button>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label> Nome *</label>
                                <input 
                                type="text" className="form-control"
                                name="name"
                                value={name}
                                onChange={this.changeHandler}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email *</label>
                                <input type="text" className="form-control" 
                                name="email"
                                value={email}
                                onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Curso *</label>
                                <input type="text" className="form-control" 
                                name="curso"
                                value={curso}
                                onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Semestre *</label>
                                <input type="number" className="form-control" 
                                name="semestre"
                                value={semestre}
                                onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Senha *</label>
                                <input type="password" className="form-control"
                                name="password" 
                                value={password}
                                onChange={this.changeHandler}/>
                            </div>
                        </div>
                    </form>    
                        <button onClick={this.submitHandler} className="btn btn-success mr-2 mt-2">Adicionar</button>
                        <button onClick={this.cancel} className="btn btn-outline-secondary mt-2">Cancelar</button>            
                </div>
            </Content>
        )
        
    }
}

        
    