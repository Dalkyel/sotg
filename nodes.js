
const nodes = [
    {
        id: 'agnar', label: 'Agnar', group: 'ELVAR', type: 'Personaje — Jefe', desc: 'Jefe de Terrores de la batalla. Franja gruesa de cabello rubio en el centro de la cabeza (warrior-braid), el resto rapado, capote de oso negro, torc de plata. Carismático, valiente, implacable. Mató al Jarl Hrut sin dudar. Planea llevar a Berak al Jarl Störr en Snakavik. Ante la piedra de juramento iluminada, revela su filosofía: no caza Tainted solo por dinero. Los dioses destruyeron casi el mundo por celos, asesinatos y venganza de sangre, "nunca pueden volver a tener poder en este mundo, ni siquiera en forma de sus hijos Tainted." Sobrevive al ataque de los gusanos nocturnos; es el primero en rescatar a Elvar, aplastando y cortando wyrms.',
        star: '★★ Su motivación ideológica queda clara, no es solo mercenario, es creyente de que la herencia divina es un peligro para el mundo. Esto lo convierte en antagonista más matizado y más peligroso.'
    },
    {
        id: 'akall', label: 'Akall de Varg', group: 'TRAMA', type: 'Trama -- Abierta', desc: 'Varg necesita que Vol realice un akall para invocar el espiritu de Froya y descubrir como murio. Varg le hace la peticion directamente a Glornir y Vol en presencia de toda la compania, la primera vez que lo pide en voz alta. Vol escucha y comienza a responder afirmativamente pero Glornir la interrumpe y dice no. Glornir explica que Varg no es aun Hermano de Sangre -- es aprendiz -- y debe ganarse el derecho primero. La peticion sigue en pie pero ahora es publica y tanto Glornir como Vol la conocen.',
        star: '*** la peticion ya no es secreta. Glornir la bloquea pero no la niega para siempre -- dice que Varg debe probarse primero. Vol empezo a responder positivamente antes de ser interrumpida: ella esta dispuesta. La tension narrativa cambia: el obstaculo ya no es llegar a Vol sino ganarse el derecho ante Glornir.'
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
        id: 'arild', label: 'Arild', group: 'ORKA', type: 'Personaje — Drengr (mujer)', desc: 'Drengr de la Jarl Sigrún. Acompañó a Guðvarr al steading de Orka para convocar el Althing. Fue el segundo de Guðvarr en el holmganga, le aconsejó en voz baja antes del duelo y le vendó el hombro tras la derrota.',
        star: '¿Qué le aconsejó a Guðvarr antes del duelo? Sigrún también le habló pero su consejo fue distinto al de Arild.'
    },
    {
        id: 'armring', label: 'Armring (Anillo de Brazo)', group: 'NORSE', type: 'Símbolo — Lealtad', desc: 'Anillo de metal (plata, oro, bronce) enrollado en el brazo. Símbolo de lealtad a un señor. Los jarls los otorgan a guerreros leales ("dador de anillos" = epíteto de buen jarl). Sigrún lleva "anillos en los brazos". Svik lleva "anillos de plata enrollados en los brazos". Glornir es llamado "Dador-de-Oro". [Histórico: los armrings eran la moneda social vikinga. Un jarl generoso distribuía anillos a su séquito. Romper un anillo para pagar era común. Símbolo físico del vínculo señor-guerrero.]',
        star: 'Glornir "Dador-de-Oro" distribuye anillos a Hermanos de Sangre. Sistema de lealtad económica: el oro compra juramentos. Orka y Thorkel no llevan anillos — no deben lealtad a nadie.'
    },
    {
        id: 'asgrim', label: 'Asgrim (†)', group: 'ORKA', type: 'Personaje — Muerto', desc: 'Vecino de Orka y Thorkel en las colinas sobre el fiordo de Fellur. Encontrado muerto de una estocada al corazón en el umbral de su steading. Tenía runa de warding en la puerta —el asesino fue humano, no vaesen.',
        star: 'Que un hombre con runa warding fuera asesinado confirma que la amenaza viene de personas, no de criaturas.'
    },
    {
        id: 'asgrim-death', label: 'Tragedia de Familia Asgrim', group: 'EVENTO', type: 'Evento', desc: 'Asgrim y su esposa son encontrados muertos en su granja a las afueras de Fellur por Orka. Su hijo Harek esta desaparecido. Orka lleva los cuerpos a Fellur. Thorkel investiga: tres botes en el rio Skarpain. El modus operandi del ataque al steading de Orka es identico al de Asgrim -- misma banda. Orka lo confirma al ver las huellas en el rio: tres botes, ruta fluvial, escala similar. El lider de esa banda es Drekr.',
        star: '** Harek fue el primer caso de Drekr en la zona. Ahora Breca es el mas reciente. La misma organizacion opero en ambos casos con anos de diferencia -- o la red de Drekr es antigua y extensa.'
    },
    {
        id: 'battle-grim', label: 'Terrores de la batalla (Battle-Grim)', group: 'FACCION', type: 'Facción — Mercenarios', desc: 'Compañía mercenaria. Drakkar: Wave-Jarl. Cazan Tainted para venderlos a jarls. Jefe: Agnar. Thrall Tainted: Kráka (Seiðr) y Hundur (rastreador).',
        star: ''
    },
    {
        id: 'berak', label: 'Berak Bjornasson', group: 'ELVAR', type: 'Personaje — Berserkir', desc: 'Alto y grande con cicatrices en la cara, barba hasta el cinturón. Sangre del dios muerto Berser. Ojos ambarinos cuando entra en furia, dientes afilados, fuerza brutal. Vivía escondido y fue capturado en Iskalt. Se le acusa de haber matado a tres Jarls. El collar de hierro suprime su transformación Berserkir. Destino: Snakavik, Jarl Störr. Durante el ataque de los gusanos nocturnos, es el primero en liberarse —arranca las criaturas de su cuerpo con un rugido sordo, venas en el cuello a punto de reventar, fuerza sobrehumana incluso sin transformación. Inmediatamente arranca los wyrms de Uspa y Bjarn y los pone en pie. Intenta proteger a su mujer cuando Agnar le permite hablar.',
        star: '★ Incluso encadenado y con el collar puesto, su fuerza es prodigiosa. El gesto de proteger primero a su familia revela que bajo la bestia hay un padre.'
    },
    {
        id: 'berak-venta', label: 'Viaje a Snakavik para venta de Berak a Störr', group: 'TRAMA', type: 'Trama — Abierta', desc: 'Agnar navega hacia Snakavik para vender a Berak el Berserkir al Jarl Störr. Elvar reacciona personalmente ante este destino. Uspa La mujer de Berak también está a bordo. Terrores de la batalla navega dos días al sur desde Iskalt, cubriendo ya la mitad del camino a Snakavik con viento noroeste. El viento cambia al este y los ralentiza. Atracan en las Islas de la Escarcha para refugiarse de una tormenta. Allí descubren la piedra de juramento y son atacados por gusanos nocturnos. Agnar ordena regresar al Wave-Jarl inmediatamente tras el ataque. El destino final sigue siendo Snakavik y el Jarl Störr.',
        star: 'Elvar tiene historia no revelada con Snakavik o Jarl Störr. Cada parada del viaje añade información cosmológica. La tormenta y el vaesen no son obstáculos casuales — el camino a Snakavik está sembrado de revelaciones.'
    },
    {
        id: 'berser', label: 'Berser (Dios-Oso)', group: 'DIOS', type: 'Dios Muerto', desc: 'Hijo de Snaka. Muerto en el Guðfalla. Sus descendientes son los Berserkir: Tainted con fuerza sobrehumana, ojos ambarinos y transformación parcial en combate. [Nota histórica: en la mitología nórdica real, berserkr significa «camisa de oso» — guerreros sagrados de Odín que entraban en trance de furia animal (berserkergang). Gwynne reinterpreta esto como herencia de sangre divina literal: el «oso» fue un dios real que murió.]',
        star: 'Berak Bjornasson porta su sangre. Los Berserkir son muy cotizados por los jarls como guardia personal. El collar de hierro los detiene — pero ¿cuánto tiempo?'
    },
    {
        id: 'berserkergang', label: 'Berserkergang (Furia de Batalla)', group: 'NORSE', type: 'Combate — Trance', desc: 'Estado de furia disociativa en combate. Ojos ambarinos, dientes afilados, fuerza sobrehumana, pérdida de control racional. Berak entra en berserkergang cuando se transforma. Varg tiene episodios de "furia roja" que no recuerda — posible berserkergang. [Histórico: los berserkir históricos entraban en trance de batalla (quizá con drogas/rituales). Mordían escudos, aullaban, peleaban sin armadura. Gwynne lo reinterpreta como manifestación literal de sangre divina Tainted.]',
        star: 'Varg tiene furia roja sin memoria = posible sangre Tainted no descubierta. Berak en berserkergang es imparable — el collar de hierro es lo único que lo detiene.'
    },
    {
        id: 'biorr', label: 'Biórr', group: 'ELVAR', type: 'Personaje — Terrores de la batalla', desc: 'Pelo negro, botas largas (objeto de burlas). Interesado en Elvar. Sigue sus pasos en el bosque de Iskalt. Grend lo odia. Ofrece gachas al prisionero Berak y su familia. Explora el terreno y encuentra el lugar de acampada (la meseta con la piedra de juramento). Durante el ataque de wyrms es el primero en actuar: clava una rama en las brasas del fuego y usa la antorcha para quemar a los gusanos nocturnos, repeliendo el ataque. Su iniciativa salva a toda la compañía.',
        star: '★ Su reacción rápida bajo presión extrema lo muestra como guerrero de verdad, no solo acompañante de Elvar.'
    },
    {
        id: 'bjarn', label: 'Bjarn', group: 'ELVAR', type: 'Personaje — Tainted', desc: 'Hijo de Berak y Uspa. Fue rescatado del mar helado por Elvar. Lleva sangre de Snaka por parte de madre y sangre de Berser por parte de padre — doble linaje divino. Berak y Uspa lo protegen instintivamente incluso encadenados. Durante el ataque de gusanos nocturnos, Berak lo arranca del suelo y lo pone en pie.',
        star: '★★ Doble sangre: Snaka (Seiðr/serpiente) + Berser (fuerza/oso). ¿Cuál de los dos prevalecerá? ¿O podrá manifestar ambas? El Tainted más potencialmente poderoso de todos los prisioneros.'
    },
    {
        id: 'blood-oath', label: 'Juramento de Sangre', group: 'NORSE', type: 'Ritual — Pacto', desc: 'Pacto inquebrantable sellado con sangre. Sigrún juró lealtad de sangre a Helka. Breca y Vesli están unidos por juramento de sangre. Romperlo es traición absoluta. [Histórico: los juramentos de sangre (blóðbræðralag) creaban hermandad artificial entre guerreros nórdicos. Gwynne lo eleva a magia vinculante: el juramento de sangre en Vigríð tiene poder literal.]',
        star: '★★ El título de la trilogía (Bloodsworn) se refiere a esto. Los juramentos de sangre son el tejido que une (y rompe) Vigríð.'
    },
    {
        id: 'bloodsworn', label: 'Bloodsworn (Hermanos de Sangre)', group: 'FACCION', type: 'Faccion -- Mercenarios', desc: 'Compania mercenaria de elite, legendaria. Escudo negro con salpicaduras rojas. Cazan vaesen, buscan reliquias, protegen ricos. Drakkar: Sea-Wolf. Jefe: Glornir. Seidr-thrall: Vol. Funcion en Liga: protegen el puerto de piratas y saqueadores a cambio de hospitalidad de Logur. El jefe anterior, Skullsplitter, regalo a Logur una astilla del Cuerno Vackna. Muro de escudos en el muelle contra la caballeria de Jaromir. Paralizados por la llegada de Helka.',
        star: '* Nombre del drakkar revelado: Sea-Wolf. Su relacion con Logur es simbiosis: proteccion a cambio de hospitalidad y el relic del Vackna.'
    },
    {
        id: 'bogi', label: 'Bogi (Arco)', group: 'NORSE', type: 'Arma — Distancia', desc: 'Arco largo de madera (tejo, fresno, olmo). Alcance 200+ metros. Caza y guerra. Menos prestigioso que combate cuerpo a cuerpo pero tácticamente vital. Flechas con punta de hierro. [Histórico: los vikingos eran arqueros competentes pero el arco tenía menos prestigio cultural que espada/hacha. Matar desde lejos era menos "honorable". Gwynne probablemente lo usa para emboscadas y caza.]',
        star: 'Trud (Terrores de la batalla) fue herida por flecha en Iskalt. Los arcos aparecen en combate pero no son armas de héroes.'
    },
    {
        id: 'breca', label: 'Breca (RAPTADO)', group: 'ORKA', type: 'Personaje -- Orka (Desaparecido)', desc: '10 inviernos. Pelo negro como cuervo, ojos de Orka. Sensible, curioso, valiente. Vinculado a Vesli por juramento de sangre. Lleva colgante de madera con forma de espada. RAPTADO por la banda de Drekr durante el ataque al steading (ver nodo ataque-steading). Llevado vivo por el rio en dos botes. Hay sangre entre las huellas que llevan al bote -- posiblemente herido. Destino desconocido (ver nodo drekr-cazadora).',
        star: '*** RAPTADO. El mismo patron que Harek y los otros ninos. Llevado vivo -- tienen algun uso para los ninos. ¿Sabe Drekr que Breca tiene posible sangre Tainted? ¿Es ese el criterio de seleccion para todos los raptos?'
    },
    {
        id: 'brynja', label: 'Brynja (Cota de Mallas)', group: 'NORSE', type: 'Armadura — Torso', desc: 'Cota de mallas de anillos entrelazados. Protección flexible contra cortes. Cara de fabricar: 20,000-30,000 anillos por cota. Símbolo de riqueza y estatus guerrero. Sigrún lleva una "remachada" (anillos remachados = calidad superior). [Histórico: la brynja era la armadura de élite vikinga. Pesaba 10-15kg. Solo jarls, campeones y guerreros ricos podían pagarla. La mayoría luchaba con cuero o sin armadura. Gwynne la usa como marcador visual de poder.]',
        star: 'Sigrún lleva brynja remachada = jarl guerrera de verdad, no solo política. Agnar probablemente también.'
    },
    {
        id: 'byrding', label: 'Byrðingr', group: 'NORSE', type: 'Embarcación — Carga Pesada', desc: 'Barco de carga pesada. Más grande y robusto que knarr. Transporte de materiales de construcción, piedra, madera, grandes cantidades de grano. Diseño sacrifica velocidad por capacidad. [Histórico: el byrðingr era el "camión de carga" nórdico. Usado para proyectos de construcción grandes: iglesias, fortalezas, puentes.]',
        star: ''
    },
    { id: 'cat-dioses', label: 'PANTEÓN DIVINO', group: 'CAT', type: 'Mitología', desc: 'Los dioses caídos y su legado en Vigríð. Adorar a los dioses muertos está prohibido y se castiga con la muerte', star: '' },
    { id: 'cat-elvar', label: 'ARCO ELVAR', group: 'CAT', type: 'Arco Narrativo', desc: 'Guerrera joven de Terrores de la batalla. Caza Tainted para venderlos a jarls ricos.', star: '' },
    { id: 'cat-eventos', label: 'EVENTOS CLAVE', group: 'CAT', type: 'Cronología', desc: 'Sucesos históricos y actuales que moldean la narrativa.', star: '' },
    { id: 'cat-facciones', label: 'FACCIONES Y PODER', group: 'CAT', type: 'Política', desc: 'El tablero político de Vigríð: jarls, reinas, mercenarios.', star: '' },
    { id: 'cat-magia', label: 'MAGIA', group: 'CAT', type: 'Sistema Mágico', desc: 'Seiðr, Galdur, vínculos de sangre y el poder residual de los dioses muertos.', star: '' },
    { id: 'cat-mundo', label: 'MUNDO & COSMOS', group: 'CAT', type: 'Worldbuilding', desc: 'Los dioses muertos, el Guðfalla, los Tainted, los vaesen. La realidad rota de Vigríð.', star: '' },
    { id: 'cat-norse', label: 'CULTURA NÓRDICA', group: 'CAT', type: 'Tradiciones', desc: 'Costumbres, rituales, leyes y tradiciones del mundo de Vigríð basadas en la cultura nórdica histórica.', star: '' },
    { id: 'cat-objetos', label: 'OBJETOS', group: 'CAT', type: 'Artefactos', desc: 'Armas, artefactos mágicos y objetos significativos.', star: '' },
    { id: 'cat-orka', label: 'ARCO ORKA', group: 'CAT', type: 'Arco Narrativo', desc: 'Trampera en las colinas sobre Fellur. Madre feroz, exguerrera con un pasado oscuro que regresa.', star: '' },
    { id: 'cat-tramas', label: 'TRAMAS ACTIVAS', group: 'CAT', type: 'Tramas', desc: 'Los hilos narrativos abiertos', star: '' },
    { id: 'cat-varg', label: 'ARCO VARG', group: 'CAT', type: 'Arco Narrativo', desc: 'Ex-thrall en busca de un Seiðr para invocar a su hermana muerta. Recién reclutado por los Hermanos de Sangre.', star: '' },
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
        id: 'einar', label: 'Einar Medio-Trol', group: 'VARG', type: 'Personaje — Hermanos', desc: 'Campeon de los Hermanos. Enorme, barba roja hasta la cintura, manos como yunques. Proteccion de hierro en la entrepierna (forjada por Jokul). Pelea con Varg para ganarse su puesto. Durante la batalla del muelle, cuando llueven las flechas druzhina, se pone en pie sobre el muro de escudos y lanza una lanza que atraviesa el pecho de un druzhina y lo derriba del caballo en explosion de sangre.',
        star: '* La escena del lanzamiento demuestra precision real en combate, no solo fuerza bruta. Es el primero en atacar desde el muro.'
    },
    {
        id: 'elvar', label: 'Elvar', group: 'ELVAR', type: 'POV — Personaje', desc: 'Guerrera más joven de Terrores de la batalla. Rubia, trenza guerrera, escudo rojo con armas cruzadas. Impulsiva y valiente hasta la temeridad. Siempre trata de hacer más que los demás, así ganó su puesto en el muro de escudos. Saltó al mar helado para salvar al hijo de Berak. Reacciona ante el nombre de Snakavik. Ante la piedra de juramento iluminada defiende el escepticismo empírico — solo cree en lo que puede ver y tocar. Acepta la existencia de los Tainted porque hay evidencia directa (Berak, Kráka, Uspa, Hundur). Pero niega que existan dragon-born porque nadie en sus viajes —ni en Iskidan— ha visto uno jamás. Sobrevive al ataque de los gusanos nocturnos: un wyrm llega a introducirse en su nariz antes de que pueda extraerlo. Grend y Agnar la liberan.',
        star: '★★ Su epistemología es su rasgo más interesante — es la escéptica del grupo, lo cual la hace narrativamente incómoda cuando la magia la contradice. ¿Seguirá negando los dragon-born cuando se enfrente a uno?'
    },
    {
        id: 'emp-kirill', label: 'Gran Khagan Kirill', group: 'FACCION', type: 'Personaje — Poder Lejano', desc: '"Gran Khagan, Kirill el Magnífico". Gobierna el vasto Iskidan desde la gran ciudad de Gravka. tiene 200 concubinas, mil hijos (según Torvik) y una guardia druzhina de 200 guerreros que lo escolta en todo momento. Donde un príncipe tiene solo 2 druzhina, el Khagan tiene 200 — escala del poder. Virk lo acusó de tener más thralls que hombres libres y de sacrificar niños —rumores que Sigrun descartó como saga.',
        star: '★★ El enviado de Kirill (su hijo Jaromir) ya está en Liga reclamando a Sulich. Iskidan tiene presencia activa en Vigríð. ¿Tiene el patrón de robos de niños alguna conexión con Iskidan?'
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
        id: 'faunir', label: 'Faunir', group: 'VAESEN', type: 'Vaesen', desc: 'Vaesen del catálogo de criaturas liberadas en el Guðfalla. Sus características específicas aún no han sido detalladas en los capítulos leídos.',
        star: 'Gwynne menciona vaesen por nombre antes de introducirlos en acción.'
    },
    {
        id: 'fell-wolf', label: 'Fell-Wolf', group: 'VAESEN', type: 'Vaesen', desc: 'Lobo enorme, pelaje gris pizarra, garras largas. Encontrado herido, alguien ya lo había atacado antes de que llegaran Orka y su familia. Irrumpió en el calvero y dispersó los renos.',
        star: '¿Quién hirió al fell-wolf antes? Posible pista sobre los asesinos de Asgrim.'
    },
    {
        id: 'fellur', label: 'Fellur', group: 'LUGAR', type: 'Lugar — Villa', desc: 'Villa pesquera en el fiordo. ~100 habitantes. Longhouse central, muralla parcialmente podrida. Knuckle-bone de dios muerto en el umbral: protege contra vaesen. Dominio de Jarl Sigrún.',
        star: ''
    },
    {
        id: 'froa', label: 'Froa (dagger)', group: 'VAESEN', type: 'Vaesen -- Espiritu del Arbol (Muerta)', desc: 'Espiritu guardian ligado a un arbol de fresno nacido de una semilla del gran Osktured. Forma: mujer-estatua tallada en madera, mas alta que Orka, pelo largo hasta la cintura entretejido de hojas y ramitas. Las Froa viven y mueren con su arbol y luchan salvajemente para defenderlo. MUERTA junto con su arbol (ver nodo arbol-froa). Encontrada en la ladera del montIculo: cuerpo picado a hachazos y quemado, boca abierta en un grito de agonia congelado, brazos extendidos hacia el tronco caido. Orka la describe como alguien que en su ultimo encuentro "reia y bailaba y le ofrecio la mano".',
        star: '*** ASESINADA junto con su arbol. Alguien con recursos y poder suficiente para matar a un vaesen guardian poderoso recorrio el bosque de Orka. La conexion con los asesinos de Asgrim es inevitable. Los gritos al oeste al final del capitulo sugieren que la amenaza ya esta actuando cerca del steading.'
    },
    {
        id: 'froya', label: 'Frøya (†)', group: 'VARG', type: 'Personaje — Muerta', desc: 'Hermana de Varg, 4 inviernos menor. Ambos fueron vendidos a los 5 y 4 años por sus padres. Murió en circunstancias desconocidas. Su muerte es el motor de toda la historia de Varg.',
        star: 'Varg necesita un akáll (invocación Seiðr) para descubrir cómo murió y quién la mató.'
    },
    {
        id: 'funeral-rites', label: 'Ritos Funerarios', group: 'NORSE', type: 'Ritual — Muerte', desc: 'Los guerreros son enterrados con armas en la mano para luchar en Vergelmir contra Lik-Rifa en su camino al más allá. Morir con arma = morir con honor. Grend explica esto a Elvar: "los guerreros atraviesan Vergelmir en el camino del alma". Mord y Lif envuelven el cuerpo de Virk con ayuda de Thorkel. [Histórico: los vikingos enterraban a guerreros con armas, herramientas, incluso barcos. La creencia era que llevarían estos objetos al más allá]',
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
        id: 'galdur', label: 'Galdur', group: 'MAGIA', type: 'Magia — Lengua', desc: 'Lengua mágica de comandos rúnicos. Activa los collares de hierro sobre los Tainted. Palabras conocidas: Hlýða (obedece / escucha), Á HNÉN (de rodillas), Hlýða og fá verðlaun (obedece y recibe recompensa). NIðUR, Á JÖRðU, HLŸDDU MÉR (abajo, al suelo, obedéceme) — comando de sometimiento total; Brenna, sársauki (arde, dolor) — castigo de quemadura directa a través del collar. [Contexto: el galdr histórico nórdico era el canto o recitación de runas mágicas —opuesto al seiðr, era más público y menos estigmatizado. En Vigríð Gwynne lo convierte en lengua de control sobre la herencia divina.]',
        star: 'Saber esta lengua es poder absoluto sobre los Tainted. ¿Cuántos la conocen realmente?'
    },
    {
        id: 'glornir', label: 'Glornir', group: 'VARG', type: 'Personaje -- Jefe', desc: 'Jefe de los Hermanos de Sangre. Calvo, barba gris trenzada. Long-axe como baston. Oro y plata en brazos y cuello. Habla lengua Galdur. Epítetos: Rompe-Escudos, Dador-de-Oro, Robador-de-Almas, Cortador-Golpeador-Aplastador. Filosofia del Bloodsworn: habilidad + lealtad + devocion. Lleva brynja brillante y yelmo al salir de Liga. Da a Varg la lanza de Aslog y el escudo negro. Derribo una flecha de Jaromir en vuelo con un golpe de hacha (ver nodo batalla-muelles). Se niega dos veces a entregar a Sulich (ver nodo sulich-crisis).',
        star: '*** Derribar una flecha en vuelo con la hacha define por que todos lo siguen. No habla de valor -- lo demuestra bajo fuego real. El gesto resume sus cuatro kennings en un instante.'
    },
    {
        id: 'gods-bones', label: 'Huesos de los Dioses', group: 'MAGIA', type: 'Objeto — Magia', desc: 'Los huesos de los dioses muertos (Snaka, Orna, Berser, Ulfrir) son objetos de gran poder. Se usan para protección (knuckle-bone en umbrales), como fuente de poder para magia, y como símbolos de autoridad (alas de Orna en la fortaleza de Helka). El poder específico que otorgan varía según el dios y el contexto.',
        star: ''
    },
    {
        id: 'gravka', label: 'Gravka', group: 'LUGAR', type: 'Lugar — Capital Imperial', desc: 'Gran ciudad capital del Imperio de Iskidan. Sede del Emperador Kirill. Lejana al este, más allá del mar. Representa el mundo exterior a Vigríð.',
        star: ''
    },
    {
        id: 'grend', label: 'Grend', group: 'ELVAR', type: 'Personaje — Guardián', desc: 'Guerrero mayor, barba gris. Siempre junto a Elvar. No es su padre (él lo niega). Lacónico. Salta al mar helado tras Elvar. Le sirve gachas y le cubre los turnos de guardia.',
        star: '¿Qué le debe a Elvar para protegerla así?'
    },
    {
        id: 'gudfall', label: 'Guðfalla (Caída de Dioses)', group: 'EVENTO', type: 'Evento Histórico', desc: 'Hace ~300 años. Los hijos de Snaka se rebelaron contra su padre. La guerra de los dioses rompió el mundo: continentes hundidos, mares desbordados. Los vaesen escaparon de su foso. El mundo nunca se recuperó. (saga de Galinn): el Vackna sonó al alba; Ulfrir corrió aullando; Orna llegó con garras; Lik-Rifa desde las Colinas de Luna Oscura; Berser en furia; Svin, Tosk, Rotta también combatieron. Resultado: Berser perforado, Orna desgarrada, Ulfrir muerto, Lik-Rifa encadenada bajo Oskutreð, Snaka caído sobre el Monte Eldrafell. CAUSA VERDADERA (Uspa, ante la piedra de juramento): Lik-Rifa creyó que Orna planeaba asesinarla — Rotta el Traidor alimentó activamente esa paranoia. Por eso Lik-Rifa mató a la hija primogénita de Orna y Ulfrir y le arrancó las alas (el Bosque de las Horcas). Creó los vaesen en secreto como arma. Orna descubrió el plan, tendió una trampa y encadenó a Lik-Rifa en las raíces de Oskutreð — eso detonó la guerra total. Lo que empezó como una vendetta doméstica casi destruyó todo.',
        star: '★★★ No fue una rebelión abstracta sino una venganza de sangre detonada por Rotta el Manipulador. La primera víctima: la hija sin nombre de Orna y Ulfrir. El blood-eagle nació como imitación del crimen de Lik-Rifa.'
    },
    {
        id: 'gudvarr', label: 'Guðvarr', group: 'ORKA', type: 'Personaje — Antagonista menor', desc: 'Drengr, Sobrino de Jarl Sigrún. Pelo negro aceitado, espada al cinto, gota permanente de moco. Vanidoso, arrogante, con algo de técnica de combate pero sin experiencia real en batalla. Humillado en el holmganga contra Virk: hombro derecho seccionado, se rindió (ver nodo holmganga-event). Su insulto post-duelo provocó la muerte de Virk. Sigue siendo niðing moral aunque sobrevivió.',
        star: '★ Humillado públicamente pero vivo. Tiene una deuda no resuelta con Mord y Lif. Su arrogancia postduelo dejó claro que no ha aprendido nada.'
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
        id: 'harek', label: 'Harek (†?)', group: 'TRAMA', type: 'Personaje — Desaparecido', desc: 'Hijo de Asgrim e Idrun. Amigo de Breca. Desaparecido cuando sus padres fueron asesinados. Los asesinos huyeron en barcas por el río Skarpain.',
        star: 'Primer eslabón del patrón de robos de niños.'
    },
    {
        id: 'helka', label: 'Reina Helka', group: 'FACCION', type: 'Faccion -- Poder politico', desc: 'Auto-proclamada reina de media Vigrið. Sede: Darl. Moneda propia. Fortaleza coronada con huesos de Orna. Rival: Jarl Storr. Llega a Liga con tres drakkars enormes, velas negras con aguila (alas extendidas, pico y garras en ataque) -- emblema del poder sobre los huesos de Orna. La llegada detiene la batalla entre Hermanos y druzhina. Hasta Varg reconoce ese emblema.',
        star: '*** Llega a Liga -- no al frente contra Storr, sino al puerto de un jarl menor. ¿Por que? ¿Viene por los Hermanos? ¿Por relics? ¿Por Sulich? Su llegada cambia el tablero completo.'
    },
    {
        id: 'helka-poder', label: 'Expansión de Helka', group: 'TRAMA', type: 'Trama — Política', desc: 'Helka absorbe los dominios de los jarls menores. Sigrún juró. Störr es su rival al noroeste. Orka advierte en el Althing: habrá hird-offering (leva de guerreros). La guerra de Vigríð se acerca.',
        star: 'El destino de Fellur está ligado al resultado de la guerra Helka-Störr.'
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
        id: 'holmganga', label: 'Holmganga', group: 'NORSE', type: 'Ritual — Duelo', desc: 'Duelo legal para resolver disputas de honor, herencias o insultos. Se realiza en isla (hólmr) o terreno delimitado. Código estricto: cuadrado marcado con varas de avellano; un pie fuera = rendición; dos pies fuera = huida; tres escudos destruidos = derrota; se puede pactar primera herida, rendición o muerte. Atacar tras rendición rompe el código y justifica ejecución inmediata (ver nodo holmganga-event para caso Virk vs Guðvarr). [Histórico: el hólmganga era un duelo formal nórdico. El espacio sagrado (vǫllr) estaba delimitado. Las reglas eran precisas y documentadas en sagas — romperlas era deshonra absoluta. Gwynne lo preserva como institución legal vigente en Vigríð: las reglas son ley, no sugerencia.]',
        star: '★★ Las leyes del holmganga están por encima de la victoria: el honor importa más que ganar. Las leyes nórdicas antiguas siguen vivas en Vigríð — romperlas tiene consecuencias letales.'
    },
    {
        id: 'holmganga-event', label: 'Holmganga Virk vs Guðvarr', group: 'EVENTO', type: 'Evento', desc: 'Guðvarr reta a duelo a Virk. Virk acepta y ganó el duelo —le hundió el hacha en el hombro a Guðvarr, seccionándole los músculos—. Pero Virk alzó el arma para matar tras la rendición, violando las reglas. La thrall de Sigrún intervino y lo mató.',
        star: 'Virk murió. Sus hijos Mord y Lif presenciaron todo. La thrall de Sigrún desbordó el control y mordió el cadáver — Sigrún misma parece incómoda con lo sucedido. Thorkel recibió un corte de seax.'
    },
    {
        id: 'howbyr', label: 'Howbyr', group: 'LUGAR', type: 'Lugar — Villa', desc: 'Villa a 10–12 leguas al norte de Fellur. Domicilio de los Haraldurson, que perdieron tres hijos. Segundo nodo confirmado del patrón geográfico de robos.',
        star: ''
    },
    {
        id: 'hueso-dios-fellur', label: 'Nudillo de Dios (Fellur)', group: 'VAESEN', type: 'Objeto Mágico — Reliquia', desc: 'Nudillo de un dios muerto clavado en el travesaño de la puerta de Fellur. Mantiene los vaesen fuera del pueblo. Breca reaccionó visiblemente al pasar junto a él.',
        star: '★★ La reacción de Breca al hueso de dios es una de las señales más tempranas de su posible sangre Tainted. Un niño normal no debería sentir nada.'
    },
    {
        id: 'hundur', label: 'Hundur (Thrall)', group: 'ELVAR', type: 'Personaje — Thrall Tainted', desc: 'Thrall de Terrores de la batalla con olfato sobrehumano de sabueso. Camina encorvado con ojos hundidos como pozos negros. Controlado por Sighvat con cadena de hierro. Fue clave para rastrear a Berak en Iskalt. Elvar lo señala explícitamente ante la piedra de juramento: "Veo la sangre de Hundur el Sabueso en ti" — confirmando que su nombre y sus poderes de rastreo vienen del dios-sabueso Hundur, uno de los hijos de Snaka. También detecta el olor de "sangre derramada y juramentos" en la piedra de juramento, lo cual confirma que tiene capacidades olfativas que van más allá de lo físico.',
        star: '★★ Su amo es Sighvat — ¿seguirá siendo así toda la historia? Nótese la ironía: un sabueso-dios rastreando a sus propios parientes Tainted.'
    },
    {
        id: 'idrun', label: 'Idrun (†)', group: 'ORKA', type: 'Personaje — Muerta', desc: 'Esposa de Asgrim. Encontrada crucificada en el portón del steading con el vientre abierto. La brutalidad del acto sugiere un mensaje deliberado o una ejecución ritual. Su hijo Harek desapareció.',
        star: '★ La forma de su muerte —crucificada, vientre abierto— podría ser un rito, no solo un asesinato. ¿A qué tradición pertenece?'
    },
    {
        id: 'iskalt', label: 'Isla de Iskalt', group: 'LUGAR', type: 'Lugar — Isla', desc: 'Isla volcánica al norte con montaña de fuego y venas de lava. Clima ártico extremo. Villa de pescadores en la costa. Los terremotos aquí son atribuidos a Lik-Rifa forcejeando bajo el Árbol de Ceniza.',
        star: 'El volcán tiembla. Lik-Rifa está activa.'
    },
    {
        id: 'iskidan', label: 'Iskidan', group: 'LUGAR', type: 'Lugar — Imperio Lejano', desc: 'Imperio lejano al sur/este, gobernado por el Gran Khagan Kirill desde Gravka. El Príncipe Jaromir y su guardia druzhina llegan a Liga en barco. Sus guerreros visten armadura laminar (lamellar plate) que brilla como escamas de pez, yelmos de hierro con plumón de crin de caballo y cortinas de malla remachada para proteger el cuello, portan carcajs y arcos, sables curvos y hachas de asta larga. Cabello en una sola trenza larga desde bajo el yelmo. El sistema político es de Khagan/príncipes, no jarls.',
        star: '★★ Iskidan ya no es solo rumor — sus guerreros están en Liga. El sistema de poder (Khagan → príncipes → druzhina) es radicalmente distinto al sistema jarl nórdico de Vigríð.'
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
        id: 'jarl-logur', label: 'Jarl Logur', group: 'FACCION', type: 'Personaje -- Politica', desc: 'Jarl de Liga. Sus escudos son azules y sus velas rojas. Barriludo, vientre que estira la tunica bordada, cabello gris largo y trenzado con hilo de oro, oro en cuello y brazos. Hombre que rie mucho. Viejo amigo de Sergei el mercader. Sienta a Glornir a su izquierda. Defensor de la ley ante Jaromir. Despide a los Hermanos con generosidad. Promete enviarlos con barriles llenos y vientres llenos. Abraza a Glornir.',
        star: '* Su hospitalidad es genuina y sin condicion. La dinamica con Salla -- ella gestiona, el promete -- es un detalle humano que los hace reales.'
    },
    {
        id: 'jarl-orlyg', label: 'Jarl Orlyg', group: 'ORKA', type: 'Personaje — Política', desc: 'Jarl de Svelgarth, al este de Vigríð. Presente en el contexto político del Althing. Otro jarl menor cuya posición ante la expansión de Helka y Störr está por definirse.',
        star: ''
    },
    {
        id: 'jokul', label: 'Jökul Mano-Martillo', group: 'VARG', type: 'Personaje — Hermanos', desc: 'Herrero de los Hermanos de Sangre. Apodo: Mano-Martillo. Ancho de cintura, sentado cerca de Svik y Røkia (lugar de honor). Torvik lo describe como "el mejor herrero de todo Vigríð" — y también el más rápido, para mantener el equipo de la compañía en campaña. Forjó el armring de plata y bronce de Torvik (dos cabezas de sabueso en los terminales) — pieza de belleza y valor excepcionales. También forjó la protección de hierro en la entrepierna de Einar Medio-Trol.',
        star: '★ Su habilidad va más allá de la utilidad — crea arte. El armring de Torvik vale más que todo lo que Varg ganó en el ring de boxeo.'
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
        id: 'kennings', label: 'Kennings / Epítetos', group: 'NORSE', type: 'Lenguaje — Poético', desc: 'Nombres poéticos descriptivos. Glornir: "Rompe-Escudos" (Røkia), "Dador-de-Oro" (él mismo), "Robador-de-Almas" (Svik), "Cortador-Golpeador-Aplastador" (Einar). Einar "Medio-Trol". Svik "Pelo-Enredado" (irónico). Jökul "Mano-Martillo". Varg "Sin-Sentido" (Varg No-Sense — por morder a Einar). Los epítetos describen hazañas, características, o son irónicos. [Histórico: los kennings eran metáforas poéticas nórdicas complejas ("camino de la ballena" = mar). Los epítetos (viðrnefni) eran más simples: apodos descriptivos. Gwynne los usa para caracterización rápida.]',
        star: '★ Glornir acumula al menos 4 kennings distintos, cada compañero lo ve diferente. Varg recibe su primer apodo: "Sin-Sentido". Los kennings son identidad en Vigríð.'
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
        id: 'kraka', label: 'Kráka', group: 'ELVAR', type: 'Personaje — Thrall Tainted', desc: 'Thrall Tainted de Terrores de la batalla. Cabello negro como un cuervo, tatuajes azules en mandíbula y garganta (similar a Vol), cara gris agotada. Canta magia Seiðr para proteger el casco de serpientes marinas. El canto la destruye físicamente. Maltratada por los guardias. Agnar le dio un asta de trol como fuente de poder para el viaje de regreso. Reconoce la piedra de juramento al instante (incluso cubierta de musgo), algo que ningún guerrero de la compañía detectó. Toca la roca con sus dedos y la identifica. Después de que Uspa la activa, declara: "Son los padres y madres de todos nosotros los Tainted. Snaka amaba sus creaciones... y también las devoraba." Contempla las espirales de la serpiente con una emoción que roza lo reverencial.',
        star: '★ Kráka y Uspa son las únicas que reaccionan con reconocimiento ante la piedra, no con asombro. Para los Tainted de sangre Snaka, ver la historia de su padre grabada en piedra tiene peso diferente.'
    },
    {
        id: 'langsoex', label: 'Langsax / Espada', group: 'NORSE', type: 'Arma — Espada', desc: 'Espada de doble filo, 70-90cm. Arma de estatus: cara de forjar, se heredan, tienen nombres. Guðvarr lleva espada al cinto (símbolo de su rango). Svik lleva espada. El guerrero oscuro usa espada curva de un filo (estilo Iskidan). [Histórico: las espadas vikingas eran objetos de prestigio. Acero de patrón soldado, empuñaduras decoradas, nombres propios ("Mordedora de Piernas", "Rompehielos"). Solo guerreros ricos las poseían. Gwynne las reserva para personajes de élite.]',
        star: 'Guðvarr lleva espada pero no sabe usarla bien. Contraste con guerreros reales como Glornir. La espada curva del guerrero oscuro confirma origen extranjero.'
    },
    {
        id: 'leif', label: 'Leif Kolskeggson', group: 'VARG', type: 'Personaje — Antagonista', desc: 'Hijo de Snepil Kolskegg. Cicatriz en el labio. Quiso esclavizar a Varg y amputarle la mano como castigo. Derrotado por los Hermanos. Se revela que hirió a Varg con una lanza antes de huir.',
        star: '¿Volverá Leif con más recursos? Tiene motivo de venganza y a Orl como Hird leal.'
    },
    {
        id: 'liga', label: 'Liga', group: 'LUGAR', type: 'Lugar -- Ciudad Puerto', desc: 'Ciudad mercado y puerto al pie del fiordo. Sala del Jarl Logur en la colina. Plaza de combate donde Varg lucho contra Einar. Mercado con vaesen disecados, marfil, moneda Helka. Los muelles son el escenario de la batalla entre los Hermanos y los druzhina de Jaromir. Logur acude con guardias de escudo azul. La flota de Helka (3 drakkars, velas negras, aguila) entra al fiordo y detiene la batalla. Liga es ahora cruce de tres poderes: Logur, Jaromir, Helka.',
        star: '*** Liga pasa de puerto tranquilo a punto de convergencia de poderes. La llegada de Helka aqui -- no en Darl -- tiene implicaciones politicas enormes.'
    },
    {
        id: 'lik-rifa-amenaza', label: 'Lik-Rifa Despertando', group: 'TRAMA', type: 'Trama — Cósmica', desc: 'Los terremotos de Iskalt y las venas de lava parpadeando sugieren que la diosa-dragón Lik-Rifa no está muerta, sino activa bajo el Árbol de Ceniza. Grend lo afirma; Elvar es escéptica.',
        star: '★★★ Si Lik-Rifa rompe sus cadenas, todo cambia. ¿Alguien la está ayudando a escapar?'
    },
    {
        id: 'likrafa', label: 'Lik-Rifa (Diosa-Dragon)', group: 'DIOS', type: 'Dios -- Viva (Encadenada)', desc: 'La diosa-dragon, hija de Snaka. NO murio en el Gudfalla: fue encadenada bajo Osktured, el Arbol de Ceniza. Su causa en el Gudfalla: mato a la hija de Orna por paranoia alimentada por Rotta; creo los vaesen en secreto. Sus descendientes Tainted (dragon-born) fueron considerados extintos hasta su confirmacion definitiva (ver nodo dragon-born). Al menos uno opera activamente en Vigrið, trabajando para Drekr en el rapto de ninos.',
        star: '*** Los dragon-born son REALES. La pregunta ahora es: cuantos hay, quien es el que trabaja con Drekr, y que relacion tienen con Lik-Rifa encadenada bajo Osktured. ¿Es la red de Drekr una operacion para beneficiar a Lik-Rifa de alguna forma?'
    },
    {
        id: 'mead-hall', label: 'Mead Hall / Longhouse', group: 'NORSE', type: 'Vida Diaria — Arquitectura', desc: 'Centro social y político. Sala larga con hogar central, bancos a los lados. El jarl preside desde el asiento alto. Aquí se festeja, se distribuyen recompensas, se toman decisiones. Fellur tiene longhouse central. Jarl Logur hospeda a Hermanos de Sangre en su sala. [Histórico: el hall (hǫll) era corazón de la comunidad nórdica. Símbolo de poder del jarl. Quemar el hall de un enemigo era insulto máximo. Gwynne los preserva como centros de poder político.]',
        star: 'La sala de Logur es donde Varg es juzgado. El longhouse de Fellur es donde Sigrún gobierna.'
    },
    {
        id: 'mord-lif', label: 'Mord y Lif', group: 'ORKA', type: 'Personaje -- Huerfanos', desc: 'Hijos de Virk. Mord mayor, Lif menor. Presenciaron la muerte de su padre. Mord exigio justicia; Lif llamo niding a Gudvarr. Sigrun desestimo su reclamo. Construyeron el tumulo (barrow) de Virk con ayuda de Orka y Thorkel. Los recibieron con bacalao salado y salmon ahumado. Lif llora sin parar; Mord murmura juramentos de venganza. Mord casi agarro el hacha de su padre sobre Gudvarr -- Orka y Thorkel lo contuvieron. Thorkel les advierte que no regresen al Althing. Declinaron la invitacion de refugiarse en el steading. Se quedan palidos y ojerosos.',
        star: '** Su sed de venganza es real pero son demasiado jovenes e inexpertos.'
    },
    {
        id: 'uspa', label: 'Uspa', group: 'ELVAR', type: 'Personaje — Tainted (Snaka)', desc: 'Rubia, ojos gris-azul pálido. Tatuajes espirales bajo la ropa. Arrojó un objeto al lago de lava antes de ser capturada. Controló la serpiente marina con canto Seiðr. Sangre de Snaka. Se ofrece voluntariamente a activar la piedra de juramento — pide que le corten la palma, deja que la sangre se derrame, la presiona contra la roca y la piedra entera se ilumina como metal fundido, revelando el tapiz completo del Guðfalla. Sabe la causa verdadera de la guerra de los dioses cuando nadie más la conoce. Cuando Elvar afirma que los dragon-born son un cuento de hadas, Uspa escupe sin decir una palabra.',
        star: 'Su sangre activa la piedra de juramento. Su conocimiento del Guðfalla es enciclopédico. El escupitajo ante la afirmación de Elvar sobre los dragon-born es la señal más cargada del capítulo — ¿sabe de dragon-born vivos? ¿Qué había en el pergamino que destruyó?'
    },
    {
        id: 'nacken', label: 'Nacken', group: 'VAESEN', type: 'Vaesen — Agua', desc: 'Vaesen de ríos de montaña. Para ahuyentarlo, Thorkel clava un seax en la tierra: ritual de protección conocido. Peligroso en corrientes rápidas de alta montaña. Su existencia confirma que el conocimiento de vaesen y cómo contenerlos es cultura común en Vigríð.',
        star: ''
    },
    {
        id: 'niding', label: 'Níðing', group: 'NORSE', type: 'Concepto — Deshonra', desc: 'El peor insulto en la cultura nórdica: cobarde sin honor. Guðvarr llamó níðing a Virk tras perder el holmganga, provocando que Virk intentara matarlo. Ser níðing es estar socialmente muerto. [Histórico: níð era la deshonra absoluta en la sociedad nórdica. Acusar a alguien de níðing (cobardía, homosexualidad pasiva, falta de honor) podía justificar violencia legal. Gwynne lo usa como detonante de conflicto.]',
        star: '★★ Guðvarr usó la palabra como arma tras perder. Virk prefirió morir antes que aceptar el insulto.'
    },
    {
        id: 'ninos-robados', label: 'Robos de Ninos', group: 'TRAMA', type: 'Trama -- Abierta (Urgente)', desc: 'Patron organizado bajo el mando de Drekr. Casos conocidos: Harek (colinas de Fellur), 3 hijos de los Haraldurson (Howbyr), familia de Kergarth, y ahora BRECA. Patron de operacion confirmado -- queman la proteccion galdr-runica (necesitan un Galdurman o Seidr-witch), atacan con fuerza numerosa, huyen en botes por los rios. Thorkel siguio sus rastros tras el caso Asgrim: tres botes entonces; Quedan huellas de tres botes (uno recuperado por Orka en el rio, dos ya partidos con Breca y los supervivientes). El interrogado revelo que el lider se llama Drekr. Los captores llevan a los ninos vivos -- algun proposito especifico.',
        star: '*** trama escalada al maximo. Drekr es el nombre del antagonista. Breca es el ultimo raptado. El rio se bifurca -- Orka no sabe que camino tomaron. La red es mucho mayor de lo que parecia: necesitan magia (Galdurman) para romper protecciones.'
    },
    {
        id: 'oath-stone-fellur', label: 'Roca del Juramento de Fellur', group: 'OBJETO', type: 'Objeto — Althing', desc: 'Islote en el fiordo de Fellur. Monolito de runas destruido a martillazos (adorar a los dioses es ilegal). Aquí se celebra el Althing de Fellur.',
        star: ''
    },
    {
        id: 'oath-stone-frost-isles', label: 'Roca de Juramento de Islas de Escarcha', group: 'OBJETO', type: 'Objeto Mágico — Reliquia', desc: 'Monolito de granito cubierto de musgo y líquenes, tan alto y ancho como un mead hall. Grabada con runas e imágenes de la cosmología de Vigríð. Activada mediante sangre de un Tainted: la sangre corre por la roca, se ilumina como metal fundido, quema el musgo y revela el tapiz completo grabado. Las imágenes muestran el Guðfalla: Lik-Rifa enjaulada, Ulfrir encadenado, el Bosque de las Horcas, los dioses en guerra, Snaka enrollada sobre todos. Huele a "sangre derramada y juramentos" según Hundur. única piedra de juramento que sobrevivió a la destrucción sistemática (los demás fueron destruidos por mandato post-Guðfalla). Ubicada en la meseta más al sur de las Islas de la Escarcha. [Histórico: las piedras de juramento (vé-steinn) eran lugares sagrados nórdicos donde se juraban alianzas. La destrucción sistemática de estas piedras es el equivalente de borrar la historia religiosa del mundo.]',
        star: '★★★ Es un archivo de la historia del mundo, activable solo con sangre Tainted. Su supervivencia es casi un milagro. La luz que emite puede atraer vaesen. ¿Existen otras piedras ocultas en lugares remotos?'
    },
    {
        id: 'orka', label: 'Orka', group: 'ORKA', type: 'POV -- Personaje', desc: 'Mujer alta y rubia, ojos gris-verde. Exguerrera. Flashbacks violentos, episodios de rabia cegadora. Padre violento en la infancia. Capturo a Spert mediante vinculo de sangre. Tras el ataque al steading (ver nodo ataque-steading) y la muerte de Thorkel (ver nodo thorkel-muerte), persigue a los rezagados de Drekr hasta el rio y mata a cuatro: uno con lanza en la espalda, uno viejo con seax en el vientre y tripas fuera, la mujer con hacha repetida hasta pulpa en un acceso de rabia feral. Interroga al chico joven hasta obtener el nombre del lider: Drekr. Lo mata. Queda sola junto al rio con el nombre de quien le robo al hijo y mato al marido.',
        star: '*** Transformacion completa. El personaje que intentaba vivir en paz se convierte en maquina de venganza. La escena de la mujer a hachazos es la primera vez que vemos el lado verdaderamente oscuro de Orka -- no defensa, sino furia pura. Ahora tiene un objetivo: Drekr.'
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
        star: '★★ Thorkel usa hacha larga con hoja barbada — arma de campeón. Virk usó hacha de granjero y casi mata a Guðvarr. El hacha es el gran ecualizador social.'
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
        id: 'rokia', label: 'Rokia', group: 'VARG', type: 'Personaje -- Hermanos', desc: 'Guerrera alta, rubia, mirada de halcon. Escudo negro a la espalda. Entrena a Varg en escudo y lanza con pinchazos intencionales. Informa positivamente de Varg a Glornir. Guia a Varg en la compra de equipo en Liga. Recomienda el hacha de lanzar y el yelmo como mas importantes que la brynja (filosofia: ganar la brynja del cadaver del enemigo es la batalla-fama). En el muelle forma parte del muro de escudos que protege a Glornir de las flechas druzhina.',
        star: '** Pragmatismo de guerrera veterana: el yelmo salva mas vidas que la brynja porque un golpe en la cabeza mata siempre. Entra al muro de escudos alrededor de Glornir instintivamente.'
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
    //---------------------------------------Revisado----------------------------------//
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
        id: 'sjavarom', label: 'Sjávarorm (Serpiente Marina)', group: 'VAESEN', type: 'Vaesen', desc: 'Cabeza del tamaño de una cabaña, hileras de dientes, cuerpo sinuoso gris-verde. Atacó el Wave-Jarl. Controlada por la mujer de Berak con canto Seiðr (sangre de Snaka).',
        star: 'Revela el poder de la mujer de Berak: sangre de Snaka controla criaturas del mar.'
    },
    {
        id: 'skald', label: 'Skald (Bardo)', group: 'NORSE', type: 'Rol Social', desc: 'Poeta y narrador oral. Preservan historia, genealogías, hazañas. Aún no aparece skald prominente en la narrativa pero la tradición oral es fuerte (Grend cuenta mitos a Elvar). [Histórico: los skalds eran poetas cortesanos escandinavos que componían en metros complejos (dróttkvætt). Gwynne aún no los ha destacado pero la cultura oral de Vigríð los implica.]',
        star: '¿Aparecerá un skald en capítulos posteriores? La tradición oral es clave para entender cómo se recuerda el Guðfalla.'
    },
    {
        id: 'skjaldborg', label: 'Skjaldborg (Muro de Escudos)', group: 'NORSE', type: 'Tactica -- Formacion', desc: 'Formacion de combate: guerreros hombro con hombro, escudos superpuestos formando muro. Primera linea usa lanzas. Tactica defensiva de infanteria nordica. Elvar gano su puesto en el muro. Rokia entrena a Varg para el muro. Usado en combate real en los muelles de Liga contra la caballeria de Jaromir. Glornir lo ordena con un grito. Varg participa pero abandona el muro para subirse al caballo -- accion que funciona pero va contra toda la doctrina.',
        star: '** Primer combate real de Varg en el muro. Su instinto de abandonarlo y montar el caballo enemigo es tacticamente incorrecto pero funciona. La tension entre doctrina e instinto define su potencial como guerrero.'
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
        id: 'spert', label: 'Spert', group: 'ORKA', type: 'Vaesen -- Guardian (Herido)', desc: 'Spertus. Artropodo segmentado con cara casi humana, aguijon, antenas, vapor negro venenoso. Capturado por Orka con vinculo de sangre. Guarda el steading. Come papilla de sangre y saliva de Orka diariamente. HERIDO tras el ataque al steading (ver nodo ataque-steading): encontrado inmovil sobre la roca junto al arroyo, con un agujero en su cuerpo segmentado del que mana icor negro, rodeado de una docena de cuerpos de tennur muertos. Aparentemente muerto o moribundo.',
        star: '¿Esta muerto o es recuperable? Si muere, Orka pierde su guardian de sangre. Los tennur muertos sugieren que hubo una batalla de vaesen en el steading -- quien o que los mato junto con Spert?'
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
        id: 'steading', label: 'Steading (Granja)', group: 'NORSE', type: 'Vida Diaria -- Vivienda', desc: 'Granja autosuficiente. Casa principal, establos, almacenes, cercas. Unidad basica de vida rural. Orka y Thorkel construyeron su steading en las colinas sobre Fellur con sus propias manos. Asgrim tenia steading donde fue asesinado. El steading de Orka fue DESTRUIDO por la banda de Drekr (ver nodo ataque-steading): hall incendiado, galdr-runas obliteradas, animales muertos, establo vacio, pony Snort matado.',
        star: 'El steading de Orka ya no existe. La familia que lo construyo esta rota: Thorkel muerto, Breca raptado. El lugar fisico de la vida que eligieron ya no esta.'
    },
    {
        id: 'storr', label: 'Jarl Störr', group: 'FACCION', type: 'Facción — Amenaza', desc: 'Jarl poderoso al noroeste. En expansión constante hacia el sur y este. Tiene guardia personal de Berserkir-thrall. Destino de Berak. Tiene algo que ver con el pasado de Elvar.',
        star: ''
    },
    {
        id: 'sulich', label: 'Sulich', group: 'VARG', type: 'Personaje — Hermanos (Iskidano)', desc: 'Delgado, estatura media. Cabeza rapada excepto una larga trenza negra brillante como azabache. Piel oscura (único de tez oscura entre los Hermanos). Kaftan gris de lana abrochado al centro, calzones anchos con vendas ajustadas tobillo-rodilla. Escudo negro con salpicaduras rojas. Espada curva de un solo filo. Varg lo reconoce sin saber por qué. Miembro pleno de los Hermanos de Sangre, ha prestado juramento de sangre. Origen: Iskidan (su apariencia y armamento coinciden con los druzhina del Príncipe Jaromir). Jaromir irrumpe en el mead-hall reclamándolo por "grandes crímenes". Sulich come mutton ahumado con total calma mientras el príncipe lo confronta, sin dignarse mirarlo. Glornir se niega a entregarlo — el juramento de sangre es inviolable.',
        star: '★★★ ¿Qué crímenes cometió en Iskidan que hacen que un príncipe cruce el whale road para reclamarlo? Su calma es inquietante. El enfrentamiento queda sin resolver'
    },
    {
        id: 'svelgarth', label: 'Svelgarth', group: 'LUGAR', type: 'Lugar — Ciudad', desc: 'Ciudad al este de Vigríð. Dominio del Jarl Orlyg. Mencionada en el contexto político del Althing como otro territorio que debe decidir su postura ante la expansión de Helka.',
        star: ''
    },
    {
        id: 'svik', label: 'Svik Hrulfsson', group: 'VARG', type: 'Personaje -- Hermanos', desc: 'Pelo rojo trenzado, apuesto de barba aceitada. Tunica verde, anillos de plata, torc de serpientes. Apodo: Pelo-Enredado (ironico). Sarcastico, cuido a Varg de fiebre. Reclutador/negociador. Momento de profundidad: aceptar ayuda no es debilidad. Acompana a Varg a comprar equipo. Grita a Varg que se ponga el yelmo y vuelva al muro de escudos. Cuando Varg baja del caballo muerto, le sonrie con la cara salpicada de sangre y le pregunta que demonios hacia ahi arriba. Lucha en el muro de escudos.',
        star: '* La sonrisa de sangre y la pregunta a Varg revelan admiracion bajo el sarcasmo habitual. Es el primero en reconocer que lo que hizo Varg, aunque incorrecto tacticamente, funciono.'
    },
    {
        id: 'tainted', label: 'Tainted', group: 'COSMO', type: 'Facción — Perseguidos', desc: 'Descendientes de los dioses muertos. Portadores de poderes heredados. Perseguidos y cazados desde el Guðfalla. Controlados con collares de hierro activados por lengua Galdur. Vendidos a jarls poderosos. Hundur el Sabueso (Hundur-thrall), Berser el Oso (Berak), Snaka la Serpiente (Kráka y Uspa). Linajes vistos en Iskidan: el Toro, el Halcón, el Caballo — confirma que los Tainted están dispersos por todo el mundo conocido, no solo en Vigríð. Linaje NO confirmado: dragon-born de Lik-Rifa — Elvar arguye que ninguno ha sido visto jamás; Uspa escupe ante eso.',
        star: '★★★ ¿Varg tiene sangre Tainted? ¿Y Breca? Los dos protagonistas muestran señales. Y el linaje de Lik-Rifa sigue sin confirmar... o sin que nadie quiera admitirlo.'
    },
    {
        id: 'tennur', label: 'Tennur', group: 'VAESEN', type: 'Criatura', desc: 'A los Tennur les gustan los dientes y en manada son letales',
        star: ''
    },
    {
        id: 'thorkel', label: 'Thorkel Ulfsson (dagger)', group: 'ORKA', type: 'Personaje -- MUERTO', desc: 'Grande como un penasco. Barba trenzada con cicatriz de mejilla a mandibula. Ex-thrall. El mejor rastreador. Profundamente amoroso con Orka y Breca. Hacha de mango largo con hoja barbada. Capa de lobo. Identifico a la thrall de Sigrun como Ulfhednar. Acepto la huida sin resistencia. MUERTO defendiendo el steading contra la banda de Drekr (ver nodo thorkel-muerte).',
        star: '*** Contraste con Thorkel que nunca reclama el titulo de drengr pero lo encarna. Su nombre Ulfsson (hijo de Ulf/lobo) puede ocultar su linaje. Conocia subtipos de Tainted con certeza -- su pasado le dio ese conocimiento.'
    },
    {
        id: 'thrall', label: 'Thrall (Esclavo)', group: 'NORSE', type: 'Clase Social', desc: 'Esclavo. Collar de hierro como símbolo. Sin derechos legales. Varg y Thorkel fueron thralls. Los Tainted son esclavizados sistemáticamente. [Histórico: los þræll eran la clase más baja en la sociedad nórdica: prisioneros de guerra, deudores, hijos de esclavos. Gwynne expande esto: en Vigríð los Tainted son thralls por ley, controlados con collares mágicos.]',
        star: '★★★ La esclavitud es institución central en Vigríð. Los tres POV tienen conexión directa con ella: Varg y Thorkel ex-thralls, Orka usa thrall-vaesen.'
    },
    {
        id: 'thrall-sigrun', label: 'Thrall-Guerrera de Sigrun (Ulfhednar)', group: 'ORKA', type: 'Personaje -- Tainted (Lobo)', desc: 'Sin nombre revelado. Mato a Virk con sus dos seaxes en frenesi bestial; le mordio la cara. Ojos ambarinos en combate, dientes que se agudizan, fuerza para saltar metros. Thorkel la identifica como Ulfrir-kin. Thorkel la identifica mas precisamente como Ulfhednar -- guerrera-lobo de elite. Lamer la sangre de Thorkel preocupa a Orka como posible rastreo, aunque Thorkel senala que las Ulfhednar no son rastreoadores de sangre como los Hundur-kin -- aunque admite que los Tainted estan mestizados. Su existencia es la razon principal por la que Orka y Thorkel deciden huir del steading.',
        star: '*** ULFHEDNAR -- clase guerrera-lobo de elite dentro de los Ulfrir-kin. Si tiene sangre Hundur mezclada podria seguirlos a cualquier lugar. Su existencia fuerza la huida de la familia.'
    },
    {
        id: 'torc', label: 'Torc (Collar de Estatus)', group: 'NORSE', type: 'Símbolo — Riqueza', desc: 'Collar rígido de metal precioso (plata, oro) retorcido. Símbolo de riqueza, poder, juramentos. Sigrún lleva torc de plata. Svik lleva torc de plata retorcida con cabezas de serpiente. Agnar lleva torc de plata. Se otorgan como recompensa por servicio. [Histórico: los torcs eran joyas de estatus en culturas celtas y germánicas. En contexto nórdico, los anillos de brazo (armrings) eran más comunes, pero los torcs aparecen. Gwynne los usa como marcador visual de rango.]',
        star: '★ Torc = poder visible. Sigrún, Agnar, Svik los llevan. Contraste con Orka y Thorkel que no llevan joyas — rechazo deliberado de su pasado.'
    },
    {
        id: 'trol', label: 'Trol (bull-troll)', group: 'VAESEN', type: 'Vaesen', desc: 'Joven macho. Astas en el cráneo cubierto de musgo, piel escamada con musgo y liquen, colmillos de marfil, testiculos y territorios propios. Solitarios salvo en época de celo. Mató a varios guerreros de Terrores de la batalla antes de ser abatido. Sus partes (dientes, piel, testículos, corazón, hígado, uñas en polvo) se venden a buen precio.',
        star: ''
    },
    {
        id: 'trud', label: 'Trud', group: 'ELVAR', type: 'Personaje — Terrores de la batalla', desc: 'Guerrera de Terrores de la batalla. Herida de flecha en la pantorrilla durante el asalto a Iskalt. Su determinación de seguir en combate a pesar de la herida muestra el ethos de la compañía.',
        star: ''
    },
    {
        id: 'ulfrir', label: 'Ulfrir (Dios-Lobo)', group: 'DIOS', type: 'Dios Muerto — Lobo', desc: 'El dios-lobo, hijo de Snaka. Muerto en el Guðfalla. Sus descendientes son los Ulfrir-kin: Tainted con transformación parcial de lobo —ojos ambarinos, dientes que se agudizan, fuerza y velocidad bestiales, instinto depredador que supera el raciocinio—. La thrall-guerrera de Sigrún porta su sangre. [En la mitología nórdica real, los lobos Fenrir, Sköll y Háti son hijos del dios Loki, no de Odín. Gwynne reinterpreta la figura del lobo divino como un dios-padre independiente al igual que hizo con el oso Berser.]',
        star: '★★★ La thrall de Sigrún es Ulfrir-kin. Que Thorkel conozca el nombre exacto «Ulfrir-kin» sin titubear sugiere que tiene experiencia directa con este tipo de Tainted —o que su pasado oculto lo conecta con este mundo.'
    },
    {
        id: 'vaesen-gen', label: 'Vaesen', group: 'VAESEN', type: 'Criatura', desc: 'Criaturas del mundo subterráneo liberadas en el Guðfalla. Presencia en zonas remotas. Van desde peligrosos (trol, serpiente marina, araña de hielo) hasta domesticables (tennúr, Spertus). Los vaesen traders venden sus partes. Se vinculan con sangre a las criaturas ',
        star: ''
    },
    {
        id: 'varg', label: 'Varg', group: 'VARG', type: 'POV -- Personaje', desc: 'Ex-thrall de Snepil, ~30 inviernos. Hermana Froya muerta. Episodios de furia roja. Boxeador formidable. Bolsa de cuero con algo de Froya. Aprendiz de los Hermanos. Compra equipo en Liga con Svik y Rokia: tunicas, pantalones, winnigas, zapatos, gorra de nalbinding, seax, hacha de lanzar, yelmo de cuatro placas con forro de piel, instrumental medico, capa de foca. Recibe la lanza de Aslog (Hermano caido) de Glornir y el escudo negro de entrenamiento. Sintio presion extraña al acercarse a la astilla del Vackna (ver nodo objeto-viga). Primera batalla real en los muelles de Liga (ver nodo batalla-muelles): olvido quitar la cubierta de cuero de la lanza y subio a un caballo por primera vez -- instinto de combate bueno, tecnica en construccion.',
        star: '*** Primera muerte en combate. La cubierta de la lanza es el error mas revelador. Subir al caballo sin haberlo hecho nunca -- reaccion pura. La sensacion extraña del relic en la viga confirma posible sensibilidad magica -- otro indicador de sangre Tainted?'
    },
    {
        id: 'vergelmir', label: 'Vergelmir', group: 'LUGAR', type: 'Lugar — Mítico', desc: 'Cámara subterránea bajo Oskutreð. Allí Lik-Rifa está encadenada y devora almas de guerreros muertos. El camino de los muertos pasa por aquí: por eso los guerreros nórdicos son enterrados con armas en la mano, para poder combatirla. Grend afirma que los guerreros «atraviesan Vergelmir en el camino del alma».',
        star: '★★ Los terremotos de Iskalt son interpretados por Grend como Lik-Rifa forcejeando en Vergelmir. El umbral entre el mundo de los vivos y los muertos está vibrando.'
    },
    {
        id: 'vesli', label: 'Vesli', group: 'ORKA', type: 'Vaesen -- Aliada de Breca (Herida)', desc: 'Tennur hembra. Pequena, alas membranosas, dos filas de dientes, venas oscuras en piel rosada. Herida y expulsada de su manada. Breca la salvo. Juro lealtad de sangre al nino. Integrada en la familia de Orka. HERIDA GRAVE tras el ataque al steading (ver nodo ataque-steading): encontrada bajo un cuerpo en el hall en llamas, alas sueltas, cara empapada en sangre. Aparentemente muerta pero dio senales de vida. Orka la dejo junto al cuerpo de Thorkel al salir a perseguir a los raptores.',
        star: '** Sobrevivio al ataque pese a sus heridas previas. Su juramento de sangre con Breca sigue activo -- ¿podra rastrearlo cuando se recupere? ¿Intentara seguir a Orka? El lazo de sangre con Breca la hace un activo potencial en la persecucion.'
    },
    {
        id: 'vigrið', label: 'Vigríð', group: 'LUGAR', type: 'Lugar — Continente', desc: 'La Llanura de Batalla. El continente principal. Construido literalmente sobre los huesos de Snaka. Dividido entre jarls, reinas y hombres libres. Los vaesen son una presencia constante en las zonas remotas.',
        star: ''
    },
    {
        id: 'virk', label: 'Virk (†)', group: 'ORKA', type: 'Personaje — Muerto', desc: 'Pescador y exguerrero de Fellur. Dos hijos: Mord (mayor) y Lif (menor). MUERTO tras violar las reglas del holmganga contra Guðvarr -- ejecutado por la thrall de Sigrún (ver nodo holmganga-event). Documentaba el patrón de robos de niños en la región.',
        star: '★★ Su muerte deja a Mord y Lif huérfanos y con deseos de venganza. Los robos de niños que él documentaba quedan sin investigador. La información que tenía sobre el patrón muere con él —¿o la heredó alguien?'
    },
    {
        id: 'vol', label: 'Vol', group: 'VARG', type: 'Personaje -- Seidr', desc: 'Bruja Seidr de los Hermanos. Cara de lineas duras acentuada por tatuajes azules anudados en cuello y mandibula inferior. Collar de thrall bajo los tatuajes. Voz sorprendentemente suave para su aspecto severo. Actua con confianza y dignidad absolutamente inusuales en un thrall -- Varg lo nota. Primera interaccion directa con Varg. Cuando el pide el akall, ella comienza a responder afirmativamente (insinuando que esta dispuesta) pero Glornir la interrumpe. La mira un largo momento antes de seguirlo.',
        star: '*** Vol esta DISPUESTA a hacer el akall -- es Glornir quien lo bloquea, no ella. Su mirada larga a Varg antes de seguir a Glornir puede ser curiosidad, simpatia o algo mas. Su dignidad a pesar del collar es uno de los paralelos mas fuertes con Kráka (Terrores de la batalla).'
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
        id: 'weregild', label: 'Weregild (Precio de Sangre)', group: 'NORSE', type: 'Ley — Compensación', desc: 'Compensación monetaria por asesinato. Alternativa a la venganza de sangre. El asesino/su familia paga al clan de la víctima. Evita ciclos de venganza interminables. No mencionado explícitamente pero implícito en el sistema legal nórdico de Vigríð. [Histórico: el wergild era fundamental en ley germánica/nórdica. Cada persona tenía un "precio" según su estatus. Pagar wergild cerraba la deuda de sangre legalmente. Gwynne probablemente lo usa off-screen.]',
        star: 'Mord y Lif no reciben weregild por Virk — Sigrún justificó la muerte como legal. Esto alimenta su sed de venganza: sin compensación, solo queda la sangre.'
    },
    {
        id: 'wyrd', label: 'Wyrd (Destino)', group: 'NORSE', type: 'Concepto — Filosofía', desc: 'Destino inevitable. Los guerreros nórdicos de Vigríð creen que su wyrd está tejido y no puede evitarse. Morir con honor es cumplir el wyrd. [Histórico: wyrd (nórdico antiguo: urðr) era el concepto nórdico del destino tejido por las Nornas. No era predestinación cristiana sino red de consecuencias. Gwynne lo preserva como filosofía de vida en Vigríð.]',
        star: 'Los personajes hablan de wyrd como fuerza real. ¿Es solo creencia o hay magia del destino en Vigríð?'
    },
    // ══════════════════════════════════════════════════════════════
    // CAPÍTULO 13 — NUEVOS NODOS
    // ══════════════════════════════════════════════════════════════
    {
        id: 'torvik', label: 'Torvik', group: 'VARG', type: 'Personaje — Aspirante Hermanos', desc: 'Joven con la mitad de la edad de Varg. Pelo negro, mechones en barbilla, ojos azules. Tunica chamuscada, munecas gruesas. Scout bajo Edel; aprendiz de Jokul. Aspirante sin juramento como Varg. Entusiasta. Porta armring de Jokul con cabezas de sabueso. Marcha junto a Varg al salir de Liga. Revela que el objeto en la viga de la sala de Logur es una astilla del Cuerno Vackna -- regalo de Skullsplitter (jefe anterior de los Hermanos) a Logur. Explica el rol de los Hermanos: protegen Liga de piratas a cambio de hospitalidad.',
        star: '** fuente de informacion clave sobre el relic del Vackna y la historia de los Hermanos. Conoce a Skullsplitter por nombre -- lleva mas tiempo en la orbita del grupo que Varg.'
    },
    {
        id: 'edel', label: 'Edel', group: 'VARG', type: 'Personaje — Escoutmaestre', desc: 'Escoutmaestre de los Hermanos. Mujer de cabello plateado. Sabuesos-lobo constantes a su lado. Torvik es su scout. En la batalla del muelle, sus sabuesos-lobo derriban un caballo de los druzhina. Edel y sus hounds actuan como unidad tactica separada del muro -- flanquean y cazan monturas en vez de guerreros.',
        star: '** Sus hounds son armas de combate. Tumbar un caballo en batalla requiere animales especificamente entrenados. ¿Son los mismos sabuesos que tienen relacion con los Tainted Hundur-kin?'
    },
    {
        id: 'galinn', label: 'Galinn el Skáld', group: 'VARG', type: 'Personaje — Skáld', desc: 'El Skáld de Liga. Según Jarl Logur: "el mejor skáld de todo el mundo." Apariencia: pelo oscuro, apuesto, túnica verde de lana con trabajo de nudos bordado en cuello y dobladillo, anillos de plata brillando rojos en la luz de las antorchas. Toca una lira de siete cuerdas con música "dulce y melancólica". interpreta la saga completa de la Guðfalla ante toda la asamblea, llevando a los oyentes mentalmente al campo de batalla de los dioses. Desaparece en las sombras cuando llegan los visitantes de Iskidan.',
        star: '★ Nuevo detalle cosmológico: Svin, Tosk, Rotta, el Vackna, el Monte Eldrafell. El skáld como portador de historia y memoria del mundo.'
    },
    {
        id: 'sergei', label: 'Sergei Yanasson de Ulaz', group: 'FACCION', type: 'Personaje — Mercader Iskidano', desc: 'Mercader de Ulaz (ciudad o región de Iskidan). Viejo amigo y "viejo zorro" según Jarl Logur — se conocen hace mucho. Vestimenta: kaftan fino de lana, gorro con ribete de piel, pantalones amplios y a rayas con vendas ajustadas desde el tobillo hasta la rodilla. Sirve de intermediario y herald para el Príncipe Jaromir: anuncia su llegada de forma ceremonial aunque Logur le corta el protocolo por ser viejos amigos. Cuando el enfrentamiento entre Glornir y Jaromir escala, salta entre ellos para evitar el derramamiento de sangre en el hall.',
        star: '★ Su papel de mediador es clave. Conoce las costumbres de Vigríð ("sus maneras no son las nuestras") y las usa para calmar al príncipe. ¿Tiene agenda propia además de servir a Jaromir?'
    },
    {
        id: 'jaromir', label: 'Principe Jaromir', group: 'FACCION', type: 'Personaje — Poder Externo', desc: 'Hijo del Gran Khagan Kirill. Principe de Gravka. Cabeza rapada, trenza rubia, armadura laminar, yelmo de borde de oro, halcon. llega a Liga reclamando a Sulich, ultimatum al Althing. Bloquea el muelle con caballeria druzhina cuando ve zarpar el Sea-Wolf. Solo huyen los culpables. Ofrece ultima oportunidad. Cuando Glornir dice no, le lanza una flecha directamente -- Glornir la derriba en el aire. Grita LOOSE, desata 40-50 flechas. Ordena carga de caballeria. Detiene el combate al ver llegar los tres drakkars de Helka.',
        star: '*** escala de ultimatum a combate total en segundos. Lanzar una flecha a Glornir en persona es un insulto extremo -- Glornir la derriba. La llegada de Helka es lo unico que lo para.'
    },
    {
        id: 'ilia', label: 'Ilia', group: 'FACCION', type: 'Personaje — Druzhina', desc: 'Una de las dos druzhina que escoltan al Príncipe Jaromir. Mujer. Armadura laminar, yelmo con penacho de crin, malla remachada. cuando Glornir se niega a entregar a Sulich, Ilia da un paso al frente y agarra su sable, ofreciéndose a "tomar su cabeza por su insolencia". El príncipe la detiene con una palabra ("Hold, Ilia"). Temperamento: leal, explosiva, sin miedo a confrontar a toda una sala de guerreros.',
        star: 'Dispuesta a desafiar a 60+ Hermanos de Sangre armados sin dudarlo — o es fanática o confía ciegamente en Jaromir.'
    },
    {
        id: 'druzhina', label: 'Druzhina (Élite de Iskidan)', group: 'FACCION', type: 'Concepto — Institución Militar', desc: 'Guardia de élite personal de los príncipes y del Gran Khagan de Iskidan. Escalan con el rango: un príncipe tiene 2 druzhina; el Gran Khagan tiene 200. Equipo distintivo: armadura laminar (lamellar plate) que brilla como escamas de pez, yelmos de hierro con plumón de crin de caballo y cortinas de malla remachada, carcajs y arcos, sables curvos, hachas de asta larga y hoja pequeña. Cabello en una sola trenza larga. [Histórico: la druzhina histórica era la guardia personal de los príncipes eslavos y rusos (s. IX-XIII). Sistema de lealtad personal similar al hird nórdico. Gwynne la adapta a Iskidan como equivalente oriental del hird.]',
        star: '★ Paralelo cultural con el hird nórdico: en ambos sistemas la lealtad personal al señor lo es todo. La diferencia es la escala — el Khagan proyecta poder a escala imperial.'
    },
    {
        id: 'sulich-crisis', label: 'Crisis por Sulich', group: 'TRAMA', type: 'Trama — Interrumpida por Helka', desc: 'Jaromir de Iskidan exige a Sulich de los Hermanos. Confrontacion en el mead-hall, Glornir se niega. Jaromir bloquea el muelle cuando ve zarpar el Sea-Wolf. Lanza flecha a Glornir (que la derriba). Desata lluvia de flechas y carga. Batalla total hasta que la flota de Helka entra al fiordo y detiene todo. Sulich nunca fue entregado. Crisis suspendida -- no resuelta.',
        star: '** Resuelta provisionalmente por la llegada de Helka. Jaromir no tiene a Sulich, Glornir no ha zarpado, y ahora hay una reina de media Vigrið en el puerto. La dinamica de poder cambia completamente.'
    },
    {
        id: 'vackna', label: 'Vackna (Cuerno-Despertador)', group: 'COSMO', type: 'Objeto Mitico -- Reliquia Real', desc: 'El cuerno que sono al alba e inicio el Gudfalla, llamando a los dioses a la batalla. Cantado por Galinn. CONFIRMADO como reliquia fisica real -- una astilla del Cuerno Vackna esta incrustada en la viga de la sala de Logur. El jefe anterior de los Hermanos, Skullsplitter, la regalo a Logur. El relic ha enriquecido al jarl. Varg habia notado la astilla sintiendo una sensacion extraña.',
        star: '*** Reliquia fisica activa en el mundo. El relic confiere riqueza -- los relics divinos tienen poder real en Vigrið, no solo simbolico. ¿Cuantos fragmentos del Vackna existen? ¿Quien tiene los demas?'
    },
    {
        id: 'eldrafell', label: 'Monte Eldrafell', group: 'LUGAR', type: 'Lugar — Mítico', desc: 'Montaña volcánica donde cayó Snaka durante el Guðfalla. Según la saga de Galinn: "Snaka cayó — su veneno ardiente, su cuerpo rompiendo la tierra, montaña quebrando, quebró las laderas del Monte Eldrafell." Su caída formó el volcán o lo amplió. [Eldrafell = posiblemente del nórdico "eldur" (fuego) + "fell" (montaña) = "Montaña de Fuego". En la mitología real nórdica, el cuerpo de Ymir formó el mundo; Gwynne hace que el cuerpo de Snaka forme el paisaje volcánico de Vigríð.]',
        star: '¿Es Eldrafell la misma montaña de fuego de Iskalt que tiembla en los capítulos anteriores? Si Snaka cayó allí, su cuerpo podría ser el origen literal de los temblores — no Lik-Rifa.'
    },
    {
        id: 'svin', label: 'Svin (Dios-Jabalí)', group: 'DIOS', type: 'Dios Muerto', desc: 'Uno de los hijos de Snaka. Epíteto en la saga de Galinn: "Svin el Valiente". Combatió en la Guðfalla. Su linaje entre los Tainted y su forma de muerte no han sido revelados aún. [Del nórdico svín = jabalí. En la mitología nórdica, el jabalí era animal sagrado asociado con Freyr y la fertilidad. Gwynne lo convierte en una deidad independiente dentro de su panteón de hijos de Snaka.]',
        star: '¿Cuál es el poder de los Tainted con sangre de Svin? ¿Dónde está su cuerpo muerto?'
    },
    {
        id: 'tosk', label: 'Tosk (Dios Travieso)', group: 'DIOS', type: 'Dios Muerto', desc: 'Uno de los hijos de Snaka. Epíteto en la saga de Galinn: "Tosk el Travieso". Combatió en la Guðfalla. Su aspecto, linaje y muerte no han sido revelados aún. [Paralelo posible con Loki nórdico: el embaucador/trickster del panteón. Gwynne lo incluye entre los hijos de Snaka que lucharon en la guerra de los dioses.]',
        star: '¿Hay Tainted de sangre Tosk con poderes de engaño o ilusión? Su epíteto "travieso" insinúa habilidades no directamente marciales.'
    },
    {
        id: 'rotta', label: 'Rotta (Dios Rata)', group: 'DIOS', type: 'Dios Muerto — Traidor', desc: 'Uno de los hijos de Snaka. Epíteto: Rotta el Engañoso. Del nórdico rotta = rata — animal de la traición. Fue Rotta quien alimentó la paranoia de Lik-Rifa haciéndola creer que Orna planeaba matarla. Sin Rotta, Lik-Rifa no habría asesinado a la hija de Orna. Rotta es el detonante oculto de la guerra que destruyó el mundo. No un combatiente de frente — un susurrador. Su muerte y Tainted no revelados aún.',
        star: '★★ Rotta no solo luchó en la guerra — la CAUSÓ. Convirtió una paranoia en un asesinato y ese asesinato en apocalipsis. El Tainted de sangre Rotta sería maestro de desinformación y traición.'
    },
    {
        id: 'salla', label: 'Salla', group: 'FACCION', type: 'Personaje -- Secundario', desc: 'Esposa del Jarl Logur de Liga. Alta y elegante, cara abierta y honesta. Cabello trenzado y apilado, mas gris que rubio. Viste vestido de lana azul profundo con hangerock bordado y cinturon de tablet-weave con llaves -- senora del hall. Se sienta a la derecha de Logur en la mesa de honor. Cuando Logur promete generosamente enviar a los Hermanos con barriles y vientres llenos, Salla se queda un momento y dice con una sonrisa a Glornir: "Quiere decir que me pedira a mi que lo organice todo." Glornir le hace una reverencia de cabeza y la llama por su nombre.',
        star: 'Nombre confirmado: Salla. Su comentario ironico sobre Logur revela una relacion de pareja real -- ella gestiona, el promete y se lleva el credito. Glornir le hace una reverencia -- la respeta.'
    },
    {
        id: 'gudfall-saga-galinn', label: 'Saga del Guðfalla (Galinn)', group: 'EVENTO', type: 'Evento', desc: 'El Skáld Galinn recita la saga completa del Guðfalla en el festín del Jarl Logur. Es la primera narración poética completa de la caída de los dioses en la novela. Revela: el Vackna que inició la guerra, los nombres y epítetos de todos los dioses que combatieron, cómo murieron (Berser perforado, Orna desgarrada, Ulfrir muerto, Lik-Rifa encadenada, Snaka caído en Eldrafell), y que los vaesen "treparon desde el foso" tras la caída. Toda la sala queda absorta — Varg siente que está de pie en la Llanura de Batalla viendo la guerra. La saga se interrumpe cuando los mensajeros de Iskidan aporrean las puertas.',
        star: '★★ Función narrativa dual: proporciona al lector la cosmología completa Y el timing de la llegada de Jaromir genera tensión dramática máxima al interrumpir el momento más épico del festín.'
    },
    // ══════════════════════════════════════════════════════════════
    // CAPÍTULO 14 — NUEVOS NODOS
    // ══════════════════════════════════════════════════════════════
    {
        id: 'night-wyrm', label: 'Gusanos Nocturnos (Night-Wyrms)', group: 'VAESEN', type: 'Vaesen — Subterráneo', desc: 'Vaesen vermiformes que viven en el subsuelo. Delgados y pálidos, cada uno tan grueso como un pulgar, tan largos como un seax. Se mueven en colonias de miles de individuos. Emergen de noche del suelo como un cubo de gusanos cubiertos de baba. Sus cerdas rascan la piel. Se introducen por nariz y boca para asfixiar a las presas. Paralizan con su peso colectivo envolviéndose alrededor de muñecas, tobillos y garganta. Repelidos eficazmente por el fuego. Atacan al campamento de Terrores de la batalla en la meseta de las Islas de la Escarcha, posiblemente atraídos por la luz de la piedra de juramento. Matan a al menos un guerrero (garganta llena de wyrms). Biórr los repele con una antorcha.',
        star: '★★ Primera vez que aparece este vaesen. Su capacidad de surgir del suelo en miles y de introducirse en el cuerpo los hace singularmente aterradores. ¿Los atrajo la piedra de juramento o simplemente la noche?'
    },
    {
        id: 'frost-isles', label: 'Islas de la Escarcha', group: 'LUGAR', type: 'Lugar — Archipiélago', desc: 'Archipiélago al sur de Iskalt. La isla más meridional tiene una meseta con la única piedra de juramento superviviente conocida. Playas de grava estrechas, laderas escarpadas, alerces en el borde oriental de la meseta. Dos días al sur de Iskalt. El Wave-Jarl acampa aquí huyendo de una tormenta que se aproxima por el este.',
        star: 'Ubicación de la piedra de juramento superviviente. Su aislamiento explica por qué nadie la destruyó.'
    },
    {
        id: 'gallows-wood', label: 'Bosque de las Horcas', group: 'COSMO', type: 'Evento Mítico', desc: 'El primer acto de venganza de sangre en la historia de Vigríð. Lik-Rifa mató a la hija primogénita de Orna y Ulfrir y le arrancó las alas de la espalda. Como venganza, Orna y Ulfrir cazaron a la descendencia Tainted de Lik-Rifa, les abrieron la espalda, les arrancaron las costillas hacia afuera imitando alas, y colgaron los cadáveres de los árboles. Ese acto fundacional se convirtió en el blood-eagle (Águila de Sangre) —una forma de ejecución que los humanos de Vigríð heredaron de los dioses. Revelado ante la piedra de juramento a través de las imágenes grabadas — figuras con alas esqueléticas colgadas de ramas. Elvar recuerda la historia.',
        star: '★★★ El blood-eagle no es una invención humana — es un ritual copiado del primer acto de venganza divina. Los humanos de Vigríð están repitiendo sin saberlo los crímenes de los dioses. La violencia sagrada tiene un linaje.'
    },
    {
        id: 'blood-eagle', label: 'Águila de Sangre (Blood-Eagle)', group: 'NORSE', type: 'Ritual — Ejecución', desc: 'Forma extrema de ejecución ritual: abrir la espalda, separar las costillas hacia afuera como alas, exponer los pulmones. En Vigríð se practica como acto de venganza máxima. Origen revelado — es una imitación directa de cómo Orna y Ulfrir ejecutaron a los hijos Tainted de Lik-Rifa en venganza por el asesinato de su hija. El primer blood-eagle lo practicaron los propios dioses. [Histórico: el blóðörn aparece en sagas nórdicas como ejecución de alta traición. Su historicidad es debatida, pero Gwynne lo reinterpreta dándole un origen mítico explícito: los dioses lo inventaron.]',
        star: '★★ Los humanos de Vigríð practican rituales que copiaron inconscientemente de los dioses. La violencia tiene memoria más larga que quienes la ejercen.'
    },
    {
        id: 'hundur-dios', label: 'Hundur (Dios-Sabueso)', group: 'DIOS', type: 'Dios Muerto — Sabueso', desc: 'Uno de los hijos de Snaka. Dios-sabueso. Su sangre en el Hundur-thrall confiere olfato sobrehumano que puede detectar rastros de "sangre derramada y juramentos" en una piedra cubierta de musgo. Elvar lo nombra explícitamente al señalar al thrall-Hundur: "Veo la sangre de Hundur el Sabueso en ti." Su muerte en el Guðfalla no ha sido detallada. [Posible paralelo con Garm, el perro guardián del Hel nórdico, o con los sabuesos de Odín, Geri y Freki.]',
        star: '¿Qué otros poderes tiene la sangre de Hundur además del olfato? ¿Sus Tainted pueden rastrear magia además de personas?'
    },
    {
        id: 'dragon-born', label: 'Dragon-Born (Tainted de Lik-Rifa)', group: 'TRAMA', type: 'Trama -- CONFIRMADA', desc: 'Tainted con sangre de la diosa-dragon Lik-Rifa. Elvar arguye que nunca se ha confirmado ninguno -- nadie en sus viajes lo ha visto. Uspa escupe. CONFIRMACION DEFINITIVA. Las ultimas palabras de Thorkel (moribundo tras defender el steading) son: Dragon-born. Thorkel, el mejor rastreador e identificador de Tainted de los Hermanos conocidos, murio combatiendo a alguien de linaje dragon. Eso significa que Drekr opera con al menos un dragon-born en su banda. Elvar estaba completamente equivocada. Uspa lo sabia.',
        star: '*** CONFIRMADO. Thorkel lo dice con su ultimo aliento -- el hombre que identifico a una Ulfhednar sin titubear no se equivocaria en esto. Un dragon-born (Tainted de Lik-Rifa) esta activo en Vigrið, trabajando para Drekr. Cambia toda la cosmologia del libro.'
    },

    // ==========================================================
    // CAPITULO 15 -- NUEVOS NODOS
    // ==========================================================
    {
        id: 'ulfhednar', label: 'Ulfhednar (Guerrera-Lobo)', group: 'COSMO', type: 'Concepto -- Elite Tainted Lobo',
        desc: 'Clase de elite dentro de los Tainted de sangre Ulfrir. No son simplemente portadores de sangre de dios-lobo -- son guerreros-lobo de elite, equivalente lupino a los Berserkir de Berser. Thorkel identifica a la thrall de Sigrun como Ulfhednar con certeza, sin titubear. Distingue entre Ulfhednar (guerreras-lobo) y Hundur-kin (rastreadores de sangre) -- son tipos distintos de Tainted, aunque los linajes pueden mezclarse. [Historico: los ulfhednar nordicos eran guerreros consagrados a Odín que vestian pieles de lobo y entraban en trance de furia animal, paralelos a los berserkir pero de lobo en vez de oso. Gwynne los reinterpreta como linaje divino real de Ulfrir.]',
        star: '*** Confirmar Ulfhednar (no solo Ulfrir-kin) eleva la amenaza considerablemente. Thorkel sabe distinguir subtipos de Tainted -- su pasado le dio ese conocimiento. ¿Cuantas Ulfhednar hay en Vigrið? ¿Sigrun sabe lo que tiene?'
    },
    {
        id: 'arbol-froa', label: 'Arbol de Froa (destruido)', group: 'LUGAR', type: 'Lugar -- Destruido',
        desc: 'Arbol de fresno en un montIculo sobre un prado cruzado por un rio, al sureste del steading de Orka. Froa lo habitaba y guardaba. Nacido de una semilla del gran Oskutred. Destruido -- derribado con muchas hachas y quemado en grandes manchas. El tronco yace astillado. Las raices azotaron a los atacantes levantando la tierra. Manchas de sangre oscura congelada confirman bajas entre los agresores. Significado para Orka: era su lugar de paz y referencia espiritual en el bosque. Acudia alli a pedir consejo y agradecer la proteccion.',
        star: '** Su destruccion es deliberada y organizada. Requirio muchos hombres y sufrieron perdidas. Alguien esta eliminando sistematicamente los guardianes del bosque. ¿Por que? ¿Para que la region quede sin proteccion?'
    },
    {
        id: 'decision-huida', label: 'Decision de Huir', group: 'TRAMA', type: 'Trama -- Activa',
        desc: 'Orka propone a Thorkel abandonar el steading antes de que sea demasiado tarde, motivada por la amenaza de la Ulfhednar de Sigrun que probo la sangre de Thorkel. Thorkel acepta sorprendentemente rapido -- sin resistencia. Plan de Orka: pedir consejo a Froa sobre adonde ir, a un lugar donde haya otro de sus parientes. El plan queda en suspension al encontrar a Froa muerta y escuchar gritos al oeste.',
        star: '*** Trama activa urgente. El plan de huida se rompe antes de ejecutarse. Los gritos al oeste sugieren que la amenaza ya llego a su umbral. ¿Podran huir a tiempo?'
    },
    {
        id: 'colgante-espada', label: 'Colgante de Espada (Breca)', group: 'OBJETO', type: 'Objeto -- Simbolico',
        desc: 'Pequeno colgante de madera tallado con forma de espada, con pomo de tres lobulos y guarda curva. Colgado de un cordon de cuero al cuello de Breca. Orka lo ve cuando mira a Breca dormido -- lo describe como bien tallado. Thorkel debe haberlo taladrado y encontrado el cordon. Recordatorio del deseo de Breca de aprender esgrima, y tension con la preferencia de Thorkel por el hacha. [Nota: el pomo de tres lobulos es un diseno tipico de espada vikinga de los s. IX-X.]',
        star: '* Pequeno objeto con peso simbolico grande -- anticipa el destino guerrero de Breca. El que Thorkel lo haya hecho revela que acepta, aunque no comparta, la aspiracion de su hijo.'
    },
    {
        id: 'barrow-virk', label: 'Tumulo de Virk', group: 'EVENTO', type: 'Evento',
        desc: 'Tumulo funerario (barrow) construido sobre la tumba de Virk en Fellur por sus hijos Mord y Lif con ayuda de Orka y Thorkel. Despues del Althing, la familia de Orka se quedo en Fellur el tiempo necesario para ayudar a levantarlo. Mord y Lif recibieron a Orka y familia en su hogar con bacalao salado y salmon ahumado. [Historico: los tumulos funerarios nordicos (haugr) eran montIculos de tierra sobre la tumba del guerrero, marcadores de honor en el paisaje. Enterrar al muerto correctamente era obligacion de los vivos para asegurar su paso por Vergelmir.]',
        star: 'El barrow convierte la muerte de Virk en hecho permanente del paisaje. Mord y Lif cumplieron con su deber de hijos -- ahora la venganza pesa sobre ellos.'
    },
    // ==========================================================
    // CAPITULO 16 -- NUEVOS NODOS
    // ==========================================================
    {
        id: 'objeto-viga', label: 'Astilla del Cuerno Vackna (en la Viga)', group: 'OBJETO', type: 'Objeto -- Reliquia Divina', desc: 'Varg nota algo palido como hueso con extremo de plata incrustado en la viga de la sala de Logur, con cuervo posado encima. Siente presion extraña al acercarse. IDENTIFICADO por Torvik como astilla del Cuerno Vackna -- el cuerno que inicio el Gudfalla. Regalo de Skullsplitter (jefe anterior de los Hermanos) al Jarl Logur. Ha enriquecido a Logur.',
        star: '*** Misterio resuelto. La sensacion de presion que Varg sintio revela posible sensibilidad magica -- otro indicador de sangre Tainted?'
    },
    {
        id: 'varg-aprendiz', label: 'Estatus de Aprendiz (Varg)', group: 'TRAMA', type: 'Trama -- Estado Actual',
        desc: 'Glornir define el estatus formal de Varg dentro de los Hermanos de Sangre. No es Hermano -- es aprendiz. Los tres pilares que debe demostrar para convertirse en Hermano pleno: (1) habilidad en combate (Rokia dice que es rapido, equilibrado y tiene espiritu guerrero -- el bloque es la falta de tecnica con armas), (2) cualidades de la cabeza = lealtad, y (3) cualidades del corazon = devocion hasta la muerte. Durante el periodo de aprendizaje: la compania lo alimenta, protege y ensena; el obedece, aprende y lucha. El juramento de sangre y el akall de Froya quedan suspendidos hasta que se gane el derecho.',
        star: '*** Marco narrativo claro para el arco de Varg: el lector sabe exactamente que tiene que demostrar y que obtendra a cambio. El akall es el premio al final del camino de prueba.'
    },
    {
        id: 'partida-liga', label: 'Partida de Liga (Bloodsworn)', group: 'EVENTO', type: 'Evento',
        desc: 'Los Hermanos de Sangre zarpan de Liga con la marea. Glornir declina la hospitalidad adicional de Logur (la tripulacion esta inquieta por la inactividad). Logur los despide prometiendo barriles llenos -- Salla sera quien lo organice. Varg zarpa con ellos como aprendiz, con equipo comprado con la bolsa de monedas de Glornir. NOTA: la crisis de Sulich/Jaromir queda sin resolucion visible -- Jaromir prometio regresar al dia siguiente pero los Hermanos se van.',
        star: '** La partida sin resolver el asunto de Jaromir es llamativa. ¿Se fueron antes de que llegara? ¿Se resolvio off-screen? ¿O Glornir deliberadamente huyo de la confrontacion del Althing?'
    },
    // ==========================================================
    // CAPITULO 17 -- NUEVOS NODOS
    // ==========================================================
    {
        id: 'drekr', label: 'Drekr', group: 'ORKA', type: 'Personaje -- Antagonista Principal',
        desc: 'Nombre obtenido por Orka al interrogar al joven superviviente en el rio. Es el lider (gold-giver) de la organizacion que rapta ninos en la region de Fellur. Organizo el ataque al steading de Orka: quemo las galdr-runas protectoras (necesito un Galdurman o Seidr-witch), dirigio una banda numerosa, y se llevo a Breca vivo. Su operacion utiliza al menos un dragon-born Tainted (confirmado por las ultimas palabras de Thorkel). Huye por el rio con los supervivientes y los ninos raptados. Probablemente conectado con los casos anteriores: Harek, los Haraldurson, los de Kergarth.',
        star: '*** ANTAGONISTA PRINCIPAL del arco Orka. El libro entero del arco Orka ha sido la construccion lenta hacia este nombre. Opera con magia (Galdurman/Seidr), con dragon-born, con grupos numerosos y organizados. Sus motivos y destino final de los ninos son la gran pregunta abierta.'
    },
    {
        id: 'ataque-steading', label: 'Ataque al Steading de Orka', group: 'EVENTO', type: 'Evento -- Crisis',
        desc: 'La banda de Drekr ataca el steading de Orka mientras ella esta en el bosque buscando a Froa. Cronologia del ataque: (1) queman o destruyen las galdr-runas de proteccion (solo un Galdurman o Seidr-witch puede hacer esto), (2) el joven infiltrado abre la puerta desde dentro, (3) la banda entra en el steading, (4) Thorkel retrocede hasta el hall, barra la puerta y aguanta el umbral mas estrecho matando a 5-6 atacantes, (5) le clavan dos seaxes (pecho y vientre), (6) se llevan a Breca vivo en dos botes por el rio, (7) cuatro rezagados se quedan a matar el pony Snort para comida. Spert queda herido rodeado de tennur muertos. Vesli queda bajo un cuerpo, gravemente herida pero viva.',
        star: '*** Evento pivote del libro. Thorkel muerto. Breca raptado. Steading destruido. El atacante con magia confirma que Drekr tiene recursos sobrenaturales. El infiltrado (el chico joven) abrio la puerta desde dentro -- acceso interno.'
    },
    {
        id: 'thorkel-muerte', label: 'Muerte de Thorkel', group: 'EVENTO', type: 'Evento -- Muerte POV',
        desc: 'Thorkel Ulfsson muere en brazos de Orka tras defender el steading contra la banda de Drekr. Defendio solo: retrocedio hasta el hall, barro la puerta y aguanto el umbral mas estrecho donde el numero no contaba. Mato a cinco o seis atacantes -- uno con la cabeza partida de corona a menton por su hacha larga. Fue apunalado con dos seaxes -- uno alto en el pecho, uno en el vientre. Aun respiraba cuando Orka llego. Ultimas palabras: They took Breca y despues Dragon-born. Orka pasa sus dedos por sus labios y frota su sangre sobre su propia cara en franjas (ritual de duelo/guerra). Le coloca su hacha larga en las manos para el paso por Vergelmir. El hall se derrumba encima del lugar donde yacia.',
        star: '*** Muerte de personaje principal POV. Sus dos ultimas palabras son las revelaciones mas grandes del libro: (1) confirma que Drekr se llevo a Breca vivo, (2) Dragon-born -- murio combatiendo a un Tainted de linaje de Lik-Rifa. Elvar estaba equivocada. Uspa tenia razon. Orka le da un final digno con el hacha en las manos -- morira bien armado para Vergelmir.'
    },
    {
        id: 'galdurman-drekr', label: 'Galdurman/Seidr de Drekr', group: 'TRAMA', type: 'Trama -- Personaje sin Nombre',
        desc: 'Alguien en la banda de Drekr tiene poder de Galdur o Seidr suficiente para quemar y destruir completamente las galdr-runas de proteccion del steading. Orka lo confirma al ver el poste de runas destruido: solo un Galdurman o Seidr-witch podria haberlo hecho. Este individuo sin nombre es un activo clave de la organizacion de Drekr -- sin el, no podrian penetrar los steadings protegidos. Puede ser el mismo dragon-born que identifico Thorkel, o un segundo miembro magico del grupo.',
        star: '*** Sin nombre. Sin descripcion. Pero su existencia confirma que Drekr no es solo un jefe de banda comun -- tiene acceso a magia de alto nivel. ¿Es el dragon-born el Galdurman? ¿O son dos personas diferentes?'
    },
    {
        id: 'chico-joven', label: 'Joven Infiltrado (dagger)', group: 'ORKA', type: 'Personaje -- Muerto',
        desc: 'sobrino del hombre muerto encima de Snort el pony. Fue contratado por su tio para abrir la puerta del steading de Orka desde dentro -- ojos agudos, brazos largos y pies silenciosos, contratado a cambio de oro. No era un guerrero -- fue un medio de acceso. Interrogado por Orka en el rio: revela que Breca fue llevado por el rio y que el lider se llama Drekr. Muere a manos de Orka cuando la informacion ha sido obtenida.',
        star: 'El infiltrado fue el punto de quiebre del steading -- la proteccion galdr-runica no sirve contra un humano que abre la puerta. La vulnerabilidad no era magica sino humana.'
    },
    {
        id: 'drekr-cazadora', label: 'La Caza de Drekr', group: 'TRAMA', type: 'Trama -- Nueva Direccion',
        desc: 'inicio del nuevo arco de Orka: con Thorkel muerto y Breca raptado, Orka tiene un objetivo unico -- encontrar a Drekr y recuperar a su hijo. Solo sabe el nombre y que los botes tomaron el rio hacia el norte (hacia el fiordo y Fellur). El rio se bifurca en dos canales pasado un penasco de granito -- no sabe que camino tomaron. Puntos de partida: el rio lleva al fiordo y a Fellur, y la red de raptos parece tener radio de accion en la region.',
        star: '*** Nuevo motor narrativo del arco Orka. Pasa de ser una madre que intentaba vivir en paz a una cazadora sin nada que perder. Tiene el nombre, tiene las armas de Thorkel, tiene el rastro en el rio. No tiene a nadie a quien pedir ayuda. ¿O si?'
    },
    // ==========================================================
    // CAPITULO 18 -- NUEVOS NODOS
    // ==========================================================
    {
        id: 'sea-wolf', label: 'Sea-Wolf (Lobo del Mar)', group: 'VARG', type: 'Objeto -- Drakkar',
        desc: 'El drakkar de los Hermanos de Sangre. Amarrado en el muelle de Liga. Jaromir pone jinetes con antorchas en la entrada del muelle amenazando con quemarlo si Glornir no entrega a Sulich. Hay figuras moviendose en su cubierta. Glornir se niega y la batalla estalla antes de que pueda zarpar. La llegada de Helka interrumpe la crisis.',
        star: 'Nombre confirmado: Sea-Wolf. La amenaza de quemarlo es la presion maxima sobre Glornir -- el drakkar es la vida operativa de los Hermanos.'
    },
    {
        id: 'aslog', label: 'Aslog (dagger)', group: 'VARG', type: 'Personaje -- Muerto (Hermanos)',
        desc: 'Hermano de Sangre fallecido cuyo lugar en el banco de remos ocupa Varg. Glornir le entrega a Varg la lanza de Aslog con las palabras: era un hombre fino, aunque no lo suficientemente fino como para conservar la cabeza. Ha tomado el camino del alma. Que te traiga batalla-fama. El detalle de la cabeza sugiere que murio decapitado en combate.',
        star: '¿Como murio Aslog exactamente? Su lanza y su banco pasan a Varg -- Varg hereda su lugar en los Hermanos en todos los sentidos.'
    },
    {
        id: 'skullsplitter', label: 'Skullsplitter (Rompe-Craneos)', group: 'VARG', type: 'Personaje -- Muerto (Jefe Anterior)',
        desc: 'Jefe anterior de los Hermanos de Sangre antes de Glornir. Torvik revela su existencia. Fue quien regalo al Jarl Logur la astilla del Cuerno Vackna como parte de la relacion de proteccion entre los Hermanos y Liga. Muerto antes de los eventos de la novela. Mencionado en historias de fogata entre los thralls de la granja de Kolskegg.',
        star: '¿Como murio Skullsplitter? ¿Que mas relics poseyeron los Hermanos en su epoca? La transicion de Skullsplitter a Glornir es historia no contada que podria importar.'
    },
    {
        id: 'batalla-muelles', label: 'Batalla en los Muelles de Liga', group: 'EVENTO', type: 'Evento -- Combate',
        desc: 'Jaromir bloquea el muelle con caballeria druzhina cuando ve preparar el Sea-Wolf para zarpar. Glornir se niega a entregar a Sulich. Jaromir le dispara una flecha (Glornir la derriba en el aire con su hacha). Grita LOOSE y desata 40-50 flechas. Los Hermanos forman skjaldborg. Los druzhina cargan por frente y retaguardia. Einar lanza una lanza y mata a un druzhina a caballo. Edel y sus sabuesos derriban otro caballo. Varg abandona el muro, sube a un caballo y mata a un druzhina con el seax. Jarl Logur llega con guardias de escudo azul. La batalla se detiene cuando la flota de Helka entra al fiordo.',
        star: '*** Primera batalla campal del arco Varg. Bloodsworn vs druzhina iskidanos -- dos estilos de combate del mundo de Gwynne. Interrumpida por la llegada de un tercer poder.'
    },
    {
        id: 'llegada-helka', label: 'Llegada de Helka a Liga', group: 'EVENTO', type: 'Evento -- Politico Mayor',
        desc: 'tres drakkars enormes y elegantes glidan por el fiordo hacia Liga. Velas negras con imagen de aguila de alas extendidas, pico y garras en ataque -- emblema de Helka y su dominio sobre los huesos de Orna. Cuernos suenan desde sus cubiertas. Toda la batalla en los muelles se detiene al instante. Hasta Varg, recien llegado al mundo de la politica, reconoce ese estandarte.',
        star: '*** MAYOR. Primera aparicion fisica de Helka en la novela. ¿Por que viene a Liga? Tres posibilidades: (1) viene por los Hermanos, (2) sabe lo de Sulich y viene a mediar, (3) la crisis con Iskidan es mas grande de lo que parecia. O las tres.'
    },
];
