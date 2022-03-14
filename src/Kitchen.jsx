import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen (props) {
  return (
    <div id={props._id}>
      <h3>Kitchen</h3>
      <Oven _id="oven" />
      <Sink _id="sink" />
    </div>
  )
}

export default Kitchen