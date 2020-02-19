import React from 'react';
import { Table} from 'reactstrap';
import './Table.css'
import NavbarComp from '../Home/NavbarComp'

const TableComp = (props) => {
    console.log("PROPS",props)
    let listings = props.location.state.listings.map((listings)=>{
        return(
    <tbody key = {listings.id}>
      <tr>
    <th scope="row">{listings.case_number}</th>
        <td>{listings.primary_type}</td>
        
        <td>{listings.description}</td>
        <td>{listings.block}</td>
        <td>{listings.year}</td>
        <td>{listings.date}</td>
      </tr>
      </tbody>
      )
    })

  return (
      <div>
        <NavbarComp/>
    <Table className="table">
    <thead>
      <tr>
        <th>Case Number</th>
        <th>Crime Type</th>
        <th>Description</th>
        <th>Location</th>
        <th>Date</th>
        <th>Year</th>
      </tr>
    </thead>
          {listings}
          </Table >
      </div>
  );
}

export default TableComp;