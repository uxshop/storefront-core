import {
  getCategoryLink,
  getProductLink,
  getBrandLink,
  getInstitutionalLink,
  getBlogPostLink,
  getBlogCategoryLink
} from '../navigation-service'

describe('Navigation Service', () => {
  it('Should get category link', async () => {
    const categoryItem = {
      id: 318045,
      created_at: '10/19/2910',
      updated_at: '10/19/2910',
      name: 'Esportes',
      slug: 'category',
      description: null,
      breadcrumb: 'Calçados > Tenis > Esportes',
      google_taxonomy_id: null,
      url: 'https://diovani.dchomolog.dooca.store/esportes'
    }
    const categoryLink = getCategoryLink(categoryItem)
    expect(categoryLink).toEqual('/category/c')
  })
  it('Should get product link', async () => {
    const productItem = {
      id: 9468373,
      name: 'TÊNIS ASICS COURT FF 2 CLAY - MASCULINO - AZUL MARINHO',
      slug: 'product',
      url: 'https://diovani.dchomolog.dooca.store/tenis-asics-court-ff-2-clay-masculino-azul-marinho',
      created_at: '10/28/1039',
      updated_at: '10/28/1039',
      payments: {
        billet: {
          name: 'Boleto',
          method: 'string',
          discount: 0,
          parcels: 0,
          total: 0,
          parcel_price: 0,
          has_interest: true,
          max_installment: {
            markup: 0,
            parcel: 0,
            discount: 0,
            interest: 0,
            total: 0,
            parcel_price: 0
          }
        },
        creditcard: {
          name: 'Cartão de Crédito',
          method: 'string',
          discount: 0,
          parcels: 0,
          total: 0,
          parcel_price: 0,
          has_interest: true,
          max_installment: {
            markup: 0,
            parcel: 0,
            discount: 0,
            interest: 0,
            total: 0,
            parcel_price: 0
          }
        },
        pix: {
          name: 'Pix',
          method: 'string',
          discount: 0,
          parcels: 0,
          total: 0,
          parcel_price: 0,
          has_interest: true,
          max_installment: {
            markup: 0,
            parcel: 0,
            discount: 0,
            interest: 0,
            total: 0,
            parcel_price: 0
          }
        }
      }
    }
    const productLink = getProductLink(productItem)
    expect(productLink).toEqual('/product/p')
  })
  it('Should get brand link', async () => {
    const brandItem = {
      id: 136425,
      name: 'Asics',
      slug: 'brand',
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
    const brandLink = getBrandLink(brandItem)
    expect(brandLink).toEqual('/brand/b')
  })
  it('Should institutional link', async () => {
    const institutionalItem = {
      id: 12938,
      slug: 'institutional',
      template: 'template'
    }
    const institutionalLink = getInstitutionalLink(institutionalItem)
    expect(institutionalLink).toEqual('/institutional/i')
  })
  it('Should get blog post link', async () => {
    const blogPostItem = {
      id: 1064,
      post_category_id: 1064,
      name: 'teste de integração',
      description: '<p>teste de teste</p>',
      slug: 'blog-post',
      meta_title: null,
      meta_description: null,
      meta_keywords: null,
      position: 9,
      url: null,
      posts_count: null,
      active: true,
      created_at: '2022-09-01 20:26:45',
      updated_at: '2022-09-01 20:26:45',
      shop_id: '47'
    }
    const blogPostLink = getBlogPostLink(blogPostItem)
    expect(blogPostLink).toEqual('/blog-post/p')
  })
  it('Should get blog category link', async () => {
    const blogCategoryItem = {}
    const blogCategoryLink = getBlogCategoryLink(blogCategoryItem)
    expect(blogCategoryLink).toEqual('/blog-category/c')
  })
})
