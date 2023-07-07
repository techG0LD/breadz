const React = require('react')
const Default = require('./layout/default')

function New({error}){
    return (
        <Default>
            <h2>Add a new bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    required
                />
                <label htmlFor='image'>Image</label>
                <input 
                    type='text'
                    name='image'
                    id='image'
                    pattern="https?://.+" title="Include http://" />
                <label htmlFor='baker'>Baker</label>
                <select name ="baker" id='baker'>
                    <option value='Rachel'>Rachel</option>
                    <option value='Monica'>Monica</option>
                    <option value='Joey'>Joey</option>
                    <option value='Chandler'>Chandler</option>
                    <option value='Ross'>Ross</option>
                    <option value='Phoebe'></option>
                </select>
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input 
                    type='checkbox'
                    name='hasGluten'
                    id='hasGluten'
                    defaultChecked
                />
                <br />
                <div style={{color: 'red'}}>{error ? (<div>{error.errors.baker.message}</div>): null}</div>
                
                <input type ='submit'/>
            </form>

            <div className="backButton">
                <a href='/breads'><button>Go back to the index page</button></a>
            </div>
        </Default>
    )
}

module.exports = New