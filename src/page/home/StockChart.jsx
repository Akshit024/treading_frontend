/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import { fetchMarketChartData } from '@/state/Coin/Action';
import { store } from '@/state/Store';
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';

const StockChart = ({coinId}) => {
    const dispatch = useDispatch();
    const {coin} = useSelector(store=>store);
    const [activeLabel,setActiveLabel]=useState("1 Day");
    const [noOfDays,setNoOfDays]=useState(1);


    const timeSeries=[
        {
            keyword:"DIGITAL_CURRENCY_DAILY",
            key:"Time Series (Daily)",
            label:"1 Day",
            value :1,
        },
        {
            keyword:"DIGITAL_CURRENCY_WEEKLY",
            key:"Weekly Time Series",
            label:"1 Week",
            value :7,
        },
        {
            keyword:"DIGITAL_CURRENCY_MONTHLY",
            key:"Monthly Time Series",
            label:"1 Month",
            value :30,
        },
        {
            keyword:"DIGITAL_CURRENCY_YEAR",
            key:"Yearly Time Series",
            label:"1 Year",
            value :365,
        },
    ];
    const series =[
        {
            data:coin.marketChart.data.prices,
        }
    ];

    const option={
        chart:{
            id:"area-datetime",
            type:"area",
            height:350,
            zoom:{
                autoScaleYaxis:true,
            },
        },
        dataLabels:{
            enabled:false,
        },
        xaxis:{
            type:"datetime",
            tickAmount:6,  
        },
        colors:["#758AA2"],
        markers:{
            colors:["#fff"],
            strokeColor:"#fff",
            size:0,
            strokeWidth:1,
            style:"hollow",
        },
        tooltip:{
            theme:"dark",
        },
        fill:{
            type:"gradient",
            gradient:{
                shadeIntensity:1,
                opacityFrom:0.7,
                opacityTo:0.9,
                stops:[0,100],
            },
        },
        grid:{
            borderColor:"#47535E",
            strokeDashArray:4,
            show:true,
        },
    };

    const handelActiveLabel = (item) =>{
        setActiveLabel(item.label);
        setNoOfDays(item.value);
    }
    useEffect(()=>{
        // dispatch(fetchMarketChartData({coinId,days:noOfDays}))
    },[coinId,noOfDays]);
  return (
    <div>
        <div className='space-x-3'>
            {timeSeries.map((items)=>(
                <Button 
                key={items.label}
                variant={activeLabel==items.label?"":"outline"} 
                onClick={()=>handelActiveLabel(items)}>
                    {items.label}
                </Button>
            ))}
        </div>
      <div id="chart-timelines" className=''>
        <ReactApexChart
        options={option}
        series={series}
        height={450}
        type="area"
        />
      </div>
    </div>
  )
}

export default StockChart
