import './feature.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {} from 'react-circular-progressbar';
import { CircularProgress } from '@mui/material';
function Feature(){
    return(
        <div className='featured'>
            <div className='top'>
                <h1 className='title'>Total Reveno</h1>
                <MoreVertOutlinedIcon fontSize='small'/>
            </div>
            <div className='bottom'>
                <div className='featuredChart'>
<CircularProgress  value={70} text={'70%'}/>

                </div>
                <div className='title'>Total Sale made today</div>
                <div className='amount'>$1000</div>
                <div className='discreption'>previos transaction process</div>
                <div className='summary'>
                    <div className='item'>
                        <div className='itemTitle'>Target</div>
                        <div className='itemResult'>
                            BEst
                        </div>
                        <div className='itemAmount'>$898989</div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Target</div>
                        <div className='itemResult'>
                            BEst
                        </div>
                        <div className='itemAmount'>$898989</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feature;