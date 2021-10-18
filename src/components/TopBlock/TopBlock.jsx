import React from "react"
import {BookMark} from "../BookMark"

class TopBlock extends React.Component{
    render(){
        return(
            <div id="topBlock">
                <BookMark to="/" name="My Tasks" />
                <BookMark to="/inProgress" name="Ing" />
                <BookMark to="/completed" name="Completed" />
            </div>
        )
    }
}

export {TopBlock}