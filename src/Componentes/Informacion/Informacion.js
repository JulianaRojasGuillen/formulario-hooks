import './Informacion.css'

function Informacion(props){
    const {firstname, lastname, email, password, confirmPassword}=props.datos
    return (
        <div className='formulario'>
            <p> First name: {firstname}</p>
            <p> Last name: {lastname}</p>
            <p> Email: {email}</p>
            <p> Password: {password}</p>
            <p> Confirm Password: {confirmPassword}</p>
        </div>
    )
}
export default Informacion;