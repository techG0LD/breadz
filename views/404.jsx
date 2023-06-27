const React = require('react')
const Default = require('./layout/default')

function NotFound({bread}) {

    return (
        <Default>
            <h2>Not even a crumb was found..</h2>
            <li><a href="/breads">Go home</a></li>
        </Default>

    )

}

module.exports = NotFound