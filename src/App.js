import "./App.css";
const App=(props)=>{
  return(
    <>
      <div className="container">
        <div className="image-wraper">
          <img src={props.employeeData.profileImg} className="user-img" alt="useImage"></img>
        </div>
      <div className="user-details">
        <p className="user-name">
          {props.employeeData.name}
        </p>
        <p className="user-lable">
          Location
        </p>
        <p className="user-item">
          {props.employeeData.location}
        </p>
        <p className="user-lable">
          bloodGroup
        </p>
        <p className="user-item">
          {props.employeeData.bloodGroup}
        </p>
        <p className="user-lable">
          Age
        </p>
        <p className="user-item">
          {props.employeeData.age}
        </p>
      </div>
      </div>
    </>
  )
}
export default App