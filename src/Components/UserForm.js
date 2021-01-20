import { Button, TextField, Typography } from '@material-ui/core';
import react from 'react'
import {useState} from 'react'



function UserForm() {
    
    let userDataOjb = {
        Email_ID: 'DEFAULT',
        FirstName: 'DEFAULT',
        LastName: 'DEFAULT',
    }
    const [userData, setUserData] = useState(userDataOjb)


    return (
        <div>
            <form>
                <TextField 
                    id="FirstName" 
                    label="First name"
                    onChange={(event)=>{
                        let newUserData = userData;
                        newUserData.FirstName = event.target.value
                        setUserData(newUserData)
                    }}
                />
                <br/>
                <TextField 
                    id="LastName" 
                    label="Last name"
                    onChange={(event)=>{
                        let newUserData = userData;
                        newUserData.LastName = event.target.value
                        setUserData(newUserData)
                    }}
                />
                <br/>
                <TextField 
                    id="Email_ID" 
                    label="Email"
                    onChange={(event)=>{
                        let newUserData = userData;
                        newUserData.Email_ID = event.target.value
                        setUserData(newUserData)
                    }}
                />
                <br/>
            </form>

            <br/>
            
            <Button 
                variant="outlined"
                onClick={()=>{
                    console.log(`user's data: ${userData.FirstName} ${userData.LastName} ${userData.Email_ID}`)
                    // fetch()
                    let URL = 'https://3wtpaomi89.execute-api.us-east-1.amazonaws.com/dev/postdriverdetails'
                   
                    let requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({Email_ID: userData.Email_ID, FirstName: userData.FirstName, LastName: userData.LastName})
                    }

                    fetch(URL, requestOptions)
                    console.log('!!!')
                }}>

                submit
            </Button>

        </div>

    )
}


export default UserForm;
