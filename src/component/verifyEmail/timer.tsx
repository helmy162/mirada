import React from 'react'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import { Action } from './types'
import './timer.css'
import rotate from '../props/rotate-left.svg'

const Timer = ({ dispatch, onClick}: { dispatch: React.Dispatch<Action>, onClick: React.MouseEventHandler<HTMLSpanElement>}) => {


    const [counter, setCounter] = useState(180);
    useEffect(()=> {
        const timer =
        counter >= 0 && setInterval(() => setCounter(counter - 1), 10);
        if(counter/60 === 0 && counter%60 === 0){
            dispatch({ type: 'SETISEXPIREDTRUE' })
        }
        return () => clearInterval(timer as any);
    }, [counter]);

    

    return(
        <div>
            <div className='mt-5'>
                { 
                    counter > 0 ? 
                        <span className="codeworking"> Code expires in: &nbsp;
                        <span style={{fontFamily:'Calibre-Medium'}}>
                            {
                            Math.floor(counter/60) >= 10 
                            ? Math.floor(counter/60)
                            : <span>0{Math.floor(counter/60)}</span>
                            }
                            :{/* text not assignment   */}
                            {
                            counter%60 >=10 
                            ? counter%60 
                            : <span>0{counter%60 }</span>
                            }
                        </span>
                        </span>
                    :
                    <span className="codeexpired">Code has expired. 
                        <button className='resendcode' onClick={onClick}>Resend code 
                            <img src={rotate} style={{width:'24px', display:'inline-block', marginLeft:'2px'}}></img>
                        </button>
                    </span>
                }
            </div>
        </div>
    )
}
export default Timer
