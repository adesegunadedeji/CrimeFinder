import React,{Component} from 'react';
import './CrimeList.css'
// import TableComp from '../Table/Table'
import { FaSearch} from "react-icons/fa";
import {Redirect} from 'react-router-dom'
import NavbarComp from '../Home/NavbarComp';

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
             //https://data.cityofchicago.org/resource/ijzp-q8t2.json?primary_type=${search}
            ` https://data.seattle.gov/resource/4fs7-3vj5.json?crime_subcategory=${search}`
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
            console.log("THIS STATE LISTINGS",this.state.listings)
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
                <NavbarComp/>
         <form onSubmit={this.handleSubmit} className ="crimeSearchForm">
            <input type="text"  placeholder= "search" name="search" onChange={this.handleChange} />
            <button  type="submit" > <FaSearch/></button>
            </form>
            {this.state.listings.length > 0 &&
          <Redirect to={{ pathname: '/listings', state: { listings: this.state.listings}}} 
  />}
<div className="textCrime">
  <h2>What is CrimeFinder?</h2>
  <p>Crimefinder is a public facing crime map and crime alert service. With Crimefinder, it's easier than ever to check crime anywhere in the city of Seattle. Our daily crime maps allows a user learn about crime in the city down to the neighborhood, zip code. Crimefinder allows you lookup crime data data and reports -- all the way down to local neighborhood statistics. </p>
  <h2>Is Crimefinder free?</h2>
  <p>Crimefinder is a free service. With free access to anyone we hope to encourage public trust, increase police transparency, and promote public safety.</p>
  <h2>How does Crimefinder work?</h2>
  <p>Crimefinder essentially helps you find what the crime report in your neighborhood looks like.

      We collect relevant crime data from the police department and validated sources and deliver daily and weekly crime alerts. 

      From thefts and burglaries to assaults and shootings, make sure to stay up to date by signing up for free Crimefinder alerts and SMS alerts when new crimes arise in your area.

      Stay Alert and Be Safe.
  </p>
  </div>
            </div>
        )
    }

}

export default CrimeList