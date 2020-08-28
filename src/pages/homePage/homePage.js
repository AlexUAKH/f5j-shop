import React from "react"
import classes from "./homePage.css"
import Review from "../../components/review";
// import img from './../../illustration-geiranger.jpg'

const HomePage = (props) => {
    return (
        <div className={ classes.homePage }>
            {/*<h1>HomePage</h1>*/}
            <Review review={{
                userName: 'Jhon',
                date: '10/03/2018',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur\n' +
                    '                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam\n' +
                    '                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
                rating: 3.5
            }}/>
        </div>
    )
}

export default HomePage