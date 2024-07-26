import React from "react"
import heartpic from "../assets/heartpic.jpg"
import heartdis from "../assets/heartdispic.jpg"
import { useState } from "react"
import axios from 'axios';
export default function Home() {
    const [heartcond,setHeartcond]=useState(false);
    const [age,setAge]=useState(0);
    const [gender,setGender]=useState(-1);
    const [smokeStatus,setSmokeStatus]=useState(-1);
    const [ciggerate,setCiggerate]=useState(0);
    const [medicinstats,setmedicinstats]=useState(-1);
    const [hypertensive,setHypertensive]=useState(-1);
    const [strokehistory,setStrokeHistory]=useState(-1);
    const [diabetes,setdiabetes]=useState(-1);
    const [cholesterol,setCholesterol]=useState(0);
    const [sbp,setSbp]=useState(0);
    const [dbp,setDbp]=useState(0);
    const [bmi,setBmi]=useState(0);
    const [heartrate,setHeartrate]=useState(0);
    const [glucose,setGlucose]=useState(0);
    const userrecord=[];
    const record=[age,gender,smokeStatus,ciggerate,medicinstats,hypertensive,strokehistory,diabetes,cholesterol,sbp,dbp,bmi,heartrate,glucose]
    for (let i = 0; i < record.length; i++){
    userrecord.push(parseInt(record[i]));
    }
    const checkcondition=async()=>{
        try{
          console.log(userrecord);
          let input = {
            data:userrecord
          };
          const respond=await fetch(`http://127.0.0.1:5000/`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(input),
            });
            const result_detct=await respond.json();
          console.log(result_detct);
          if(result_detct.predict === 1)
          {
            setHeartcond(true);
          }
        }catch(err)
        {
          console.log(err);
        }
    }
    return (
      <>
        <div className="flex items-center justify-center">  
        
        <div className=" shadow-md bg-[#F6F5F2] rounded-2xl p-5 w-[60%] text-md text-gray-600 font-semibold font-sans">
           
            <h1 className=" text-2xl font-bold text-center text-blue-600"> CORONARY HEART DISEASE DETECTION </h1>
            <div className="flex justify-between">
            <div>
            <div className="flex  gap-9">
              <div className="mt-4">
                <label>age</label>
                <input  onChange={(e)=>{setAge(e.target.value)}} className="bg-gray-50 border mt-2 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0-100" type="number"></input>
              </div>

              <div className="mt-4 ">     
                <label>Gender - </label>
                <div className="">
                <label>male</label>
                <input className="ml-2" onClick={(e)=>{setGender(e.target.value)}} type="radio" name="gender" value={1}></input>  
                
                <label className="ml-4">female</label>  
                <input className="ml-2" onChange={(e)=>{setGender(e.target.value)}} type="radio" name="gender" value={0}></input> 
                </div>
              </div>

            </div>

            

          <div className="flex gap-[80px] ">
            <div className="mt-4 ">  
             <label>Is you smoke currently</label>
             <div className="">  
             <label className="">yes</label>
             <input className="ml-2" type="radio" onChange={(e)=>{setSmokeStatus(e.target.value)}} name="smoke" value={1}></input>
             <label className="ml-4">no</label>
             <input className="ml-2" type="radio" onChange={(e)=>{setSmokeStatus(e.target.value)}} name="smoke" value={0}></input>
             </div>

            </div>

            <div className="mt-4 ">
             <label>No of ciggerate consumed perday</label>
             <div>
             <input onChange={(e)=>{setCiggerate(e.target.value)}} className="mt-1 bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0-100"type="number"></input>
             </div>
            </div>
          </div>

            <div className="mt-4">
             <label>do you take any medicine of blood pressure</label>
             <div className="flex items-center">
             <label>yes</label>
             <input className="ml-2" type="radio" name="medicinbp" onChange={(e)=>{setmedicinstats(e.target.value)}} value={1}></input>
             <label className="ml-4">no</label>
             <input className="ml-2" type="radio" name="medicinbp" onChange={(e)=>{setmedicinstats(e.target.value)}} value={0}></input>
             </div>
            </div>
            <div className="mt-4">
             <lable>whether or not the patient had previously had a stroke</lable>
             <div className="flex items-center">
             <label>yes</label>
             <input className="ml-2" type="radio" name="stroke" onChange={(e)=>{setStrokeHistory(e.target.value)}} value={1}></input>
             <label className="ml-4">no</label>
             <input className="ml-2" type="radio" name="stroke" onChange={(e)=>{setStrokeHistory(e.target.value)}} value={0}></input>
             </div>
            </div>
            <div className="mt-4">
             <lable>whether or not the patient was hypertensive</lable>
             <div className="flex items-center">
             <label>yes</label>
             <input className="ml-2" type="radio" name="hyperten" onChange={(e)=>{setHypertensive(e.target.value)}} value={1}></input>
             <label className="ml-4">no</label>
             <input className="ml-2" type="radio" name="hyperten" onChange={(e)=>{setHypertensive(e.target.value)}} value={0}></input>
             </div>
            </div>
            <div className="mt-4">
             <label>whether or not the patient had diabetes</label>
             <div className="flex items-center">
             <label>yes</label>
             <input  className="ml-2" type="radio" name="diabetis" onChange={(e)=>{setdiabetes(e.target.value)}} value={1}></input>
             <label className="ml-4">no</label>
             <input className="ml-2" type="radio" name="diabetis" onChange={(e)=>{setdiabetes(e.target.value)}} value={0}></input>
            </div>
            </div>
          <div className="flex gap-[75px]">
            <div className="mt-4">
             <lable>total cholesterol level</lable>
             <input onChange={(e)=>{setCholesterol(e.target.value)}} className="block bg-gray-50 border mt-2 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0-100" type="number"></input>
            </div>
            <div className="mt-4">
             <lable>systolic blood pressure</lable>
             <input onChange={(e)=>{setSbp(e.target.value)}} className=" bg-gray-50 border mt-2 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0-100" type="number"></input>
            </div>
          </div>
          <div className="flex gap-[75px]">
            <div className="mt-4">
             <label>diastolic blood pressure</label>
             <input onChange={(e)=>{setDbp(e.target.value)}} className=" bg-gray-50 border mt-2 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0-100" type="number"></input>
            </div>
            <div className="mt-4">
             <lable>Body Mass Index</lable>
             <input onChange={(e)=>{setBmi(e.target.value)}} className=" bg-gray-50 border mt-2 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0-100" type="number"></input>
            </div>
          </div>

          <div className="flex gap-[75px]">
            <div className="mt-4">
             <lable>heart rate</lable>
             <input  onChange={(e)=>{setHeartrate(e.target.value)}} className=" bg-gray-50 border mt-2 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0-100" type="number"></input>
            </div>
            
            <div className="mt-4">
             <lable>glucose level</lable>
             <input onChange={(e)=>{setGlucose(e.target.value)}} className=" bg-gray-50 border mt-2 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0-100" type="number"></input>
            </div>
          </div>
          </div>
          <div className="flex items-center justify-center">
            {heartcond===true ? <div><img className="h-[250px] w-[250px] rounded-3xl" src={heartdis} /> <p className="w-36">Patient have this Disease and request to consult doctor</p></div> : <div> <img className="h-[250px] w-[250px] rounded-3xl" src={heartpic} /> <p className="w-36">patient may have this disease consult a doctor</p></div>}  
          </div>
          </div>
          <button onClick={checkcondition} className="bg-green-500 rounded-md p-2 mt-4 text-white font-semibold">Check Condition</button>
          </div>
        </div>
      </>
    )
  }
  
   
  