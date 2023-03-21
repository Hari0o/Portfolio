import './menu.scss'

export default function Menu({menu,setOpen}) {
    return (
        <div className={"menu " + (menu && 'active')}>
            <ul className='title'>
                <li onClick={()=>setOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setOpen(false)}>
                    <a href="#porto">Portfolio</a>
                </li>
                <li onClick={()=>setOpen(false)}>
                    <a href="#test">Testmonials</a>
                </li>
                <li onClick={()=>setOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}