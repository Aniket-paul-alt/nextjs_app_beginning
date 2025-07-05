import { db } from "@/config/db.jsx"

export const dynamic = "force-dynamic"

const DynamicPage = async() => {
    const [doctors] = await db.execute("Select * from doctors")
    console.log("dynamic doctors ",doctors)
  return (
    <div>    
        <ul>
            {
                doctors.map(doctor => (
                    <li key={doctor.doctor_id}>{doctor.first_name} {doctor.last_name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default DynamicPage