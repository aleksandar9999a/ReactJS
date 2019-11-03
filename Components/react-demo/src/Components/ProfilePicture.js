import React, { Component } from 'react'
import myFace from './myFace.jpg';
import './ProfilePicture.css'

class ProfilePicture extends Component{
    render(){
        return (<img id='profile' src={myFace} alt="Logo" />)
    }
}

export default ProfilePicture;