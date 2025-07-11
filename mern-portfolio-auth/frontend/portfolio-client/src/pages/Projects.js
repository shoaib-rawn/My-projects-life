import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "My life learning code",
      description: "Full-stack ,Frontend ,backend Techs",
      link: "https://github.com/shoaib-rawn/My-projects-life",
      tech: "Mern,csstailwind,bootstrap ,javascript,php,html,css5"
    },
    {
      title: "javascript projects",
      description: "learning base projects ",
      link: "https://github.com/shoaib-rawn/My-projects-life/tree/main/project%203%20(html_css_js)r",
      tech: "Javascript,css tailwind"
    },
    {
      title: "Inventory app ",
      description: "store products in database",
      link: "https://github.com/shoaib-rawn/My-projects-life/tree/main/mern-inventory-app",
      tech: "Mern,bootstrap"
    },
    {
      title: "Portfolio Website",
      description: "My personal developer portfolio with project showcase",
      link: "https://github.com/shoaib-rawn/My-projects-life/tree/main/mern-portfolio-auth",
      tech: "Mern,bootstrap"
    }
  ];

  const styles = {
    container: { padding: '3rem 1rem', maxWidth: '1200px', margin: 'auto' },
    title: { textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', fontWeight: 700 },
    grid: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem', justifyContent: 'center'
    },
    bubble: {
      width: 250, height: 250, borderRadius: '50%',
      background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
      color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      alignItems: 'center', padding: '1.5rem', textAlign: 'center',
      transition: 'transform 0.3s ease', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', cursor: 'pointer'
    },
    titleText: { fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' },
    desc: { fontSize: '0.9rem', marginBottom: '1rem' },
    badge: {
      background: 'rgba(255,255,255,0.9)', color: '#333',
      borderRadius: '50px', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 500
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Projects</h2>
      <div style={styles.grid}>
        {projects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div
              style={styles.bubble}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h3 style={styles.titleText}>{p.title}</h3>
              <p style={styles.desc}>{p.description}</p>
              <div style={styles.badge}>{p.tech}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
