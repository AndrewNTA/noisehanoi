import { useRouter } from 'next/navigation'
import Spacing from './Spacing'
import useStyles from './styles'

export default function Article({ title, content, id }) {
  const router = useRouter()
  const classes = useStyles()

  const goToReadDetail = () => {
    router.push(`/reads/${id}`)
  }

  return (
    <div id={id}>
      <div className={classes.aTitle} onClick={goToReadDetail}>
        {title}
      </div>
      <div className={classes.aContent}>{content}</div>
      <Spacing size={32} />
    </div>
  )
} 