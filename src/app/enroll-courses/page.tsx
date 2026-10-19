import type { Metadata } from 'next'
import styles from './enroll-courses.module.css'
import CourseHeader from './course-header'

export const metadata: Metadata = {
  title: 'Enroll in AI Video Creator Training | GuruApex',
  description:
    'Learn practical AI video creation workflows in a focused 10-day training program. Explore the modules, watch the overview, and find out if the course is right for you.',
}

const modules = [
  ['01', 'AI video creation foundations', 'Understand the workflow, tools, and creative principles behind effective AI video content.'],
  ['02', 'Research ideas that hold attention', 'Find useful angles and turn audience questions into short-form video concepts.'],
  ['03', 'Write scripts for short-form video', 'Build clear hooks, concise storylines, and calls to action for social content.'],
  ['04', 'AI image and visual generation', 'Create visual assets that support a consistent look and feel.'],
  ['05', 'Generate and direct AI video', 'Explore prompting, shot planning, and repeatable generation workflows.'],
  ['06', 'Voice, music, and sound design', 'Bring clips together with voiceovers, music, and purposeful sound.'],
  ['07', 'Editing and polishing', 'Improve pacing, captions, composition, and final delivery.'],
  ['08', 'Create ads for brands', 'Plan creative variations and adapt videos for different campaign goals.'],
  ['09', 'Publish and grow faceless pages', 'Build a practical publishing routine and review content performance.'],
  ['10', 'Package your skill as a service', 'Learn how to present your work and structure a clear offer for potential clients.'],
]

const faqs = [
  ['Do I need previous video-editing experience?', 'The training is designed to guide beginners through the workflow. A willingness to practice and experiment is important.'],
  ['Can I learn at my own pace?' , 'The course is presented as a self-paced learning experience. Review the lesson access details before enrolling.'],
  ['What can I use these skills for?', 'You can practice creating content for your own pages or develop sample AI video ads for a portfolio. Client results and income are never guaranteed.'],
  ['Will this guarantee that I earn money?', 'No course can guarantee income. Results depend on your practice, portfolio, offer, market demand, and ability to find clients.'],
]

