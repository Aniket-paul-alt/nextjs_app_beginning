import { db } from "@/config/db.jsx"
import { cache } from "react"

export const dynamic = "force-dynamic"

const DynamicPage = async() => {
    const doctors = await getAllDoctors()
  return (
    <div>    
        <DoctorsComponent doctors = {doctors}/>
    </div>
  )
}

export default DynamicPage

const DoctorsComponent = async ()=>{
    const doctors = await getAllDoctors()
    return (
        <ul>
            {
                doctors.map(doctor => (
                    <li key={doctor.doctor_id}>{doctor.first_name} {doctor.last_name}</li>
                ))
            }
        </ul>
    )
}

const getAllDoctors = cache(async() =>{
    const [doctors] = await db.execute("Select * from doctors")
    console.log("dynamic fetching doctors ")
    return doctors
})