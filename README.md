# react-episode-8
Episode 8 : Class based component creation
Loading Class Based Componet is nothing but creating a instance of the class
 - creating constructor - to recieve props and create state
 - whenever any class component called creates instance
  - first constructor calls then render method
 - componentDidMount() -> first constructor then render then componentDidMount method will call
    - this method is used to make an API calls
    - why.??? -> loding - rendering - api call -rendering

why react is fast ??
    - 2 phase updates
     - render phase
        - has contructor and render
     - commit phase
      - react update the DOM and componentDidMount will called

      
// Render Phase
- Parent Constructor
- Parent render

    - First Constructor
    - First Render

    - Second Constructor
    - Second Render


// Commit Phase
    <DOM UPDATED - IN SINGLE BATCH>
    - First ComponentDidMount
    - Second ComponentDidMount


- Parent ComponentDidMount
- componentDidUpdate()
    - this method will call after every updates
    - when there is multiple updates need to handle with
    componentDidUpdate(prevProps, prevState) {
        if((this.state.count !== prevState.count) || (this.state.count2 !== prevState.count2)) {
            // code
        }
    }


    in functional component 
    useEffect(() => {
        <!-- api call -->
        //code
    }, [count, count2])

// componentWillUnmount
    - when leaving the screen or component this method is called
    - 
- First componentWillUnmount
- Second componentWillUnmount

