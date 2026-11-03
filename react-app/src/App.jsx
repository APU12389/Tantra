import { useState } from 'react'
import './App.css'
import heroImage from '../../222.jpg'
import tourismImage from '../../tourism.jpeg'

const destinations = [
  {
    title: 'Alappuzha',
    description: 'Cruise through calm backwaters and watch the sunrise over endless lagoons.',
    image: heroImage,
  },
  {
    title: 'Kovalam',
    description: 'Relax on golden beaches, enjoy seafood, and watch the evening waves glow.',
    image: tourismImage,
  },
  {
    title: 'Munnar',
    description: 'Walk through misty hills and tea gardens that feel straight out of a dream.',
    image: tourismImage,
  },
]

const highlights = [
  {
    title: 'Tailor-made journeys',
    text: 'Every itinerary is thoughtfully designed around your pace, style, and perfect season.',
  },
  {
    title: 'Trusted local support',
    text: 'From a warm welcome to smooth transfers, every touchpoint is handled with care.',
  },
  {
    title: 'Luxury stays',
    text: 'Choose scenic resorts, boutique houses, and unforgettable stays in the prettiest corners.',
  },
]

const modalContent = {
  plan: {
    title: 'Plan your trip',
    subtitle: 'Share your travel style, dates, and dream destination and we’ll build a tailored escape.',
  },
  contact: {
    title: 'Talk to us',
    subtitle: 'Tell us what you want and we’ll help you shape the perfect Kerala journey.',
  },
  explore: {
    title: 'Explore packages',
    subtitle: 'Choose a mood, a season, or a destination and let us craft the right route.',
  },
}

function App() {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (type) => setActiveModal(type)
  const closeModal = () => setActiveModal(null)
  const modalData = modalContent[activeModal] || modalContent.plan

  return (
    <div className="travel-app">
      <header className="topbar">
        <div className="brand-group">
          <div className="brand-mark" aria-hidden="true">
            <span className="brand-mark-inner">T</span>
          </div>
          <div className="brand-wordmark" aria-label="Tantra">TANTRA</div>
        </div>
        <nav className="nav-links">
          <a href="#destinations">Destinations</a>
          <a href="#about">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Curated escapes • handcrafted with care</p>
            <h1>Discover the soul of Kerala in one unforgettable journey.</h1>
            <p className="hero-text">
              From peaceful backwaters to sunlit beaches and misty hills, every corner of Kerala
              is shaped into a journey that feels calm, elegant, and deeply personal.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => openModal('explore')}>Explore Packages</button>
              <button type="button" className="btn btn-secondary" onClick={() => openModal('plan')}>Plan Your Trip</button>
            </div>
            <div className="hero-pills">
              <span>Beach escapes</span>
              <span>Backwater cruises</span>
              <span>Hill retreats</span>
            </div>
          </div>

          <div className="hero-visual">
            <img src={heroImage} alt="Scenic Kerala coastline and beach view" />
            <div className="floating-card">
              <h3>Kerala in style</h3>
              <p>Thoughtfully planned stays, scenic drives, and memorable local experiences.</p>
            </div>
          </div>
        </section>

        <section className="highlights-section" id="about">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="destination-section" id="destinations">
          <div className="section-heading">
            <p className="eyebrow">Featured destinations</p>
            <h2>Popular places that feel like a postcard come alive.</h2>
          </div>

          <div className="cards-grid">
            {destinations.map((place) => (
              <article className="destination-card" key={place.title}>
                <img src={place.image} alt={place.title} />
                <div className="card-body">
                  <h3>{place.title}</h3>
                  <p>{place.description}</p>
                  <button type="button" className="text-link" onClick={() => openModal('plan')}>Plan this trip</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase-section">
          <div className="showcase-image">
            <img src={tourismImage} alt="Kerala sightseeing and travel view" />
          </div>
          <div className="showcase-copy">
            <p className="eyebrow">Why travellers choose us</p>
            <h2>Every detail is planned for comfort, beauty, and ease.</h2>
            <p>
              We blend local insight, scenic stays, and smooth logistics into journeys that
              feel effortless from the moment you land.
            </p>
            <button type="button" className="btn btn-primary" onClick={() => openModal('contact')}>Talk to us</button>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <h2>Ready for your next escape?</h2>
          <p>Let Tantra Holidays design a holiday that feels calm, beautiful, and unforgettable.</p>
          <button type="button" className="btn btn-primary" onClick={() => openModal('contact')}>Contact us</button>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Tantra Holidays • Crafted for beautiful travel experiences</p>
      </footer>

      {activeModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={closeModal} aria-label="Close dialog">
              ×
            </button>
            <div className="modal-head">
              <p className="eyebrow">Tailored journeys</p>
              <h3>{modalData.title}</h3>
              <p>{modalData.subtitle}</p>
            </div>

            <form className="modal-form" onSubmit={(event) => event.preventDefault()}>
              <div className="form-grid">
                <label>
                  <span>Name</span>
                  <input type="text" placeholder="Your name" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" placeholder="you@example.com" />
                </label>
                <label>
                  <span>Destination</span>
                  <select defaultValue="">
                    <option value="" disabled>Select a place</option>
                    <option>Alappuzha</option>
                    <option>Kovalam</option>
                    <option>Munnar</option>
                    <option>Wayanad</option>
                  </select>
                </label>
                <label>
                  <span>Trip type</span>
                  <select defaultValue="">
                    <option value="" disabled>Select a style</option>
                    <option>Luxury escape</option>
                    <option>Family holiday</option>
                    <option>Romantic getaway</option>
                  </select>
                </label>
                <label className="full-width">
                  <span>Tell us more</span>
                  <textarea rows="4" placeholder="Share your dates, vibe, or special requests" />
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Send request</button>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
