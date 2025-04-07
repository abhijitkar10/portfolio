import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function App() {
  // Scrolling animation effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };
    
    // Parallax scrolling effect
    const handleParallaxScroll = () => {
      const elements = document.querySelectorAll('.parallax');
      elements.forEach((element) => {
        const scrollY = window.scrollY;
        const speed = 0.05;
        const yPos = -(scrollY * speed);
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };
    
    window.addEventListener('scroll', handleParallaxScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".section-animate");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleParallaxScroll);
    };
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
