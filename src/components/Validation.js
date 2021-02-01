import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"

import {isEmail} from "validator"

const required = value => {
    if (!value){
        return (
            <div className="alert alert-danger" role="alert">This field req!</div>
        )
    }
}
const email = value => {
    if(!isEmail(value)){
        return (
            <div className="alert alert-danger " role="alert">
                This is not a valid email
            </div>
        )
    }
}

render () {
    return (
        
        <Form
        onSubmit={handleLogin}
        ref={form}
        >
            
            <Input 
            type="text"
            className="form-control"
            
            validations={[required, email]}
            />
            <CheckButton
            style={{display:'none'}}
            ref={checkBtn}
            />
            </Form>
    
    )
}

form.validateAll()
if (checkBtn.context._errors.length === 0){

}