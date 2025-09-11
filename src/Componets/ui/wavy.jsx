import React from 'react';

const WavyBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Multiple wave layers for depth effect */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 1440 320%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill=%22rgba(255, 255, 255, 0.7)%22 d=%22M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22></path></svg>')] bg-repeat-x bg-[0_bottom] bg-[length:50%_100%] animate-wave animate-duration-[12s]"></div>
      <div className="absolute bottom-0 left-0 w-[200%] h-full bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 1440 320%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill=%22rgba(255, 255, 255, 0.7)%22 d=%22M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22></path></svg>')] bg-repeat-x bg-[0_bottom] bg-[length:50%_80%] animate-wave animate-duration-[8s] animate-reverse opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[200%] h-full bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 1440 320%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill=%22rgba(255, 255, 255, 0.7)%22 d=%22M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22></path></svg>')] bg-repeat-x bg-[0_bottom] bg-[length:50%_60%] animate-wave animate-duration-[10s] animate-delay-[-1s] opacity-70"></div>
    </div>
  );
};

export default WavyBackground;
