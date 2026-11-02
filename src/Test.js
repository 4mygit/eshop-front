function Test(props){
//function Test({name,children,age}){

    const {name,children,age} = props

    return(

        <div>
            <p>Name: {name}</p>
      <p>Age: {age}</p>
     Children {children}
        </div>
    )


}

    export default Test;
