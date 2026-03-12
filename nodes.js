
const nodes = [
    {
        id: 'agnar', label: 'Agnar', group: 'ELVAR', type: 'Personaje — Jefe', desc: 'Jefe de Terrores de la batalla. Franja gruesa de cabello rubio en el centro de la cabeza (warrior-braid), el resto rapado, capote de oso negro, torc de plata. Carismático, valiente, implacable. Mató al Jarl Hrut sin dudar. Planea llevar a Berak al Jarl Störr en Snakavik',
        star: ''
    },
    {
        id: 'akall', label: 'Akáll de Varg', group: 'TRAMA', type: 'Trama — Abierta', desc: 'Varg necesita que Vol realice un akáll para invocar el espíritu de Frøya y descubrir cómo murió. Cap.11: Vol no está en el cuartel de los Hermanos. Røkia esquiva la pregunta de Varg sobre su paradero. El acceso a Vol sigue bloqueado.',
        star: '¿Dónde está Vol? Røkia no responde.'
    },
    {
        id: 'althing', label: 'Alþing (Althing)', group: 'NORSE', type: 'Institución — Asamblea', desc: 'Asamblea pública donde se anuncian juramentos, se resuelven disputas y se proclaman leyes. Celebrada en la Roca del Juramento en Fellur. Sigrún anunció allí su lealtad a Helka. [Histórico: el Alþingi islandés (fundado 930 d.C.) es el parlamento más antiguo del mundo. Era asamblea anual donde se recitaban leyes, se juzgaban casos y se hacían alianzas. Gwynne lo adapta como institución política clave en Vigríð.]',
        star: ''
    },
    {
        id: 'anillo-oro', label: 'Anillo de Oro', group: 'ELVAR', type: 'Objeto — Distinción', desc: '',
        star: ''
    },
    {
        id: 'araña-hielo', label: 'Arañas del Hielo', group: 'VAESEN', type: 'Vaesen — Ártico', desc: 'Vaesen de las regiones árticas. Su veneno hiela la sangre y detiene el corazón. Amenaza en los territorios del norte cercanos a las Islas del Hielo, al norte de Iskalt.',
        star: ''
    },
    {
        id: 'arild', label: 'Arild', group: 'ORKA', type: 'Personaje — Drengr (mujer)', desc: 'Drengr mujer de la Jarl Sigrún. Acompañó a Guðvarr al steading de Orka para convocar el Althing. Cap.12: fue el segundo de Guðvarr en el holmganga, le aconsejó en voz baja antes del duelo y le vendó el hombro tras la derrota.',
        star: '¿Qué le aconsejó a Guðvarr antes del duelo? Sigrún también le habló —pero su consejo fue distinto al de Arild.'
    },
    {
        id: 'armring', label: 'Armring (Anillo de Brazo)', group: 'NORSE', type: 'Símbolo — Lealtad', desc: 'Anillo de metal (plata, oro, bronce) enrollado en el brazo. Símbolo de lealtad a un señor. Los jarls los otorgan a guerreros leales ("dador de anillos" = epíteto de buen jarl). Sigrún lleva "anillos en los brazos". Svik lleva "anillos de plata enrollados en los brazos". Glornir es llamado "Dador-de-Oro". [Histórico: los armrings eran la moneda social vikinga. Un jarl generoso distribuía anillos a su séquito. Romper un anillo para pagar era común. Símbolo físico del vínculo señor-guerrero.]',
        star: 'Glornir "Dador-de-Oro" distribuye anillos a Hermanos de Sangre. Sistema de lealtad económica: el oro compra juramentos. Orka y Thorkel no llevan anillos — no deben lealtad a nadie.'
    },
    {
        id: 'asgrim', label: 'Asgrim (†)', group: 'ORKA', type: 'Personaje — Muerto', desc: 'Vecino de Orka y Thorkel en las colinas sobre el fiordo de Fellur. Esposo de Idrun, padre de Harek. Encontrado muerto de una estocada al corazón en el umbral de su steading (Cap.1). Tenía runa de warding en la puerta —el asesino fue humano, no vaesen.',
        star: 'Que un hombre con runa warding fuera asesinado confirma que la amenaza viene de personas, no de criaturas.'
    },
    {
        id: 'asgrim-death', label: 'Tragedia de Familia Asgrim', group: 'EVENTO', type: 'Evento', desc: 'Asgrim y su esposa son encontrados muertos en su granja a las afueras de Fellur por Orka. Su hijo esta desaparecido. Orka lleva los cuerpos a Fellur. Thorkel investiga que sucedió',
        star: ''
    },
    {
        id: 'battle-grim', label: 'Terrores de la batalla (Battle-Grim)', group: 'FACCION', type: 'Facción — Mercenarios', desc: 'Compañía mercenaria rival. Drakkar: Wave-Jarl. Cazan Tainted para venderlos a jarls. Jefe: Agnar. Thrall Tainted: Kráka (Seiðr) y Hundur (rastreador).',
        star: ''
    },
    {
        id: 'berak', label: 'Berak Bjornasson', group: 'ELVAR', type: 'Personaje — Berserkir', desc: 'Alto y grande con cicatrices en la cara, barba hasta el cinturón. Sangre del dios muerto Berser. Ojos ambarinos cuando entra en furia, dientes afilados, fuerza brutal. Vivia escondido y fue Capturado en Iskalt. Se le acusa de haber matado a tres Jarls. El collar de hierro suprime su transformación Berserkir. Destino: Snakavik, Jarl Störr.',
        star: ''
    },
    {
        id: 'berak-venta', label: 'Venta de Berak a Störr', group: 'TRAMA', type: 'Trama — Abierta', desc: 'Agnar navega hacia Snakavik para vender a Berak el Berserkir al Jarl Störr. Elvar reacciona personalmente ante este destino. La mujer de Berak (sangre de Snaka) también está a bordo.',
        star: 'Elvar tiene historia no revelada con Snakavik o Jarl Störr.'
    },
    {
        id: 'berser', label: 'Berser (Dios-Oso)', group: 'DIOS', type: 'Dios Muerto', desc: 'El dios-oso, hijo de Snaka. Muerto en el Guðfalla. Sus descendientes son los Berserkir: Tainted con fuerza sobrehumana, ojos ambarinos y transformación parcial en combate. [Nota histórica: en la mitología nórdica real, berserkr significa «camisa de oso» — guerreros sagrados de Odín que entraban en trance de furia animal (berserkergang). Gwynne reinterpreta esto como herencia de sangre divina literal: el «oso» fue un dios real que murió.]',
        star: 'Berak Bjornasson porta su sangre. Los Berserkir son muy cotizados por los jarls como guardia personal. El collar de hierro los detiene — pero ¿cuánto tiempo?'
    },
    {
        id: 'berserkergang', label: 'Berserkergang (Furia de Batalla)', group: 'NORSE', type: 'Combate — Trance', desc: 'Estado de furia disociativa en combate. Ojos ambarinos, dientes afilados, fuerza sobrehumana, pérdida de control racional. Berak entra en berserkergang cuando se transforma. Varg tiene episodios de "furia roja" que no recuerda — posible berserkergang. [Histórico: los berserkir históricos entraban en trance de batalla (quizá con drogas/rituales). Mordían escudos, aullaban, peleaban sin armadura. Gwynne lo reinterpreta como manifestación literal de sangre divina Tainted.]',
        star: 'Varg tiene furia roja sin memoria = posible sangre Tainted no descubierta. Berak en berserkergang es imparable — el collar de hierro es lo único que lo detiene.'
    },
    {
        id: 'biorr', label: 'Biórr', group: 'ELVAR', type: 'Personaje — Terrores de la batalla', desc: 'Pelo negro, botas largas (objeto de burlas). Interesado en Elvar. Sigue sus pasos en el bosque de Iskalt. Grend lo odia. Ofrece gachas al prisionero Berak y su familia.',
        star: '¿Por qué sigue a Elvar? ¿Genuino interés o misión oculta?'
    },
    {
        id: 'blood-oath', label: 'Juramento de Sangre', group: 'NORSE', type: 'Ritual — Pacto', desc: 'Pacto inquebrantable sellado con sangre. Sigrún juró lealtad de sangre a Helka. Breca y Vesli están unidos por juramento de sangre. Romperlo es traición absoluta. [Histórico: los juramentos de sangre (blóðbræðralag) creaban hermandad artificial entre guerreros nórdicos. Gwynne lo eleva a magia vinculante: el juramento de sangre en Vigríð tiene poder literal.]',
        star: '★★ El título de la trilogía (Bloodsworn) se refiere a esto. Los juramentos de sangre son el tejido que une (y rompe) Vigríð.'
    },
    {
        id: 'bloodsworn', label: 'Bloodsworn (Hermanos de Sangre)', group: 'FACCION', type: 'Facción — Mercenarios', desc: 'Compañía mercenaria de élite, legendaria y famosa en Vigríð. Escudo negro con salpicaduras rojas. Cazan vaesen, buscan reliquias, protegen ricos. Drakkar propio. Jefe: Glornir. Seiðr-thrall: Vol. Un miembro muere y van a Liga a buscar reemplazo',
        star: ''
    },
    {
        id: 'bogi', label: 'Bogi (Arco)', group: 'NORSE', type: 'Arma — Distancia', desc: 'Arco largo de madera (tejo, fresno, olmo). Alcance 200+ metros. Caza y guerra. Menos prestigioso que combate cuerpo a cuerpo pero tácticamente vital. Flechas con punta de hierro. [Histórico: los vikingos eran arqueros competentes pero el arco tenía menos prestigio cultural que espada/hacha. Matar desde lejos era menos "honorable". Gwynne probablemente lo usa para emboscadas y caza.]',
        star: 'Trud (Terrores de la batalla) fue herida por flecha en Iskalt. Los arcos aparecen en combate pero no son armas de héroes.'
    },
    {
        id: 'breca', label: 'Breca', group: 'ORKA', type: 'Personaje — Orka', desc: '10 inviernos. Pelo negro como cuervo, ojos de Orka. Sensible, curioso, valiente a su manera. Reacciona al hueso de dios en la entrada a Fellur. Se comunicó con Vesli la tennúr y le dio un diente de leche para calmarla. Vinculado a Vesli por juramento de sangre.',
        star: 'Afinidad especial con vaesen. ¿Tiene sangre Tainted? Vesli lo protegerá de por vida.'
    },
    {
        id: 'brynja', label: 'Brynja (Cota de Mallas)', group: 'NORSE', type: 'Armadura — Torso', desc: 'Cota de mallas de anillos entrelazados. Protección flexible contra cortes. Cara de fabricar: 20,000-30,000 anillos por cota. Símbolo de riqueza y estatus guerrero. Sigrún lleva una "remachada" (anillos remachados = calidad superior). [Histórico: la brynja era la armadura de élite vikinga. Pesaba 10-15kg. Solo jarls, campeones y guerreros ricos podían pagarla. La mayoría luchaba con cuero o sin armadura. Gwynne la usa como marcador visual de poder.]',
        star: 'Sigrún lleva brynja remachada = jarl guerrera de verdad, no solo política. Agnar probablemente también.'
    },
    {
        id: 'byrding', label: 'Byrðingr', group: 'NORSE', type: 'Embarcación — Carga Pesada', desc: 'Barco de carga pesada. Más grande y robusto que knarr. Transporte de materiales de construcción, piedra, madera, grandes cantidades de grano. Diseño sacrifica velocidad por capacidad. [Histórico: el byrðingr era el "camión de carga" nórdico. Usado para proyectos de construcción grandes: iglesias, fortalezas, puentes. En Vigríð serían necesarios para construir las fortalezas de Helka y Störr.]',
        star: 'Helka necesita byrðings para consolidar su reino: transportar piedra para fortalezas, provisiones para ejércitos.'
    },
    { id: 'cat-dioses', label: 'PANTEÓN DIVINO', group: 'CAT', type: 'Mitología', desc: 'Los dioses caídos y su legado en Vigríð. Adorar a los dioses muertos está prohibido y se castiga con la muerte', star: '' },
    { id: 'cat-elvar', label: 'ARCO ELVAR', group: 'CAT', type: 'Arco Narrativo', desc: 'POV 3 (nuevo en Cap.5). Guerrera joven de Terrores de la batalla. Caza Tainted para venderlos a jarls ricos.', star: '' },
    { id: 'cat-eventos', label: 'EVENTOS CLAVE', group: 'CAT', type: 'Cronología', desc: 'Sucesos históricos y actuales que moldean la narrativa.', star: '' },
    { id: 'cat-facciones', label: 'FACCIONES Y PODER', group: 'CAT', type: 'Política', desc: 'El tablero político de Vigríð: jarls, reinas, mercenarios.', star: '' },
    { id: 'cat-magia', label: 'MAGIA', group: 'CAT', type: 'Sistema Mágico', desc: 'Seiðr, Galdur, vínculos de sangre y el poder residual de los dioses muertos.', star: '' },
    { id: 'cat-mundo', label: 'MUNDO & COSMOS', group: 'CAT', type: 'Worldbuilding', desc: 'Los dioses muertos, el Guðfalla, los Tainted, los vaesen. La realidad rota de Vigríð.', star: '' },
    { id: 'cat-norse', label: 'CULTURA NÓRDICA', group: 'CAT', type: 'Tradiciones', desc: 'Costumbres, rituales, leyes y tradiciones del mundo de Vigríð basadas en la cultura nórdica histórica.', star: '' },
    { id: 'cat-objetos', label: 'OBJETOS', group: 'CAT', type: 'Artefactos', desc: 'Armas, artefactos mágicos y objetos significativos.', star: '' },
    { id: 'cat-orka', label: 'ARCO ORKA', group: 'CAT', type: 'Arco Narrativo', desc: 'POV 1. Trampera en las colinas sobre Fellur. Madre feroz, exguerrera con un pasado oscuro que regresa.', star: '' },
    { id: 'cat-tramas', label: 'TRAMAS ACTIVAS', group: 'CAT', type: 'Tramas', desc: 'Los hilos narrativos abiertos al final del Cap. 10.', star: '' },
    { id: 'cat-varg', label: 'ARCO VARG', group: 'CAT', type: 'Arco Narrativo', desc: 'POV 2. Ex-thrall en busca de un Seiðr para invocar a su hermana muerta. Recién reclutado por los Hermanos de Sangre.', star: '' },
    {
        id: 'collares', label: 'Collares de Hierro', group: 'OBJETO', type: 'Objeto Mágico', desc: 'Collar de hierro que controla a los Tainted mediante palabras Galdur. El metal se calienta con venas de fuego rojo al activarse. Símbolo de esclavitud y control. Vol, Kráka y los Tainted capturados los llevan.',
        star: 'El control de los Tainted depende de que solo los "dueños" conozcan las palabras Galdur.'
    },
    {
        id: 'colmillo-trol', label: 'Colmillo de Trol', group: 'ELVAR', type: 'Objeto — Distinción', desc: 'Máxima distinción en Terrores de la batalla. Agnar se lo entregó a Elvar como colmillo-collar tras la batalla del bull-troll en Iskalt, junto con un anillo. Reconocimiento de su valentía al asestar el golpe mortal en la arteria femoral. Símbolo de estatus dentro de la compañía.',
        star: '★ El colmillo marca el ascenso de Elvar. Toda Terrores de la batalla la ve recibir el premio.'
    },
    {
        id: 'darl', label: 'Darl', group: 'LUGAR', type: 'Lugar — Capital de Helka', desc: 'Sede de la Reina Helka. Los huesos del dios Orna, incluyendo sus alas, coronan la fortaleza. Centro del poder político emergente de Vigríð.',
        star: ''
    },
    {
        id: 'destral', label: 'Destral (Hacha con Barba)', group: 'NORSE', type: 'Arma', desc: 'Hacha de guerra nórdica con hoja extendida hacia abajo en forma de "barba". Arma característica de los guerreros nórdicos. Thorkel porta un hacha de mango largo (tan alto como él) con hoja "con barba". Virk usó un hacha de granjero en el holmganga contra Guðvarr. [Histórico: el skeggøx o "hacha barbada" era común entre vikingos por su versatilidad: la extensión inferior permitía enganchar escudos enemigos y proteger la mano del portador. Podía usarse con una o dos manos.]',
        star: 'Arma icónica del mundo nórdico. Thorkel la domina con maestría letal.'
    },
    {
        id: 'drakkar', label: 'Drakkar (Langskip)', group: 'NORSE', type: 'Embarcación — Guerra', desc: 'Barco largo de guerra (langskip). Proa tallada con cabeza de dragón o serpiente. Diseño estrecho y rápido para incursiones y batalla. Remos + vela cuadrada. Calado bajo permite navegar ríos y desembarcar en playas. Wave-Jarl es un drakkar. [Histórico: los drakkars (drakar, "dragón") eran los barcos de guerra vikingos por excelencia. Podían llevar 20-60 guerreros. El diseño simétrico proa-popa permitía remar en ambas direcciones sin girar. Gwynne los preserva como símbolo de poder militar en Vigríð.]',
        star: '★ Wave-Jarl (Terrores de la batalla) es un drakkar. Los Hermanos de Sangre también tienen uno. Símbolo de estatus para compañías mercenarias.'
    },
    {
        id: 'drengr', label: 'Drengr', group: 'NORSE', type: 'Concepto — Honor', desc: 'Guerrero honorable, valiente, leal. Título de respeto. Guðvarr se considera drengr pero su conducta lo contradice. [Histórico: drengr era el ideal del guerrero nórdico: valentía, lealtad, generosidad, autocontrol. Lo opuesto al níðing. Gwynne lo usa como marcador de estatus social y moral.]',
        star: 'Guðvarr reclama el título pero no vive según él. Contraste con Thorkel, que nunca lo reclama pero lo encarna.'
    },
    {
        id: 'einar', label: 'Einar Medio-Trol', group: 'VARG', type: 'Personaje — Hermanos', desc: 'Campeón de los Hermanos. Enorme, barba roja hasta la cintura, manos como yunques. Protección de hierro en la entrepierna (forjada por Jökul el herrero). Golpeó a decenas de candidatos. Pelea con Varg para ganarse el puesto en el grupo',
        star: ''
    },
    {
        id: 'elvar', label: 'Elvar', group: 'ELVAR', type: 'POV — Personaje', desc: 'Guerrera más joven de Terrores de la batalla. Rubia, trenza guerrera, escudo rojo con armas cruzadas. Impulsiva y valiente hasta la temeridad. Siempre trata de hacer mas que los demas, asi se gano su puesto en el muro de escudos. Saltó al mar helado para salvar al hijo de Berak. Reacciona ante el nombre de Snakavik.',
        star: 'Su reacción al destino Snakavik/Jarl Störr es personal. ¿Familia allí? ¿Pasado?'
    },
    {
        id: 'emp-kirill', label: 'Emperador Kirill', group: 'FACCION', type: 'Personaje — Poder Lejano', desc: 'Gobierna el vasto Iskidan desde la gran ciudad de Gravka. Virk lo acusa de tener más thralls que hombres libres y de sacrificar niños —rumores que Sigrun descarta como saga. Amenaza exterior potencial a Vigríð.',
        star: '★ ¿Tiene el patrón de robos de niños alguna conexión con Iskidan? Gwynne planta la semilla sin confirmarla.'
    },
    {
        id: 'faering', label: 'Færing', group: 'NORSE', type: 'Embarcación — Pesca', desc: 'Bote pequeño de remos (2-4 remos). Pesca costera, transporte local entre villa y granja. Diseño simple pero robusto. Cada familia de pescadores tiene uno. [Histórico: el færing ("de cuatro remos") era el bote de trabajo diario en Noruega. Aún se construyen réplicas hoy. Diseño casi idéntico por 1000+ años. En Vigríð serían omnipresentes en villas costeras como Fellur.]',
        star: 'Virk era pescador — probablemente tenía un færing. Las tres barcas que huyeron por el río Skarpain tras matar a Asgrim podrían ser færings.'
    },
    {
        id: 'falki', label: 'Fálki Torilsson', group: 'ORKA', type: 'Personaje — Althing', desc: 'Granjero y minero enriquecido por depósitos de estaño encontrados bajo su tierra de pastoreo. Lleva sombrero de fieltro rojo fino con piel y barba pálida con anillos de oro. Asistente al Althing en la Roca del Juramento.',
        star: ''
    },
    {
        id: 'faunir', label: 'Faunir', group: 'VAESEN', type: 'Vaesen', desc: 'Vaesen del catálogo de criaturas liberadas en el Guðfalla. Mencionado en la mitología de Vigríð. Sus características específicas aún no han sido detalladas en los capítulos leídos.',
        star: '¿Aparecerá en capítulos posteriores? Gwynne menciona vaesen por nombre antes de introducirlos en acción.'
    },
    {
        id: 'fell-wolf', label: 'Fell-Wolf', group: 'VAESEN', type: 'Vaesen — Cap.1', desc: 'Lobo vaesen enorme, pelaje gris pizarra, garras largas. Encontrado herido en Cap. 1 —alguien ya lo había atacado antes de que llegaran Orka y su familia. Irrumpió en el calvero y dispersó los renos.',
        star: '¿Quién hirió al fell-wolf antes del Cap. 1? Posible pista sobre los asesinos de Asgrim.'
    },
    {
        id: 'fellur', label: 'Fellur', group: 'LUGAR', type: 'Lugar — Villa', desc: 'Villa pesquera en el fiordo. ~100 habitantes. Longhouse central, muralla parcialmente podrida. Knuckle-bone de dios muerto en el umbral: protege contra vaesen. Dominio de Jarl Sigrún.',
        star: ''
    },
    {
        id: 'froa', label: 'Frøa', group: 'VAESEN', type: 'Vaesen', desc: 'Vaesen del catálogo de criaturas liberadas en el Guðfalla. Mencionado en la mitología de Vigríð. Sus características específicas aún no han sido detalladas en los capítulos leídos.',
        star: '¿Aparecerá en capítulos posteriores? Su nombre puede relacionarse con Freyja (nórdico: Frøya/Frøa).'
    },
    {
        id: 'froya', label: 'Frøya (†)', group: 'VARG', type: 'Personaje — Muerta', desc: 'Hermana de Varg, 4 inviernos menor. Ambos fueron vendidos a los 5 y 4 años por sus padres. Murió en circunstancias desconocidas. Su muerte es el motor de toda la historia de Varg.',
        star: 'Varg necesita un akáll (invocación Seiðr) para descubrir cómo murió y quién la mató.'
    },
    {
        id: 'funeral-rites', label: 'Ritos Funerarios', group: 'NORSE', type: 'Ritual — Muerte', desc: 'Los guerreros son enterrados con armas en la mano para luchar en Vergelmir contra Lik-Rifa en su camino al más allá. Morir con arma = morir con honor. Grend explica esto a Elvar: "los guerreros atraviesan Vergelmir en el camino del alma". Mord y Lif envuelven el cuerpo de Virk con ayuda de Thorkel. [Histórico: los vikingos enterraban a guerreros con armas, herramientas, incluso barcos. La creencia era que llevarían estos objetos al más allá. Gwynne lo reinterpreta: las armas son necesarias literalmente para combatir a Lik-Rifa en el inframundo.]',
        star: '★★ La creencia en Vergelmir hace que los ritos funerarios sean preparación para batalla post-mortem, no solo honor simbólico.'
    },
    {
        id: 'gachas', label: 'Gachas/Porridge', group: 'NORSE', type: 'Vida Diaria — Comida', desc: 'Comida básica diaria: avena/cebada cocida con agua o leche. Grend sirve gachas a Elvar. Biórr ofrece gachas a Berak prisionero. Comida de supervivencia en viajes largos y campamentos. [Histórico: el porridge (grautr) era alimento básico escandinavo. Barato, nutritivo, fácil de preparar en barco o campaña. Se comía con mantequilla, miel, o solo. Gwynne lo usa como marcador de vida cotidiana — incluso guerreros de élite comen simple.]',
        star: 'Grend cuida a Elvar sirviéndole gachas — gesto paternal. Incluso prisioneros reciben gachas: mínimo de humanidad.'
    },
    {
        id: 'galdramadr', label: 'Galdramaðr', group: 'MAGIA', type: 'Magia', desc: 'Hechicero',
        star: ''
    },
    {
        id: 'galdur', label: 'Galdur', group: 'MAGIA', type: 'Magia — Lengua', desc: 'Lengua mágica de comandos rúnicos. Activa los collares de hierro sobre los Tainted. Palabras conocidas: Hlýða (obedece / escucha), Á HNÉN (de rodillas), Hlýða og fá verðlaun (obedece y recibe recompensa). Cap.12: NIðUR, Á JÖRðU, HLŸDDU MÉR (abajo, al suelo, obedéceme) — comando de sometimiento total; Brenna, sársauki (arde, dolor) — castigo de quemadura directa a través del collar. [Contexto: el galdr histórico nórdico era el canto o recitación de runas mágicas —opuesto al seiðr, era más público y menos estigmatizado. En Vigríð Gwynne lo convierte en lengua de control sobre la herencia divina.]',
        star: 'Saber esta lengua es poder absoluto sobre los Tainted. ¿Cuántos la conocen realmente?'
    },
    {
        id: 'glornir', label: 'Glornir', group: 'VARG', type: 'Personaje — Jefe', desc: 'Jefe de los Hermanos de Sangre. Calvo, barba gris trenzada. Long-axe como bastón. Oro y plata en brazos y cuello. Habla lengua Galdur para controlar collares. Rápido como el rayo. Epítetos: Rompe-Escudos y Dador-de-Oro.',
        star: ''
    },
    {
        id: 'gods-bones', label: 'Huesos de los Dioses', group: 'MAGIA', type: 'Objeto — Magia', desc: 'Los huesos de los dioses muertos (Snaka, Orna, Berser, Ulfrir) son objetos de gran poder. Se usan para protección (knuckle-bone en umbrales), como fuente de poder para magia (asta de trol para Kráka), y como símbolos de autoridad (alas de Orna en la fortaleza de Helka). El poder específico que otorgan varía según el dios y el contexto.',
        star: ''
    },
    {
        id: 'gravka', label: 'Gravka', group: 'LUGAR', type: 'Lugar — Capital Imperial', desc: 'Gran ciudad capital del Imperio de Iskidan. Sede del Emperador Kirill. Lejana al este, más allá del mar. Representa el mundo exterior a Vigríð.',
        star: ''
    },
    {
        id: 'grend', label: 'Grend', group: 'ELVAR', type: 'Personaje — Guardián', desc: 'Guerrero mayor, barba gris. Siempre junto a Elvar. No es su padre (él lo niega). Lacónico. Salta al mar helado tras Elvar. Le sirve gachas y le cubre los turnos de guardia.',
        star: '¿Qué le debe a Elvar para protegerla así? La relación no está explicada.'
    },
    {
        id: 'gudfall', label: 'Guðfalla (Caída de Dioses)', group: 'EVENTO', type: 'Evento Histórico', desc: 'Hace ~300 años. Los hijos de Snaka se rebelaron contra su padre. La guerra de los dioses rompió el mundo: continentes hundidos, mares desbordados. Los vaesen escaparon de su foso. El mundo nunca se recuperó.',
        star: 'Todo el mundo actual es consecuencia directa de este evento.'
    },
    {
        id: 'gudvarr', label: 'Guðvarr', group: 'ORKA', type: 'Personaje — Antagonista menor', desc: 'Sobrino de Jarl Sigrún. Drengr. Pelo negro aceitado, espada al cinto, gota permanente de moco. Vanidoso, arrogante, con algo de técnica de combate pero sin experiencia real en batalla. Cap.12: Perdió el holmganga ante Virk —le seccionaron los músculos del hombro derecho—. Se rindió pero luego insultó a Virk tras el duelo, provocando que este intentara matarlo. Se salvó gracias a la intervención de la thrall. Sigue siendo niðing moral aunque sobrevivió.',
        star: '★ Humillado públicamente pero vivo. Tiene una deuda no resuelta con Mord y Lif. Su arrogancia postduelo dejó claro que no ha aprendido nada.'
    },
    {
        id: 'guerrero-oscuro', label: 'Guerrero Desconocido', group: 'VARG', type: 'Personaje — ¿Misterio?', desc: 'Cap.11. Delgado, estatura media. Cabeza rapada excepto una larga trenza negra brillante como azabache. Piel oscura (único así entre los Hermanos de tez clara). Kaftan gris de lana abrochado al centro, calzones anchos con vendas ajustadas tobillo-rodilla. Escudo negro con salpicaduras rojas. Espada curva de un solo filo. Sparring con Glornir. Varg lo ve familiar, sin saber por qué.',
        star: '★★★ Sin nombre. Sin presentación. Varg lo reconoce de algo pero no sabe de qué. Origen posiblemente en Iskidan (piel oscura, kaftan, espada curva = estética del sur). Presencia muy deliberada del autor.'
    },
    {
        id: 'guest-right', label: 'Derecho de Huésped', group: 'NORSE', type: 'Ley — Hospitalidad', desc: 'Obligación sagrada de proteger y alimentar a huéspedes bajo tu techo. Romperlo es deshonra grave. Jarl Logur hospeda a los Hermanos de Sangre en su sala. Agnar ofrece gachas a Berak prisionero (mínima cortesía incluso a enemigos). [Histórico: la hospitalidad (gestrisni) era ley sagrada nórdica. Matar a un huésped bajo tu techo era uno de los peores crímenes. Las sagas están llenas de traiciones que violan guest-right. Gwynne lo preserva como código social vigente.]',
        star: 'Logur hospeda a Hermanos de Sangre — vínculo de protección mutua. Incluso prisioneros como Berak reciben comida: mínimo de humanidad requerido.'
    },
    {
        id: 'haraldurson', label: 'Familia Haraldurson', group: 'TRAMA', type: 'Personaje — Víctimas', desc: 'Familia de Howbyr (10–12 leguas al norte de Fellur). Perdieron tres hijos (dos hijas y un hijo) en el mismo patrón de robos que el caso de Harek. Segundo caso confirmado del patrón que Virk está documentando.',
        star: ''
    },
    {
        id: 'harek', label: 'Harek (†?)', group: 'TRAMA', type: 'Personaje — Desaparecido', desc: 'Hijo de Asgrim e Idrun. Amigo de Breca. Desaparecido cuando sus padres fueron asesinados en Cap. 1. Los asesinos huyeron en barcas por el río Skarpain.',
        star: 'Primer eslabón del patrón de robos de niños.'
    },
    {
        id: 'helka', label: 'Reina Helka', group: 'FACCION', type: 'Facción — Poder político', desc: 'Auto-proclamada reina de media Vigríð. Sede: Darl. Moneda propia. Fortaleza coronada con huesos de Orna. Rival: Jarl Störr.',
        star: ''
    },
    {
        id: 'helka-poder', label: 'Expansión de Helka', group: 'TRAMA', type: 'Trama — Política', desc: 'Helka absorbe los dominios de los jarls menores. Sigrún juró. Störr es su rival al noroeste. Orka advierte en el Althing: habrá hird-offering (leva de guerreros). La guerra de Vigríð se acerca.',
        star: 'El destino de Fellur está ligado al resultado de la guerra Helka-Störr.'
    },
    {
        id: 'hijo-berak', label: 'Hijo de Berak', group: 'ELVAR', type: 'Personaje — Tainted', desc: '',
        star: ''
    },
    {
        id: 'hird', label: 'Hird (Séquito)', group: 'NORSE', type: 'Institución — Militar', desc: 'Guardia personal y compañeros de armas de un jarl o señor. Vínculo de lealtad mutua: el señor da protección y riqueza, el Hird da servicio militar. Orl es Hird de Leif. Los jarls tienen su propio Hird. Orka advierte en el Althing sobre "hird-offering" (leva militar obligatoria). [Histórico: el hirð era la guardia personal del rey/jarl nórdico. Vivían en su hall, comían en su mesa, luchaban a su lado. Vínculo más fuerte que simple empleo: hermandad de armas. Gwynne lo preserva como institución militar básica de Vigríð.]',
        star: '★ Orl es Hird de Leif — lealtad personal que sobrevive la muerte de Snepil. El "hird-offering" que Orka menciona es conscripción forzada: Helka exigirá guerreros a los jarls sometidos.'
    },
    {
        id: 'hird-offering', label: 'Hird-offering (Leva Militar)', group: 'NORSE', type: 'Ley — Conscripción', desc: 'Leva militar obligatoria. Los jarls deben proporcionar guerreros a su señor superior en tiempos de guerra. Orka advierte en el Althing que Helka exigirá hird-offering a Sigrún: Fellur deberá enviar hombres a la guerra de Helka contra Störr. [Histórico: el leiðangr era el sistema de leva naval/militar escandinavo. Cada región debía proporcionar barcos y hombres según su tamaño. Gwynne lo adapta como "hird-offering": tributo de guerreros que los jarls vasallos deben a su reina.]',
        star: '★★★ Orka advierte que esto viene — Fellur perderá sus hombres a la guerra de Helka. Impacto directo en familias: padres, hijos, esposos conscriptados.'
    },
    {
        id: 'hjalmar', label: 'Hjálmr (Yelmo)', group: 'NORSE', type: 'Armadura — Cabeza', desc: 'Yelmo de hierro. Diseños: cónico simple, con protección nasal, con protección facial completa (más raro). Muy caro: solo élite guerrera. La mayoría luchaba sin yelmo o con gorro de cuero. [Histórico: los yelmos vikingos eran raros y caros. NO tenían cuernos (mito moderno). Diseño cónico para desviar golpes. Encontrados en tumbas de élite. Gwynne probablemente los reserva para jarls y campeones.]',
        star: 'Aún no se describe yelmo específicamente en los POV, pero Sigrún, Agnar y Glornir probablemente los usan en batalla.'
    },
    {
        id: 'holmgang-rules', label: 'Reglas del Holmganga', group: 'NORSE', type: 'Ritual — Código', desc: 'Código estricto del duelo: cuadrado marcado con varas de avellano; un pie fuera = rendición; dos pies fuera = huida; tres escudos destruidos = derrota; se puede pactar primera herida, rendición o muerte. Atacar tras rendición rompe el código y justifica ejecución inmediata. Virk violó esto y fue ejecutado por la thrall de Sigrún. [Histórico: el hólmganga tenía reglas precisas documentadas en sagas. El espacio sagrado (vǫllr) estaba delimitado. Romper las reglas era deshonra absoluta. Gwynne preserva esto: las reglas son ley, no sugerencia.]',
        star: '★★ Virk ganó el duelo pero perdió su vida al romper las reglas. Las leyes del holmganga están por encima de la victoria: el honor importa más que ganar.'
    },
    {
        id: 'holmganga', label: 'Holmganga', group: 'NORSE', type: 'Ritual — Duelo', desc: 'Duelo legal en isla o terreno delimitado. Reglas estrictas: rendirse es válido, pero atacar tras la rendición rompe el código y justifica ejecución. Virk violó esto contra Guðvarr en Cap.12. [Histórico: el hólmganga era un duelo formal nórdico para resolver disputas de honor, herencias o insultos. Se realizaba en una isla (hólmr) o en un espacio marcado con mantos. Gwynne lo preserva como institución legal vigente en Vigríð.]',
        star: '★ El holmganga de Cap.12 muestra que las leyes nórdicas antiguas siguen vivas en Vigríð. Romperlas tiene consecuencias letales.'
    },
    {
        id: 'holmganga-event', label: 'Holmganga', group: 'EVENTO', type: 'Evento', desc: 'Guðvarr reta a duelo a Virk. Virk acepta y ganó el duelo —le hundió el hacha en el hombro a Guðvarr, seccionándole los músculos—. Pero Virk alzó el arma para matar tras la rendición, violando las reglas. La thrall de Sigrún intervino y lo mató. Reglas del holmganga: cuadrado marcado con varas de avellano; un pie fuera = rendición; dos pies fuera = huida; tres escudos destruidos = derrota; se puede pactar primera herida, rendición o muerte. «Holmganga» significa literalmente «ir a la isla».',
        star: 'Virk murió. Sus hijos Mord y Lif presenciaron todo. La thrall de Sigrún desbordó el control y mordió el cadáver — Sigrún misma parece incómoda con lo sucedido. Thorkel recibió un corte de seax.'
    },
    {
        id: 'howbyr', label: 'Howbyr', group: 'LUGAR', type: 'Lugar — Villa', desc: 'Villa a 10–12 leguas al norte de Fellur. Domicilio de los Haraldurson, que perdieron tres hijos. Segundo nodo confirmado del patrón geográfico de robos.',
        star: ''
    },
    {
        id: 'hueso-dios-fellur', label: 'Nudillo de Dios (Fellur)', group: 'VAESEN', type: 'Objeto Mágico — Reliquia', desc: 'Nudillo de un dios muerto clavado en el travesaño de la puerta de Fellur. Mantiene los vaesen fuera del pueblo. Breca reaccionó visiblemente al pasar junto a él. Los huesos de los dioses muertos conservan poder residual —incluso fragmentos pequeños son efectivos.',
        star: '★★ La reacción de Breca al hueso de dios es una de las señales más tempranas de su posible sangre Tainted. Un niño normal no debería sentir nada.'
    },
    {
        id: 'hundur', label: 'Hundur', group: 'ELVAR', type: 'Personaje — Thrall Tainted', desc: 'Thrall de Terrores de la batalla con olfato sobrehumano de sabueso. Camina encorvado con ojos hundidos como pozos negros. Controlado por Sighvat con cadena de hierro. El collar se activa con la palabra Galdur «Hlýða» (obedece). Fue clave para rastrear a Berak en Iskalt.',
        star: '¿Qué linaje divino confiere el olfato sobrehumano? Paralelo con los dos sabuesos de la mujer de cabello plateado en los Hermanos.'
    },
    {
        id: 'idrun', label: 'Idrun (†)', group: 'ORKA', type: 'Personaje — Muerta', desc: 'Esposa de Asgrim. Encontrada crucificada en el portón del steading con el vientre abierto (Cap.1). La brutalidad del acto sugiere un mensaje deliberado o una ejecución ritual. Su hijo Harek desapareció.',
        star: '★ La forma de su muerte —crucificada, vientre abierto— podría ser un rito, no solo un asesinato. ¿A qué tradición pertenece?'
    },
    {
        id: 'iskalt', label: 'Isla de Iskalt', group: 'LUGAR', type: 'Lugar — Isla', desc: 'Isla volcánica al norte con montaña de fuego y venas de lava. Clima ártico extremo. Villa de pescadores en la costa. Los terremotos aquí son atribuidos a Lik-Rifa forcejeando bajo el Árbol de Ceniza.',
        star: 'El volcán tiembla. Lik-Rifa está activa.'
    },
    {
        id: 'iskidan', label: 'Iskidan', group: 'LUGAR', type: 'Lugar — Imperio Lejano', desc: 'Imperio lejano gobernado por el Emperador Kirill desde la gran ciudad de Gravka. Acusado de uso masivo de thralls y de sacrificar niños —aunque Sigrun lo descarta. Posible amenaza exterior o conexión con los misterios de Vigríð.',
        star: ''
    },
    {
        id: 'islas-hielo', label: 'Islas del Hielo', group: 'LUGAR', type: 'Lugar — Ártico', desc: 'Al norte de Iskalt. En primavera el hielo se rompe y deriva hacia el sur, afectando la navegación. Hogar de las Arañas del Hielo y vaesen del ártico. Frontera natural del mundo conocido.',
        star: ''
    },
    {
        id: 'jarl', label: 'Jarl (Noble)', group: 'NORSE', type: 'Clase Social', desc: 'Noble, señor de tierras. Controla villas, recauda tributos, administra justicia. Sigrún (Fellur), Störr (Snakavik), Logur (Liga). Por encima: reinas como Helka. [Histórico: jarl era título de nobleza escandinava, equivalente a conde. Gwynne los convierte en señores feudales de Vigríð, compitiendo por poder en la era post-Guðfalla.]',
        star: 'Los jarls son el tablero político de Vigríð. Helka los está unificando bajo su corona.'
    },
    {
        id: 'jarl-hrut', label: 'Jarl Hrut (†)', group: 'ELVAR', type: 'Personaje — Muerto', desc: 'Barba trenzada múltiples veces con anillos de hueso. Vestido en pieles y piel de foca. Empuñadura de cuchillo tallada en marfil de morsa. Asesinado sin dudar por Agnar cuando se interpuso al desembarco de Terrores de la batalla.',
        star: ''
    },
    {
        id: 'jarl-logur', label: 'Jarl Logur', group: 'FACCION', type: 'Personaje — Política', desc: 'Aloja a los Hermanos de Sangre en su sala de festín. Sus escudos son azules y sus velas rojas. El juicio de Varg tiene lugar en su sala.',
        star: ''
    },
    {
        id: 'jarl-orlyg', label: 'Jarl Orlyg', group: 'ORKA', type: 'Personaje — Política', desc: 'Jarl de Svelgarth, al este de Vigríð. Presente en el contexto político del Althing. Otro jarl menor cuya posición ante la expansión de Helka y Störr está por definirse.',
        star: ''
    },
    {
        id: 'jokul', label: 'Jökul', group: 'VARG', type: 'Personaje — Hermanos', desc: 'Herrero de los Hermanos de Sangre. Forjó la protección de hierro en la entrepierna de Einar Medio-Trol, protección que se hizo famosa y objeto de burlas. Artesano vital para el equipo de la compañía.',
        star: ''
    },
    {
        id: 'karl', label: 'Karl (Hombre Libre)', group: 'NORSE', type: 'Clase Social', desc: 'Hombre libre. Granjeros, artesanos, comerciantes. Pueden portar armas, poseer tierra, hablar en el Althing. Orka y Thorkel viven como karls en las colinas. [Histórico: los karlar eran la clase media nórdica: libres pero no nobles. Gwynne preserva la estructura social tripartita (thrall-karl-jarl) como base de Vigríð.]',
        star: 'Orka y Thorkel eligieron vida de karls aislados tras dejar su pasado. Libertad comprada con sangre.'
    },
    {
        id: 'karvi', label: 'Karvi', group: 'NORSE', type: 'Embarcación — Versátil', desc: 'Barco mediano (13-16 pares de remos). Más pequeño que drakkar, más grande que faering. Versátil: guerra costera, comercio regional, transporte. El "todoterreno" nórdico. [Histórico: el karvi era el barco más común en Escandinavia. Suficientemente grande para travesías costeras pero lo bastante pequeño para ser manejado por tripulaciones modestas. Ideal para jarls menores y comerciantes prósperos.]',
        star: 'Probable embarcación de jarls menores como Sigrún para patrullar fiordos y cobrar tributos.'
    },
    {
        id: 'kennings', label: 'Kennings / Epítetos', group: 'NORSE', type: 'Lenguaje — Poético', desc: 'Nombres poéticos descriptivos. Glornir "Rompe-Escudos" y "Dador-de-Oro". Einar "Medio-Trol". Svik "Pelo-Enredado" (irónico). Los epítetos describen hazañas, características, o son irónicos. [Histórico: los kennings eran metáforas poéticas nórdicas complejas ("camino de la ballena" = mar). Los epítetos (viðrnefni) eran más simples: apodos descriptivos. Gwynne usa epítetos para caracterización rápida.]',
        star: '★ Los epítetos revelan reputación: "Rompe-Escudos" = guerrero temible, "Dador-de-Oro" = líder generoso. Svik "Pelo-Enredado" es irónico — su pelo está perfectamente trenzado.'
    },
    {
        id: 'kergarth', label: 'Kergarth', group: 'LUGAR', type: 'Lugar — Villa', desc: 'Villa a 6 leguas al este de Fellur. Una familia entera fue asesinada y sus hijos desaparecieron. Tercer caso conocido del patrón de robos. El patrón se extiende por un radio de al menos 12 leguas.',
        star: '★ Los tres casos (Fellur, Howbyr, Kergarth) forman un triángulo geográfico. ¿Hacia dónde convergen?'
    },
    {
        id: 'knarr', label: 'Knarr', group: 'NORSE', type: 'Embarcación — Comercio', desc: 'Barco mercante robusto. Más ancho y profundo que el drakkar, diseñado para carga (hasta 24 toneladas). Menos remos, más dependiente de vela. Travesías largas: comercio, colonización, transporte de ganado. Tripulación pequeña (10-15). [Histórico: el knarr era el caballo de batalla del comercio nórdico. Cruzaba el Atlántico Norte llevando colonos a Islandia, Groenlandia y Vinland. Más lento que el drakkar pero mucho más práctico para comercio. Gwynne probablemente los usa para el comercio entre ciudades de Vigríð.]',
        star: 'Aún no aparece knarr nombrado explícitamente en la narrativa, pero el comercio entre Liga, Fellur y otras ciudades requiere este tipo de barco.'
    },
    {
        id: 'kraka', label: 'Kráka', group: 'ELVAR', type: 'Personaje — Thrall Tainted', desc: 'Thrall Tainted de Terrores de la batalla. Cabello negro como un cuervo, tatuajes azules en mandíbula y garganta (similar a Vol), cara gris agotada. Canta magia Seiðr para proteger el casco de serpientes marinas. El canto la destruye físicamente. Maltratada por los guardias. Agnar le dio un asta de trol como fuente de poder para el viaje de regreso',
        star: 'El uso de Seiðr la desgasta hasta la muerte lenta. Agnar le da un asta de trol como "combustible".'
    },
    {
        id: 'langsoex', label: 'Langsax / Espada', group: 'NORSE', type: 'Arma — Espada', desc: 'Espada de doble filo, 70-90cm. Arma de estatus: cara de forjar, se heredan, tienen nombres. Guðvarr lleva espada al cinto (símbolo de su rango). Svik lleva espada. El guerrero oscuro usa espada curva de un filo (estilo Iskidan). [Histórico: las espadas vikingas eran objetos de prestigio. Acero de patrón soldado, empuñaduras decoradas, nombres propios ("Mordedora de Piernas", "Rompehielos"). Solo guerreros ricos las poseían. Gwynne las reserva para personajes de élite.]',
        star: 'Guðvarr lleva espada pero no sabe usarla bien. Contraste con guerreros reales como Glornir. La espada curva del guerrero oscuro confirma origen extranjero.'
    },
    {
        id: 'leif', label: 'Leif Kolskeggson', group: 'VARG', type: 'Personaje — Antagonista', desc: 'Hijo de Snepil Kolskegg. Cicatriz en el labio. Quiso esclavizar a Varg y amputarle la mano como castigo. Derrotado por los Hermanos en Cap. 4. En Cap.11 se revela que hirió a Varg con una lanza antes de huir.',
        star: '¿Volverá Leif con más recursos? Tiene motivo de venganza y a Orl como Hird leal.'
    },
    {
        id: 'liga', label: 'Liga', group: 'LUGAR', type: 'Lugar — Ciudad', desc: 'Ciudad mercado y puerto al pie del fiordo. Sala del Jarl Logur en la colina. Plaza de combate donde Varg luchó contra Einar. Mercado con vaesen disecados, marfil, moneda Helka.',
        star: ''
    },
    {
        id: 'lik-rifa-amenaza', label: 'Lik-Rifa Despertando', group: 'TRAMA', type: 'Trama — Cósmica', desc: 'Los terremotos de Iskalt y las venas de lava parpadeando sugieren que la diosa-dragón Lik-Rifa no está muerta, sino activa bajo el Árbol de Ceniza. Grend lo afirma; Elvar es escéptica.',
        star: '★★★ Si Lik-Rifa rompe sus cadenas, todo cambia. ¿Alguien la está ayudando a escapar?'
    },
    {
        id: 'likrafa', label: 'Lik-Rifa (Diosa-Dragón)', group: 'DIOS', type: 'Dios — ¿Vivo?', desc: 'La diosa-dragón, hija de Snaka. NO murió en el Guðfalla: fue encadenada bajo Oskutreð, el Árbol de Ceniza. Habita Vergelmir, cámara subterránea por donde pasan los guerreros muertos. Los terremotos de Iskalt sugieren que sigue viva.',
        star: '★★★ LA amenaza cósmica. Si escapa, el equilibrio del mundo colapsa. Los guerreros mueren con armas para luchar contra ella en Vergelmir.'
    },
    {
        id: 'mead-hall', label: 'Mead Hall / Longhouse', group: 'NORSE', type: 'Vida Diaria — Arquitectura', desc: 'Centro social y político. Sala larga con hogar central, bancos a los lados. El jarl preside desde el asiento alto. Aquí se festeja, se distribuyen recompensas, se toman decisiones. Fellur tiene longhouse central. Jarl Logur hospeda a Hermanos de Sangre en su sala. [Histórico: el hall (hǫll) era corazón de la comunidad nórdica. Símbolo de poder del jarl. Quemar el hall de un enemigo era insulto máximo. Gwynne los preserva como centros de poder político.]',
        star: 'La sala de Logur es donde Varg es juzgado — espacio público para justicia. El longhouse de Fellur es donde Sigrún gobierna.'
    },
    {
        id: 'mord-lif', label: 'Mord y Lif', group: 'ORKA', type: 'Personaje — Huérfanos', desc: 'Hijos de Virk. Mord es el mayor, Lif el menor. Cap.12: presenciaron la muerte brutal de su padre en el holmganga. Mord exigió justicia a Jarl Sigrún; Lif llamó niðing a Guðvarr con rabia. Sigrún desestimó su reclamo. Thorkel los ayudó a envolver el cuerpo. Marchan cargando el cuerpo de su padre.',
        star: '★ Dos jóvenes con motivo de venganza contra Guðvarr y la jarl. Con Virk muerto, el patrón de robos de niños que él documentaba queda sin quien lo persiga —¿lo asumirán ellos?'
    },
    {
        id: 'mujer-berak', label: 'Mujer de Berak', group: 'ELVAR', type: 'Personaje — Tainted', desc: 'Rubia, ojos gris-azul pálido. Tatuajes espirales bajo la ropa. Arrojó un objeto (¿pergamino/tablilla?) al lago de lava para destruirlo antes de ser capturada. Controló la serpiente marina con canto Seiðr. Sangre de Snaka.',
        star: '¿Qué destruyó antes de ser capturada? Acto deliberado para que no caiga en manos de Agnar.'
    },
    {
        id: 'mujer-plateada', label: 'Mujer de Cabello Plateado', group: 'VARG', type: 'Personaje — Hermanos', desc: 'Cap.11. Miembro de los Hermanos de Sangre. Cabello plateado. Sparring en el patio con un compañero. Dos sabuesos tumbados en el sol mirándola. Sin nombre aún.',
        star: '¿Tiene un rol especial? Sus dos sabuesos sugieren que puede ser rastreadora o tener habilidades Tainted de tipo Hundur.'
    },
    {
        id: 'nacken', label: 'Nacken', group: 'VAESEN', type: 'Vaesen — Agua', desc: 'Vaesen de ríos de montaña. Para ahuyentarlo, Thorkel clava un seax en la tierra: ritual de protección conocido. Peligroso en corrientes rápidas de alta montaña. Su existencia confirma que el conocimiento de vaesen y cómo contenerlos es cultura común en Vigríð.',
        star: ''
    },
    {
        id: 'niding', label: 'Níðing', group: 'NORSE', type: 'Concepto — Deshonra', desc: 'El peor insulto en la cultura nórdica: cobarde sin honor. Guðvarr llamó níðing a Virk tras perder el holmganga, provocando que Virk intentara matarlo. Ser níðing es estar socialmente muerto. [Histórico: níð era la deshonra absoluta en la sociedad nórdica. Acusar a alguien de níðing (cobardía, homosexualidad pasiva, falta de honor) podía justificar violencia legal. Gwynne lo usa como detonante de conflicto en Cap.12.]',
        star: '★★ Guðvarr usó la palabra como arma tras perder. Virk prefirió morir antes que aceptar el insulto.'
    },
    {
        id: 'ninos-robados', label: 'Robos de Niños', group: 'TRAMA', type: 'Trama — Abierta', desc: 'Patrón organizado: Harek (colinas de Fellur), 3 hijos de los Haraldurson (Howbyr, 10-12 leguas norte), varios hijos de familia en Kergarth (6 leguas este). Huyen por ríos en barcas. Orka sospecha thralls secuestrados.',
        star: '★★★ Trama central del arco de Orka. ¿Quién los está robando y por qué? ¿Destino: thralls, sacrificios (Iskidan), algo peor?'
    },
    {
        id: 'oath-rock', label: 'Roca del Juramento', group: 'LUGAR', type: 'Lugar — Althing', desc: 'Islote en el fiordo de Fellur. Monolito de runas destruido a martillazos (adorar a los dioses es ilegal). Aquí se celebra el Althing de Cap. 10.',
        star: ''
    },
    {
        id: 'orka', label: 'Orka', group: 'ORKA', type: 'POV — Personaje', desc: 'Mujer alta (más que Guðvarr) y rubia, ojos gris-verde. Vive aislada con sun familia. Flashbacks violentos, episodios de rabia que casi la ciegan. Capturó a Spert mediante vínculo de sangre. Exguerrera con un pasado que ella intenta olvidar.',
        star: 'Su ira casi la desborda ante Guðvarr. Sabe controlar vaesen. ¿Qué batalla dejó esas cicatrices invisibles?'
    },
    {
        id: 'orl', label: 'Orl', group: 'VARG', type: 'Personaje — Antagonista menor', desc: 'Viejo de cabello gris lacio. Lleva collar de thrall. Compañero personal de armas (Hird) de Leif Kolskeggson. Tiene una perra/hound. Cuida al perro quemado por la hoguera de Varg en la granja de Kolskegg, revelando así la conexión de Leif con el lugar.',
        star: ''
    },
    {
        id: 'orna', label: 'Orna (Dios-Águila)', group: 'DIOS', type: 'Dios Muerto', desc: 'El dios-águila, hijo de Snaka. Muerto en el Guðfalla. Sus huesos (incluyendo sus alas) están en la fortaleza de la Reina Helka en Darl, como símbolo de poder.',
        star: 'Helka gobierna bajo las alas de un dios muerto. ¿Solo símbolo, o hay poder real en esos huesos?'
    },
    {
        id: 'oskutred', label: 'Oskutreð (Árbol de Ceniza)', group: 'LUGAR', type: 'Lugar — Mítico', desc: 'El gran árbol fresno bajo el cual Lik-Rifa fue encadenada. Vergelmir, su cámara subterránea, es el paso del alma de los guerreros muertos. Por esto los guerreros mueren con armas en la mano.',
        star: ''
    },
    {
        id: 'outlawry', label: 'Proscripción (Outlawry)', group: 'NORSE', type: 'Ley — Castigo', desc: 'Exilio legal. El proscrito pierde todos los derechos: cualquiera puede matarlo sin consecuencias, no puede recibir ayuda, debe abandonar el territorio. Peor que muerte: muerte social. Varg es técnicamente proscrito tras matar a Snepil (aunque nadie lo sabe excepto él). [Histórico: el útlagr (outlaw) era castigo severo nórdico. Dos tipos: menor (3 años) y mayor (permanente). El proscrito era "hombre lobo" — fuera de la ley humana. Gwynne lo implica en la huida de Varg.]',
        star: '★ Varg huye como proscrito de facto. Si Leif probara que mató a Snepil, Varg sería declarado útlagr formalmente — cazado legalmente por todos.'
    },
    {
        id: 'ox', label: 'Öx (Hacha)', group: 'NORSE', type: 'Arma — Hacha', desc: 'Hacha de una o dos manos. Herramienta y arma. Hacha de mano (handöx): combate con escudo. Hacha larga (langöx): dos manos, alcance largo, golpes devastadores. Thorkel usa hacha de mango largo "tan alto como él" con hoja "con barba" (skeggöx). Virk usó hacha de granjero en holmganga. Glornir porta long-axe. [Histórico: el hacha era el arma nórdica icónica. Más barata que espada, igual de letal. La skeggöx (hacha barbada) tenía filo extendido hacia abajo para enganchar escudos. Gwynne la usa como arma de trabajadores convertidos en guerreros.]',
        star: '★★ Thorkel usa hacha larga con hoja barbada — arma de campeón. Virk (pescador) usó hacha de granjero y casi mata a Guðvarr. El hacha es el gran ecualizador social.'
    },
    {
        id: 'patronymics', label: 'Patronímicos', group: 'NORSE', type: 'Lenguaje — Nombres', desc: 'Nombre basado en el padre: -son (hijo de) o -dóttir (hija de). Thorkel Ulfsson (hijo de Ulf). Berak Bjornasson (hijo de Bjorn). Leif Kolskeggson (hijo de Kolskegg/Snepil). Sistema de identificación familiar. [Histórico: los nórdicos no tenían apellidos hereditarios. Cada generación tomaba el nombre del padre como patronímico. Gwynne lo preserva fielmente en Vigríð.]',
        star: 'Thorkel Ulfsson — "hijo de Ulf/lobo". ¿Coincidencia que conozca el término "Ulfrir-kin"? Su nombre puede ocultar su linaje.'
    },
    {
        id: 'rio-skarpain', label: 'Río Skarpain', group: 'LUGAR', type: 'Lugar — Geografía', desc: 'Río donde Thorkel rastreó a los asesinos de Asgrim e Idrun. Tres barcas habían atracado allí: los raptores huyeron por agua tras la masacre. Nexo fluvial entre las villas del norte y el posible destino de los niños robados.',
        star: '★ Los raptores viajan por ríos, no por tierra. Organización logística detrás del patrón de robos.'
    },
    {
        id: 'rokia', label: 'Røkia', group: 'VARG', type: 'Personaje — Hermanos', desc: 'Cap.11. Guerrera alta, rubia, mirada de halcón predador. Lleva escudo negro (Hermanos) a la espalda. Por órdenes de Glornir, entrena a Varg en combate con escudo. Directa, fría, poco tolerante con la incompetencia. Llama a Svik "pavo real engreído".',
        star: '¿Por qué le fue asignada a Varg específicamente? Su entrenamiento es metódico y revelador de sus habilidades.'
    },
    {
        id: 'root', label: 'La Sombra de los Dioses', group: 'CENTER', type: 'Obra', desc: 'Libro I de la Trilogía Bloodsworn. John Gwynne. Año 297 del Friðaröld. Tres líneas narrativas convergen en un mundo roto por la guerra de los dioses.', star: ''
    },

    {
        id: 'runa-ward', label: 'Runa Warding', group: 'OBJETO', type: 'Magia — Protección', desc: 'Runas talladas en puertas/umbrales. Repelen vaesen menores. No detienen a seres de gran poder ni a humanos. Reforzadas con knuckle-bone de dios muerto (Fellur, Asgrim). Confirma que Asgrim no fue atacado por vaesen.',
        star: ''
    },
    {
        id: 'seax', label: 'Seax', group: 'NORSE', type: 'Arma — Cuchillo', desc: 'Cuchillo/daga de un solo filo, 20-75cm. Herramienta y arma. Todo hombre libre lleva uno. Combate cercano, trabajo diario, símbolo de estatus de hombre libre. La thrall-guerrera de Sigrún usa dos seaxes. Thorkel clava uno en tierra para ahuyentar al Nacken. [Histórico: el seax era el cuchillo universal germánico/nórdico. Desde utensilio hasta arma de guerra. El nombre "sajón" (Saxon) viene de seax. Gwynne lo usa como marcador cultural: llevar seax = hombre libre.]',
        star: '★★ La thrall de Sigrún mató a Virk con dos seaxes. Thorkel usa el suyo ritualmente contra vaesen. Símbolo de libertad que los thralls no pueden portar.'
    },
    {
        id: 'second-combat', label: 'Segundo en Combate', group: 'NORSE', type: 'Combate — Rol', desc: 'Testigo y consejero en duelos formales. Arild fue segundo de Guðvarr en el holmganga — le aconsejó antes del duelo, le vendó tras la derrota. Orka fue segundo de Virk. El segundo no puede intervenir en el combate pero puede detenerlo si las reglas se rompen. [Histórico: en duelos formales nórdicos, cada combatiente tenía testigos/segundos. Su rol era garantizar que las reglas se cumplieran y que el resultado fuera reconocido legalmente. Gwynne lo preserva como parte del ritual del holmganga.]',
        star: 'Arild aconsejó a Guðvarr — ¿qué le dijo? Orka como segundo de Virk muestra que ella tiene estatus social reconocido en Fellur a pesar de vivir aislada.'
    },
    {
        id: 'seidr', label: 'Seiðr', group: 'MAGIA', type: 'Magia', desc: 'Magia de influencia, invocación y canto. El akáll invoca espíritus de muertos para interrogarlos. El canto protege de vaesen o los controla. Practicado por brujas (völva). El uso extenuante desgasta el cuerpo. Ligado frecuentemente a sangre divina. [Contexto: en la mitología nórdica histórica, el Seiðr era una práctica ritual chamánica de Freyja y Odín, usada para profecía y manipulación del destino. Las völvur viajaban entre comunidades sentadas en plataformas elevadas (seiðhjallr). En Vigríð este saber sobrevive en las thrall-brujas que los mercenarios encadenan.]',
        star: 'Las dos brujas conocidas (Vol, Kráka) son thralls encadenadas. ¿Hay Seiðr libre en Vigríð?'
    },
    {
        id: 'sighvat', label: 'Sighvat', group: 'ELVAR', type: 'Personaje — Terrores de la batalla', desc: 'Obeso, brutal, fornido. Suboficial de Terrores de la batalla. Marca el ritmo de remo con un barril. Cadenas y collares para prisioneros. Golpea a Kráka. Hundur-thrall bajo su control.',
        star: ''
    },
    {
        id: 'sigrun', label: 'Jarl Sigrún', group: 'ORKA', type: 'Personaje — Política', desc: 'Jarl de Fellur durante 8 años. Mujer alta y guerrera. Lleva torc de plata, anillos en los brazos. Convocada a Darl por la Reina Helka; allí juró lealtad de sangre. Siempre acompañada por su thrall-guerrera',
        star: 'La thrall-guerrera que la sigue es un misterio: ojos planos que hielan hasta a Orka. ¿Quién era antes de ser encadenada?'
    },
    {
        id: 'sjavarom', label: 'Sjávarorm (Serpiente Marina)', group: 'VAESEN', type: 'Vaesen — Cap.9', desc: 'Cabeza del tamaño de una cabaña, hileras de dientes, cuerpo sinuoso gris-verde. Atacó el Wave-Jarl en Cap. 9. Controlada por la mujer de Berak con canto Seiðr (sangre de Snaka).',
        star: 'Revela el poder de la mujer de Berak: sangre de Snaka controla criaturas del mar.'
    },
    {
        id: 'skald', label: 'Skald (Bardo)', group: 'NORSE', type: 'Rol Social', desc: 'Poeta y narrador oral. Preservan historia, genealogías, hazañas. Aún no aparece skald prominente en la narrativa pero la tradición oral es fuerte (Grend cuenta mitos a Elvar). [Histórico: los skalds eran poetas cortesanos escandinavos que componían en metros complejos (dróttkvætt). Gwynne aún no los ha destacado pero la cultura oral de Vigríð los implica.]',
        star: '¿Aparecerá un skald en capítulos posteriores? La tradición oral es clave para entender cómo se recuerda el Guðfalla.'
    },
    {
        id: 'skjaldborg', label: 'Skjaldborg (Muro de Escudos)', group: 'NORSE', type: 'Táctica — Formación', desc: 'Formación de combate: guerreros hombro con hombro, escudos superpuestos formando muro. Primera línea usa lanzas sobre los escudos. Táctica defensiva básica de infantería nórdica. Elvar ganó su puesto en el muro de escudos de Terrores de la batalla. Røkia entrena a Varg específicamente para combate de escudo. [Histórico: el skjaldborg ("fortaleza de escudos") era la formación estándar vikinga. Requería disciplina y entrenamiento: mantener la línea era vital. Romper el muro = derrota. Gwynne lo usa como marcador de guerreros profesionales vs. combatientes individuales.]',
        star: '★★ Elvar se ganó su lugar en el muro de escudos — máximo honor para guerrera joven. Varg entrena con Røkia para aprender esto: Hermanos de Sangre luchan en formación, no solo como individuos.'
    },
    {
        id: 'skjoldr', label: 'Skjöldr (Escudo)', group: 'NORSE', type: 'Armadura — Defensa', desc: 'Escudo redondo de madera (80-90cm diámetro), centro con umbo de hierro. Pintado con colores de facción: negro (Hermanos de Sangre), rojo (Terrores de la batalla), azul (Jarl Logur). Formación de muro de escudos (skjaldborg). Varg entrena con escudo bajo Røkia. [Histórico: el escudo era la defensa primaria vikinga. Madera de tilo o abeto, cubierta de cuero. Se rompían en batalla y se reemplazaban. El muro de escudos era la táctica de infantería nórdica básica. Gwynne lo preserva fielmente.]',
        star: '★ Los colores de escudo identifican facciones al instante. Røkia entrena a Varg específicamente en combate de escudo — habilidad fundamental para Hermanos de Sangre.'
    },
    {
        id: 'skraeling', label: 'Skraeling', group: 'VAESEN', type: 'Vaesen', desc: 'Vaesen mencionado en el mundo de Vigríð. Detalles por revelar en la historia. Parte del catálogo de criaturas liberadas en el Guðfalla.',
        star: ''
    },
    {
        id: 'skuta', label: 'Skúta', group: 'NORSE', type: 'Embarcación — Transporte', desc: 'Barco de transporte pequeño-mediano. Híbrido entre knarr y karvi. Comercio regional, transporte de pasajeros, suministros. [Histórico: término genérico para barcos de transporte en nórdico antiguo. Menos especializado que knarr o drakkar. En Vigríð serían comunes en rutas comerciales secundarias.]',
        star: 'Probable embarcación para comerciantes que visitan el mercado de Liga.'
    },
    {
        id: 'slyda', label: 'Slyda', group: 'VARG', type: 'Personaje — Liga', desc: 'Guardiana de la puerta de Liga. Mujer de cabello oscuro trenzado, cara dura y ojos fríos. Dejó pasar a Varg con el pretexto de que iba adelante de su «amo Snepil» —sin saber que Snepil ya estaba muerto.',
        star: ''
    },
    {
        id: 'snaka', label: 'Snaka', group: 'DIOS', type: 'Dios Muerto — Padre', desc: 'El dios-serpiente primordial. Padre de todos los dioses. El más grande y antiguo. Sus huesos forman las cordilleras del norte de Vigríð. Fue derrocado y muerto por sus propios hijos.',
        star: 'La mujer de Berak porta su sangre. ¿Qué otros Tainted de Snaka hay en Vigríð?'
    },
    {
        id: 'snakavik', label: 'Snakavik', group: 'LUGAR', type: 'Lugar — Ciudad del Jarl Störr', desc: 'Fortaleza del Jarl Störr al noroeste. Destino del Wave-Jarl y de Berak. Nombre: "Villa de Snaka". Störr tiene guardia personal de Berserkir-thrall.',
        star: 'Elvar reacciona emocionalmente ante este nombre. Algo personal la une a este lugar.'
    },
    {
        id: 'snekkja', label: 'Snekkja', group: 'NORSE', type: 'Embarcación — Incursión', desc: 'Barco de guerra ligero y rápido (20-30 remos). Más pequeño que drakkar pero más ágil. Ideal para incursiones rápidas, exploración, mensajería. Nombre significa "el que se desliza". [Histórico: la snekkja era el barco de incursión vikingo clásico. Más común que el drakkar (que era caro). Velocidad sobre capacidad de carga. Gwynne podría usarlas para bandidos, exploradores o mensajeros de jarls.]',
        star: 'Posible embarcación de los raptores de niños: rápida, silenciosa, perfecta para huir por ríos.'
    },
    {
        id: 'snepil', label: 'Snepil Kolskegg (†)', group: 'VARG', type: 'Personaje — Muerto', desc: 'Antiguo dueño de Varg. Asesinado por Varg en un episodio de furia roja disociativa del que Varg no recuerda nada. Tenía una granja 20 leguas al noreste de Liga, río arriba. Su muerte es el detonante de toda la huida y búsqueda de Varg. Orl era su thrall de confianza.',
        star: 'Varg mató a su amo sin recordarlo. La furia roja que borró el acto es la misma que lo hace sospechoso de sangre Tainted.'
    },
    {
        id: 'spert', label: 'Spert', group: 'ORKA', type: 'Vaesen — Guardián', desc: 'Spertus. Artrópodo segmentado con cara casi humana, aguijón, antenas, vapor negro venenoso. Capturado por Orka con vínculo de sangre. Protege el steading de otros vaesen. Irritable, posesivo de sus dientes. come papilla mezclada con la sangre y saliva de Orka cada mañana',
        star: 'Orka sabe rituales de vínculo con vaesen. Habilidad inusual para una trampera.'
    },
    {
        id: 'spertus', label: 'Spertus', group: 'VAESEN', type: 'Vaesen — Agua', desc: 'Spertus',
        star: ''
    },
    {
        id: 'spjot', label: 'Spjót (Lanza)', group: 'NORSE', type: 'Arma — Asta', desc: 'Lanza de 2-3 metros. Arma primaria de infantería nórdica. Más común que espada (más barata). Punta de hierro con aleta para evitar penetración excesiva. Arrojadiza o de empuje. Leif hirió a Varg con lanza. [Histórico: la lanza era el arma más común en ejércitos vikingos. Versátil: primera línea en muro de escudos, arma arrojadiza, caza. Odín portaba la lanza Gungnir. Gwynne la usa como arma estándar de soldados.]',
        star: 'Leif hirió a Varg con lanza antes de huir. Arma del soldado común, no del héroe — pero letal igual.'
    },
    {
        id: 'steading', label: 'Steading (Granja)', group: 'NORSE', type: 'Vida Diaria — Vivienda', desc: 'Granja autosuficiente. Casa principal, establos, almacenes, cercas. Unidad básica de vida rural. Orka y Thorkel tienen steading en las colinas. Asgrim tenía steading donde fue asesinado. [Histórico: el steading era la granja nórdica típica. Familia extendida, thralls, animales. Autosuficiencia era vital en clima duro. Gwynne lo usa como unidad social básica de Vigríð rural.]',
        star: 'Orka y Thorkel eligieron vida de steading aislado — rechazo deliberado de vida urbana/política. Asgrim murió defendiendo su steading.'
    },
    {
        id: 'storr', label: 'Jarl Störr', group: 'FACCION', type: 'Facción — Amenaza', desc: 'Jarl poderoso al noroeste. En expansión constante hacia el sur y este. Tiene guardia personal de Berserkir-thrall. Destino de Berak. Tiene algo que ver con el pasado de Elvar.',
        star: ''
    },
    {
        id: 'svelgarth', label: 'Svelgarth', group: 'LUGAR', type: 'Lugar — Ciudad', desc: 'Ciudad al este de Vigríð. Dominio del Jarl Orlyg. Mencionada en el contexto político del Althing como otro territorio que debe decidir su postura ante la expansión de Helka.',
        star: ''
    },
    {
        id: 'svik', label: 'Svik Hrulfsson', group: 'VARG', type: 'Personaje — Hermanos', desc: 'Pelo rojo trenzado, apuesto de barba aceitada. Túnica verde de espiga de trigo, anillos de plata enrollados en los brazos, torc de plata retorcida con dos cabezas de serpiente en los extremos. Apodo: Pelo-Enredado (irónico). Sarcástico, cuidó a Varg 6 días durante la fiebre. Reclutador/negociador.',
        star: ''
    },
    {
        id: 'tainted', label: 'Tainted', group: 'COSMO', type: 'Facción — Perseguidos', desc: 'Descendientes de los dioses muertos. Portadores de poderes heredados. Perseguidos y cazados desde el Guðfalla. Controlados con collares de hierro activados por lengua Galdur. Vendidos a jarls poderosos.',
        star: '¿Varg tiene sangre Tainted? ¿Y Breca? Los dos protagonistas muestran señales.'
    },
    {
        id: 'tennur', label: 'Tennur', group: 'VAESEN', type: 'Criatura', desc: 'A los Tennur les gustan los dientes y en manada son letales',
        star: ''
    },
    {
        id: 'thorkel', label: 'Thorkel Ulfsson', group: 'ORKA', type: 'Personaje — Orka', desc: 'Grande como un peñasco. Barba trenzada con cicatriz de mejilla a mandíbula. Ex-thrall: de joven llevó collar de hierro y tuvo la espalda abierta a latigazos —igual que Varg. El mejor rastreador. Elige mirar hacia adelante en vez de al pasado. Profundamente amoroso con Orka y Breca. Su arma principal es un hacha de mango largo (tan alto como él, con hoja "con barba"). Viste capa de lobo.',
        star: '★★ Ex-thrall con espalda marcada a latigazos. Cap.12: Conoce el término «Ulfrir-kin» —¿cómo? Pateó a la thrall-lobo con tal fuerza que la hizo volar metros. Recibió un corte de seax («un rasguño», según él). Su pasado esconde más de lo que dice.'
    },
    {
        id: 'thrall', label: 'Thrall (Esclavo)', group: 'NORSE', type: 'Clase Social', desc: 'Esclavo. Collar de hierro como símbolo. Sin derechos legales. Varg y Thorkel fueron thralls. Los Tainted son esclavizados sistemáticamente. [Histórico: los þræll eran la clase más baja en la sociedad nórdica: prisioneros de guerra, deudores, hijos de esclavos. Gwynne expande esto: en Vigríð los Tainted son thralls por ley, controlados con collares mágicos.]',
        star: '★★★ La esclavitud es institución central en Vigríð. Los tres POV tienen conexión directa con ella: Varg y Thorkel ex-thralls, Orka usa thrall-vaesen.'
    },
    {
        id: 'thrall-sigrun', label: 'Thrall-Guerrera de Sigrún (Ulfrir-kin)', group: 'ORKA', type: 'Personaje — Tainted (Lobo)', desc: 'Sin nombre revelado. Mató a Virk con sus dos seaxes en un frenesí bestial; le mordió la cara antes de ser detenida. Ojos ambarinos en combate, dientes que se agudizan, fuerza para saltar varios metros. Thorkel la identifica como «Ulfrir-kin» —sangre del dios-lobo Ulfrir—. Sigrún usa «Brenna, sársauki» para doblegarla; incluso con el collar ardiendo, la thrall desafía hasta que el dolor es insoportable. Al retirarse Orka, la thrall lame la sangre de Virk de su seax con ojos aún ambarinos.',
        star: '★★★ CONFIRMADA como Tainted de linaje del dios-lobo Ulfrir. Su transformación es tan o más salvaje que la de Berak (Berser). Que Thorkel conozca el término «Ulfrir-kin» es muy significativo: ¿cómo sabe él eso? Desafía a Sigrún incluso bajo dolor del collar —¿hasta cuándo seguirá obedeciendo?'
    },
    {
        id: 'torc', label: 'Torc (Collar de Estatus)', group: 'NORSE', type: 'Símbolo — Riqueza', desc: 'Collar rígido de metal precioso (plata, oro) retorcido. Símbolo de riqueza, poder, juramentos. Sigrún lleva torc de plata. Svik lleva torc de plata retorcida con cabezas de serpiente. Agnar lleva torc de plata. Se otorgan como recompensa por servicio. [Histórico: los torcs eran joyas de estatus en culturas celtas y germánicas. En contexto nórdico, los anillos de brazo (armrings) eran más comunes, pero los torcs aparecen. Gwynne los usa como marcador visual de rango.]',
        star: '★ Torc = poder visible. Sigrún, Agnar, Svik los llevan. Contraste con Orka y Thorkel que no llevan joyas — rechazo deliberado de su pasado.'
    },
    {
        id: 'trol', label: 'Trol (bull-troll)', group: 'VAESEN', type: 'Vaesen — Cap.7', desc: 'Joven macho. Astas en el cráneo cubierto de musgo, piel escamada con musgo y liquen, colmillos de marfil, testiculos y territorios propios. Solitarios salvo en época de celo. Mató a varios guerreros de Terrores de la batalla antes de ser abatido. Sus partes (dientes, piel, testículos, corazón, hígado, uñas en polvo) se venden a buen precio.',
        star: ''
    },
    {
        id: 'trud', label: 'Trud', group: 'ELVAR', type: 'Personaje — Terrores de la batalla', desc: 'Guerrera de Terrores de la batalla. Herida de flecha en la pantorrilla durante el asalto a Iskalt. Su determinación de seguir en combate a pesar de la herida muestra el ethos de la compañía.',
        star: ''
    },
    {
        id: 'ulfrir', label: 'Ulfrir (Dios-Lobo)', group: 'DIOS', type: 'Dios Muerto — Lobo', desc: 'El dios-lobo, hijo de Snaka. Muerto en el Guðfalla. Sus descendientes son los Ulfrir-kin: Tainted con transformación parcial de lobo —ojos ambarinos, dientes que se agudizan, fuerza y velocidad bestiales, instinto depredador que supera el raciocinio—. La thrall-guerrera de Sigrún porta su sangre. [En la mitología nórdica real, los lobos Fenrir, Sköll y Háti son hijos del dios Loki, no de Odín. Gwynne reinterpreta la figura del lobo divino como un dios-padre independiente al igual que hizo con el oso Berser.]',
        star: '★★★ Confirmado en Cap.12. La thrall de Sigrún es Ulfrir-kin. Que Thorkel conozca el nombre exacto «Ulfrir-kin» sin titubear sugiere que tiene experiencia directa con este tipo de Tainted —o que su pasado oculto lo conecta con este mundo.'
    },
    {
        id: 'vaesen-gen', label: 'Vaesen', group: 'VAESEN', type: 'Criatura', desc: 'Criaturas del mundo subterráneo liberadas en el Guðfalla. Presencia en zonas remotas. Van desde peligrosos (trol, serpiente marina, araña de hielo) hasta domesticables (tennúr, Spertus). Los vaesen traders venden sus partes. Se vinculan con sangre a las criaturas ',
        star: ''
    },
    {
        id: 'varg', label: 'Varg', group: 'VARG', type: 'POV — Personaje', desc: 'Ex-thrall de Snepil, por ~30 inviernos en la granja de Kolskegg, lo asesino y escapo. Cabeza rapada. Hermana Frøya muerta. Episodios de furia roja disociativa que no recuerda. Boxeador formidable (100 combates para Kolskegg). Llevaba de 9–10 días huyendo antes de llegar a Liga buscando que una Seiðr-witch haga un akáll (invocación). Lleva una bolsa de cuero en el cinturón que parece contener algo relacionado con Frøya. 6 días inconsciente por fiebre de herida de lanza de Leif, ya recuperado. Recibe entrenamiento de escudo de Røkia por órdenes de Glornir.',
        star: 'Furia roja sin memoria = posible sangre Tainted. La bolsita al cinturón probablemente contiene algo de Frøya. Instintos de combate naturales que sorprenden a Røkia.'
    },
    {
        id: 'vergelmir', label: 'Vergelmir', group: 'LUGAR', type: 'Lugar — Mítico', desc: 'Cámara subterránea bajo Oskutreð. Allí Lik-Rifa está encadenada y devora almas de guerreros muertos. El camino de los muertos pasa por aquí: por eso los guerreros nórdicos son enterrados con armas en la mano, para poder combatirla. Grend afirma que los guerreros «atraviesan Vergelmir en el camino del alma».',
        star: '★★ Los terremotos de Iskalt son interpretados por Grend como Lik-Rifa forcejeando en Vergelmir. El umbral entre el mundo de los vivos y los muertos está vibrando.'
    },
    {
        id: 'vesli', label: 'Vesli', group: 'ORKA', type: 'Vaesen — Aliada de Breca', desc: 'Tennúr hembra. Pequeña, alas membranosas, dos filas de dientes, venas oscuras en piel rosada. Herida y expulsada de su manada. Breca la salvó. Juró lealtad de sangre al niño.',
        star: 'Deuda de sangre vitalicia con Breca. Un vaesen guardian que crecerá con él.'
    },
    {
        id: 'vigrið', label: 'Vigríð', group: 'LUGAR', type: 'Lugar — Continente', desc: 'La Llanura de Batalla. El continente principal. Construido literalmente sobre los huesos de Snaka. Dividido entre jarls, reinas y hombres libres. Los vaesen son una presencia constante en las zonas remotas.',
        star: ''
    },
    {
        id: 'virk', label: 'Virk (†)', group: 'ORKA', type: 'Personaje — Muerto', desc: 'Pescador y exguerrero de Fellur. Dos hijos: Mord (mayor) y Lif (menor). Ganó el holmganga contra Guðvarr (le seccionó los músculos del hombro con su hacha de granjero), pero rompió las reglas al alzar el hacha para asestar el golpe de muerte tras la rendición. La thrall-guerrera de Sigrún lo atacó y lo mató con sus dos seaxes, y le mordió la cara. Sigrún justificó la muerte como consecuencia de haber violado las normas del holmganga.',
        star: '★★ Su muerte deja a Mord y Lif huérfanos y con deseos de venganza. Los robos de niños que él documentaba quedan sin investigador. La información que tenía sobre el patrón muere con él —¿o la heredó alguien?'
    },
    {
        id: 'vol', label: 'Vol', group: 'VARG', type: 'Personaje — Seiðr', desc: 'Bruja Seiðr de los Hermanos. Tatuajes azules en mandíbula y garganta. Collar de hierro (es thrall de los Hermanos). Realiza akáll y otras magias. La razón por la que Varg buscó al grupo.',
        star: 'Thrall Seiðr: paralelo con Kráka (Terrores de la batalla). Ambas usan magia encadenadas.'
    },
    {
        id: 'warrior-braid', label: 'Trenza de Guerrero', group: 'NORSE', type: 'Símbolo — Estatus', desc: 'Trenza o mechón largo en cabeza rapada/parcialmente rapada. Símbolo de estatus guerrero. Agnar (franja central), Elvar (trenza rubia), el guerrero oscuro de los Hermanos (trenza negra). [Histórico: evidencia arqueológica sugiere que algunos guerreros vikingos llevaban el cabello rapado en los lados con mechón largo arriba. Gwynne lo convierte en marcador visual de guerreros profesionales.]',
        star: 'Marcador visual instantáneo: si lleva trenza de guerrero, es combatiente experimentado.'
    },
    {
        id: 'wave-jarl', label: 'Wave-Jarl', group: 'ELVAR', type: 'Objeto — Drakkar', desc: 'Drakkar de Terrores de la batalla. Kráka canta magia Seiðr desde él para mantener a las serpientes marinas lejos del casco. Transporta prisioneros (Berak, su familia) y cargamento de monstruo desde Iskalt a Snakavik.',
        star: ''
    },
    {
        id: 'weregild', label: 'Weregild (Precio de Sangre)', group: 'NORSE', type: 'Ley — Compensación', desc: 'Compensación monetaria por asesinato. Alternativa a la venganza de sangre. El asesino/su familia paga al clan de la víctima. Evita ciclos de venganza interminables. No mencionado explícitamente en Cap.1-12 pero implícito en el sistema legal nórdico de Vigríð. [Histórico: el wergild era fundamental en ley germánica/nórdica. Cada persona tenía un "precio" según su estatus. Pagar wergild cerraba la deuda de sangre legalmente. Gwynne probablemente lo usa off-screen.]',
        star: 'Mord y Lif no reciben weregild por Virk — Sigrún justificó la muerte como legal. Esto alimenta su sed de venganza: sin compensación, solo queda la sangre.'
    },
    {
        id: 'wyrd', label: 'Wyrd (Destino)', group: 'NORSE', type: 'Concepto — Filosofía', desc: 'Destino inevitable. Los guerreros nórdicos de Vigríð creen que su wyrd está tejido y no puede evitarse. Morir con honor es cumplir el wyrd. [Histórico: wyrd (nórdico antiguo: urðr) era el concepto nórdico del destino tejido por las Nornas. No era predestinación cristiana sino red de consecuencias. Gwynne lo preserva como filosofía de vida en Vigríð.]',
        star: 'Los personajes hablan de wyrd como fuerza real. ¿Es solo creencia o hay magia del destino en Vigríð?'
    },
];
