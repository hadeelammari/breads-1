const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {

    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
  <h3>{bread.name}</h3>
  <p>
    and it
    {
      bread.hasGluten
      ? <span> does </span>
      : <span> does NOT </span>
    }
    have gluten.
  </p>
  <img src={bread.image} alt={bread.name} />
  <li><a href="/breads">Go home</a></li>

<form action={`/breads/${index}?_method=DELETE`} method="POST">
  <input type='submit' value="DELETE"/>
</form>

</Default>

      )
  }
  

module.exports = Show

           
