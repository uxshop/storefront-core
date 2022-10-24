export class NewsletterQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['name', 'email', 'gender', 'created_at']
  }

  subscribe() {
    return `mutation SendMailing($data: MailingInput) {
      sendMailing(data: $data) {
            ${this.getFields()}
        }
      }`
  }
}
