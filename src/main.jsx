import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Download, Code2, Link, Mail, Menu, MoveRight, Play, X } from 'lucide-react'
import './styles.css'

const projects = [
  { title: 'Logistics Management System', type: 'Web / System', tag: 'Logistics', color: 'orange', screens: ['Analytics', 'Shipments', 'Fleet'] },
  { title: 'Loan App', type: 'Mobile App', tag: 'Fintech', color: 'blue', screens: ['Overview', 'Apply', 'Payment'] },
  { title: 'POS App', type: 'Mobile + Web', tag: 'Retail', color: 'lime', screens: ['Orders', 'Catalog', 'Report'] },
  { title: 'School System & Mobile App', type: 'Web / Mobile', tag: 'Education', color: 'violet', screens: ['Classes', 'Students', 'Schedule'] },
  { title: 'Delivery App', type: 'Mobile App', tag: 'Delivery', color: 'pink', screens: ['Orders', 'Track', 'Profile'] },
  { title: 'Service Repair & Maintenance', type: 'Web / System', tag: 'Service', color: 'teal', screens: ['Tickets', 'Assets', 'Team'] },
]

const skills = ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Flow', 'Design Systems', 'HTML', 'CSS', 'JavaScript', 'React', 'Laravel', 'Flutter']
const process = ['Research', 'User Flow', 'Wireframe', 'UI Design', 'Prototype', 'Test', 'Improve']
const liveApps = [
  { name: 'ATB Hub', category: 'Delivery', year: '2025', initials: 'ATB', tone: 'green', description: 'A delivery application for Angkor Thom Book Center, supporting booking, live delivery tracking, and barcode validation.', points: ['Designed booking, delivery tracking, and barcode scanning flows.', 'Created a scalable mobile UI kit and developer-ready handoff.', 'Worked with the team through testing, release, and iteration.'], tags: ['UX/UI Design', 'Mobile App', 'Design System', 'Figma'] },
  { name: 'Smart Loan', category: 'Fintech', year: '2025', initials: 'SL', tone: 'blue', description: 'A clear, trusted borrowing experience that helps customers apply, review payments, and manage their loan from one place.', points: ['Mapped the complete application and repayment user journey.', 'Designed easy-to-understand loan status and payment screens.', 'Delivered responsive flows for a production mobile app.'], tags: ['UX Research', 'User Flow', 'Mobile UI', 'Prototype'] }
]

function Mockup({ project, large = false }) {
  return <div className={`mockup ${project.color} ${large ? 'large' : ''}`}>
    <div className="mockbar"><span></span><span></span><span></span><b>{project.screens[0]}</b></div>
    <div className="mockbody">
      <div className="mockaside"><i></i><i></i><i></i><i></i></div>
      <div className="mockcontent">
        <div className="mockheading"><em></em><small>Good morning, Rin</small></div>
        <div className="statrow"><div><strong>2,450</strong><small>Active orders</small></div><div><strong>+18%</strong><small>This month</small></div></div>
        <div className="chart"><span></span><span></span><span></span><span></span><span></span><svg viewBox="0 0 300 100" preserveAspectRatio="none"><path d="M0,80 C30,60 40,73 67,42 S115,61 142,38 S190,47 213,20 S260,35 300,8" /></svg></div>
        <div className="tableline"></div><div className="tableline short"></div>
      </div>
    </div>
  </div>
}

