import React, { useState, useEffect, useRef } from 'react';

const TRACK_STYLES = [
  { id: 'edm', name: 'EDM Mode', bpm: 128, color: '#ec4899', desc: 'High-energy cuts, festival transitions, drop-focused editing' },
  { id: 'phonk', name: 'Phonk Mode', bpm: 150, color: '#a78bfa', desc: 'Dark cinematic aesthetics, VHS-inspired effects, bass-driven pacing' },
  { id: 'hiphop', name: 'Hip-Hop Mode', bpm: 92, color: '#06b6d4', desc: 'Urban-inspired visuals, rhythm-based editing, smooth cinematic movement' },
  { id: 'trap', name: 'Trap Mode', bpm: 140, color: '#22c55e', desc: 'Heavy bass synchronization, punchy transitions, high-energy pacing' },
  { id: 'cinematic', name: 'Cinematic Mode', bpm: 80, color: '#eab308', desc: 'Movie-inspired storytelling, emotional transitions, premium motion' },
  { id: 'auto', name: 'Auto AI Mode', bpm: 110, color: '#38bdf8', desc: 'Analyzes tracks dynamically and chooses the best editing style' }
];

const SCREENSHOTS = [
  '/screen1.jpg',
  '/screen2.jpg',
  '/screen3.jpg',
  '/screen4.jpg',
  '/screen5.jpg'
];

