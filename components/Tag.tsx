import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 inline-block rounded bg-gray-100 px-2 py-1 text-sm font-medium uppercase text-gray-700 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
