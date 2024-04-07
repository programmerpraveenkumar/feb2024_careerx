//props will recv the data from parent component
export default function UserList(props){
    return(
        <>
        <h1>this is userList component</h1>
        {
            props.userData.map((obj,index)=>{
                return(
                    <p key={index}>
                        {obj.first_name}
                        <img src={obj.avatar}/>
                    </p>
                )
            })          
        }
          </>
    )
}