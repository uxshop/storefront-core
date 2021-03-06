import { Brand } from './product/BrandTypes'
import { Category } from '../modules/category/CategoryTypes'
import { Section } from '../modules/sections/SectionsTypes'
import { Setting } from '../modules/settings/SettingsTypes'
import { Page } from './PageTypes'

export enum Module {
  section = 'section',
  setting = 'setting'
}

export type ModuleType = Brand | Category | Page | Section<unknown> | Setting<unknown>
