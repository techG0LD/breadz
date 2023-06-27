const React = require('react')

const Default = require('./layout/default')

function Index({breads, title}){
    return (
        <Default title = {title}>
            <h2>Index Page</h2>
            <ul>
                {
                    breads.map((bread, index) => (
                        <li key={index}>
                            <a href={`/breads/${index}`}>
                                {bread.name}
                            </a>
                                
                        </li>
                        
                        )
                    )
                }



            </ul>

            <div className='newButton'>
                <a href='/breads/new'><button>Add a new bread</button></a>

            </div>

           

            {/* <p>I have {breads[1].name} bread</p> */}
        </Default>
    )
}

module.exports = Index