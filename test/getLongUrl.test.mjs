/* eslint-disable padded-blocks */
import { expect } from 'chai'
import { describe, it } from 'mocha'

import getLongUrl from '../src/domain/usecases/getLongUrl.mjs'

describe('Teste', () => {
  const defaultInjection = {
    config: {
      baseURL: 'https://short.ly',
    },
    urlsRepository: new (class UserRepository {
      find({ filter }) {
        if (filter.short_id === 'Abc1234') {
          return [
            {
              longUrl: 'www.google.com.br/teste',
            },
          ]
        }
        return []
      }
    })(),
  }

  it('Deve retornar a URL encurtada com sucesso', async () => {
    const usecase = getLongUrl(defaultInjection)

    const request = {
      shortId: 'Abc1234',
    }

    await usecase.authorize()
    const ucResponse = await usecase.run(request)

    expect(ucResponse.isOk).to.be.true
    expect(ucResponse.ok.longUrl).to.be.equal('www.google.com.br/teste')
  })

  it('Deve retornar not found se a URL não for encontrada', async () => {
    const usecase = getLongUrl(defaultInjection)

    const request = {
      shortId: 'teste',
    }

    await usecase.authorize()
    const ucResponse = await usecase.run(request)

    expect(ucResponse.isOk).to.be.false
    expect(ucResponse.isNotFoundError).to.be.true
  })

  it('Deve retornar invalid arguments se os parâmetros forem inválidos', async () => {
    const usecase = getLongUrl(defaultInjection)

    const request = {
      shortId: undefined,
    }

    await usecase.authorize()
    const ucResponse = await usecase.run(request)

    expect(ucResponse.isOk).to.be.false
    expect(ucResponse.isInvalidArgumentsError).to.be.true
  })
})
