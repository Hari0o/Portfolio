import './portfoliolist.scss'

export default function Portfoliolist({id,title,active,setSelect}) {
    return (
        <li
            className={active ? 'portList active' : 'portList'}
            onClick={()=> setSelect(id)}>
            {title}
        </li>
    )
}