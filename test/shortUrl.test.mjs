/* eslint-disable padded-blocks */
import { expect } from 'chai'
import { describe, it } from 'mocha'

import shortUrl from '../src/domain/usecases/shortUrl.mjs'

describe('Teste', () => {
  const defaultInjection = {
    config: {
      baseURL: 'https://short.ly',
    },
    urlsRepository: new (class UserRepository {
      insert(_) {
        return true
      }
    })(),
  }

  it('Deve encurtar a URL com sucesso', async () => {
    const usecase = shortUrl(defaultInjection)

    const request = {
      url: 'www.google.com.br/teste',
    }

    await usecase.authorize()
    const ucResponse = await usecase.run(request)

    expect(ucResponse.isOk).to.be.true
    expect(ucResponse.ok.shortUrl.startsWith('https://short.ly')).to.be.true
  })

  it('Deve retornar invalidEntity se os parâmetros forem inválidos', async () => {
    const usecase = shortUrl(defaultInjection)

    const request = {
      url: undefined,
    }

    await usecase.authorize()
    const ucResponse = await usecase.run(request)

    expect(ucResponse.isOk).to.be.false
    expect(ucResponse.isInvalidEntityError).to.be.true
  })
})
