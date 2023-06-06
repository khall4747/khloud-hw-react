
export default function course(props) {
    if(props.date>='2023-06-01'){
  return (
    <div>
        <h1>{props.name}</h1>
      
        <p>it is open: {props.date}</p>
    </div>
  )
}else{
    return (
        <div>
            <h1>{props.name}</h1>
          
            <p>it is end: {props.date}</p>
        </div>
      )
}
}
