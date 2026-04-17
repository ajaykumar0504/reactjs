import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.hero}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>DRIVE THE <span style={{color:'#00d4ff'}}>FUTURE</span></h1>
        <p style={styles.subtitle}>Premium car rentals for those who demand excellence.</p>
        <button style={styles.btn} onClick={() => navigate('/fleet')}>Explore Fleet</button>
      </div>
    </div>
  );
};

const styles = {
  hero: { height: '80vh', backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')", backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', color: '#fff' },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' },
  content: { zIndex: 1, textAlign: 'center' },
  title: { fontSize: '4rem', margin: 0, fontWeight: '800' },
  subtitle: { fontSize: '1.2rem', margin: '20px 0' },
  btn: { padding: '15px 30px', background: '#00d4ff', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }
};

export default Hero;