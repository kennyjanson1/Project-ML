import React, { useState, useEffect } from "react";
import "./Credit.css";

function Credit() {
  const members = [
    {
      name: "Kenny Janson",
      id: "2702283953",
      photo: "/kenny.png"
    },
    {
      name: "Rony Andrean",
      id: "2702274734",
      photo: "/rony.png"
    },
    {
      name: "Syabita Salma Habibah",
      id: "2702347950",
      photo: "/syabita.png"
    }
  ];

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300){
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300){
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <section id="credit-section" className="credit-section">
      <h2><button>Credit goes to</button></h2>
      <div className="members-grid">
        {members.map((member, index) => {
          let animationClass = "";
          if (showScroll) {
            if (index === 0 || index === 2) {
              animationClass = "move-up";
            } else if (index === 1) {
              animationClass = "move-down";
            }
          }
          return (
            <div key={index} className={`member-card fade-in ${animationClass}`}>
              <img src={member.photo} alt={member.name} className="member-photo" />
              <h3>{member.name}</h3>
              <p>{member.id}</p>
            </div>
          );
        })}
      </div>
      <button 
        className="scrollTop" 
        onClick={scrollTop} 
        style={{display: showScroll ? 'flex' : 'none'}}
        aria-label="Scroll to top"
      >
        &#8679;
      </button>
    </section>
  );
}

export default Credit;
