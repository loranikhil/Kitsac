import React from 'react';
import { Award } from 'lucide-react';
import './Client.css';

const Clients = () => {
  // Limited set of major clients for clean look
  const clients = [
    // { name: "GoodWill", logo: "GW", color: "#00A4EF" },
    { name: "MapMyIndia", logo: "MMI", color: "#4285F4" },
    // { name: "TraderzPlanet", logo: "TP", color: "#FF9900" },
    
  ];

  return (
    <section className="clients-section" id="clients">
      <div className="clients-container">
        <div className="clients-header">
          <div className="header-badge">
            <Award className="badge-icon" />
            Trusted by Leaders
          </div>
          <h2 className="clients-title">Our Clients</h2>
        </div>

        <div className="clients-showcase">
          <div className="clients-track">
            {/* First set */}
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="client-card"
                style={{ '--brand-color': client.color }}
              >
                {/* <div className="client-logo">
                  {client.logo}
                </div> */}
                <div className="client-name">{client.name}</div>
              </div>
            ))}
            {/* Duplicate for seamless animation */}
            {clients.map((client, index) => (
              <div 
                key={`dup-${index}`} 
                className="client-card"
                style={{ '--brand-color': client.color }}
              >
                {/* <div className="client-logo">
                  {client.logo}
                </div> */}
                <div className="client-name">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;