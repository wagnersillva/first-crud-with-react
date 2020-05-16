import React, { Component } from 'react'
import './UserPut.css'
import Content from '../../template/content/Content'
import axios from 'axios'
import Swal from 'sweetalert2'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

const baseUrl = 'http://localhost:3001/users'
const UserDados = {
    user: { name: '', email: '', curso: '', semestre: '', password:'' }
}
const url = []

export default class UserPut extends Component {

    state = { ...UserDados }
    urlAxios = {...url}

    componentDidMount(){
        const url = window.location.href
        const new_url = url.split('/')
        const tamanho_url = new_url.length
        const id = new_url[tamanho_url - 1]
        this.urlAxios = `${baseUrl}/${id}`
        axios(`${baseUrl}/${id}`).then(resp=>{
            this.setState({user: resp.data})
            console.log(this.state.user.name)
            console.log(this.state.user.email)
            console.log(this.state.user.curso)
            console.log(this.state.user.semestre)
        })
    }


    submitHandler = e =>{
        if((this.state.user.name==='') || 
        (this.state.user.curso==='') ||
        (this.state.user.semestre==='') ||
        (this.state.user.password==='')){
             return Swal.fire({
                position: 'center',
                width: '25rem',
                confirmButtonColor:'#FF0040',
                confirmButtonText:'Entendi',
                // icon: 'error',
                // title: 'Preencha todos os campos com *!',
                text: 'Preencha todos os campos com *',
                showConfirmButton: true
              })
        } else if((this.state.user.name!=='') & 
        (this.state.user.curso!=='') &
        (this.state.user.semestre!=='') &
        (this.state.user.password!=='')){
            e.preventDefault()
            const employee = {
                name: this.state.user.name,
                email: this.state.user.email,
                curso: this.state.user.curso,
                semestre: this.state.user.semestre,
                password: this.state.user.password
            }  
            axios.put(this.urlAxios, employee).then(resp =>{
                console.log(resp.data)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    confirmButtonColor:'#2EFE64',
                    confirmButtonText:'Sucesso!',
                    title: 'Usuário alterado com sucesso!',
                    showConfirmButton: true
                }).then(e => {
                    window.location = '/users'
                }) 
                
            })
        }
    }

    changeHandler(event) {
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
    }
    cancel(){
        window.location = '/users'
    }

    render() {
        return (
            <Content>
                <div className='UserPut'>
                    <button onClick={this.cancel} className="btn btn-outline-primary mb-4">Voltar</button>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-row" >
                            <div className="form-group col-md-6">
                                <label> Nome *</label>
                                <input
                                    type="text" className="form-control"
                                    name="name"
                                    value={this.state.user.name}
                                    onChange={e => this.changeHandler(e)}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="text" className="form-control"
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={e => this.changeHandler(e)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Curso *</label>
                                <input type="text" className="form-control"
                                    name="curso"
                                    value={this.state.user.curso}
                                    onChange={e => this.changeHandler(e)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Semestre *</label>
                                <input type="number" className="form-control"
                                    name="semestre"
                                    value={this.state.user.semestre}
                                    onChange={e => this.changeHandler(e)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Confirmar Senha</label>
                                <input type="password" className="form-control"
                                    name="password"
                                    value={this.state.user.password}
                                    onChange={e => this.changeHandler(e)} />
                            </div>
                        </div>
                    </form>
                    <button onClick={this.submitHandler} className="btn btn-warning mr-2 mt-2">Alterar usuário</button>
                    <button onClick={this.cancel} className="btn btn-outline-secondary mt-2">Cancelar</button>
                </div>

            </Content>

        )
    }

}