export default function AudioDemo() {
  const [mixType, setMixType] = useState('photo'); // 'photo' or 'video'
  const [selectedStyle, setSelectedStyle] = useState('phonk');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processingStep, setProcessingStep] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [beatFlash, setBeatFlash] = useState(false);

  // Audio and timer references
  const audioCtxRef = useRef(null);
  const playIntervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const styleRef = useRef(selectedStyle);

  useEffect(() => {
    styleRef.current = selectedStyle;
  }, [selectedStyle]);

  useEffect(() => {
    return () => {
      stopAll();
    };
  }, []);

  const handleGenerate = () => {
    if (isPlaying) {
      stopAll();
    }
    setIsProcessing(true);
    setProgress(0);
    setProcessingStep('AI Engine: Sorting images and files...');

    let currentProgress = 0;
    progressIntervalRef.current = setInterval(() => {
      currentProgress += 4;
      setProgress(currentProgress);

      if (currentProgress < 20) {
        setProcessingStep('AI Engine: Analyzing song structure & highlight sections...');
      } else if (currentProgress < 45) {
        setProcessingStep('AI Engine: Detecting BPM transients & musical energy drops...');
      } else if (currentProgress < 70) {
        setProcessingStep('AI Engine: Generating scene transitions & beatsync visual cuts...');
      } else if (currentProgress < 95) {
        setProcessingStep(`AI Engine: Compiling layout for ${TRACK_STYLES.find(s => s.id === styleRef.current)?.name}...`);
      } else if (currentProgress >= 100) {
        clearInterval(progressIntervalRef.current);
        setIsProcessing(false);
        startPlayback();
      }
    }, 120);
  };

  const startPlayback = () => {
    setIsPlaying(true);
    setCurrentSlide(0);

    const activeStyle = TRACK_STYLES.find(s => s.id === styleRef.current) || TRACK_STYLES[1];
    
    // Initialize Web Audio
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;

    const bpm = activeStyle.bpm;
    const intervalMs = (60 / bpm) * 1000; 

    let beatCounter = 0;

    const playBeat = () => {
      if (!ctx || ctx.state === 'closed') return;
      const time = ctx.currentTime;

      // Pulse UI trigger
      setBeatFlash(true);
      setTimeout(() => setBeatFlash(false), 80);

      // Programmatic synthesis based on official genres
      if (styleRef.current === 'edm') {
        // High-energy kick
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        osc.frequency.setValueAtTime(150, time);
        osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.15);
        env.gain.setValueAtTime(0.5, time);
        env.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
        osc.connect(env);
        env.connect(ctx.destination);
        osc.start(time);
        osc.stop(time + 0.2);

        // Buzzing synth chord (sawtooth) on beats
        const synthOsc = ctx.createOscillator();
        const synthEnv = ctx.createGain();
        synthOsc.type = 'sawtooth';
        synthOsc.frequency.setValueAtTime(beatCounter % 2 === 0 ? 130.81 : 196.00, time); // C3 or G3
        synthEnv.gain.setValueAtTime(0.12, time);
        synthEnv.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
        synthOsc.connect(synthEnv);
        synthEnv.connect(ctx.destination);
        synthOsc.start(time);
        synthOsc.stop(time + 0.18);

      } else if (styleRef.current === 'phonk') {
        // Phonk cowbell synth melody
        const cowbell = ctx.createOscillator();
        const bellEnv = ctx.createGain();
        cowbell.type = 'triangle';
        
        // Classic Phonk rhythm notes: F#5, G5, F#5, D5
        const melody = [739.99, 783.99, 739.99, 587.33];
        const pitchVal = melody[beatCounter % melody.length];
        cowbell.frequency.setValueAtTime(pitchVal, time);

        bellEnv.gain.setValueAtTime(0.25, time);
        bellEnv.gain.exponentialRampToValueAtTime(0.001, time + 0.18);
        cowbell.connect(bellEnv);
        bellEnv.connect(ctx.destination);
        cowbell.start(time);
        cowbell.stop(time + 0.22);

        // Fast underlying bass
        const sub = ctx.createOscillator();
        const subEnv = ctx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(55, time); // A1
        subEnv.gain.setValueAtTime(0.2, time);
        subEnv.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
        sub.connect(subEnv);
        subEnv.connect(ctx.destination);
        sub.start(time);
        sub.stop(time + 0.3);

      } else if (styleRef.current === 'hiphop') {
        // Soft chill jazz piano pad
        if (beatCounter % 2 === 0) {
          const notes = [146.83, 174.61, 220.00, 261.63]; // Dm7 chord
          notes.forEach(f => {
            const osc = ctx.createOscillator();
            const env = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, time);
            env.gain.setValueAtTime(0, time);
            env.gain.linearRampToValueAtTime(0.06, time + 0.08);
            env.gain.exponentialRampToValueAtTime(0.001, time + 0.6);
            osc.connect(env);
            env.connect(ctx.destination);
            osc.start(time);
            osc.stop(time + 0.8);
          });
        }
        // Soft rim kick
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        osc.frequency.setValueAtTime(80, time);
        env.gain.setValueAtTime(0.2, time);
        env.gain.exponentialRampToValueAtTime(0.001, time + 0.2);
        osc.connect(env);
        env.connect(ctx.destination);
        osc.start(time);
        osc.stop(time + 0.25);

      } else if (styleRef.current === 'trap') {
        // Boom 808 kick (deep frequency pitch sweep)
        const sub808 = ctx.createOscillator();
        const env808 = ctx.createGain();
        sub808.type = 'sine';
        sub808.frequency.setValueAtTime(65, time); // C2
        sub808.frequency.exponentialRampToValueAtTime(30, time + 0.4);

        env808.gain.setValueAtTime(0.6, time);
        env808.gain.exponentialRampToValueAtTime(0.001, time + 0.55);
        
        sub808.connect(env808);
        env808.connect(ctx.destination);
        sub808.start(time);
        sub808.stop(time + 0.6);

        // Fast trap hihat click (random noise burst)
        const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseBuffer.length; i++) {
          output[i] = Math.random() * 2 - 1;
        }
        const hat = ctx.createBufferSource();
        hat.buffer = noiseBuffer;
        const hatGain = ctx.createGain();
        // Bandpass to make it thin click
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 8000;
        
        hatGain.gain.setValueAtTime(0.18, time);
        hatGain.gain.exponentialRampToValueAtTime(0.001, time + 0.02);
        
        hat.connect(filter);
        filter.connect(hatGain);
        hatGain.connect(ctx.destination);
        hat.start(time);

      } else if (styleRef.current === 'cinematic') {
        // Long orchestral sub pad + gong bell
        if (beatCounter % 4 === 0) {
          // Bell gong
          const gong = ctx.createOscillator();
          const gongEnv = ctx.createGain();
          gong.type = 'triangle';
          gong.frequency.setValueAtTime(146.83, time); // D3
          gongEnv.gain.setValueAtTime(0.15, time);
          gongEnv.gain.exponentialRampToValueAtTime(0.001, time + 1.8);
          gong.connect(gongEnv);
          gongEnv.connect(ctx.destination);
          gong.start(time);
          gong.stop(time + 2.0);

          // Deep string pad swell
          const strNotes = [73.42, 110.00, 146.83];
          strNotes.forEach(f => {
            const strOsc = ctx.createOscillator();
            const strEnv = ctx.createGain();
            strOsc.type = 'sine';
            strOsc.frequency.setValueAtTime(f, time);
            strEnv.gain.setValueAtTime(0, time);
            strEnv.gain.linearRampToValueAtTime(0.12, time + 0.8); // slow attack
            strEnv.gain.exponentialRampToValueAtTime(0.001, time + 2.2);
            strOsc.connect(strEnv);
            strEnv.connect(ctx.destination);
            strOsc.start(time);
            strOsc.stop(time + 2.4);
          });
        }
      } else {
        // Auto mode - plays a neutral sync pulse
        const pulse = ctx.createOscillator();
        const pEnv = ctx.createGain();
        pulse.frequency.setValueAtTime(100, time);
        pEnv.gain.setValueAtTime(0.2, time);
        pEnv.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
        pulse.connect(pEnv);
        pEnv.connect(ctx.destination);
        pulse.start(time);
        pulse.stop(time + 0.15);
      }

      // Rotate slides
      setCurrentSlide(prev => (prev + 1) % SCREENSHOTS.length);
      beatCounter++;
    };

    playBeat();
    playIntervalRef.current = setInterval(playBeat, intervalMs);
  };

  const stopAll = () => {
    if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
      playIntervalRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
    setIsProcessing(false);
    setProgress(0);
    setBeatFlash(false);
  };

  // Get active slide styling filter depending on the selected AI style
  const getSlideStyle = () => {
    if (!isPlaying) return {};
    
    const baseTransition = 'transform 0.4s ease-out, filter 0.3s ease';
    
    switch (selectedStyle) {
      case 'phonk':
        // VHS/Dark theme: filter saturated, slight sepia, high contrast
        return {
          filter: `contrast(1.4) saturate(1.5) hue-rotate(-5deg) brightness(0.85) ${beatFlash ? 'brightness(1.0) contrast(1.5)' : ''}`,
          transform: `scale(1.01) ${beatFlash ? 'scale(1.03) translateY(-2px)' : ''}`,
          transition: baseTransition
        };
      case 'edm':
        // Pop-pulse scale jumps on beat
        return {
          filter: `saturate(1.8) contrast(1.1) ${beatFlash ? 'hue-rotate(20deg)' : ''}`,
          transform: beatFlash ? 'scale(1.07)' : 'scale(1.02)',
          transition: 'transform 0.08s ease-out, filter 0.08s ease-out'
        };
      case 'trap':
        // Punchy flash on beat drops
        return {
          filter: beatFlash ? 'invert(0.15) brightness(1.3) contrast(1.2)' : 'none',
          transform: beatFlash ? 'scale(1.05) rotate(1deg)' : 'scale(1.02) rotate(0deg)',
          transition: 'transform 0.05s ease, filter 0.05s ease'
        };
      case 'cinematic':
        // Smooth panning & vignette styling (Ken Burns zoom)
        return {
          filter: 'contrast(1.05) saturate(1.1) sepia(0.1)',
          transform: 'scale(1.12) translate(4px, 2px)',
          transition: 'transform 3.0s linear' // very slow zoom/pan
        };
      case 'hiphop':
        // Warm/smooth edit
        return {
          filter: 'sepia(0.2) contrast(1.1) brightness(0.95)',
          transform: beatFlash ? 'scale(1.03)' : 'scale(1.01)',
          transition: baseTransition
        };
      default:
        return {
          transform: beatFlash ? 'scale(1.04)' : 'scale(1.02)',
          transition: baseTransition
        };
    }
  };

  return (
    <section id="demo" className="demo-section">
      <div className="section-title">See Beatsync in Action</div>
      <p className="section-subtitle">
        Tweak settings below and hit "Generate" to simulate the local AI video mix rendering engine and watch it sync edits to the beats.
      </p>

      <div className="demo-container">
        
        {/* VHS Overlay effect helper for Phonk Mode */}
        {isPlaying && selectedStyle === 'phonk' && (
          <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 4px, 6px 100%',
            zIndex: 30,
            opacity: 0.85
          }}></div>
        )}

        <div className="mixer-grid" style={{ marginBottom: '2.5rem', gridTemplateColumns: '1fr' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Step 1: Select Input Mode */}
            <div>
              <div className="channel-label" style={{ marginBottom: '0.75rem', textAlign: 'left' }}>Step 1: Select AI Model</div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  className="play-btn" 
                  onClick={() => setMixType('photo')}
                  style={{ 
                    flex: 1, 
                    background: mixType === 'photo' ? 'linear-gradient(135deg, var(--cyan-primary), var(--indigo-primary))' : 'rgba(255,255,255,0.03)',
                    border: mixType === 'photo' ? 'none' : '1px solid var(--border-color)',
                    color: mixType === 'photo' ? 'white' : 'var(--text-muted)'
                  }}
                >
                  AI Image-to-Video Creator
                </button>
                <button 
                  className="play-btn" 
                  onClick={() => setMixType('video')}
                  style={{ 
                    flex: 1, 
                    background: mixType === 'video' ? 'linear-gradient(135deg, var(--cyan-primary), var(--indigo-primary))' : 'rgba(255,255,255,0.03)',
                    border: mixType === 'video' ? 'none' : '1px solid var(--border-color)',
                    color: mixType === 'video' ? 'white' : 'var(--text-muted)'
                  }}
                >
                  AI Video Mixing (Clips)
                </button>
              </div>
            </div>

            {/* Step 2: Choose Smart AI Styles */}
            <div>
              <div className="channel-label" style={{ marginBottom: '0.75rem', textAlign: 'left' }}>Step 2: Choose AI Style Mode</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                {TRACK_STYLES.map(style => (
                  <button 
                    key={style.id}
                    onClick={() => {
                      if (isPlaying) stopAll();
                      setSelectedStyle(style.id);
                    }}
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: selectedStyle === style.id ? `2px solid ${style.color}` : '1px solid var(--border-color)',
                      background: selectedStyle === style.id ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.01)',
                      color: selectedStyle === style.id ? 'white' : 'var(--text-muted)',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      textAlign: 'center',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.75rem', fontStyle: 'italic' }}>
                Active Style: {TRACK_STYLES.find(s => s.id === selectedStyle)?.desc}
              </p>
            </div>

            {/* Trigger Button */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button 
                className="play-btn" 
                onClick={isProcessing || isPlaying ? stopAll : handleGenerate}
                style={{ 
                  flex: 1, 
                  justifyContent: 'center', 
                  padding: '1.1rem',
                  fontSize: '1.05rem',
                  background: isProcessing || isPlaying ? '#f43f5e' : 'linear-gradient(135deg, var(--cyan-primary), var(--indigo-primary))',
                  boxShadow: isProcessing || isPlaying ? 'none' : '0 4px 15px var(--cyan-glow)'
                }}
              >
                {isProcessing ? 'Cancel Build' : isPlaying ? 'Stop Remix Preview' : 'Generate AI Remix ⚡'}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Simulator Screen Area */}
        <div className="visualizer-container" style={{ height: 'auto', minHeight: '340px', padding: '2rem 1rem' }}>
          
          {/* State A: Idle State */}
          {!isProcessing && !isPlaying && (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
              <p style={{ fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>AI Remix Engine Standby</p>
              <p style={{ fontSize: '0.85rem' }}>Configure your AI models and style modes above, then tap "Generate AI Remix" to scan.</p>
            </div>
          )}

          {/* State B: Processing State */}
          {isProcessing && (
            <div style={{ width: '100%', maxWidth: '450px', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--cyan-primary)', fontWeight: '600' }}>AI PIPELINE COMPILING</span>
                <span style={{ color: 'white', fontWeight: 'bold' }}>{progress}%</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '100px', height: '10px', width: '100%', overflow: 'hidden', marginBottom: '1rem' }}>
                <div style={{ background: 'linear-gradient(to right, var(--cyan-primary), var(--violet-primary))', width: `${progress}%`, height: '100%', transition: 'width 0.12s ease' }}></div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'monospace', textAlign: 'center' }}>
                {processingStep}
              </p>
            </div>
          )}

          {/* State C: Playing / Rendering State */}
          {isPlaying && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
              
              {/* Beatsync Flash Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-dot" style={{ 
                  background: TRACK_STYLES.find(s => s.id === selectedStyle)?.color || '#22d3ee', 
                  width: '10px', 
                  height: '10px' 
                }}></span>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontFamily: 'monospace', 
                  color: TRACK_STYLES.find(s => s.id === selectedStyle)?.color || '#22d3ee', 
                  letterSpacing: '0.1em' 
                }}>
                  REMAPPING TO {TRACK_STYLES.find(s => s.id === selectedStyle)?.name.toUpperCase()} AUDIO SIGNAL
                </span>
              </div>

              {/* Simulating Mobile device with screenshots sliding on beat drops */}
              <div className="phone-device" style={{ 
                width: '210px', 
                height: '420px', 
                margin: '0',
                borderColor: TRACK_STYLES.find(s => s.id === selectedStyle)?.color || '#1f2937'
              }}>
                <div className="phone-speaker"></div>
                <div className="phone-screen-container" style={{ background: '#000' }}>
                  <img 
                    src={SCREENSHOTS[currentSlide]} 
                    alt="Synchronized AI Video Frame" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      ...getSlideStyle()
                    }} 
                  />
                </div>
                <div className="phone-home-indicator"></div>
              </div>

              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', maxWidth: '400px' }}>
                Synthesizing beats for <strong style={{ color: 'white' }}>{TRACK_STYLES.find(s => s.id === selectedStyle)?.name}</strong> ({TRACK_STYLES.find(s => s.id === selectedStyle)?.bpm} BPM). Frame changes and visual filters are synchronizing to peak frequencies.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
