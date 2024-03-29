import { nullable } from './HelpersTypes'

export interface Image {
  src: string
  mime?: nullable<string>
  alt?: nullable<string>
  size?: nullable<string>
}
