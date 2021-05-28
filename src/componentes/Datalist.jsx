import React from 'react';
import {Table} from 'react-bootstrap'

export default function Datalist()
{
    const data = [
        {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    },
    {
        devid:'COOO123231',
        BV:'0.23',
        BI:'23.1',
        BP:'5.313',
        SV:'34.2',
        SI:'20.12',
        SP:'688.104',
        LV:'34',
        LC:'0.99',
        LP:'33.66',
        onoff:'1',
        coordinates:'000000000,000000000',
        faults:'0',
        IP:'42.108.173.169',
        recievedon:'2021-01-22 08:02:55.000000'
    }
    ]
    return(
        <div><h1>Machine Device Data</h1>
        <Table striped bordered hover size="sm">
            <tbody>
            <tr>
                <td>S.No</td>
                <td>Device ID</td>
                <td>Battery Voltage(BV)</td>
                <td>Battery Current(BI)</td>
                <td>Battery Power(BP)</td>
                <td>Solar PV Voltage(SV)</td>
                <td>Solar PV Current(SI)</td>
                <td>Solar PV Power(SP)</td>
                <td>Load Voltage(LV)</td>
                <td>Load Current(LC)</td>
                <td>Load Power(LP)</td>
                <td>Load ON/OFF	</td>
                <td>Site Coordinate(s)</td>
                <td>Fault(s)</td>
                <td>IP Address</td>
                <td>Received On</td>
            </tr>
              {
            
            data.map((item,i)=>
                
                <tr key={i}>
                    <td>{i}</td>
                    <td>{item.devid}</td>
                    <td>{item.BV}</td>
                    <td>{item.BI}</td>
                    <td>{item.BP}</td>
                    <td>{item.SV}</td>
                    <td>{item.SI}</td>
                    <td>{item.SP}</td>
                    <td>{item.LV}</td>
                    <td>{item.LC}</td>
                    <td>{item.LP}</td>
                    <td>{item.onoff}</td>
                    <td>{item.coordinates}</td>
                    <td>{item.faults}</td>
                    <td>{item.IP}</td>
                    <td>{item.recievedon}</td>
                </tr>
            )
            
        }
        </tbody>
        </Table>
        </div>
               
    )
}