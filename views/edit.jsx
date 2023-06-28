const React = require('react')
const Default = require('./layout/default')

function Edit({bread, index,title}){
    return (
        <Default title={title}>
            <h2>Edit a bread</h2>
            <form action={`/breads/${index}?_method=PUT`} method = 'POST'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    required
                    defaultValue={bread.name}
                />
                <label htmlFor='image'>Image</label>
                <input 
                    type='text'
                    name='image'
                    id='image'
                    defaultValue = {bread.image}
                    pattern="https?://.+" title="Include http://" />
                    
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input 
                    type='checkbox'
                    name='hasGluten'
                    id='hasGluten'
                    defaultChecked = {bread.hasGluten}
                />
                <br />
                <input type ='submit'/>

            </form>
        </Default>
    )
}

module.exports = Edit