export default function EnrollCoursesPage() {
  return (
    <main className={styles.page}>
      <CourseHeader />
      <section id="top" className={styles.hero}>
        <div className={styles.gridBackdrop} aria-hidden="true" />
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}><span className={styles.liveDot} /> GuruApex practical AI training</span>
          <h1>Become an <span className={styles.gradientText}>AI Video Creator</span> in 10 Days</h1>
          <p className={styles.lead}>Learn a practical workflow for creating engaging AI videos, building faceless content, and developing creative samples for potential clients.</p>
          <div className={styles.watchPill}><span className={styles.bounce}>↓</span> Watch the 3-minute course overview</div>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/FqYRkl12ON8?rel=0&modestbranding=1&playsinline=1"
              title="AI video creation tutorial for beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="/enroll">Enroll Now · PKR 2,000 <span aria-hidden="true">→</span></a>
            <a className={styles.secondaryButton} href="#modules">View course modules <span aria-hidden="true">↓</span></a>
          </div>
          <div className={styles.trustRow}>
            <span>✓ Beginner-friendly workflow</span><span>✓ Practical projects</span><span>✓ Built for independent learners</span>
          </div>
          <div className={styles.stats}>
            <div><strong>10</strong><span>Learning modules</span></div>
            <div><strong>Self-paced</strong><span>Learn around your schedule</span></div>
            <div><strong>PKR 2,000</strong><span>One-time course fee</span></div>
          </div>
          <div className={styles.notePills}><span>✓ Revisit lessons as you practice</span><span>✦ Learn by creating</span></div>
        </div>
      </section>

      <section className={styles.section} id="outcomes">
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>Learn by doing</span>
          <h2>Turn ideas into <span className={styles.gradientText}>finished videos</span></h2>
          <p>Follow a clear process from the first idea to an edited video you can share, improve, and add to your portfolio.</p>
        </div>
        <div className={styles.outcomeGrid}>
          <article className={styles.outcomeCard}><span className={styles.cardIcon}>✳</span><h3>Create with a plan</h3><p>Use simple creative frameworks to develop hooks, scripts, and visual direction before generating clips.</p></article>
          <article className={styles.outcomeCard}><span className={styles.cardIcon}>▶</span><h3>Make content for platforms</h3><p>Practice adapting short-form video ideas for social feeds, faceless pages, and brand campaigns.</p></article>
          <article className={styles.outcomeCard}><span className={styles.cardIcon}>↗</span><h3>Build a sample portfolio</h3><p>Develop practice projects that help you explain your process and demonstrate your creative approach.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`} id="modules">
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>Inside the training</span>
          <h2>10 focused modules. <span className={styles.gradientText}>One clear workflow.</span></h2>
          <p>Work through the core steps of planning, generating, editing, and presenting AI video content.</p>
        </div>
        <div className={styles.moduleList}>
          {modules.map(([number, title, description]) => (
            <details className={styles.module} key={number}>
              <summary><span className={styles.moduleNumber}>{number}</span><span className={styles.moduleTitle}>{title}</span><span className={styles.plus}>+</span></summary>
              <p>{description}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.priceSection}`} id="launch-price">
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>Launch offer</span>
          <h2>Start learning for <span className={styles.gradientText}>PKR 2,000</span></h2>
          <p>A one-time course fee for learners ready to practice AI-assisted video creation.</p>
        </div>
        <div className={styles.priceCard}>
          <div><span className={styles.priceLabel}>Current course fee</span><strong className={styles.price}>PKR 2,000</strong><span className={styles.priceSub}>Launch fee · Planned next price PKR 9,000</span></div>
          <ul><li>10 structured learning modules</li><li>Self-paced learning format</li><li>Practice-focused creative workflow</li><li>AI video ideas for social content and ads</li></ul>
          <a className={styles.primaryButton} href="/enroll">Enroll Now · PKR 2,000 <span aria-hidden="true">→</span></a>
        </div>
        <div className={styles.priceTicker} aria-label="Course highlights"><div className={styles.priceTickerTrack}>{Array.from({length: 4}).map((_,i)=><span key={i}>✦ AI VIDEO CREATION <b>·</b> PRACTICAL WORKFLOW <b>·</b> CURRENT FEE PKR 2,000 <b>·</b> NEXT LISTED PRICE PKR 9,000 <b>·</b> LEARN AT YOUR OWN PACE <b>·</b></span>)}</div></div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`} id="course-preview">
        <div className={styles.sectionHeading}><span className={styles.kicker}>What you will practice</span><h2>From your first idea to a <span className={styles.gradientText}>finished video</span></h2><p>Explore a repeatable creative process you can use for practice projects, social media content, and ad concepts.</p></div>
        <div className={styles.processGrid}>
          <article className={styles.processCard}><span>01</span><h3>Plan the concept</h3><p>Research a topic, define the audience, and create a strong hook and simple script.</p></article>
          <article className={styles.processCard}><span>02</span><h3>Generate visuals</h3><p>Experiment with prompts, image references, video generation, and visual consistency.</p></article>
          <article className={styles.processCard}><span>03</span><h3>Edit and refine</h3><p>Practice pacing, captions, sound, transitions, and export settings for short-form content.</p></article>
          <article className={styles.processCard}><span>04</span><h3>Build a portfolio</h3><p>Collect practice samples and explain the creative decisions behind each project.</p></article>
        </div>
      </section>

      <section className={styles.reviewSection} id="reviews">
        <div className={styles.sectionHeading}><span className={styles.kicker}>Learner feedback</span><h2>Learning is built one <span className={styles.gradientText}>project at a time</span></h2><p>Add approved student review screenshots to the carousel below. Each card is prepared for a genuine image from <code>public/reviews/</code>.</p></div>
        <div className={styles.reviewViewport}>
          <div className={styles.reviewTrack}>
            <article className={styles.reviewCard}><div className={styles.reviewImagePlaceholder}><span>STUDENT REVIEW</span><strong>Add approved review screenshot</strong><small>public/reviews/review-1.png</small></div><p>Place the original student feedback image here so visitors can read the review in its own context.</p><span>Review image slot 1</span></article>
            <article className={styles.reviewCard}><div className={styles.reviewImagePlaceholder}><span>STUDENT REVIEW</span><strong>Add approved review screenshot</strong><small>public/reviews/review-2.png</small></div><p>Use a genuine review screenshot shared with permission. The card is ready for the original image.</p><span>Review image slot 2</span></article>
            <article className={styles.reviewCard}><div className={styles.reviewImagePlaceholder}><span>STUDENT REVIEW</span><strong>Add approved review screenshot</strong><small>public/reviews/review-3.png</small></div><p>Add another authentic student review screenshot here; no sample quote is presented as real feedback.</p><span>Review image slot 3</span></article>
            <article className={styles.reviewCard} aria-hidden="true"><div className={styles.reviewImagePlaceholder}><span>STUDENT REVIEW</span><strong>Add approved review screenshot</strong><small>public/reviews/review-1.png</small></div><p>Place the original student feedback image here so visitors can read the review in its own context.</p><span>Review image slot 1</span></article>
            <article className={styles.reviewCard} aria-hidden="true"><div className={styles.reviewImagePlaceholder}><span>STUDENT REVIEW</span><strong>Add approved review screenshot</strong><small>public/reviews/review-2.png</small></div><p>Use a genuine review screenshot shared with permission. The card is ready for the original image.</p><span>Review image slot 2</span></article>
            <article className={styles.reviewCard} aria-hidden="true"><div className={styles.reviewImagePlaceholder}><span>STUDENT REVIEW</span><strong>Add approved review screenshot</strong><small>public/reviews/review-3.png</small></div><p>Add another authentic student review screenshot here; no sample quote is presented as real feedback.</p><span>Review image slot 3</span></article>
          </div>
        </div>
        <p className={styles.reviewDisclaimer}>Before publishing, add the genuine approved review images named on each card. No unverified testimonial is being claimed.</p>
      </section>

      <section className={styles.quoteSection}>
        <div className={styles.quoteMark}>“</div>
        <span className={styles.kicker}>Your learning journey</span>
        <h2>Progress comes from <span className={styles.gradientText}>practice, not shortcuts.</span></h2>
        <p>Use the lessons to build your skills one project at a time. Your results will come from the quality of your work, consistency, and how you apply what you learn.</p>
      </section>

      <section className={styles.section} id="fit">
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>Is this for you?</span>
          <h2>A practical starting point for <span className={styles.gradientText}>creative learners</span></h2>
        </div>
        <div className={styles.fitGrid}>
          <div className={styles.fitCard}><h3>It may be a good fit if you…</h3><ul><li>Want to learn AI-assisted video creation step by step</li><li>Are interested in social content or video ad creative</li><li>Can set aside time to practice and improve</li><li>Want to build examples for a creative portfolio</li></ul></div>
          <div className={styles.fitCard}><h3>Keep in mind</h3><ul><li>Tools and features can change over time</li><li>Practice is needed to develop strong creative judgment</li><li>Client work and income are not guaranteed</li><li>Check the current course access and pricing before enrolling</li></ul></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`} id="faq">
        <div className={styles.sectionHeading}><span className={styles.kicker}>Questions, answered</span><h2>Everything you need to know</h2></div>
        <div className={styles.moduleList}>
          {faqs.map(([question, answer]) => <details className={styles.module} key={question}><summary><span className={styles.moduleTitle}>{question}</span><span className={styles.plus}>+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className={styles.enrollSection} id="enroll">
        <div className={styles.enrollGlow} aria-hidden="true" />
        <span className={styles.kicker}>Start creating</span>
        <h2>Ready to explore <span className={styles.limeText}>AI video creation?</span></h2>
        <p>Watch the overview and review the course details before deciding whether this training fits your goals.</p>
        <a className={styles.primaryButton} href="/enroll">Enroll Now · PKR 2,000 <span aria-hidden="true">→</span></a>
        <small>One-time course fee: PKR 2,000. Review the enrollment and payment instructions before proceeding.</small>
      </section>
    </main>
  )
}
