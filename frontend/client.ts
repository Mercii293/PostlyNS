import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '3kfa21wu',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})