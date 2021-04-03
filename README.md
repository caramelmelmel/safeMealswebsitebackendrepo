# safeMeals_website_backend
This repository will show you how to use the backend repository to create a basic backend server for the SafeMeals Website. 
We use express, postgres as our database, heroku for hosting as well as sequelize.
To integrate with the front end, we will use CORS as our middleware to connect the node app to the front end repository.

## Requirements 
The following requirements must be installed:
1. postgres
2. node
3. heroku 
4. sequelize

## Security of Partner's data
We hosted it on a separate server so that the database will not be easily accessible. In true essence, you cannot access our secrets :)

## Integration with the front end 
For the front end, we use REACT as our framework for the website.

### Backend api side
In the backend we install the CORS package using the following command:

``` npm install --save cors ```

In the main file we also include the following CORS middleware to act as the cors connection.

``` var cors = require("cors");```

We also use express as a middleware for routing but for integration purpose we will include in express the cors module that is needed in the following code.

``` app.use(cors());```

### Front end side (React only)

Use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to retrieve the data from the backend api

``` 
constructor(props){
    super(props);
    this.state = {apiResponse: ""};
};

callAPI(){
    fetch("<link to backend endpoint here>")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount(){
    this.callAPI();
}

```
In the render document, you can find a <;p> tag to render the apiResponse:

``` 
<p className="Api-integration">;{this.state.apiResponse}</p>
```
You can call it any other name. 

## API endpoints 



This repository will be updated along as well.
