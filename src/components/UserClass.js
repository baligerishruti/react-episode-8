import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1,
            name: props.name,
            location: props.location,
            contact: props.contact,
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
                contact: "Dummy Contact"
            }
        };
        console.log(this.state.name + ": :" + "Child Constructor");
    }
    async componentDidMount() {
        console.log(this.state.name + ": :" + "Child Component Did Mount");
        const data = await fetch("https://api.github.com/users/baligerishruti");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        });
        this.intervalId = setInterval(() => {
            console.log("Interval");
        }, 1000);
    }

    componentDidUpdate() {
        console.log(this.state.name + ": :" + "Child Component Did Update");
    }

    componentWillUnmount() {
        console.log(this.state.name + ": :" + "Child Component Will Unmount");
        clearInterval(this.intervalId);
    }

    render() {
        // const { name, location, contact } = this.props;
        const { name, location, contact, avatar_url } = this.state.userInfo;
        const { count, userInfo } = this.state;
        console.log(this.state.name + ": " + count + "Child Render");
        return (
            <div>
                <h1>User Profile</h1>
                <h1>Count: {count}</h1>
                <img src={avatar_url} alt="User Avatar" width="100" height="100" />
                <button onClick={() => this.setState({ count: count + 1 })}>Increment</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
                <p>Welcome to your user profile! Here you can view and manage your account information, track your orders, and update your preferences. We are committed to providing you with a personalized experience and ensuring that your interactions with us are seamless and enjoyable. Thank you for being a valued member of our community!</p>
            </div>
        );
    }
}

export default UserClass;

/**
 * ----- Mounting Phase -----
 * 1. Constructor (Initialization of state and props) - Dummy
 * 2. Render (First Render with Dummy Data) - Dummy
 *  -   <HTML Dummy>
 * 3. ComponentDidMount
 *    - API Call - fetch("https://api.github.com/users/baligerishruti")
 *    - Convert API Data to JSON - const json = await data.json()
 *    - Set State with API Data - this.setState({userInfo: json})
 * 
 * 
 *  ---------- UPDATING PHASE (State Change) ----------
 * 1. setState (State Change) - count: count + 1
 * 
 * 4. Render (Second Render with API Data) - API Data
 *  -   <HTML with API Data>
 * 5. ComponentDidUpdate
 *    - API Call - fetch("https://api.github.com/users/baligerishruti")
 *    - Convert API Data to JSON - const json = await data.json()
 *    - Set State with API Data - this.setState({userInfo: json})
 */