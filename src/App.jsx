
import { useState } from 'react'
import './App.css'
import { Stack, TextField,Button } from '@mui/material'

function App() {
const [principle,setPrinciple]=useState(0)
const [rate,setRate]=useState(0)
const [year,setYear]=useState(0)
const [intrest,setInterest]=useState(0)

const [isPrincipleInvalid,setIsPrincipleInvalid]= useState(false)
const [isRateInvalid,setIsRateInvalid]= useState(false)
const [isYearInvalid,setIsYearInvalid] = useState(false)

//input validation function
const validateInput =(inputTag)=>{
  const {name,value}=inputTag
  console.log(value); 
  console.log(!!value.match(/^\[0-9]*.?[0-9]+$/));
  console.log(!!value.match(/^\d*\.?\d+$/));
  if(name==='principle'){
setPrinciple(value)
value.match(/^\d*\.?\d+$/) ?setIsPrincipleInvalid(false):setIsPrincipleInvalid(true)
      }else if(name==='rate'){
        setRate(value)
        !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false): setIsRateInvalid(true)
      }else if(name==='year'){
        setYear(value)
        !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false): setIsYearInvalid(true)
      } 
}


const handleCalculate=(e)=>{
  e.preventDefault()
  console.log("inside handle calculate function");
  if(principle && rate && year){
    setInterest(principle*rate*year/100)
  }else{
    alert("fill the form")
  }
  
}
const resetCalculate = ()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInterest(0)
  setIsPrincipleInvalid(false)
  setIsRateInvalid(false)
  setIsYearInvalid(false)
}
  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div  style={{width:'600px'}} className='bg-light rounded p-5'>
      <h3>Simple Calculator App</h3>
      <p>Calculate your simple interest easily</p>
      <div className='d-flex justify-content-center align-items-center bg-warning shadow p-3 rounded'>
        <h1> ₹ {intrest}</h1>
        <p className='fw-bolder'>Total simple interest</p>
    </div>
    <form className='mt-5'>
      <div className="mb-3">
      <TextField value={principle||""} onChange={e=>validateInput(e.target)}  name='principle' id="outlined-basic3" className='width-100' label="₹ principal amount" variant="outlined" />
      </div>
      {
        isPrincipleInvalid &&
        <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>

      }
<div className="mb-3">
      <TextField value={rate||""} onChange={e=>validateInput(e.target)}name='rate' id="outlined-basic1" className='width-100' label="Rate of interest" variant="outlined" />
</div>
{
  isRateInvalid &&
  <div className="mb-3 text-danger fw-bolder">Invalid rate</div>
}
 <div className="mb-3">
      <TextField value={year||""} onChange={e=>validateInput(e.target)} name='year' id="outlined-basic2" className='width-100' label="Time period" variant="outlined" />
  </div>
  
    {
      isYearInvalid &&
      <div className="mb-3 text-danger fw-bolder">Invalid Year</div>

    
  }
  <Stack direction={'row'} spacing={2}>
  <Button type='submit' disabled={isPrincipleInvalid || isYearInvalid||isRateInvalid} onClick={handleCalculate} style={{width:'50%',height:'70px'}} variant="Contained ">Calculate</Button>
  <Button onClick={resetCalculate} style={{width:'50%',height:'70px'}} className='bg-dark'variant="outlined">Reset</Button>
  </Stack>
    </form>
    </div>
    </div>
  )
}

export default App
