import { useEffect } from 'react'
import Explore from '../components/Explore';

function ExplorePage() {
  useEffect(() => {
    document.title = 'Smart Tourism | Explore'
  }, [])

  return (
    <div>
      <Explore></Explore>
    </div>
  )
}
export default ExplorePage;
