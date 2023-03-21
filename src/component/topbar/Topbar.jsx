import './topbar.scss'

export default function Topbar({menu,setOpen}) {
    return (
        <div className={"topbar "+ (menu && 'active')} id='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Mr.Hari!</a>
                    <div className="itemContainer">
                    <i class="icon fa-solid fa-envelope-circle-check"></i>
                    <span>harisrikanth0@gmail.com</span>
                </div>
                <div className="itemContainer">
                        <i class="icon fa-solid fa-phone"></i>
                        <span>+917207100985</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/Hari0o"><i class=" icon fa-brands fa-github"></i></a>
                        
                    </div>
                    <div className="itemContainer">
                        <a href='https://www.linkedin.com/in/hari-mukkamula-777503258/'><i class="icon fa-brands fa-linkedin"></i></a>
                        
                </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setOpen(!menu)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                
                </div>
            </div>
        </div>
    )
}