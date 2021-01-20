import { Button, TextField, Typography } from '@material-ui/core';
import react, {useState} from 'react'

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
                    onChange={
                        (event)=>{
                            // update first name in state
                            let newUserData = userData;
                            newUserData.FirstName = event.target.value
                            setUserData(newUserData)
                        }
                    }
                />
                <br/>
                <TextField 
                    id="LastName" 
                    label="Last name"
                    onChange={
                        (event)=>{
                            // update last name in state
                            let newUserData = userData;
                            newUserData.LastName = event.target.value
                            setUserData(newUserData)
                        }
                    }
                />
                <br/>
                <TextField 
                    id="Email_ID" 
                    label="Email"
                    onChange={
                        (event)=>{
                            // update email in state
                            let newUserData = userData;
                            newUserData.Email_ID = event.target.value
                            setUserData(newUserData)
                        }
                    }
                />
                <br/>
            </form>

            <br/>
            
            <Button 
                variant="outlined"
                onClick={()=>{
                    // set up fetch request -> create new user entry in driver detail database
                    let URL = 'https://3wtpaomi89.execute-api.us-east-1.amazonaws.com/dev/postdriverdetails'
                    let requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            Email_ID: userData.Email_ID, 
                            FirstName: userData.FirstName, 
                            LastName: userData.LastName
                        })
                    }

                    // fetch(URL, requestOptions)
                }
            }>
                Create account
            </Button>

        </div>

    )
}


export default UserForm;
