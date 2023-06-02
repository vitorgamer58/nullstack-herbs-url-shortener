import { expect } from 'chai'
import { describe, it } from 'mocha'

import ShortUrlRequest from '../src/domain/entities/shortUrlRequest.js'
import shortUrl from '../src/domain/usecases/shortUrl.js'

describe('Teste', () => {
  it('Deve executar com sucesso', () => {
    const usecase = shortUrl()

    const request = ShortUrlRequest.fromJSON({
      url: 'www.google.com.br/teste',
    })

    const ucResponse = usecase.run(request)

    expect(ucResponse.isOk).to.be.true
  })
})
