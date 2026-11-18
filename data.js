// Default portfolio content. Later the admin panel (Firebase) will override this.
window.PORTFOLIO = {
  profile: {
    name: "Fabricio Umaña Villa",
    photo: "img/foto.jpg",
    tagline: { en: "Junior Web Developer & Visual Designer — detail-oriented, fast, and always looking for a better way.",
               es: "Desarrollador Web Junior y Diseñador Visual — detallista, rápido y siempre buscando una mejor forma de hacer las cosas." },
    location: "San José, Costa Rica",
    email: "fabricioumana453@gmail.com",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/Stiles7636"
  },
  about: {
    en: "Web Development technician with experience at Amazon Prime Video, focused on building internal tools that automate processes and save time. Proactive, punctual and responsible, with strong leadership and teamwork skills.",
    es: "Técnico en Desarrollo Web con experiencia en Amazon Prime Video, enfocado en crear herramientas internas que automatizan procesos y ahorran tiempo. Proactivo, puntual y responsable, con habilidades de liderazgo y trabajo en equipo."
  },
  stats: [
    { value: "15 min → 10 s", en: "to download 30 images", es: "para descargar 30 imágenes" },
    { value: "243", en: "countries in Address Autofill", es: "países en Address Autofill" },
    { value: "39", en: "channels launched in LATAM", es: "canales lanzados en LATAM" }
  ],
  skills: {
    technical: ["HTML","CSS","JavaScript","C# (ASP.NET)","Python","NumPy","Pandas","SQLite","Firebase","Chrome Extensions","VS Code","Excel","Canva","Adobe Photoshop","Asana"],
    soft: { en: ["Team leadership","Conflict management","Decision-making","Assertive communication"],
            es: ["Liderazgo de equipos","Manejo de conflictos","Toma de decisiones","Comunicación asertiva"] }
  },
  experience: [
    { role: { en: "Intern · Prime Video Publishing Ops", es: "Practicante · Prime Video Publishing Ops" }, org: "Amazon Prime Video", date: { en: "Oct 2026 – Present", es: "Oct 2026 – Actualidad" },
      points: { en: ["Built browser extensions used by 15 people that automate image downloads and address forms.","Created 115+ test accounts to validate channel subscriptions in several countries.","Contributed to the Prime Video Channels launch in 5 Latin American countries (39 channels).","Coordinated 10 people across 3 multidisciplinary teams."],
                es: ["Creé extensiones de navegador usadas por 15 personas que automatizan descargas de imágenes y formularios de direcciones.","Creé más de 115 cuentas de prueba para validar suscripciones a canales en varios países.","Contribuí al lanzamiento de Prime Video Channels en 5 países de Latinoamérica (39 canales).","Coordiné a 10 personas en 3 equipos multidisciplinarios."] } },
    { role: { en: "Administrative Assistant Intern", es: "Practicante de Asistente Administrativo" }, org: "AGIO Gestoría de Negocios S.A.", date: { en: "Jul 2025 – Aug 2025", es: "Jul 2025 – Ago 2025" },
      points: { en: ["Designed and maintained an internal web page.","Analyzed data to support decision-making.","Organized 30+ client records and prepared 30+ reports."],
                es: ["Diseñé y mantuve una página web interna.","Analicé datos para apoyar la toma de decisiones.","Organicé más de 30 expedientes de clientes y preparé más de 30 informes."] } }
  ],
  education: [
    { en: "Technical Degree in Web Development — CTP de Pavas (Expected Dec 2026)", es: "Técnico en Desarrollo Web — CTP de Pavas (Dic 2026)" },
    { en: "Cisco: IT Essentials, Python Essentials 1 & 2, Linux Unhatched, Data Analytics Essentials", es: "Cisco: IT Essentials, Python Essentials 1 y 2, Linux Unhatched, Data Analytics Essentials" },
    { en: "Amazon: DevOps on AWS, Machine Learning Fundamentals, Data Analysis Libraries, Cybersecurity, PM Methodologies", es: "Amazon: DevOps en AWS, Fundamentos de Machine Learning, Librerías de Análisis de Datos, Ciberseguridad, Metodologías de PM" }
  ],
  languages: { en: "Spanish (native) · English (B2)", es: "Español (nativo) · Inglés (B2)" },
  sections: [
    { id: "web", title: { en: "Web & Tools", es: "Web y Herramientas" }, items: [
      { id: "harvester", title: "Image Harvester", tags: ["JavaScript","Chrome Extension","Manifest V3"],
        problem: { en: "Downloading 30 images one by one took about 15 minutes.", es: "Descargar 30 imágenes una por una tomaba unos 15 minutos." },
        solution: { en: "A Chrome extension that finds every image on any page, removes duplicates, filters by size and type, and downloads them all into a folder.", es: "Una extensión de Chrome que encuentra todas las imágenes de cualquier página, quita duplicados, filtra por tamaño y tipo, y las descarga en una carpeta." },
        result: { en: "15 min → 10 seconds. Used by 15 people.", es: "15 min → 10 segundos. Usada por 15 personas." },
        images: ["img/harvester/01-pagina.jpg","img/harvester/02-popup.jpg","img/harvester/03-seleccion.jpg","img/harvester/04-descargas.jpg"],
        captions: { en: ["Any page with images","Detected images with size","Select & filter","Saved in one folder"], es: ["Cualquier página con imágenes","Imágenes detectadas con su tamaño","Seleccionar y filtrar","Guardadas en una carpeta"] },
        links: { repo: "https://github.com/Stiles7636/image-harvester", demo: "" } },
      { id: "autofill", title: "Address Autofill", tags: ["JavaScript","Chrome Extension","UX"],
        problem: { en: "Filling test address forms by hand took ~2 min each and caused errors.", es: "Llenar a mano formularios de direcciones de prueba tomaba ~2 min y causaba errores." },
        solution: { en: "One-click autofill with realistic test data for 243 countries: flags, search, 5 rotating addresses per country, keyboard shortcut and dark mode.", es: "Autollenado en un clic con datos de prueba realistas para 243 países: banderas, buscador, 5 direcciones que rotan por país, atajo de teclado y modo oscuro." },
        result: { en: "Saves 2 min per form and reduces errors. Used by 15 people.", es: "Ahorra 2 min por formulario y reduce errores. Usada por 15 personas." },
        images: ["img/autofill/01-empty.jpg","img/autofill/02-popup.jpg","img/autofill/03-filled.jpg","img/autofill/04-saved.jpg"],
        captions: { en: ["Empty checkout form","Pick a country and address","8 fields filled in one click","Address saved"], es: ["Formulario de checkout vacío","Elegir país y dirección","8 campos llenos en un clic","Dirección guardada"] },
        note: { en: "🧪 Install the extension from GitHub, then try it on the test form (Live demo).", es: "🧪 Instala la extensión desde GitHub y pruébala en el formulario de prueba (Ver en vivo)." },
        links: { repo: "https://github.com/Stiles7636/address-autofill", demo: "demos/address-form/index.html" } },
      { id: "lrpm", title: { en: "Intern Attendance Tracker", es: "Control de Asistencia" }, tags: ["HTML","JavaScript","Firebase","Netlify"],
        problem: { en: "The team had no simple way to track check-in and lunch times.", es: "El equipo no tenía una forma simple de registrar entradas y almuerzos." },
        solution: { en: "A web app where interns clock in, track lunch and see their history, with a Firebase backend.", es: "Una app web donde los practicantes marcan entrada, registran el almuerzo y ven su historial, con Firebase." },
        result: { en: "Used by 10 people and improved team punctuality.", es: "Usada por 10 personas y mejoró la puntualidad del equipo." },
        images: ["img/lrpm/01-inicio.jpg","img/lrpm/02-marcar-entrada.jpg","img/lrpm/03-almuerzo.jpg","img/lrpm/04-historial.jpg"],
        captions: { en: ["Home","Clock in","Lunch tracking","History"], es: ["Inicio","Marcar entrada","Registro de almuerzo","Historial"] },
        note: { en: "🧪 To try the demo, use code 1111 (intern) or 0000 (admin). Data is saved only in your browser.", es: "🧪 Para probar la demo, usa el código 1111 (practicante) o 0000 (administrador). Los datos se guardan solo en tu navegador." },
        links: { repo: "", demo: "demos/attendance/index.html" } },
      { id: "converter", title: { en: "Image Converter", es: "Convertidor de Imágenes" }, tags: ["HTML","JavaScript","Canvas"],
        problem: { en: "Online converters are full of ads and upload your files to unknown servers.", es: "Los convertidores en línea están llenos de anuncios y suben tus archivos a servidores desconocidos." },
        solution: { en: "A free, ad-free converter that changes image formats right in the browser, with a custom interface built for personal use.", es: "Un convertidor gratis y sin anuncios que cambia el formato de imágenes en el navegador, con una interfaz personalizada para uso personal." },
        result: { en: "Private, fast and free — files never leave the device.", es: "Privado, rápido y gratis: los archivos nunca salen del dispositivo." },
        images: ["img/converter/01-inicio.jpg","img/converter/02-seleccion-imagenes.jpg","img/converter/03-selector.jpg","img/converter/04-guardada.jpg","img/converter/05-guardada-pc.jpg"],
        captions: { en: ["Home","Choose images","Pick a format","Saved","Saved on desktop"], es: ["Inicio","Elegir imágenes","Elegir formato","Guardada","Guardada en PC"] },
        links: { repo: "", demo: "demos/converter/index.html" } }
    ]},
    { id: "design", title: { en: "Design", es: "Diseño" }, items: [
      { id: "poster", title: { en: "Movie-style Poster", es: "Póster estilo película" }, tags: ["Photopea","Typography","Layout"],
        problem: { en: "Created for a group design activity: turn a favorite song into a movie poster. Fully designed by me (fan-made, non-commercial).", es: "Hecho para una dinámica grupal: convertir una canción favorita en un póster de película. Diseñado completamente por mí (fan art, sin fines comerciales)." },
        solution: { en: "Built the whole layout from scratch: black & white photo with grain, a condensed headline that overlaps the image for depth, top credits, festival-style laurels with song titles, lyrics as body copy and a studio logo — all on a muted olive palette.", es: "Armé todo el layout desde cero: foto en blanco y negro con grano, un título condensado que se monta sobre la imagen para dar profundidad, créditos arriba, laureles tipo festival con nombres de canciones, la letra como texto de apoyo y un logo de estudio — todo en una paleta oliva apagada." },
        result: { en: "Clear visual hierarchy and text placement, in the style of real film and streaming key art.", es: "Jerarquía visual clara y buena colocación de texto, al estilo del key art de cine y plataformas de streaming." },
        images: ["img/design/poster.jpg"], captions: { en: ["Final poster"], es: ["Póster final"] }, links: {} },
      { id: "tattoo1", title: { en: "Tattoo Removal #1", es: "Eliminación de tatuaje #1" }, tags: ["Photopea","Retouching"],
        problem: { en: "Remove a large, colorful tattoo from an arm without leaving blotches or losing the skin texture.", es: "Quitar un tatuaje grande y de colores de un brazo sin dejar manchas ni perder la textura de la piel." },
        solution: { en: "Worked in small sections with the healing brush and clone stamp, sampling nearby skin so the tone, pores and lighting stay consistent with the rest of the arm.", es: "Trabajé por secciones pequeñas con el pincel corrector y el tampón de clonar, tomando piel cercana para que el tono, los poros y la luz coincidan con el resto del brazo." },
        result: { en: "Clean skin with no visible edit marks.", es: "Piel limpia sin marcas visibles de edición." },
        images: ["img/design/tattoo1-before.jpg","img/design/tattoo1-after.jpg"], captions: { en: ["Before","After"], es: ["Antes","Después"] }, links: {} },
      { id: "tattoo2", title: { en: "Tattoo Removal #2", es: "Eliminación de tatuaje #2" }, tags: ["Photopea","Retouching"],
        problem: { en: "Remove a fine-line tattoo with lots of small details, where any mistake on the skin is easy to notice.", es: "Quitar un tatuaje de línea fina con muchos detalles pequeños, donde cualquier error en la piel se nota fácil." },
        solution: { en: "Removed the lines one by one with the spot healing brush, then evened out the tone with soft cloning so the arm keeps its natural shading.", es: "Quité las líneas una por una con el pincel corrector puntual y luego emparejé el tono con clonado suave, para que el brazo conserve sus sombras naturales." },
        result: { en: "Natural result, ready for catalogue use.", es: "Resultado natural, listo para catálogo." },
        images: ["img/design/tattoo2-before.jpg","img/design/tattoo2-after.jpg"], captions: { en: ["Before","After"], es: ["Antes","Después"] }, links: {} },
      { id: "apples", title: { en: "Selective Color", es: "Color selectivo" }, tags: ["Photopea","Color","Masking"],
        problem: { en: "Make specific objects stand out in a black & white photo using color.", es: "Hacer que objetos específicos resalten en una foto en blanco y negro usando color." },
        solution: { en: "Selected each apple with precise masks and colored it on its own layer, so every color can be adjusted separately without touching the background.", es: "Seleccioné cada manzana con máscaras precisas y la coloreé en su propia capa, para poder ajustar cada color por separado sin tocar el fondo." },
        result: { en: "Clean edges and a strong focal point.", es: "Bordes limpios y un punto focal fuerte." },
        images: ["img/design/apples-before.jpg","img/design/apples-after.jpg"], captions: { en: ["Before","After"], es: ["Antes","Después"] }, links: {} }
    ]}
  ]
};
