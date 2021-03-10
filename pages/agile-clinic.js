import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/PageLayout'
import { PageSeo } from '@/components/SEO'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('page')

  return { props: { posts } }
}

export default function Page({ posts }) {
  return (
    <>
      <PageSeo
        title={`Agile Clinic - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/agile-clinic`}
      />
      <ListLayout posts={posts} title="Todos los artículos" />
    </>
  )
}
