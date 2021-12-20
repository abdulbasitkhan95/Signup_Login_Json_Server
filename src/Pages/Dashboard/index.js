import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {removeUser} from "../../store/actions/userActions";
import {useNavigate} from "react-router";

function Dashboard() {
    const [getUserData, setUserData] = useState("")
    const userData = useSelector(state => state.userReducers.user)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    console.log(userData)

    useEffect(() => {
        if(userData === null){
            navigate("/")
        }
        else {
            if(getUserData === "") {
                setUserData(userData[0].username)
            }
        }
    })

    const onClick = () => {
        dispatch(removeUser())
    }
    return(
        <>
            <h1>Welcome {getUserData}</h1>
            <button onClick={onClick}>Sign Out</button>
        </>
    )
}

export default Dashboard