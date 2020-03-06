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
    <th scope="row">{listings.go_number}</th>
        <td>{listings.crime_subcategory}</td>
        <td>{listings.neighborhood}</td>
        <td>{listings.precinct}</td>
        <td>{listings.occ_datetime}</td>
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
        <th>Crime Type</th>
        <th>Description</th>
        <th>Location</th>
        <th>Precinct</th>
        <th>Date</th>
      </tr>
    </thead>
          {listings}
          </Table >
      </div>
  );
}

export default TableComp;