import React from 'react';
import axios from 'axios';
import SelectDropDown  from './SelectDropDown';
import { connect } from 'react-redux'


export interface Root {
  totalPassengers: number
  totalPages: number
  data: Daum[]
}

export interface Daum {
  _id?: string
  name: string
 
  selectedValue: string[]
}

export interface Airline {
  id: number
  name: string
  country: string
  logo: string
  slogan: string
  head_quaters: string
  website: string
  established: string
}

class SelectSample extends React.Component<any>{
 
  state = {
    datas: []
  
  }


  componentDidMount() {
    axios.get(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`)
      .then(res => {
        const datas1 = res.data.data;
        this.setState({ datas:datas1 });
      })
  }

  render() {
    console.log('mass',this.props.selectedValue);

    return (
        <div>

        <SelectDropDown data={this.state.datas}/>

        <h1>Values from class component</h1>

        {this.props.selectedValue.map((value: any) =>
            (
              <p><strong>{value.label}</strong></p>
            )
          )}
    
      </div>
    )
  }
}

const mapStateToProps = (state: any ) => {
  return{
    selectedValue: state.selectedValue
  }
}


export default connect (mapStateToProps, null) (SelectSample);