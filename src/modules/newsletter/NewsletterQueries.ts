export class NewsletterQueries {
  fields: string[] | null

  constructor() {
    this.fields = this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['name', 'email', 'gender', 'createdAt']
  }

  subscribe() {
    return `mutation SendMailing($data: MailingInput) {
      sendMailing(data: $data) {
            ${this.getFields()}
        }
      }`
  }
}
