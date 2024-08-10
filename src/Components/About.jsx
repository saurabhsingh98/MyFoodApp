
import {Component} from "react";
import UserClass from "./UserClass";

class About extends Component{

    constructor(props){
        super(props);
        console.log("parent constructor loaded")
    }

    componentDidMount(){
        console.log("parent componentDidMount loaded")
    }

    render(){
        console.log("parent render loaded")
        return (
            <div className="m-2 p-2">
                <h3 className="m-3 text-center font-extrabold font-serif text-slate-800 text-3xl">About Us</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla repellat dolor, perferendis fugit recusandae quaerat ut ab eveniet aliquid, laborum tempore modi nisi adipisci magni ullam obcaecati reiciendis, molestias natus hic consequuntur provident ea omnis. Libero animi eos facilis quasi debitis, dolores quaerat, quo optio earum dolorem nobis enim quisquam veritatis possimus ducimus repellendus mollitia odit expedita labore suscipit, aperiam odio excepturi inventore. Explicabo officia doloremque est. Quos officia beatae nam ullam quae itaque odio sapiente cum. Itaque nemo, a minima nobis, ad voluptatem dolorem rerum ut nesciunt magnam sit accusantium aperiam temporibus. Repudiandae voluptatibus non fugit sunt enim officia quod nihil. Facere blanditiis architecto voluptatibus? Dolor autem corrupti accusamus maiores, et amet debitis nulla voluptatibus ipsa. Quia corrupti porro autem, obcaecati rem eveniet architecto deleniti itaque animi? Nulla dignissimos error qui repellat tenetur necessitatibus modi voluptates, ex quam hic alias nesciunt culpa perferendis, optio quaerat ea, neque porro vitae illo velit laudantium soluta asperiores maxime! Voluptas alias quae voluptatum dicta voluptatem, incidunt molestias reiciendis iure earum aliquam quis illo vel quibusdam, debitis laborum commodi unde cum laboriosam iste nulla doloribus temporibus possimus excepturi perspiciatis. Adipisci quis voluptatem velit cumque architecto tempora esse expedita, quo vero. Culpa repudiandae aliquam harum.</p>
                <UserClass name={"First Child"} location={"FirstLocation"}/>
                <UserClass name={"Second Child"} location={"SecondLocation"}/>
                <UserClass name={"third Child"} location={"thirdLocation"}/>

            </div>
        );
    }
}


export default About;