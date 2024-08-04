import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Card } from './componets/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './componets/card/create-modal/create-modal';
import backgroundImage from './assets/background.jpg'
import logo from './assets/Krusty_Krab_logo.webp';
import backgroundMusic from './assets/SpongeBob SquarePants Production Music - The Rake Hornpipe.mp3';

function Navbar() {
  return (
    <nav>
      <ul>
        <img src={logo} alt="Logo do Siri Cascudo" /> { }
      </ul>
    </nav>
  )
}

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="container" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw'
    }}>
      <Navbar />
      <div className="card-grid">
        {data?.map(foodData =>
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <div style={{
        position: 'fixed',
        bottom: '70px',
        right: '20px'
      }}>
        <button style={{
          margin: '10px',
          height: '50px',
          borderRadius: '25px',
          border: 'none',
          backgroundColor: '#007BFF',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
          onClick={toggleMusic}>
          {isPlaying ? '⏸️ Pausar música' : '▶️ Tocar música'} { }
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
        <button style={{
          margin: '1px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#007BFF',
          color: 'white',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
          onClick={handleOpenModal}>novo</button>
      </div>
    </div>
  )
}

export default App