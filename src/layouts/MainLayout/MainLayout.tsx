import "./main-layout.css";
import { Profile } from "../../components/Profile/Profile";
import { Navigation } from "../../components/Navigation/Navigation";
import { Content } from "../../components/Content/Content";
import { Footer } from "../Footer/Footer";
import { useState } from "react";
import { ContactModal } from "../../components/ContactModal/ContactModal";

export function MainLayout() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="main-layout">
      <aside className="profile-section" aria-label="Perfil de usuario">
        <Profile onContactClick={() => setShowModal(true)} />
      </aside>

      <nav className="navigation-section" aria-label="Navegación principal">
        <Navigation />
      </nav>

      <main className="content-section" aria-live="polite">
        <Content />
      </main>

      <Footer />
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
