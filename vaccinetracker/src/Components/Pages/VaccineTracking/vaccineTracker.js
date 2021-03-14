import React,{useState,useEffect} from 'react'
import {} from '@material-ui/core';
import {Line} from 'react-chartjs-2'
import './styles.css'

export default function vaccineTracker(){

    const data = [3,12,15,67,78,100];
    const TARGET = 200;
    const chartData = {
        backgroundColor: 'white',
        labels: ['Jan','Feb','Apr','June', 'July', 'Aug'],
        datasets: [{
            label: 'Vaccinated Patients by month',
            data: data,
            backgroundColor: '#FFFFFFD9',
            showLine: true
        }]
    }

    return(
        <div className = "Container">
            <Line 
            height = {window.innerHeight * 0.4}
            width = {window.innerWidth * 0.6}
            data= {chartData}/>
        </div>
    )
}