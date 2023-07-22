import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import './style.css'
function Train(props) {
        const navigate = useNavigate();
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    {props.info.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">To: {props.info.to} From: {props.info.from}</h5>
                    <p class="card-text">Cost: {props.info.costAc} - {props.info.cost_sleeper}</p>
                    <Button onClick={()=>{navigate(`/detail/:${props.info.number}`)}}>
                        Get Details
                    </Button> 
                </div>
            </div>
        </div>
    )
}

export default Train