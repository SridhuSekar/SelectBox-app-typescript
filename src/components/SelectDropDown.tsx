import { useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import selectAction from '../redux/selectAction'
import { Daum } from "./Sample";

const SelectDropDown = ({data, _selectAction}: any) => {

  const [selected, setSelected] = useState([]);

  const aquaticCreatures = data.map((e: any) => ({
    label: e.name,
    value: e._id
  }));

  const handleChange = (selectedOption: any) => {
    debugger
    console.log('selected',selectedOption);
    setSelected(selectedOption);
    _selectAction( selectedOption );
  };
  console.log('selected option', selected )
  
  return (
    <div  style={{color: "red", width:"20em"}}>

      <h1>DropDown from Hooks</h1>

      <Select
        isMulti
        options={aquaticCreatures}
        onChange={handleChange}
      />

     {/*  <div>

        {selected.map((e: any) => (
          <p>{e.label}</p>
        ))}

      </div> */}
     
    </div>
  );
};

const mapStateToProps = (state: Daum) => {
  return{
    selectedValue: state.selectedValue
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    _selectAction: (select: Daum) => dispatch(selectAction(select))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (SelectDropDown)