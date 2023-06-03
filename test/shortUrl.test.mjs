import { expect } from 'chai'
import { describe, it } from 'mocha'

import ShortUrlRequest from '../src/domain/entities/shortUrlRequest.mjs'
import shortUrl from '../src/domain/usecases/shortUrl.mjs'

describe('Teste', () => {
  it('Deve executar com sucesso', async () => {
    const usecase = shortUrl()

    const request = ShortUrlRequest.fromJSON({
      url: 'www.google.com.br/teste',
    })

    await usecase.authorize()
    const ucResponse = await usecase.run(request)

    expect(ucResponse.isOk).to.be.true
  })
})
