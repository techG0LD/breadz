const React = require('react')

const Default = require('./layout/default')

function Index({breads,bakers, title}){
    return (
        <Default title = {title}>
            <h2>Index Page</h2>
            <h3>Bakers</h3>
            <ul>
                {
                    bakers.map((baker) => {
                        return (
                            <li key={baker._id}>
                                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Breads</h3>
            <div className='newButton'>
                <a href='/breads/new'><button>Add a new bread</button></a>
            </div>

            <ul>
                {
                breads.length ? breads.map((bread, index) => {
                    const breadId= bread._id

                     return (
                     <li key={index}>
                            <a href={`/breads/${breadId}`}>
                                
                                {bread.name}
                            </a>
                            <ul>
                                <li>{bread.getBakedBy()}</li>
                            </ul>
                                
                        </li>
                        )   
                        }
                    ) : (<div>No bread to see</div>)   //if no bread is in the database                  
                } 

            </ul>

            {/* <p>I have {breads[1].name} bread</p> */}
        </Default>
    )
}

module.exports = Index