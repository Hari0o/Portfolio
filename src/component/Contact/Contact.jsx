import './contact.scss'

function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" /> 
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form action="">
                    <input type="text" placeholder='Email'/>
                    <textarea name=""  placeholder='Message' id="" cols="30" rows="10"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;

