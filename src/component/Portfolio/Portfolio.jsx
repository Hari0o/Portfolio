import { useEffect, useState } from 'react';
import Portfoliolist from '../portfoliolist/Portfoliolist';
import './portfolio.scss'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from '../../data'

export default function Portfolio() {
    const [select, setSelect] = useState('featured')
    const [data,setData]=useState([])
    const list = [
        {
            id: 'featured',
            title: 'Experience'
        },
        {
            id: 'web',
            title: 'Skills'
        },
        {
            id: 'mobile',
            title: 'Education'
        },
        {
            id: 'design',
            title: 'Projects'
        },
        {
            id: 'brand',
            title: 'Courses'
        },

    ];

    useEffect (() => {
        switch (select) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'brand':
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    },[select])
    return (
        <div className="porto" id='porto'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <Portfoliolist title={item.title} active={select === item.id} setSelect={setSelect} id={item.id} />
            ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                        <img    src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                 
                ))}
                </div>
                
        </div>
    )
}