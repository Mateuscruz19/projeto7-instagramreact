import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function SideBar() {
    return (
        <div>
            <div class="sidebar">
        <Usuario/>
        <Sugestoes/>
      </div>
        </div>
    )
}