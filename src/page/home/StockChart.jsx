/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const StockChart = () => {
    const [activeLabel,setActiveLabel]=useState("1 Day");
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
    ];
    const series =[
        {
            data:[
                [
                    1716483939010,
                    67794.67456828311
                    ],
                    [
                    1716487599688,
                    67560.35173527966
                    ],
                    [
                    1716491268478,
                    67201.75487691959
                    ],
                    [
                    1716494608686,
                    67076.96489091848
                    ],
                    [
                    1716498045064,
                    67904.70551122265
                    ],
                    [
                    1716501920437,
                    67936.31664332731
                    ],
                    [
                    1716505228132,
                    67671.5351603678
                    ],
                    [
                    1716509281226,
                    67756.15012710785
                    ],
                    [
                    1716512490722,
                    67860.30238942236
                    ],
                    [
                    1716516113570,
                    67729.16315720112
                    ],
                    [
                    1716519902633,
                    67965.65333068155
                    ],
                    [
                    1716523234269,
                    67792.55055628782
                    ],
                    [
                    1716526979566,
                    67647.76819232244
                    ],
                    [
                    1716530819095,
                    67286.07473770466
                    ],
                    [
                    1716534435719,
                    66941.73966994807
                    ],
                    [
                    1716538000741,
                    67132.65120610922
                    ],
                    [
                    1716541331363,
                    67205.73766342326
                    ],
                    [
                    1716545233383,
                    67435.73447151906
                    ],
                    [
                    1716548595337,
                    67329.23142149372
                    ],
                    [
                    1716552212201,
                    67305.68528648683
                    ],
                    [
                    1716555657523,
                    67438.85047380022
                    ],
                    [
                    1716559375491,
                    67100.25615755522
                    ],
                    [
                    1716563069670,
                    67816.04120024809
                    ],
                    [
                    1716566535569,
                    68327.26784825491
                    ],
                    [
                    1716570450857,
                    68638.34919711069
                    ],
                    [
                    1716573826633,
                    68908.15939227039
                    ],
                    [
                    1716577544444,
                    68950.52472592526
                    ]
            ],
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

    const handelActiveLabel = (label) =>{
        setActiveLabel(label);
    }

  return (
    <div>
        <div className='space-x-3'>
            {timeSeries.map((items)=>(
                <Button 
                key={items.label}
                variant={activeLabel==items.label?"":"outline"} 
                onClick={()=>handelActiveLabel(items.label)}>
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
