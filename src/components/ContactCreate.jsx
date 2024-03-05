import '../styled-components/contactCreate.scss';

export default function ContactCreate() {
    return (
        <>
        <form action="">
            <input type="text" id="first_name" name="first_name" placeholder='First Name'/>
            
            <input type="text" id="last_name" name="last_name" placeholder='Last Name'/>

            <input type="email" id="email" name="email" placeholder='Email'/>
            
            <div className="turn-favorite">
                <label htmlFor="favorite">Enable like favorite</label>
                <input type="checkbox" id="favorite" name="favorite"/>
            </div>
            
            <button type="submit" className='save-btn'>SAVE</button>
        </form>
        </>
    )
}
