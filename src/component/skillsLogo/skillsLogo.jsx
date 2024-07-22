import { useEffect } from "react";

const SkillsLogo = () => {

  useEffect(() => {
    const logos = document.querySelectorAll('.logo');
    const container = document.querySelector('.container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const radius = Math.min(containerWidth, containerHeight) / 3;

    logos.forEach((logo, index) => {
      let angle = (index / logos.length) * (2 * Math.PI);

      const moveLogo = () => {
        angle += 0.01;

        const x = centerX + radius * Math.cos(angle) - 18; 
        const y = centerY + radius * Math.sin(angle) - 18; 

        logo.style.left = `${x}px`;
        logo.style.top = `${y}px`;

        requestAnimationFrame(moveLogo);
      };

      moveLogo();
    });
  }, []);

  return (
    <div className="flex items-center justify-center mt-8 w-[60%] h-[25%]">
      <div className="relative container h-full">
        <a href="https://www.python.org/" target="_blank" rel="noreferrer" className="logo absolute">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="logo absolute">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" className="logo absolute">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" />
        </a>
        <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer" className="logo absolute">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="logo absolute">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" />
        </a>
        <a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank" rel="noreferrer" className="logo absolute">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored.svg" width="36" height="36" alt="Flask" />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="logo absolute">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" />
        </a>
        <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer" className="logo absolute">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg" width="36" height="36" alt="Django" />
        </a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer" className="logo absolute">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" />
        </a>
      </div>
    </div>
  )
}

export default SkillsLogo;
