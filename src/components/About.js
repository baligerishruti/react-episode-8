import React from "react";
import { User } from "./User";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("Parent Component Did Mount");
    }
    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Us</h1>
                <p>Welcome to our restaurant! We are passionate about serving delicious food and providing excellent service to our customers. Our team is dedicated to creating a memorable dining experience for you. Whether you're here for a quick bite or a leisurely meal, we strive to make every visit special. Thank you for choosing us, and we look forward to serving you!</p>
                <User name="John Doe" location="New York" contact="Test@tem.com" />
                <UserClass name="Jane Smith" location="Los Angeles" contact="class.com" />
                <UserClass name="Jane Smith1" location="Los Angeles1" contact="class1.com" />
            </div>
        );
    }
}


const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our restaurant! We are passionate about serving delicious food and providing excellent service to our customers. Our team is dedicated to creating a memorable dining experience for you. Whether you're here for a quick bite or a leisurely meal, we strive to make every visit special. Thank you for choosing us, and we look forward to serving you!</p>
            <User name="John Doe" location="New York" contact="Test@tem.com" />
            <UserClass name="Jane Smith" location="Los Angeles" contact="class.com" />
        </div>
    );
}

export default AboutClass;
export { About };
