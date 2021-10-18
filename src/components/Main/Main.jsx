import React from "react"
import { Provider } from "react-redux"
import { HashRouter, Route } from "react-router-dom"
import { TopBlock } from "../TopBlock"
import { MyTasks } from "../MyTasks"
import { InProgress } from "../InProgress"
import { Completed } from "../Completed"
import { todoListStore } from "../../store"
import { addTodoList } from "../../actions"
import { Contacts } from '../Contacts';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [], Flag: 'Main'
        }
        this.changeMain = this.changeMain.bind(this);
        this.changeToDOList = this.changeToDOList.bind(this);
        this.changeopenconApi = this.changeopenconApi.bind(this);
    }


    // openTodoList() {
    //     document.getElementById('secPortfolio').style.display = 'none'
    //     document.getElementById('pvTodolist').style.display = ''
    // }
    // openconApi() {
    //     document.getElementById('secPortfolio').style.display = 'none'
    //     document.getElementById('conApi').style.display = ''
    // }
    changeMain() {
        this.setState({ Flag: 'Main' })
    }
    changeToDOList() {
        this.setState({ Flag: 'ToDoList' })
    }
    changeopenconApi() {
        this.setState({ Flag: 'openconApi' })
    }
    componentDidMount() {
        // 'https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-030178-KKA'
        // 'http://jsonplaceholder.typicode.com/users'
        fetch('https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-030178-KKA')
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({ contacts: data.result.records })
                }
            )
            .catch(console.log)
    }
    render() {
        let contain;
        const cFlag = this.state.Flag;
        if (cFlag == 'ToDoList') {
            contain =
                <div >
                     <button class="btn"  onClick={this.changeMain} ><i class="fa fa-arrow-left"></i></button>
                    <Provider id='pvTodolist' store={todoListStore}   >
                        <HashRouter>
                            <div>
                                <TopBlock />
                                <Route exact path="/" component={MyTasks} />
                                <Route exact path="/inProgress" component={InProgress} />
                                <Route exact path="/completed" component={Completed} />
                            </div>
                        </HashRouter> 
                    </Provider> 
                </div>
        }
        else if (cFlag == 'openconApi') {
            contain =
                <div>
                     <button class="btn"  onClick={this.changeMain} ><i class="fa fa-arrow-left"></i></button>
                    <Contacts id='conApi' contacts={this.state.contacts} />
                </div>
        }
        else{
            
            contain = 
                <div class="row">
                    <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="blog-entry">
                            <a onClick={this.changeToDOList} class="blog-img"><img src="images/blog-1.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                            <div class="desc">
                                <span><small>Sept 14, 2021 </small> | <small> Web Design </small> | </span>
                                <h3> <a onClick={this.changeToDOList} >TodoList</a></h3>
                                <p>Using React、Redux </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                        <div class="blog-entry">
                            <a onClick={this.changeopenconApi} class="blog-img"><img src="images/blog-2.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                            <div class="desc">
                                <span><small>October 1, 2021 </small> | <small> Web Design </small> | </span>
                                <h3><a onClick={this.changeopenconApi}>Data from 政府開放資料</a></h3>
                                <p>Using React、Redux、restful api</p>
                            </div>
                        </div>
                    </div>
                </div>  
        }
        return (
            <div>
                <section class="colorlib-blog" data-section="blog">
                    <div class="colorlib-narrow-content">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span class="heading-meta">Read</span>
                                <h2 class="colorlib-heading">Recent Portfolio</h2>
                            </div>
                        </div>
                    </div> 
                    {/* <consele className="log">{this.state.Flag}</consele> */}
                    {contain}
                </section>
            </div>

        )
    }
}
window.store = todoListStore
window.addTodlList = addTodoList

export { Main }