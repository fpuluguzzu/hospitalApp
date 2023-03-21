let doctordata = [
    {name: "Peter", specialization: "Oncology"},
    {name: "John", specialization: "Dentistry"},
    {name: "Smith", specialization:"Family Medicine"},
  ];

  let patientdata =[
    {name: "Richard", illness: "Headache"},
    {name: "Pamela", illness: "Stomach ache"},
  ];

  //export default doctors; // This allows for only export one variable;
  export { doctordata, patientdata }; //Allows for exporting multiple variables.