import { useEffect, useState } from "react";

export const User = ({name, location, contact}) => {
    const [count] = useState(0);
    useEffect(() => {
        console.log(name + ": :" + "Child UseEffect");
        const timer = setInterval(() => {
            console.log("Interval");
        }, 1000);

        // this is the cleanup function which will be called when the component unmounts or before the next useEffect runs
        return () => {
            // clear the interval to prevent memory leaks
            // this return will be called when leaving the component
            console.log(name + ": :" + "Child UseEffect Cleanup");
            clearInterval(timer);
        };
    }, [name]);
    return (
        <div>
            <h1>User Profile</h1>
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
            <p>Welcome to your user profile! Here you can view and manage your account information, track your orders, and update your preferences. We are committed to providing you with a personalized experience and ensuring that your interactions with us are seamless and enjoyable. Thank you for being a valued member of our community!</p>
        </div>
    );
}