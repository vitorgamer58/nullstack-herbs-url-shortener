import Nullstack from 'nullstack'

import Logo from 'nullstack/logo'

import Counter from './Counter'
import './Home.css'
import ShortUrlComponent from './components/ShortUrlComponent'

class Home extends Nullstack {

  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`
    page.description = `${project.name} foi feito com Nullstack`
  }

  renderLink({ children, href }) {
    const link = `${href}?ref=create-nullstack-app`
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project, greeting }) {
    return (
      <>
        <section>
          <article>
            <ShortUrlComponent />
            <Link href="https://nullstack.app/pt-br">
              <Logo height={60} light />
            </Link>
            <h1> {project.name} </h1>
            <p> {greeting} </p>
            <p>
              Fizemos alguns exemplos para te ajudar a começar! Dê uma olhada na
              <Link href="vscode://file/D:/Documentos/Programacao/Nullstack/nullstack-url-shortener/src">
                pasta src
              </Link>
              .
            </p>
            <ul>
              <li>
                <Link href="https://nullstack.app/pt-br/componentes-renderizaveis">
                  🎉 Crie seu primeiro componente{' '}
                </Link>
              </li>
              <li>
                <Link href="https://nullstack.app/pt-br/rotas-e-parametros">✨ Configure sua primeira rota</Link>
              </li>
              <li>
                <Link href="https://nullstack.app/pt-br/contexto">⚡ Defina seu context</Link>
              </li>
              <li>
                <Link href="https://github.com/nullstack/nullstack/stargazers">⭐ Dê uma estrela no github</Link>
              </li>
              <li>
                <Link href="https://youtube.com/nullstack">🎬 Se inscreva no nosso Canal do Youtube</Link>
              </li>
            </ul>
            <span>
              Dica: nós temos uma
              <Link href="vscode:extension/ChristianMortaro.vscode-nullstack">Extensão para VS Code</Link>
            </span>
            <Counter />
          </article>
        </section>
      </>
    )
  }

}

export default Home
