export default function Friend({friend}){

    console.log(friend)
    const {name, language, bio,version} = friend;

    return(
        <div className="card">
            <h3>Name: {name}</h3>
            <h4>Language: {language}</h4>
            <p>Bio : {bio}</p>
            <p>Version: {version}</p>
        </div>
    )
}