import React from "react"
import { Provider } from "react-redux"
import { HashRouter,Route } from "react-router-dom"
import { TopBlock } from "../TopBlock"
import { MyTasks } from "../MyTasks"
import { InProgress } from "../InProgress"
import { Completed } from "../Completed"
import {todoListStore} from "../../store"
import {addTodoList} from "../../actions"

class Main extends React.Component {
    render() {
        return (
            <Provider store={todoListStore}>
                <HashRouter>
                    <div>
                        <TopBlock />
                        <Route exact path="/" component={MyTasks} />
                        <Route exact path="/inProgress" component={InProgress} />
                        <Route exact path="/completed" component={Completed} />
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}
window.store = todoListStore
window.addTodlList = addTodoList

export { Main }