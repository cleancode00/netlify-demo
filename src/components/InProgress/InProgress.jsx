import React from "react"
import { TodoLists } from "../TodoLists"
class InProgress extends React.Component {
    render() {
        return (
            <div  class="InputTasksForm">
                 {/*傳入一個props作為頁籤的區隔*/}
                 <TodoLists page="progress" />
            </div>
        )
    }
}
export{InProgress}