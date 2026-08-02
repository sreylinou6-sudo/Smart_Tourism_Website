import { useEffect } from 'react'

function InfoPage() {
  useEffect(() => {
    document.title = 'Smart Tourism | Info'
  }, [])

  return (
    <section className="page page-info">
      <h1>Info Page</h1>
      <p>Get travel details, local guides, and tourism insights for your next journey.</p>
    </section>
  )
}

export default InfoPage
