import React,{Component} from 'react';
import './index.css'

class CrimeList extends Component {
    constructor(){
        super()
        this.state={
            listings:[],
            search: "",
        }
    }

    getListings = async (search)=> {
        console.log(process.env.REACT_APP_token)
        try {

             const url = 
             //`https://data.cityofchicago.org/resource/ijzp-q8t2.json`
             `https://data.cityofchicago.org/resource/ijzp-q8t2.json?primary_type=${search}`
            console.log(url);
        
            const crimeSearch = await fetch (url,{
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    "X-App-Token": `${process.env.REACT_APP_token}`
                }
            })
            const parsedResponse = await crimeSearch.json()
            console.log(crimeSearch)
            console.log(parsedResponse)
            this.setState({
                listings: parsedResponse
            })
        } catch (err) {
            console.log(err)    
        }
    }

    handleChange =(e)=>{
       e.target.value = e.target.value.toUpperCase();
        this.setState({
            search: e.target.value
        })
        console.log(this.state.search)
    }
    handleSubmit=(e)=>{
        console.log("HANDLESUBMIT CONSOLE", this.state.search)
        e.preventDefault();
        this.getListings(this.state.search)
    }
    componentDidMount(){
        console.log('this is component Did Mount')
        this.getListings()
      }

    render(){
        return(
            <div>
         <form onSubmit={this.handleSubmit}>
             <label htmlFor="search">Search:</label>
            <input type="text" name="search" onChange={this.handleChange} />
            <input type="submit" value="Crime Search" ></input>
            </form>
      
            </div>
        )
    }

}

export default CrimeList