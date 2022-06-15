const UserList = ({data}) => {
  const content =  data.map((item) => <p key={item.id}>{item.name}</p>) 

  return (
    <div>
        {data.length !== 0 && <h3>Total Users - {data.length}</h3>}
        {data && content}
    </div>
  )
}

export default UserList;