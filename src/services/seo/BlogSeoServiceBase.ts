import { SeoService } from './SeoService'
import { Post } from '../../types/PostTypes'
import { PostMicroData } from './types'

export class BlogSeoServiceBase extends SeoService {
  protected getPostData(post: Post): PostMicroData {
    let data: PostMicroData = {
      '@type': 'BlogPosting',
      url: post?.url,
      headline: post?.name,
      name: post?.name,
      dateCreated: post?.createdAt,
      datePublished: post?.createdAt,
      dateModified: post?.updatedAt,
      inLanguage: 'pt-BR',
      articleSection: post?.category.name,
      articleBody: this.formatRichText(post?.description || '')
    }
    if (post?.image) data.image = post?.image.src

    return data
  }
}
