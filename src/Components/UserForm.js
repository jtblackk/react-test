import { Button, TextField, Typography } from '@material-ui/core';
import react from 'react'
import {useState} from 'react'



function UserForm() {
    
    let userDataOjb = {
        first_name: 'DEFAULT',
        last_name: 'DEFAULT',
        email: 'DEFAULT',
    }
    const [userData, setUserData] = useState(userDataOjb)


    return (
        <div>
            <form>
                <TextField 
                    id="first_name" 
                    label="First name"
                    onChange={(event)=>{
                        let newUserData = userData;
                        newUserData.first_name = event.target.value
                        setUserData(newUserData)
                    }}
                />
                <br/>
                <TextField 
                    id="last_name" 
                    label="Last name"
                    onChange={(event)=>{
                        let newUserData = userData;
                        newUserData.last_name = event.target.value
                        setUserData(newUserData)
                    }}
                />
                <br/>
                <TextField 
                    id="email" 
                    label="Email"
                    onChange={(event)=>{
                        let newUserData = userData;
                        newUserData.email = event.target.value
                        setUserData(newUserData)
                    }}
                />
                <br/>
            </form>

            <br/>
            
            <Button 
                variant="outlined"
                onClick={()=>{
                    console.log(`user's data: ${userData.first_name} ${userData.last_name} ${userData.email}`)
                    console.log("make an api call here");
                }}>

                submit
            </Button>

        </div>

    )
}


export default UserForm;
