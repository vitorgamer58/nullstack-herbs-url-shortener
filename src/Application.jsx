import Nullstack from 'nullstack'

import './Application.css'
import Home from './Home'
import Short from './Short'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap" rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <body>
        <Head />
        <Home route="/" greeting="Nulla-chan te dá as boas vindas!" />
        <Short route="/short/:shortId" />
      </body>
    )
  }

}

export default Application
