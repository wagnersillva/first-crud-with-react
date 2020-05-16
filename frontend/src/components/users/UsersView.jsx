import React, {Component} from 'react'
import Content from '../template/content/Content'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './UserViews.css'


const baseUrl = 'http://localhost:3001/users'

const UserDados = {
    user: { name: '', email: '',curso: '', semestre: '' },
    list: []
}


export default class UserView extends Component {

    state = { ...UserDados }

    componentWillMount(){
        axios(baseUrl).then(resp=>{
            this.setState({ list: resp.data })
        })
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                    <div className="card text-white bg-dark  mb-3" key={user.id}>       
                        <div className="card-header text-white">
                            <span className='spanName'>{user.name}</span>
                            <span className='spanIcons'>
                                <Link to={`/UserPut/${user.id}`}  className='Link'><i className="fas fa-user-edit"></i></Link>
                                <Link to={`/UserDelete/${user.id}`}  className='Link'><i className="ml-3 fas fa-user-times"></i></Link>
                                {/* <button  className='butaoDelete'>
                                   <span className='ml-3'>
                                       <i className="fas fa-user-times"></i>
                                    </span>
                                </button> */}
                            </span>
                        </div>
                        
                        <div className="card-body">
                            <p className="card-text">Curso: {user.curso}</p>
                            <p className="card-title">Semestre: {user.semestre}</p>
                        </div>
                    </div>
                
            )
        })
    }

    render(){
        return(
                <Content>
                    <a className="btn btn-dark " href="/UserPost" role="button">Adicionar Usuário</a>
                    <div className="listUsers">
                        {this.renderRows()}
                    </div>
                </Content>
                
        )
    }

}


