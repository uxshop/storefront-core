export class UserQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return [
      'id',
      'email',
      'firstName',
      'lastName',
      'gender',
      'newsletter',
      'marketplace',
      'customerGroupId',
      'externalId',
      'entity',
      'company',
      'ie',
      'birthday',
      'phone',
      'token',
      'resetToken',
      'note',
      'facebookId',
      'googleId',
      'isActive',
      'createdAt',
      'updatedAt',
      'doc',
      'group {id, name}',
      'address {id, receiver, zipCode, street, city, state, number, detail}',
      'image {src, alt}'
    ]
  }

  auth() {
    return `mutation Login($credentials: Credentials) {
        login(credentials: $credentials) {
          ${this.getFields()}
        }
      }`
  }
  get() {
    return `query User($filter: filterUser) {
        user(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
