/**
 * ============================================================================
 * INTERACTIVIDAD Y COMPORTAMIENTO
 * Lámina de Presentación - "¿Aprendemos Jugando?"
 * Diseñadores: Camila Romero y Cristian Cruz
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Secciones principales
  const sectionHome = document.getElementById('section-home');
  const sectionProject = document.getElementById('section-project');
  const btnStart = document.getElementById('btn-start');
  const navBtnHome = document.getElementById('nav-btn-home');
  const navBtnProject = document.getElementById('nav-btn-project');

  // Elementos del Proyecto en la Lámina
  const mainProjectImage = document.getElementById('main-project-image');
  const pilaresContainer = document.getElementById('pilares-container');

  // Elementos del Modal (Apartado desplegable)
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');

  /**
   * 1. INICIALIZAR CONTENIDOS DINÁMICOS DESDE projects.js
   */
  function initProjectContent() {
    if (mainProjectImage && projectDetails.image) {
      mainProjectImage.src = projectDetails.image;
      mainProjectImage.onerror = () => {
        // Imagen cálida de respaldo en tonos beige en caso de error
        mainProjectImage.src = 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80';
      };
    }

    if (modalImg && projectDetails.image) {
      modalImg.src = projectDetails.image;
    }

    // Pilares
    if (pilaresContainer && projectDetails.propuesta?.pilares) {
      pilaresContainer.innerHTML = '';
      projectDetails.propuesta.pilares.forEach(pilar => {
        const chip = document.createElement('span');
        chip.className = 'pilar-chip';
        chip.textContent = `✦ ${pilar}`;
        pilaresContainer.appendChild(chip);
      });
    }
  }

  /**
   * 2. NAVEGACIÓN Y TRANSICIONES
   */
  function showHomeView() {
    sectionProject.classList.add('hidden');
    sectionHome.classList.remove('hidden');
    sectionHome.classList.add('fade-in');
    
    navBtnHome.classList.add('active');
    navBtnProject.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showProjectView() {
    sectionHome.classList.add('hidden');
    sectionProject.classList.remove('hidden');
    sectionProject.classList.add('fade-in');
    
    navBtnProject.classList.add('active');
    navBtnHome.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Evento botón "¡Vamos!"
  if (btnStart) {
    btnStart.addEventListener('click', (e) => {
      e.preventDefault();
      btnStart.style.transform = 'scale(0.96)';
      setTimeout(() => {
        btnStart.style.transform = '';
        showProjectView();
      }, 140);
    });
  }

  // Navegación en el header
  if (navBtnHome) navBtnHome.addEventListener('click', showHomeView);
  if (navBtnProject) navBtnProject.addEventListener('click', showProjectView);

  /**
   * 3. APARTADO DESPLEGABLE / MODAL DEL PROYECTO
   * Se activa al picarle a la foto o al título
   */
  function openProjectModal() {
    if (!modal) return;
    
    // Asegurar imagen
    if (modalImg && projectDetails.image) {
      modalImg.src = projectDetails.image;
    }
    if (modalTitle && projectDetails.title) {
      modalTitle.textContent = projectDetails.title;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restaura scroll
  }

  // Vincular todos los disparadores (.js-trigger-modal)
  const triggers = document.querySelectorAll('.js-trigger-modal');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectModal();
    });
  });

  // Botón cerrar modal
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Cerrar al hacer clic en el fondo oscuro
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // Inicialización
  initProjectContent();
});
