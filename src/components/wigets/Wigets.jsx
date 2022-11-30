import React from "react";
import './wigets.scss'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
function Wigets({type}){
    let data;
const amount=100;
const diff=20;
    switch (type){
        case 'user':
            data={
                title:'USERS',
                isMoney:false,
                link:'See All Users',
                icon:(
                    <PersonOutlineOutlinedIcon className="icon"/>
                )
            };
            break;
            case 'order':
                data={
                    title:'ORDERS',
                    isMoney:false,
                    link:'View All Orders',
                    icon:(
                        <CardGiftcardOutlinedIcon className="icon" />
                    )
                };
                break;
                case 'earning':
                data={
                    title:'EARNING',
                    isMoney:true,
                    link:'View All earning',
                    icon:(
                        <CardGiftcardOutlinedIcon className="icon" />
                    )
                };
                break;
                case 'balance':
                data={
                    title:'BALANCE',
                    isMoney:true,
                    link:'View All Balance',
                    icon:(
                        <CardGiftcardOutlinedIcon className="icon" />
                    )
                };
            default:
                break;
    }

    return(
        <div className="wiget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
<ArrowUpwardOutlinedIcon />
                    {diff}%
                </div>
               {data.icon}
            </div>
            
        </div>
    )
}
export default Wigets;