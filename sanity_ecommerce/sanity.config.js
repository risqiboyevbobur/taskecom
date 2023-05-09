import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 'ghvhoefn',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: s,
  },
})
