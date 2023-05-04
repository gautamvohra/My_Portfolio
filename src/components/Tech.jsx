import {BallCanvas} from "./canvas"
import {SectionWrapper} from "../hoc"
import {technologies} from "../constants"

// 1:34:20 

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"");