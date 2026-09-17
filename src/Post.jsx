export default function Post({post}){

    const {name,bio} = post;

    return(
        <div className="card">
            <h1>Name : {name}</h1>
            <p>Bio : {bio}</p>
        </div>
    )
}