function App() {
  const [menu, setMenu] = useState(false)
  const [selected, setSelected] = useState(projects[0])
  const { scrollY } = useScroll()
  const floatY = useTransform(scrollY, [0, 600], [0, 110])
  const fadeUp = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: .65 } } }
  return <main>
    <nav><a className="logo" href="#top">RIN<span>.</span></a><div className="navlinks"><a href="#about">About</a><a href="#work">Work</a><a href="#process">Process</a></div><a className="navcontact" href="#contact">Let’s talk <ArrowUpRight size={16}/></a><button className="menubtn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></nav>
    {menu && <div className="mobilemenu"><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></div>}
    <section id="top" className="hero gridbg">
      <motion.div className="hero-copy" initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.12}}}}><motion.p variants={fadeUp} className="eyebrow"><i></i> AVAILABLE FOR SELECT PROJECTS</motion.p><motion.h1 variants={fadeUp}>I turn complex ideas into <span>simple</span> digital experiences.</motion.h1><motion.p variants={fadeUp} className="intro">I’m <b>Rin LyHour</b>, a UI/UX designer shaping useful, intuitive products for people and businesses.</motion.p><motion.div variants={fadeUp} className="hero-actions"><a className="button dark" href="#work">View projects <ArrowDownRight size={18}/></a><a className="textbutton" href="#contact"><Download size={17}/> Download CV</a></motion.div></motion.div>
      <motion.div className="hero-art" style={{y:floatY}}><div className="orbit orbit1"></div><div className="orbit orbit2"></div><div className="hero-card"><span className="cardlabel">DESIGNER / DEVELOPER</span><div className="portrait"><div className="face">R</div></div><div className="signature">Rin LyHour</div><div className="cardbottom"><span>UI/UX DESIGN</span><span>2025 — ∞</span></div></div><div className="dot dot1"></div><div className="dot dot2"></div></motion.div>
      <div className="scrollnote">SCROLL TO EXPLORE <span>↓</span></div>
    </section>
    <section id="about" className="about section"><motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}><p className="eyebrow"><i></i> 01 / ABOUT ME</p><h2>Designing with clarity,<br/>purpose &amp; <i>curiosity.</i></h2></motion.div><motion.div className="about-copy" initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}><p>I’m a fourth-year Bachelor’s student and a UI/UX Designer with hands-on experience creating thoughtful digital products.</p><p>Since 2025, I’ve been working at <b>Softcreative</b>, where I design web platforms, mobile apps, and software systems that make work feel easier.</p><a href="#contact" className="arrowlink">More about me <ArrowUpRight size={18}/></a></motion.div><div className="facts"><div><b>01+</b><span>Years of experience</span></div><div><b>10+</b><span>Featured UX/UI projects</span></div><div><b>2025</b><span>Joined Softcreative</span></div></div></section>
    <section className="experience"><div className="section"><p className="eyebrow"><i></i> 02 / EXPERIENCE</p><div className="exp-head"><h2>Making ideas<br/>work <i>better.</i></h2><p>I care about the details that make a product not just look good, but work beautifully in the real world.</p></div><div className="experience-card"><div><span className="jobnum">01</span><h3>Softcreative</h3><p>UI/UX Designer · 2025 — Present</p></div><div className="duties">{['UI/UX Design','Web & Mobile Application Design','Software System Design','Client & Business Requirements','Prototype & User Flow','Collaboration with Developers'].map(x=><span key={x}><Check size={14}/>{x}</span>)}</div><ArrowUpRight className="exp-arrow"/></div></div></section>
    <section id="work" className="work section"><div className="work-title"><div><p className="eyebrow"><i></i> 03 / SELECTED WORK</p><h2>Featured <i>projects.</i></h2></div><p>From first idea to final interaction — a selection of systems designed to solve meaningful problems.</p></div><div className="projects">{projects.map((p,i)=><motion.article onClick={()=>setSelected(p)} className={`project project-${i}`} key={p.title} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} whileHover={{y:-8}}><div className="project-top"><span>{String(i+1).padStart(2,'0')} — {p.tag}</span><button aria-label="View project"><ArrowUpRight size={20}/></button></div><div className="project-mock"><Mockup project={p}/></div><div className="project-foot"><div><h3>{p.title}</h3><p>{p.type} · UX/UI Design</p></div><span className="view">View case study <ChevronRight size={16}/></span></div></motion.article>)}</div></section>
    <section className="live-apps section"><div className="live-heading"><div><p className="eyebrow"><i></i> 04 / LIVE APP EXPERIENCES</p><h2>Apps I designed<br/>and <i>shipped.</i></h2></div><p>Mobile experiences I designed with product and developer teams — delivered for release on Google Play and the App Store.</p></div><div className="live-list">{liveApps.map((app, i) => <motion.article className="live-card" key={app.name} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}><div className={`app-visual ${app.tone}`}><div className="app-icon">{app.initials}</div><div className="phone"><div className="phone-top"></div><div className="phone-screen"><small>{app.name}</small><b>Welcome back</b><div></div><div></div><div></div></div></div></div><div className="live-content"><p className="live-meta"><b>✓ UI/UX BY ME</b><span>·</span>{app.category}<span>·</span>{app.year}</p><h3>{app.name}</h3><p className="live-description">{app.description}</p><ul>{app.points.map(point=><li key={point}><Check size={15}/>{point}</li>)}</ul><div className="app-tags">{app.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="store-links"><a href="#" aria-label={`View ${app.name} on Google Play`}><span className="playmark">▶</span> Google Play <ArrowUpRight size={15}/></a><a href="#" aria-label={`View ${app.name} on App Store`}><span className="applemark">●</span> App Store <ArrowUpRight size={15}/></a></div></div></motion.article>)}</div></section>
    <section className="case-study"><div className="section"><div className="case-header"><p className="eyebrow"><i></i> 05 / CASE STUDY</p><span>INTERACTIVE PREVIEW</span></div><div className="casegrid"><div className="casecopy"><p className="case-index">01 — {selected.tag.toUpperCase()}</p><h2>{selected.title}</h2><p>A product experience built around clear workflows, confident decisions, and a system that can scale with the business.</p><button className="button lime"><Play size={15} fill="currentColor"/> View prototype</button></div><motion.div key={selected.title} initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} className="casevisual"><Mockup project={selected} large/><div className="floating-tag">Live<br/><b>Prototype</b></div></motion.div></div><div className="casesteps">{['Problem','Goal','Research','User Flow','Wireframe','UI Design','Prototype','Development','Final Result'].map((step,i)=><div key={step}><span>0{i+1}</span>{step}</div>)}</div></div></section>
    <section id="process" className="process section"><p className="eyebrow"><i></i> 05 / HOW I WORK</p><h2>A process that keeps<br/>people at the <i>center.</i></h2><div className="process-line">{process.map((x,i)=><React.Fragment key={x}><motion.div whileHover={{scale:1.08}}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b></motion.div>{i<process.length-1 && <em>→</em>}</React.Fragment>)}</div></section>
    <section className="skills section"><div><p className="eyebrow"><i></i> 06 / TOOLKIT</p><h2>Tools I use to<br/>bring ideas <i>alive.</i></h2></div><div className="skill-list">{skills.map((s,i)=><motion.div key={s} whileHover={{x:8}}><span>{String(i+1).padStart(2,'0')}</span><b>{s}</b><ArrowUpRight size={18}/></motion.div>)}</div></section>
    <footer id="contact"><div className="footer-top"><p className="eyebrow"><i></i> 07 / GET IN TOUCH</p><h2>Let’s create something<br/><i>meaningful</i> together.</h2><a className="round-link" href="mailto:hello@rinlyhour.com"><MoveRight size={34}/></a></div><div className="footer-bottom"><a className="logo" href="#top">RIN<span>.</span></a><div><a href="mailto:hello@rinlyhour.com"><Mail size={16}/> Email</a><a href="#"><Link size={16}/> LinkedIn</a><a href="#"><Code2 size={16}/> GitHub</a></div><span>© 2025 Rin LyHour</span></div></footer>
  </main>
}
createRoot(document.getElementById('root')).render(<App />)
