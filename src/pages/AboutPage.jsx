import { useEffect } from 'react'

function AboutPage() {
  useEffect(() => {
    document.title = 'Smart Tourism | About'
  }, [])

  return (
    <section className="page page-about">
      <h1>About Smart Tourism</h1>
      <p>Smart Tourism helps travelers discover curated destinations, local tips, and seamless exploration tools.</p>
    </section>
  )
}

export default AboutPage
