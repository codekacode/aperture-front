import { useEffect, useState } from "react";
import axios from 'axios';
import ReactLoading from 'react-loading';

function GitHub() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getData();
    },[])

    const getData = async() => {
        const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            setData(res.data.items);
            setIsLoading(false)
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        getData();
    }

    const listUsers = data.map((user)=> 
        <div key={user.id}>
            <a href={user.html_url}>
                <img 
                    width={64}
                    height={64}
                    src={user.avatar_url}
                    alt="generic"
                />
            </a>
            <div>
                <h5>Login: {user.login}</h5>
                <p>Id: {user.id}</p>
            </div>
        </div>
    )

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={e=> setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {isLoading &&
                <ReactLoading type="spinningBubbles" color="#444"/>
            }
            {listUsers}
        </>
    )
}

export default GitHub;