import React, { Component } from 'react'
import Content from '../../template/content/Content'
import axios from 'axios'
import Swal from 'sweetalert2'

// const userDados = {
//     user: {name:'',email:'',curso:'',semestre:'',}
// }

const baseUrl ='http://localhost:3001/users'
const UserDados = {
    user: {id:'', name: '', email: '', curso: '', semestre: '', password:'' }
}
const id = []
const Send_password = {password: {value:''}}

export default class UserDelete extends Component {

    state = { ...UserDados }
    user_id = {...id}    
    confirm = {...Send_password}

    componentDidMount(){
        const url_atual = window.location.href
        const array_url = url_atual.split('/')
        const tamanho_array = array_url.length
        const get_id = array_url[tamanho_array-1]
        this.user_id = get_id
        axios.get(`${baseUrl}/${get_id}`).then(res =>{
            this.setState({user: res.data})
            console.log(res.data)
        })
    }
    
    
    submitHandler = e =>{
        e.preventDefault()
        const id = this.state.user.id
        axios.delete(`${baseUrl}/${id}`).then(() =>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                confirmButtonColor:'#2EFE64',
                confirmButtonText:'Sucesso!',
                title: 'Usuário deletado com sucesso!',
                showConfirmButton: true
            }).then(e => {
                window.location = '/users'
            }) 
        })
    }

    cancel(){
        window.location = '/users'
    }

    render(){
        return(
            <Content>
                 <div className='UserPut'>
                    <button onClick={this.cancel} className="btn btn-outline-primary mb-4">Voltar</button>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-row" >
                            <div className="form-group col-md-6">
                                <label> Nome </label>
                                <input
                                    type="text" className="form-control"
                                    name="name"
                                    value={this.state.user.name}
                                    readOnly
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="text" className="form-control"
                                    name="email"
                                    value={this.state.user.email}
                                    readOnly/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Curso </label>
                                <input type="text" className="form-control"
                                    name="curso"
                                    value={this.state.user.curso}
                                    readOnly/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Semestre </label>
                                <input type="number" className="form-control"
                                    name="semestre"
                                    value={this.state.user.semestre}
                                    readOnly/>
                            </div>
                        </div>
                    </form>
                    <button onClick={this.submitHandler} className="btn btn-danger mr-2 mt-2">Deletar usuário</button>
                    <button onClick={this.cancel} className="btn btn-outline-secondary mt-2">Cancelar</button>
                </div>
            </Content> 
        )
    }

}