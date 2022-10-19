import { getLinkBrand } from '../navigation-service'

describe('Navigation Service', () => {
  it('Should get link brand', async () => {
    const item = {
      id: 136425,
      name: 'Asics',
      slug: 'asics',
      description:
        '<p><strong>ASICS</strong> é uma empresa de artigos desportivos fundada em <a href="https://pt.wikipedia.org/wiki/1949" title="1949">1949</a> por Kihachiro Onitsuka em <a href="https://pt.wikipedia.org/wiki/Kobe" title="Kobe">Kobe</a>, <a href="https://pt.wikipedia.org/wiki/Jap%C3%A3o" title="Japão">Japão</a>. Em <a href="https://pt.wikipedia.org/wiki/1977" title="1977">1977</a> os ténis da Asics foram introduzidos no mercado norte-americano sob a marca "Tiger". A empresa tem como destaque a especialidade em produzir equipamentos para atletismo, para isso, possui um centro de pesquisas próprio no Japão.</p>',
      short_description: null,
      image: {
        src: 'https://api.dchomolog.dooca.store/files/14938/brands/5d5vabdqkntvx6yngt4u8knsw084cocrhlxa.png?v=1663767815',
        alt: null
      },
      banner: {
        src: 'https://api.dchomolog.dooca.store/files/14938/brands/g0tvtzzzsjg9hk5xtgyuihbjilb4frvdjezs.png?v=1663767815',
        alt: null
      },
      url: 'https://diovani.dchomolog.dooca.store/asics'
    }
    const link = getLinkBrand(item)
    expect(link).toEqual('/asics/b')
  })
})
