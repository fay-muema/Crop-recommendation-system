import React from 'react'
// import { Dropdown } from 'semantic-ui-react'
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import './Pages/Crop.css'


const countryOptions = [
  "Baringo",
  "Bomet",
  "Bungoma",
  "Busia",
  "Elgeyo-Marakwet",
  "Embu",
  "Garissa",
  "Homa-Bay",
  "Isiolo",
  "Kajiado",
  "Kakamega",
  "Kericho",
  "Kakamega",
  "Kericho",
  "Kiambu",
  "Kilifi",
  "Kirinyaga",
  "Kisii",
  "Kisumu",
  "Kitui",
  "Kwale",
  "Laikipia",
  "Lamu",
  "Machakos",
  "Makueni",
  "Mandera",
  "Marsabit",
  "Meru",
  "Migori",
  "Mombasa",
  "Murang'a",
  "Nairobi",
  "Nakuru",
  "Nandi",
  "Narok",
  "Nyamira",
  "Nyandarua",
  "Nyeri",
  "Samburu",
  "Siaya",
  "Taita Taveta",
  "Tana River",
  "Tharaka-Nithi",
  "Trans Nzoia",
  "Turkana",
  " Uasin Gichu",
  "Vihiga",
  "Wajir",
  "West Pokot"
]

const FormDropdown = ({value, onChange, data}) => (
  <DropdownList className="Drop" data={data ? data : countryOptions} value={value} onChange={onChange}/>
  )
  // <Dropdown
  //   placeholder='Enter County'
  //   fluid
  //   search
  //   selection={value}
  //   options={countryOptions}

  // />

export default FormDropdown