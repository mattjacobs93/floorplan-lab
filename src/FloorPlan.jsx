import Kitchen from "./Kitchen"
import Bath from "./Bath"
import Bedroom from "./Bedroom"
import LivingRoom from "./LivingRoom"


function FloorPlan (props) {
  return (
    <div id="floor-plan"> 
      <Bedroom bedNum={1}/>
      <Kitchen _id="kitchen"/>
      <Bath size="Full" _id={"bath0"}/>
      <Bedroom bedNum={2}/>
      <LivingRoom _id="living-room"/>
      <Bath size="Half" _id={"bath1"}/>
      <Bedroom bedNum={3}/>
    </div>
  )
}


export default FloorPlan