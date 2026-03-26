
const nodes = [
    {
        id: 'agnar', label: 'Agnar', group: 'ELVAR', type: 'Personaje — Jefe', desc: 'Jefe de Terrores de la batalla. Franja gruesa de cabello rubio en el centro de la cabeza (warrior-braid), el resto rapado, capote de oso negro, torc de plata. Carismático, valiente, implacable. Mató al Jarl Hrut sin dudar. Filosofía ideológica: no caza Tainted solo por dinero — cree que la herencia divina es un peligro para el mundo (ver nodo oath-stone-frost-isles). Rescata a Elvar durante el ataque de wyrms (ver nodo night-wyrm). En presencia de Störr habla deferentemente — algo que Elvar nunca le había oído hacer con nadie. Vendió a Berak a Störr por el doble del precio de mercado (ver nodo llegada-snakavik). Agnar queda como proveedor de confianza de Störr para futuros Tainted capturados.',
        star: '★★ Su motivación ideológica queda clara, no es solo mercenario, es creyente de que la herencia divina es un peligro para el mundo. Esto lo convierte en antagonista más matizado y más peligroso.'
    },
    {
        id: 'akall', label: 'Akall de Varg', group: 'TRAMA', type: 'Trama — Abierta', desc: 'Varg necesita que Vol realice un akall para invocar el espiritu de Froya y descubrir como murio. Varg le hace la peticion directamente a Glornir y Vol en presencia de toda la compania, la primera vez que lo pide en voz alta. Vol escucha y comienza a responder afirmativamente pero Glornir la interrumpe y dice no. Glornir explica que Varg no es aun Hermano de Sangre -- es aprendiz -- y debe ganarse el derecho primero. La peticion sigue en pie pero ahora es publica y tanto Glornir como Vol la conocen.',
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
        id: 'arild', label: 'Arild', group: 'ORKA', type: 'Personaje — Drengr (mujer)', desc: 'Drengr de la Jarl Sigrún. Acompañó a Guðvarr al steading de Orka para convocar el Althing. Fue la segunda de Guðvarr en el holmganga, le aconsejó en voz baja antes del duelo y le vendó el hombro tras la derrota.',
        star: '¿Qué le aconsejó a Guðvarr antes del duelo? Sigrún también le habló pero su consejo fue distinto al de Arild.'
    },
    {
        id: 'armring', label: 'Armring (Anillo de Brazo)', group: 'NORSE', type: 'Simbolo — Lealtad', desc: 'Anillo de metal (plata, oro, bronce) enrollado en el brazo. Simbolo de lealtad a un senor. Los jarls los otorgan a guerreros leales; el epiteto dador-de-anillos describe a un buen senor. Llevar armrings es senal de pertenecer a un sequito. No llevarlos puede ser senal deliberada de no deber lealtad a nadie. [Historico: los armrings eran la moneda social vikinga. Un jarl generoso distribuia anillos a su sequito. Simbolo fisico del vinculo senor-guerrero.]',
        star: 'Sistema de lealtad economica: el oro compra juramentos. Quien lleva muchos armrings tiene muchas deudas de honor -- o las cobra.'
    },
    {
        id: 'asgrim', label: 'Asgrim (†)', group: 'ORKA', type: 'Personaje — Muerto', desc: 'Vecino de Orka y Thorkel en las colinas sobre el fiordo de Fellur. Encontrado muerto de una estocada al corazón en el umbral de su steading. Tenía runa de warding en la puerta —el asesino fue humano, no vaesen.',
        star: 'Que un hombre con runa warding fuera asesinado confirma que la amenaza viene de personas, no de criaturas.'
    },
    {
        id: 'asgrim-death', label: 'Tragedia de Familia Asgrim', group: 'EVENTO', type: 'Evento', desc: 'Asgrim y su esposa son encontrados muertos en su granja a las afueras de Fellur por Orka. Su hijo Harek esta desaparecido. Orka lleva los cuerpos a Fellur. Thorkel investiga: tres botes en el rio Skarpain. El modus operandi es identico al ataque posterior al steading de Orka (ver nodo ataque-steading) -- misma banda, mismo lider: Drekr (ver nodo drekr).',
        star: '** Harek fue el primer caso de Drekr en la zona. Ahora Breca es el mas reciente. La misma organizacion opero en ambos casos con anos de diferencia -- o la red de Drekr es antigua y extensa.'
    },
    {
        id: 'battle-grim', label: 'Terrores de la batalla (Battle-Grim)', group: 'FACCION', type: 'Facción — Mercenarios', desc: 'Compañía mercenaria. Drakkar: Wave-Jarl. Cazan Tainted para venderlos a jarls. Jefe: Agnar. Thrall Tainted: Kráka (Seiðr) y Hundur (rastreador).',
        star: ''
    },
    {
        id: 'berak', label: 'Berak Bjornasson', group: 'ELVAR', type: 'Personaje — Berserkir', desc: 'Alto y grande con cicatrices en la cara, barba hasta el cinturón. Sangre del dios muerto Berser (ver nodo berser). Ojos ambarinos cuando entra en furia, dientes afilados, fuerza brutal — transformación Berserkir (ver nodo berserkergang). Vivía escondido y fue capturado en Iskalt. Se le acusa de haber matado a tres Jarls. El collar de hierro suprime su transformación. Fuerza sobrehumana incluso encadenado. Protege instintivamente a Uspa y Bjarn ante cualquier amenaza. Vendido al Jarl Störr en Snakavik. Linaje confirmado por el oráculo Hrung al saborear su sangre. Los Berserkir-thralls de Störr lo rodearon al entrar, gruñéndole "bienvenido, hermano." Ignoró el saludo. Se marchó cabeza gacha siguiendo a Silrið.',
        star: '★★ Ahora es thrall de Störr — el jarl más poderoso del noroeste. Guardado junto a una docena de Berserkirs ya esclavizados. ¿Puede Uspa rescatarlo? ¿O Bjarn, con su doble linaje, se convierte en el punto de negociación?'
    },
    {
        id: 'berak-venta', label: 'Viaje y venta de Berak en Snakavik', group: 'EVENTO', type: 'Evento', desc: 'Agnar navega hacia Snakavik para vender a Berak el Berserkir al Jarl Störr. Elvar reacciona personalmente ante el destino. Uspa y Bjarn a bordo durante todo el viaje. Terrores de la batalla navega dos días desde Iskalt; hacen escala en las Islas de la Escarcha huyendo de una tormenta, donde descubren la piedra de juramento y son atacados por gusanos nocturnos. Continúan a Snakavik. Amarran en el puerto de Snakavik, Agnar paga derechos de amarre, sube a la fortaleza con Elvar, Sighvat, Huld, Sólín, Kráka y el Hundur-thrall. Silrið toma sangre de Berak para verificación; el oráculo Hrung confirma su linaje de Berser. Störr compra a Berak al doble del precio de mercado. EFECTO SECUNDARIO: en el mismo acto, Hrung huele a Elvar y la delata ante todos como hija de Störr (ver nodo llegada-snakavik).',
        star: '★★★ La venta es excusa narrativa para la verdadera bomba: la identidad de Elvar. El arco "llevar a Berak a Störr" estaba sembrado de revelaciones cosmológicas desde el principio.'
    },
    {
        id: 'berser', label: 'Berser (Dios-Oso)', group: 'DIOS', type: 'Dios Muerto', desc: 'Hijo de Snaka. Muerto en el Guðfalla. Sus descendientes son los Berserkir: Tainted con fuerza sobrehumana, ojos ambarinos y transformación parcial en combate. [Nota histórica: en la mitología nórdica real, berserkr significa «camisa de oso» — guerreros sagrados de Odín que entraban en trance de furia animal (berserkergang). Gwynne reinterpreta esto como herencia de sangre divina literal: el «oso» fue un dios real que murió.]',
        star: 'Berak Bjornasson porta su sangre. Los Berserkir son muy cotizados por los jarls como guardia personal. El collar de hierro los detiene — pero ¿cuánto tiempo?'
    },
    {
        id: 'berserkergang', label: 'Berserkergang (Furia de Batalla)', group: 'NORSE', type: 'Combate — Trance', desc: 'Estado de furia disociativa en combate. Ojos ambarinos, dientes afilados, fuerza sobrehumana, perdida de control racional. Puede ser manifestacion de sangre Tainted o de entrenamiento extremo. [Historico: los berserkir historicos entraban en trance de batalla. Gwynne lo reinterpreta como manifestacion literal de sangre divina Tainted.]',
        star: 'Marcador clave de posible sangre Tainted: quien entra en berserkergang involuntariamente puede estar manifestando herencia divina sin saberlo.'
    },
    {
        id: 'biorr', label: 'Biórr', group: 'ELVAR', type: 'Personaje — Terrores de la batalla', desc: 'Pelo negro, botas largas (objeto de burlas). Interesado en Elvar — la sigue en el bosque de Iskalt, busca su aprobación. Grend lo odia o desconfía de él. Ofrece gachas a Berak y su familia como prisioneros. Explorador: encuentra la meseta con la piedra de juramento. Su iniciativa con la antorcha salvó a toda la compañía en el ataque de wyrms (ver nodo night-wyrm). Miente con compasión a Bjarn sobre el paradero de Berak — "tu padre tuvo que irse un tiempo, nos pidió que te cuidáramos" — en lugar de decirle que su padre es thrall de Störr. Elvar queda sorprendida por esa ternura. Ofrece quedarse con Elvar durante la reunión con Störr y recibe una reprimenda por insinuar que ella necesita protección.',
        star: '★★ La mentira compasiva a Bjarn revela una dimensión de Biórr que no encaja con el perfil de mercenario simple. Su insistencia en quedarse con Elvar podría ser protección genuina o algo más calculado — Grend lo conoce mejor.'
    },
    {
        id: 'bjarn', label: 'Bjarn', group: 'ELVAR', type: 'Personaje — Tainted', desc: 'Hijo de Berak y Uspa. Fue rescatado del mar helado por Elvar. Lleva sangre de Snaka por parte de madre y sangre de Berser por parte de padre — doble linaje divino. Berak y Uspa lo protegen instintivamente incluso encadenados (ver nodo night-wyrm).',
        star: '★★ Doble sangre: Snaka (Seiðr/serpiente) + Berser (fuerza/oso). ¿Cuál de los dos prevalecerá? ¿O podrá manifestar ambas? El Tainted más potencialmente poderoso de todos los prisioneros.'
    },
    {
        id: 'blood-oath', label: 'Juramento de Sangre', group: 'NORSE', type: 'Ritual — Pacto', desc: 'Pacto inquebrantable sellado con sangre. Romperlo es traicion absoluta. Une a guerreros, humanos y vaesen en obligaciones mutuas de lealtad, proteccion y servicio. [Historico: los juramentos de sangre creaban hermandad artificial entre guerreros nordicos. Gwynne lo eleva a magia vinculante: el juramento de sangre en Vigrið tiene poder literal.]',
        star: '** El titulo de la trilogia (Bloodsworn) se refiere a esto. Los juramentos de sangre son el tejido que une (y rompe) Vigrið. Su poder vinculante es literal, no solo simbolico.'
    },
    {
        id: 'bloodsworn', label: 'Bloodsworn (Hermanos de Sangre)', group: 'FACCION', type: 'Faccion — Mercenarios', desc: 'Compania mercenaria de elite, legendaria. Escudo negro con salpicaduras rojas. Cazan vaesen, buscan reliquias, protegen ricos. Drakkar: Sea-Wolf. Jefe: Glornir. Seidr-thrall: Vol. Funcion en Liga: protegen el puerto de piratas y saqueadores a cambio de hospitalidad de Logur. El jefe anterior, Skullsplitter, regalo a Logur una astilla del Cuerno Vackna.',
        star: '* Nombre del drakkar revelado: Sea-Wolf. Su relacion con Logur es simbiosis: proteccion a cambio de hospitalidad y el relic del Vackna.'
    },
    {
        id: 'bogi', label: 'Bogi (Arco)', group: 'NORSE', type: 'Arma — Distancia', desc: 'Arco largo de madera (tejo, fresno, olmo). Alcance 200+ metros. Caza y guerra. Menos prestigioso que combate cuerpo a cuerpo pero tácticamente vital. Flechas con punta de hierro. [Histórico: los vikingos eran arqueros competentes pero el arco tenía menos prestigio cultural que espada/hacha. Matar desde lejos era menos "honorable". Gwynne probablemente lo usa para emboscadas y caza.]',
        star: 'Trud (Terrores de la batalla) fue herida por flecha en Iskalt. Los arcos aparecen en combate pero no son armas de héroes.'
    },
    {
        id: 'breca', label: 'Breca (RAPTADO)', group: 'ORKA', type: 'Personaje — Orka (Desaparecido)', desc: '10 inviernos. Pelo negro como cuervo, ojos de Orka. Sensible, curioso, valiente. Vinculado a Vesli por juramento de sangre. Lleva colgante de madera con forma de espada. RAPTADO por la banda de Drekr durante el ataque al steading (ver nodo ataque-steading). Llevado vivo por el rio en dos botes. Hay sangre entre las huellas que llevan al bote -- posiblemente herido. Destino desconocido (ver nodo drekr-cazadora).',
        star: '*** RAPTADO. El mismo patron que Harek y los otros ninos. Llevado vivo -- tienen algun uso para los ninos. ¿Sabe Drekr que Breca tiene posible sangre Tainted? ¿Es ese el criterio de seleccion para todos los raptos?'
    },
    {
        id: 'brynja', label: 'Brynja (Cota de Mallas)', group: 'NORSE', type: 'Armadura — Torso', desc: '[Pronunciación: "Brynya" — la j suena como la "y" de "yellow".] Cota de mallas de anillos entrelazados. Protección flexible contra cortes. Cara de fabricar: 20,000-30,000 anillos por cota. Símbolo de riqueza y estatus guerrero. Sigrún lleva una "remachada" (anillos remachados = calidad superior). [Histórico: la brynja era la armadura de élite vikinga. Pesaba 10-15kg. Solo jarls, campeones y guerreros ricos podían pagarla. La mayoría luchaba con cuero o sin armadura. Gwynne la usa como marcador visual de poder.]',
        star: 'Sigrún lleva brynja remachada = jarl guerrera de verdad, no solo política. Agnar probablemente también.'
    },
    {
        id: 'byrding', label: 'Byrðingr', group: 'NORSE', type: 'Embarcación — Carga Pesada', desc: '[Pronunciación: "Byrthing" — la ð suena como la "th" de "they".] Barco de carga pesada. Más grande y robusto que knarr. Transporte de materiales de construcción, piedra, madera, grandes cantidades de grano. Diseño sacrifica velocidad por capacidad. [Histórico: el byrðingr era el "camión de carga" nórdico. Usado para proyectos de construcción grandes: iglesias, fortalezas, puentes.]',
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
        id: 'drakkar', label: 'Drakkar (Langskip)', group: 'NORSE', type: 'Embarcación — Guerra', desc: 'Barco largo de guerra (langskip). Proa tallada con cabeza de dragón o serpiente. Diseño estrecho y rápido para incursiones y batalla. Remos + vela cuadrada. Calado bajo permite navegar ríos y desembarcar en playas. Wave-Jarl es un drakkar. [Histórico: los drakkars (drakar, "dragón") eran los barcos de guerra vikingos por excelencia. Podían llevar 20-60 guerreros. El diseño simétrico proa-popa permitía remar en ambas direcciones sin girar. Gwynne los preserva como símbolo de poder militar en Vigríð.]',
        star: '★ Wave-Jarl (Terrores de la batalla) es un drakkar. Los Hermanos de Sangre también tienen uno. Símbolo de estatus para compañías mercenarias.'
    },
    {
        id: 'drengr', label: 'Drengr', group: 'NORSE', type: 'Concepto — Honor', desc: 'Guerrero honorable, valiente, leal. Titulo de respeto. El ideal del drengr es el opuesto al niding: valentía, lealtad, generosidad, autocontrol. Se puede reclamar el titulo sin poseerlo -- la brecha entre el reclamo y la conducta es un motor de conflicto social en Vigrið. [Historico: drengr era el ideal del guerrero nordico. Lo opuesto al niding. Gwynne lo usa como marcador de estatus social y moral.]',
        star: 'La tension entre quien reclama ser drengr y quien lo demuestra con hechos es uno de los grandes temas de la novela.'
    },
    {
        id: 'einar', label: 'Einar Medio-Trol', group: 'VARG', type: 'Personaje — Hermanos', desc: 'Campeon de los Hermanos. Enorme, barba roja hasta la cintura, manos como yunques. Proteccion de hierro en la entrepierna (forjada por Jokul). Pelea con Varg para ganarse su puesto. En la batalla del muelle (ver nodo batalla-muelles) demuestra precision letal ademas de fuerza bruta.',
        star: '* Precision real en combate, no solo fuerza. Es el primero en atacar desde el muro.'
    },
    {
        id: 'elvar', label: 'Elvar', group: 'ELVAR', type: 'POV — Personaje', desc: 'Guerrera más joven de Terrores de la batalla. Rubia, trenza guerrera, escudo rojo con armas cruzadas. Impulsiva y valiente hasta la temeridad. Siempre trata de hacer más que los demás, así ganó su puesto en el muro de escudos. Saltó al mar helado para salvar al hijo de Berak. Escéptica empírica: solo cree en lo que puede ver y tocar. Acepta los Tainted por evidencia directa pero negaba los dragon-born (ver nodo dragon-born). Sobrevive al ataque de wyrms con ayuda de Grend y Agnar (ver nodo night-wyrm). Lleva colmillo de trol al cuello (ver nodo colmillo-trol). Jarl Störr es su padre (ver nodo storr). Hrung la reconoció por olfato antes de que se quitara la capucha (ver nodo llegada-snakavik). BACKSTORY REVELADA: huyó de Snakavik hace ~4 años, tenía 17 en su último nombre-día al marcharse. Razón principal: Störr quería casarla con Hákon (hijo de Helka) para unir sus reinos — ella se negó. Confrontación en la taberna con Störr, Thorun (hermano mayor, hostil) y Broðir (hermano menor, afectuoso) (ver nodo reunion-storr-elvar). Störr le ofrece su propio warband si regresa. Grend la defiende públicamente ante Thorun: "ha ganado su propia reputación y es un nombre que debe respetarse y temerse" — elogio sin precedentes en él. Estado actual: en Snakavik, procesando la oferta de su padre.',
        star: '★★★ La confrontación con Störr revela la fractura familiar completa: Thorun hostil, Broðir afectuoso, padre calculador pero con afecto real. La oferta de su propio warband es el cebo más peligroso que Störr podría haberle lanzado — ataca exactamente la ambición que la define.'
    },
    {
        id: 'emp-kirill', label: 'Gran Khagan Kirill', group: 'FACCION', type: 'Personaje — Poder Lejano', desc: '"Gran Khagan, Kirill el Magnífico". Gobierna el vasto Iskidan desde la gran ciudad de Gravka. tiene 200 concubinas, mil hijos (según rumores) y una guardia druzhina de 200 guerreros que lo escolta en todo momento. Donde un príncipe tiene solo 2 druzhina, el Khagan tiene 200 — escala del poder. Virk lo acusó de tener más thralls que hombres libres y de sacrificar niños —rumores que Sigrun descartó como saga.',
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
        id: 'froa', label: 'Froa (dagger)', group: 'VAESEN', type: 'Vaesen — Espiritu del Arbol (Muerta)', desc: 'Espiritu guardian ligado a un arbol de fresno nacido de una semilla del gran Osktured. Forma: mujer-estatua tallada en madera, mas alta que Orka, pelo largo hasta la cintura entretejido de hojas y ramitas. Las Froa viven y mueren con su arbol y luchan salvajemente para defenderlo. Estado actual: MUERTA junto con su arbol (ver nodo arbol-froa). Orka la conocia: en su ultimo encuentro reía, bailaba y le ofrecia la mano de amistad.',
        star: '*** ASESINADA junto con su arbol. La destruccion requirio muchos hombres con hachas y magia de fuego -- misma organizacion que opera los robos de ninos (ver nodo ninos-robados).'
    },
    {
        id: 'froya', label: 'Frøya (†)', group: 'VARG', type: 'Personaje — Muerta', desc: '[Pronunciación: "Frirya" — la ø suena como la "ir" de "bird".] Hermana de Varg, 1 invierno menor. Ambos fueron vendidos a los 5 y 4 años por sus padres. Murió en circunstancias desconocidas. Su muerte es el motor de toda la historia de Varg.',
        star: 'Varg necesita un akáll (invocación Seiðr) para descubrir cómo murió y quién la mató.'
    },
    {
        id: 'funeral-rites', label: 'Ritos Funerarios', group: 'NORSE', type: 'Ritual — Muerte', desc: 'Los guerreros son enterrados con armas en la mano para luchar en Vergelmir contra Lik-Rifa en su camino al mas alla. Morir con arma = morir con honor. Barrows (tumulos) de madera y piedra marcan el lugar de reposo de los guerreros de rango. [Historico: los vikingos enterraban a guerreros con armas, herramientas, incluso barcos. Gwynne lo reinterpreta: las armas son necesarias literalmente para combatir a Lik-Rifa en el inframundo.]',
        star: '** La creencia en Vergelmir hace que los ritos funerarios sean preparacion para batalla post-mortem, no solo honor simbolico.'
    },
    {
        id: 'gachas', label: 'Gachas/Porridge', group: 'NORSE', type: 'Vida Diaria — Comida', desc: 'Comida básica diaria: avena/cebada cocida con agua o leche. Grend sirve gachas a Elvar. Biórr ofrece gachas a Berak prisionero. Comida de supervivencia en viajes largos y campamentos. [Histórico: el porridge (grautr) era alimento básico escandinavo. Barato, nutritivo, fácil de preparar en barco o campaña. Se comía con mantequilla, miel, o solo. Gwynne lo usa como marcador de vida cotidiana — incluso guerreros de élite comen simple.]',
        star: 'Grend cuida a Elvar sirviéndole gachas — gesto paternal. Incluso prisioneros reciben gachas: mínimo de humanidad.'
    },
    {
        id: 'galdramadr', label: 'Galdramaðr', group: 'MAGIA', type: 'Magia — Runas', desc: '[Pronunciación: "Galdramathr" — la ð suena como la "th" de "they".] Hechicero especializado en magia rúnica (galdrar). A diferencia de los practicantes de Seiðr, el galdramaðr trabaja con runas grabadas y cantadas, no con invocación de espíritus. Usa el galdrabók como texto de referencia. [Histórico: galdrar eran los hechizos rúnicos nórdicos, distintos del seiðr. La distinción era de género y método: seiðr se asociaba con mujeres, galdrar con hombres. Gwynne preserva esta distinción.]',
        star: ''
    },
    {
        id: 'galdur', label: 'Galdur', group: 'MAGIA', type: 'Magia — Lengua', desc: 'Lengua mágica de comandos rúnicos. Activa los collares de hierro sobre los Tainted. Palabras conocidas: Hlýða (obedece / escucha), Á HNÉN (de rodillas), Hlýða og fá verðlaun (obedece y recibe recompensa). NIðUR, Á JÖRðU, HLŸDDU MÉR (abajo, al suelo, obedéceme) — comando de sometimiento total; Brenna, sársauki (arde, dolor) — castigo de quemadura directa a través del collar. [Contexto: el galdr histórico nórdico era el canto o recitación de runas mágicas —opuesto al seiðr, era más público y menos estigmatizado. En Vigríð Gwynne lo convierte en lengua de control sobre la herencia divina.]',
        star: 'Saber esta lengua es poder absoluto sobre los Tainted. ¿Cuántos la conocen realmente?'
    },
    {
        id: 'glornir', label: 'Glornir', group: 'VARG', type: 'Personaje — Jefe', desc: 'Jefe de los Hermanos de Sangre. Calvo, barba gris trenzada. Long-axe como baston. Oro y plata en brazos y cuello. Habla lengua Galdur. Lleva brynja brillante cuando lidera en combate o en marcha. Epítetos: Rompe-Escudos, Dador-de-Oro, Robador-de-Almas, Cortador-Golpeador-Aplastador. Filosofia del Bloodsworn: habilidad + lealtad + devocion. Estado actual: bloquea el akall de Varg (ver nodo akall). Se niega dos veces a entregar a Sulich (ver nodo sulich-crisis). Derriba una flecha en vuelo con su hacha (ver nodo batalla-muelles).',
        star: '*** Derribar una flecha en vuelo con la hacha define por que todos lo siguen. No habla de valor -- lo demuestra bajo fuego real. El gesto resume sus cuatro kennings en un instante.'
    },
    {
        id: 'gods-bones', label: 'Huesos de los Dioses', group: 'MAGIA', type: 'Objeto — Magia', desc: 'Los huesos de los dioses muertos (Snaka, Orna, Berser, Ulfrir) son objetos de gran poder. Se usan para protección (knuckle-bone en umbrales), como fuente de poder para magia, y como símbolos de autoridad (alas de Orna en la fortaleza de Helka). El poder específico que otorgan varía según el dios y el contexto. Los huesos de los dioses repelen activamente a los vaesen — hay algún poder latente en su estructura de hueso y médula que los mantiene alejados. Los vaesen evitan cualquier resto o reliquia divina. Esto hace que Snakavik (construida sobre el cráneo de Snaka) sea un lugar seguro de noche — ningún vaesen puede acercarse.',
        star: '★★ Detalle estratégico: ciudades construidas sobre huesos divinos son zonas seguras. Darl (Helka, alas de Orna) también podría beneficiarse de esta protección. ¿Por qué exactamente los repele? Nadie en el libro lo sabe todavía.'
    },
    {
        id: 'gravka', label: 'Gravka', group: 'LUGAR', type: 'Lugar — Capital Imperial', desc: 'Gran ciudad capital del Imperio de Iskidan. Sede del Emperador Kirill. Lejana al este, más allá del mar. Representa el mundo exterior a Vigríð.',
        star: ''
    },
    {
        id: 'grend', label: 'Grend', group: 'ELVAR', type: 'Personaje — Guardián', desc: 'Guerrero mayor. Cabello negro trenzado, barba gris. Siempre junto a Elvar. No es su padre (él lo niega). Lacónico; su cara no traiciona lo que siente. Salta al mar helado tras Elvar. Le sirve gachas y le cubre los turnos de guardia. Armado con hacha y seax en su cinturón de armas. Vivió en Snakavik por más años de los que Elvar ha vivido — fue guardián de la madre de Elvar antes que de ella. Gytha (campeona de Störr) le hace una reverencia al entrar — señal de que Grend tiene rango y reputación en Snakavik que preceden a su papel actual. Durante la confrontación con Störr, cuando Thorun insinúa que Elvar solo tiene fama por estar bajo el ala de Grend, Grend responde sin que le pregunten: "Elvar pelea sus propias batallas. Ha ganado su propia reputación, y es un nombre que debe respetarse y temerse." El mayor elogio que se le conoce — y dicho ante Störr y sus hijos. Le dice a Thorun "yo me sentaría, si fuera tú."',
        star: '★★★ ¿Qué le une a Störr? ¿Por qué protege a la hija del jarl en lugar de servirle a él? Su pasado en Snakavik es la pieza que falta.'
    },
    {
        id: 'gudfall', label: 'Guðfalla (Caída de Dioses) [pron. Guthfalla]', group: 'EVENTO', type: 'Evento Histórico', desc: 'Hace ~300 años. Los hijos de Snaka entraron en guerra entre si. La guerra de los dioses rompió el mundo: continentes hundidos, mares desbordados. Los vaesen escaparon de su foso. El mundo nunca se recuperó. El Vackna sonó al alba; todos los dioses combatieron. Resultado: Berser perforado, Orna desgarrada, Ulfrir muerto, Lik-Rifa encadenada bajo Oskutreð, Snaka caído sobre el Monte Eldrafell. CAUSA VERDADERA (Uspa, ver nodo oath-stone-frost-isles): Rotta alimentó la paranoia de Lik-Rifa, que mató a la hija de Orna y Ulfrir (ver nodo gallows-wood). Orna encadenó a Lik-Rifa — eso detonó la guerra total. El Skáld Galinn recita la saga completa en el festín del Jarl Logur — Svin el Valiente, Tosk el Travieso, Rotta el Engañoso, Snaka cayendo sobre Eldrafell, los vaesen trepando desde el foso. Toda la sala queda paralizada; Varg siente que está de pie en la Llanura de Batalla. La saga se interrumpe cuando los mensajeros de Iskidan aporrean las puertas.',
        star: '★★★ No fue una rebelión abstracta sino una venganza de sangre detonada por Rotta el Manipulador. La primera víctima: la hija sin nombre de Orna y Ulfrir. El blood-eagle nació como imitación del crimen de Lik-Rifa. Función narrativa dual de la saga de Galinn: cosmología completa + tensión dramática por la llegada de Jaromir.'
    },
    {
        id: 'gudvarr', label: 'Guðvarr', group: 'ORKA', type: 'Personaje — Antagonista menor', desc: '[Pronunciación: "Guthvarr" — la ð suena como la "th" de "they".] Drengr, sobrino de Jarl Sigrún. Pelo negro aceitado, espada al cinto, gota permanente de moco. Vanidoso, arrogante, con algo de técnica pero sin experiencia real. Humillado en el holmganga contra Virk: hombro derecho seccionado, se rindió (ver nodo holmganga-event). Su insulto post-duelo provocó la muerte de Virk. Mord y Lif intentaron matarlo — los capturaron. Hombro aún vendado de la herida de Virk. Fue el primero en irrumpir en la cámara de Sigrún cuando Orka atacó. Orka le lanzó su seax para frenar la entrada y escapó por la ventana. Lo último visto: en el muelle gritando insultos y jurando venganza mientras la barca de Orka se alejaba.',
        star: '★★ Sigue siendo niðing moral. La herida del hombro lo ha ralentizado pero no ha aprendido nada. Su juramento de venganza contra Orka desde el muelle lo convierte en perseguidor activo — aunque por ahora sin barca.'
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
        id: 'helka', label: 'Reina Helka', group: 'FACCION', type: 'Faccion — Poder politico', desc: 'Auto-proclamada reina de media Vigrið. Sede: Darl. Moneda propia. Fortaleza coronada con huesos de Orna. Rival: Jarl Storr. Emblema: aguila de alas extendidas, pico y garras en ataque (velas negras). Alta, pelo negro largo como alas de cuervo, recogido en la nuca y trenzado con hilos de oro. Capa roja prendida con broche de oro. Anillos de brazo que destellan bajo la capa. Espada con pomo, guarda y chapa de oro, funda con grabados ornamentales. Camina como guerrera. Hijo: Hakon (ver nodo hakon). Skald/Galdurman: Skalk (ver nodo skalk). Guardia personal: Ulfhednar con collares de thrall -- su manada de lobos (ver nodo ulfhednar). Mision asignada a los Bloodsworn: cazar algo en el norte que devora a su pueblo (ver nodo mision-helka-norte).',
        star: '*** Primera aparicion directa en Liga. Resuelve la crisis Bloodsworn/Jaromir en segundos con solo su presencia. No viene a negociar -- viene a asignar misiones. Eso define su poder real frente al protocolo diplomatico.'
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
        star: 'Glornir lleva yelmo al salir de Liga. Varg compra yelmo de cuatro placas. Sigrún y Agnar probablemente también los usan.'
    },
    {
        id: 'holmganga', label: 'Holmganga', group: 'NORSE', type: 'Ritual — Duelo', desc: 'Duelo legal para resolver disputas de honor, herencias o insultos. Se realiza en isla (hólmr) o terreno delimitado. Código estricto: cuadrado marcado con varas de avellano; un pie fuera = rendición; dos pies fuera = huida; tres escudos destruidos = derrota; se puede pactar primera herida, rendición o muerte. Atacar tras rendición rompe el código y justifica ejecución inmediata (ver nodo holmganga-event para caso Virk vs Guðvarr). [Histórico: el hólmganga era un duelo formal nórdico. El espacio sagrado (vǫllr) estaba delimitado. Las reglas eran precisas y documentadas en sagas — romperlas era deshonra absoluta. Gwynne lo preserva como institución legal vigente en Vigríð: las reglas son ley, no sugerencia.]',
        star: '★★ Las leyes del holmganga están por encima de la victoria: el honor importa más que ganar. Las leyes nórdicas antiguas siguen vivas en Vigríð — romperlas tiene consecuencias letales.'
    },
    {
        id: 'holmganga-event', label: 'Holmganga Virk vs Guðvarr', group: 'EVENTO', type: 'Evento', desc: 'Guðvarr reta a duelo a Virk. Virk acepta y gano el duelo: le hundio el hacha en el hombro a Gudvarr, seccionandole los musculos. Gudvarr se rindio. Pero Virk alzo el arma para matar tras la rendicion, violando las reglas del holmganga. La thrall-guerrera de Sigrun intervino y lo mato con dos seaxes en frenesí bestial, mordiendole la cara. Sigrun justifico la muerte: Virk rompio las reglas, la justicia esta hecha. Mord y Lif (hijos de Virk) exigieron justicia y no la obtuvieron. Thorkel recibio un corte de seax de la thrall.',
        star: '*** Virk murio. Sus hijos presenciaron todo. Sigrun justifico legalmente la muerte. La thrall desbordó el control y mordio el cadaver -- Sigrun misma parece incomoda. Thorkel fue herido: la thrall lo identifico como objetivo? Ver nodo vafri.'
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
        id: 'hundur', label: 'Hundur (Thrall)', group: 'ELVAR', type: 'Personaje — Thrall Tainted', desc: 'Thrall de Terrores de la batalla con olfato sobrehumano de sabueso. Camina encorvado con ojos hundidos como pozos negros. Controlado por Sighvat con cadena de hierro. Fue clave para rastrear a Berak en Iskalt. Elvar confirma su linaje: sangre del dios-sabueso Hundur. Capacidades olfativas que van más allá de lo físico — detecta "sangre derramada y juramentos" en la piedra (ver nodo oath-stone-frost-isles).',
        star: '★★ Su amo es Sighvat — ¿seguirá siendo así toda la historia? Nótese la ironía: un sabueso-dios rastreando a sus propios parientes Tainted.'
    },
    {
        id: 'idrun', label: 'Idrun (†)', group: 'ORKA', type: 'Personaje — Muerta', desc: 'Esposa de Asgrim. Asesinada en el ataque a su steading (ver nodo asgrim-death). La brutalidad del acto sugiere un mensaje deliberado o una ejecución ritual. Su hijo Harek desapareció.',
        star: '★ La forma de su muerte podría ser un rito, no solo un asesinato. ¿A qué tradición pertenece?'
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
        id: 'jarl', label: 'Jarl (Noble)', group: 'NORSE', type: 'Clase Social', desc: '[Pronunciación: "Yarl" — la j suena como la "y" de "yellow".] Noble, señor de tierras. Controla villas, recauda tributos, administra justicia. Sigrún (Fellur), Störr (Snakavik), Logur (Liga). Por encima: reinas como Helka. [Histórico: jarl era título de nobleza escandinava, equivalente a conde. Gwynne los convierte en señores feudales de Vigríð, compitiendo por poder en la era post-Guðfalla.]',
        star: 'Los jarls son el tablero político de Vigríð. Helka los está unificando bajo su corona.'
    },
    {
        id: 'jarl-hrut', label: 'Jarl Hrut (†)', group: 'ELVAR', type: 'Personaje — Muerto', desc: 'Barba trenzada múltiples veces con anillos de hueso. Vestido en pieles y piel de foca. Empuñadura de cuchillo tallada en marfil de morsa. Asesinado sin dudar por Agnar cuando se interpuso al desembarco de Terrores de la batalla.',
        star: ''
    },
    {
        id: 'jarl-logur', label: 'Jarl Logur', group: 'FACCION', type: 'Personaje — Politica', desc: 'Jarl de Liga. Sus escudos son azules y sus velas rojas. Barriludo, cabello gris trenzado con hilo de oro, oro en cuello y brazos. Hombre que rie mucho. Viejo amigo de Sergei el mercader. Sienta a Glornir a su izquierda en la mesa de honor. Estado actual: mantuvo la neutralidad entre Glornir y Jaromir apelando a la ley (ver nodo sulich-crisis). Liga ahora es el escenario de la llegada de Helka (ver nodo llegada-helka). Su esposa es Salla.',
        star: '* Equilibrista politico: no desafia a Jaromir abiertamente pero tampoco traiciona a los Hermanos. La hospitalidad es genuina, no diplomatica.'
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
        id: 'kraka', label: 'Kráka', group: 'ELVAR', type: 'Personaje — Thrall Tainted', desc: 'Thrall Tainted de Terrores de la batalla. Cabello negro como un cuervo, tatuajes azules en mandibula y garganta (similar a Vol), cara gris agotada. Canta magia Seiðr para proteger el casco de serpientes marinas. El canto la destruye fisicamente. Maltratada por los guardias. Agnar le dio un asta de trol como fuente de poder. Reacciona con reconocimiento (no asombro) ante la piedra de juramento (ver nodo oath-stone-frost-isles).',
        star: '★ Para los Tainted de sangre Snaka, ver la historia de su padre grabada en piedra tiene un peso diferente. Su reaccion reverencial contrasta con el asombro de los humanos.'
    },
    {
        id: 'langsoex', label: 'Langsax / Espada', group: 'NORSE', type: 'Arma — Espada', desc: 'Espada de doble filo, 70-90cm. Arma de estatus: cara de forjar, se heredan, tienen nombres. Guðvarr lleva espada al cinto (símbolo de su rango). Svik lleva espada. Sulich usa espada curva de un filo (estilo Iskidan). [Histórico: las espadas vikingas eran objetos de prestigio. Acero de patrón soldado, empuñaduras decoradas, nombres propios ("Mordedora de Piernas", "Rompehielos"). Solo guerreros ricos las poseían. Gwynne las reserva para personajes de élite.]',
        star: 'Guðvarr lleva espada pero no sabe usarla bien. Contraste con guerreros reales como Glornir. La espada curva del guerrero oscuro confirma origen extranjero.'
    },
    {
        id: 'leif', label: 'Leif Kolskeggson', group: 'VARG', type: 'Personaje — Antagonista', desc: 'Hijo de Snepil Kolskegg. Cicatriz en el labio. Quiso esclavizar a Varg y amputarle la mano como castigo. Derrotado por los Hermanos. Se revela que hirió a Varg con una lanza antes de huir.',
        star: '¿Volverá Leif con más recursos? Tiene motivo de venganza y a Orl como Hird leal.'
    },
    {
        id: 'liga', label: 'Liga', group: 'LUGAR', type: 'Lugar — Ciudad Puerto', desc: 'Ciudad mercado y puerto al pie del fiordo. Sala del Jarl Logur en la colina. Plaza de combate donde Varg lucho contra Einar. Mercado con vaesen disecados, marfil, moneda Helka. Escenario de la batalla entre Hermanos y druzhina (ver nodo batalla-muelles) y la llegada de Helka (ver nodo llegada-helka). Liga es ahora cruce de tres poderes: Logur, Jaromir, Helka.',
        star: '*** Liga pasa de puerto tranquilo a punto de convergencia de poderes. La llegada de Helka aqui -- no en Darl -- tiene implicaciones politicas enormes.'
    },
    {
        id: 'lik-rifa-amenaza', label: 'Lik-Rifa Despertando', group: 'TRAMA', type: 'Trama — Cósmica', desc: 'Los terremotos de Iskalt y las venas de lava parpadeando sugieren que la diosa-dragón Lik-Rifa no está muerta, sino activa bajo el Árbol de Ceniza. Grend lo afirma; Elvar es escéptica.',
        star: '★★★ Si Lik-Rifa rompe sus cadenas, todo cambia. ¿Alguien la está ayudando a escapar?'
    },
    {
        id: 'likrafa', label: 'Lik-Rifa (Diosa-Dragon)', group: 'DIOS', type: 'Dios — Viva (Encadenada)', desc: 'La diosa-dragon, hija de Snaka. NO murio en el Gudfalla: fue encadenada bajo Oskutreð, el Arbol de Ceniza. Su causa en el Gudfalla: mato a la hija de Orna por paranoia alimentada por Rotta; creo los vaesen en secreto. Sus descendientes Tainted (dragon-born) fueron considerados extintos hasta su confirmacion definitiva (ver nodo dragon-born). Al menos uno opera activamente en Vigrið, trabajando para Drekr en el rapto de ninos.',
        star: '*** Los dragon-born son REALES. La pregunta ahora es: cuantos hay, quien es el que trabaja con Drekr, y que relacion tienen con Lik-Rifa encadenada bajo Oskutreð. ¿Es la red de Drekr una operacion para beneficiar a Lik-Rifa de alguna forma?'
    },
    {
        id: 'mead-hall', label: 'Mead Hall / Longhouse', group: 'NORSE', type: 'Vida Diaria — Arquitectura', desc: 'Centro social y político. Sala larga con hogar central, bancos a los lados. El jarl preside desde el asiento alto. Aquí se festeja, se distribuyen recompensas, se toman decisiones. Fellur tiene longhouse central. Jarl Logur hospeda a Hermanos de Sangre en su sala. [Histórico: el hall (hǫll) era corazón de la comunidad nórdica. Símbolo de poder del jarl. Quemar el hall de un enemigo era insulto máximo. Gwynne los preserva como centros de poder político.]',
        star: 'La sala de Logur es donde Varg es juzgado. El longhouse de Fellur es donde Sigrún gobierna.'
    },
    {
        id: 'mord-lif', label: 'Mord y Lif', group: 'ORKA', type: 'Personaje — Huerfanos', desc: 'Hijos de Virk. Mord mayor, Lif menor. Quedaron huérfanos tras la muerte de su padre (ver nodo holmganga-event). Sigrún desestimó su reclamo de justicia. Construyeron el túmulo de Virk (ver nodo barrow-virk). Regresaron al Althing e intentaron matar a Guðvarr — fracasaron. Capturados por Sigrún, estacados en el patio del mead hall, aguardando juicio: proscripción o ejecución. Liberados en plena noche por Orka (ver nodo raid-camara-sigrun), que mató al guardia que los vigilaba. Mord tenía una herida en la cabeza con vendaje ensangrentado; Lif remó sin preguntar. Estado actual: huyen hacia el sur por el fiordo en su barca de pesca junto a Orka.',
        star: '★★ Pasaron del duelo pasivo a la acción directa. El intento de matar a Guðvarr los habría costado la vida; Orka los salvó recordando las palabras de Breca. Su deuda con Orka y la memoria de su padre los lleva ahora a mar abierto.'
    },
    {
        id: 'uspa', label: 'Uspa', group: 'ELVAR', type: 'Personaje — Tainted (Snaka)', desc: 'Rubia, ojos gris-azul pálido. Tatuajes espirales bajo la ropa. Arrojó un objeto al lago de lava antes de ser capturada. Controló la serpiente marina con canto Seiðr. Sangre de Snaka. Activa la piedra de juramento con su sangre (ver nodo oath-stone-frost-isles). Sabe la causa verdadera de la guerra de los dioses cuando nadie más la conoce. Cuando Elvar afirma que los dragon-born son un cuento de hadas, Uspa escupe sin decir una palabra. Pide a Elvar con urgencia visible "tenemos que salir de Snakavik" — dos veces, con ojos y fosas nasales dilatados de miedo. Elvar le señala que quedarse cerca significa al menos poder ver a Berak ocasionalmente; Uspa insiste de todos modos. Su miedo a Snakavik parece superar incluso el deseo de estar cerca de su marido. Razón no declarada — posiblemente: sabe algo sobre Snakavik, Störr o Hrung que la hace sentir en peligro directo.',
        star: '★★★ El miedo de Uspa a Snakavik es más intenso que su amor por Berak. Algo en este lugar la aterra con una urgencia que va más allá de ser thrall en poder de Agnar. ¿Teme que Störr reconozca su sangre de Snaka como la más valiosa de todas las Tainted que ha comprado? ¿O sabe que Hrung puede revelar algo sobre ella que no quiere revelar?'
    },
    {
        id: 'nacken', label: 'Nacken', group: 'VAESEN', type: 'Vaesen — Agua', desc: 'Vaesen de ríos de montaña. Para ahuyentarlo, Thorkel clava un seax en la tierra: ritual de protección conocido. Peligroso en corrientes rápidas de alta montaña. Su existencia confirma que el conocimiento de vaesen y cómo contenerlos es cultura común en Vigríð.',
        star: ''
    },
    {
        id: 'niding', label: 'Níðing', group: 'NORSE', type: 'Concepto — Deshonra', desc: '[Pronunciación: "Nithing" — la ð suena como la "th" de "they".] El peor insulto en la cultura nórdica: cobarde sin honor. Ser níðing es estar socialmente muerto. [Histórico: níð era la deshonra absoluta en la sociedad nórdica. Acusar a alguien de níðing (cobardía, homosexualidad pasiva, falta de honor) podía justificar violencia legal. Gwynne lo usa como detonante de conflicto (ver nodo holmganga-event para caso Guðvarr/Virk).]',
        star: '★★ Guðvarr usó la palabra como arma tras perder. Virk prefirió morir antes que aceptar el insulto.'
    },
    {
        id: 'ninos-robados', label: 'Robos de Ninos', group: 'TRAMA', type: 'Trama — Abierta (Urgente)', desc: 'Patron organizado bajo el mando de Drekr. Casos conocidos: Harek (colinas de Fellur), 3 hijos de los Haraldurson (Howbyr), familia de Kergarth, y ahora BRECA. Modus operandi: quemar galdr-runas (Galdurman), atacar con fuerza mixta (humanos + vaesen + skraelings + Tainted), huir en botes por rios. Los tennur de Drekr buscaban ESPECIFICAMENTE a Breca -- no fue captura oportunista. Esto sugiere que Drekr sabe que Breca tiene sangre Tainted.',
        star: '*** Los tennur iban a por Breca con intencion. ¿Como sabe Drekr quienes son los Tainted en la region? ¿Tiene informadores? ¿O el dragon-born puede detectar sangre divina?'
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
        id: 'orka', label: 'Orka', group: 'ORKA', type: 'POV — Personaje', desc: 'Mujer alta y rubia, ojos gris-verde. Exguerrera de alto rango con pasado enterrado (ver nodo cofre-enterrado-orka). Flashbacks violentos, episodios de rabia cegadora. Padre violento en la infancia. Vínculo de sangre con Spert. Infiltró Fellur de noche, liberó a Mord y Lif, mató al guardia que los custodiaba, penetró en la cámara de Sigrún (ver nodo raid-camara-sigrun). Obtuvo la inteligencia clave: la red de espionaje la comandaba Hákon (hijo de Helka), y el receptor de los informes era Drekr. Destino posible de Breca: Darl. Mató a Vafri (ver nodo vafri). Hirió gravemente a Sigrún. Escapó por el fiordo hacia el sur con Mord y Lif. Estado actual: en barca, perseguida, con un destino y un nombre más: Hákon.',
        star: '★★★ Orka ya no solo persigue a Drekr — ahora sabe que hay una cadena de mando: Hákon → Vafri → Drekr. El robo de Breca no fue bandolerismo: fue operación de inteligencia sobre Tainted. Darl como destino la pone en ruta de colisión con la red de la reina Helka.'
    },
    {
        id: 'orl', label: 'Orl', group: 'VARG', type: 'Personaje — Antagonista menor', desc: 'Viejo de cabello gris lacio. Compañero personal de armas (Hird) de Leif Kolskeggson. Tiene una perra/hound. Cuida al perro quemado por la hoguera de Varg en la granja de Kolskegg, revelando así la conexión de Leif con el lugar.',
        star: ''
    },
    {
        id: 'orna', label: 'Orna (Dios-Águila)', group: 'DIOS', type: 'Dios Muerto', desc: 'El dios-águila, hijo de Snaka. Muerto en el Guðfalla. Sus huesos (incluyendo sus alas) están en la fortaleza de la Reina Helka en Darl, como símbolo de poder.',
        star: 'Helka gobierna bajo las alas de un dios muerto. ¿Solo símbolo, o hay poder real en esos huesos?'
    },
    {
        id: 'oskutred', label: 'Oskutreð (Árbol de Ceniza) [pron. Oskutreth]', group: 'LUGAR', type: 'Lugar — Mítico', desc: 'El gran árbol fresno de Vigríð, análogo al Yggdrasil nórdico. Lik-Rifa fue encadenada bajo sus raíces tras el Guðfalla. La semilla de Oskutreð puede dar vida a vaesen (ver nodo froa). Los terremotos en Iskalt se interpretan como sacudidas de Lik-Rifa bajo el árbol. La cámara subterránea bajo él es Vergelmir (ver nodo vergelmir). [Histórico: Yggdrasil, el fresno cósmico de la mitología nórdica, conectaba los nueve mundos. Gwynne reinterpreta este árbol como carcel y ancla de la diosa-dragón.]',
        star: ''
    },
    {
        id: 'outlawry', label: 'Proscripción (Outlawry)', group: 'NORSE', type: 'Ley — Castigo', desc: 'Exilio legal. El proscrito pierde todos los derechos: cualquiera puede matarlo sin consecuencias, no puede recibir ayuda, debe abandonar el territorio. Peor que muerte: muerte social. Varg es técnicamente proscrito tras matar a Snepil (aunque nadie lo sabe excepto él). [Histórico: el útlagr (outlaw) era castigo severo nórdico. Dos tipos: menor (3 años) y mayor (permanente). El proscrito era "hombre lobo" — fuera de la ley humana. Gwynne lo implica en la huida de Varg.]',
        star: '★ Varg huye como proscrito de facto. Si Leif probara que mató a Snepil, Varg sería declarado útlagr formalmente — cazado legalmente por todos.'
    },
    {
        id: 'ox', label: 'Öx (Hacha)', group: 'NORSE', type: 'Arma — Hacha', desc: 'Hacha de una o dos manos. Herramienta y arma. Hacha de mano (handöx): combate con escudo. Hacha larga (langöx): dos manos, alcance largo, golpes devastadores. Thorkel usa hacha de mango largo "tan alto como él" con hoja "con barba" (skeggöx) — su arma principal. Virk usó hacha de granjero en holmganga. Glornir porta long-axe. [Histórico: el hacha era el arma nórdica icónica. Más barata que espada, igual de letal. La skeggöx (hacha barbada / destral) tenía filo extendido hacia abajo: enganchaba escudos enemigos y protegía la mano del portador. Podía usarse con una o dos manos. Gwynne la usa como arma de trabajadores convertidos en guerreros.]',
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
        id: 'rokia', label: 'Røkia', group: 'VARG', type: 'Personaje — Hermanos', desc: '[Pronunciación: "Rirkia" — la ø suena como la "ir" de "bird".] Guerrera alta, rubia, mirada de halcon. Escudo negro a la espalda. Entrena a Varg en escudo y lanza con pinchazos intencionales. Informa positivamente de Varg a Glornir. Guia a Varg en la compra de equipo en Liga. Recomienda el hacha de lanzar y el yelmo como mas importantes que la brynja (filosofia: ganar la brynja del cadaver del enemigo es la batalla-fama). Participa en el muro de escudos en la batalla del muelle (ver nodo batalla-muelles).',
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
        id: 'seax', label: 'Seax', group: 'NORSE', type: 'Arma — Cuchillo', desc: '[Pronunciación: "Sax".] Cuchillo/daga de un solo filo, 20-75cm. Herramienta y arma. Todo hombre libre lleva uno. Combate cercano, trabajo diario, símbolo de estatus de hombre libre. La thrall-guerrera de Sigrún usa dos seaxes. Thorkel clava uno en tierra para ahuyentar al Nacken. [Histórico: el seax era el cuchillo universal germánico/nórdico. Desde utensilio hasta arma de guerra. El nombre "sajón" (Saxon) viene de seax. Gwynne lo usa como marcador cultural: llevar seax = hombre libre.]',
        star: '★★ La thrall de Sigrún mató a Virk con dos seaxes. Thorkel usa el suyo ritualmente contra vaesen. Símbolo de libertad que los thralls no pueden portar.'
    },
    {
        id: 'second-combat', label: 'Segundo en Combate', group: 'NORSE', type: 'Combate — Rol', desc: 'Testigo y consejero en duelos formales. Arild fue segundo de Guðvarr en el holmganga — le aconsejó antes del duelo, le vendó tras la derrota. Orka fue segundo de Virk. El segundo no puede intervenir en el combate pero puede detenerlo si las reglas se rompen. [Histórico: en duelos formales nórdicos, cada combatiente tenía testigos/segundos. Su rol era garantizar que las reglas se cumplieran y que el resultado fuera reconocido legalmente. Gwynne lo preserva como parte del ritual del holmganga.]',
        star: 'Arild aconsejó a Guðvarr — ¿qué le dijo? Orka como segundo de Virk muestra que ella tiene estatus social reconocido en Fellur a pesar de vivir aislada.'
    },
    {
        id: 'seidr', label: 'Seiðr', group: 'MAGIA', type: 'Magia', desc: '[Pronunciación: "Seithr" — la ð suena como la "th" de "they".] Magia de influencia, invocación y canto. El akáll invoca espíritus de muertos para interrogarlos. El canto protege de vaesen o los controla. Practicado por brujas (völva). El uso extenuante desgasta el cuerpo. Ligado frecuentemente a sangre divina. [Contexto: en la mitología nórdica histórica, el Seiðr era una práctica ritual chamánica de Freyja y Odín, usada para profecía y manipulación del destino. Las völvur viajaban entre comunidades sentadas en plataformas elevadas (seiðhjallr). En Vigríð este saber sobrevive en las thrall-brujas que los mercenarios encadenan.]',
        star: 'Las dos brujas conocidas (Vol, Kráka) son thralls encadenadas. ¿Hay Seiðr libre en Vigríð?'
    },
    {
        id: 'sighvat', label: 'Sighvat', group: 'ELVAR', type: 'Personaje — Terrores de la batalla', desc: 'Obeso, brutal, fornido. Suboficial de Terrores de la batalla. Marca el ritmo de remo con un barril. Cadenas y collares para prisioneros. Golpea a Kráka. Hundur-thrall bajo su control.',
        star: ''
    },
    {
        id: 'sigrun', label: 'Jarl Sigrún', group: 'ORKA', type: 'Personaje — Política', desc: 'Jarl de Fellur durante 8 años. Mujer alta y guerrera. Lleva torc de plata, anillos en los brazos. Convocada a Darl por la Reina Helka; allí juró lealtad de sangre. Acompañada por Vafri como thrall-guerrera y espía (ver nodo vafri). Orka irrumpió en su cámara de noche (ver nodo raid-camara-sigrun). Sigrún despertó y trató de combatir; Orka le cruzó la cara con un tajo diagonal — herida profunda de frente a barbilla, desfigurante. Su amante fue degollado en el lecho antes de poder reaccionar. Estado: viva pero gravemente herida; lanza a sus drengrs en persecución de Orka.',
        star: '★★ Sigrún pierde a su espía Vafri, a su amante y su dignidad en la misma noche. La cicatriz en la cara es el sello de Orka. ¿Pedirá venganza personal o lo reportará a Helka como fracaso de inteligencia?'
    },
    //---------------------------------------Revisado----------------------------------//
    {
        id: 'sjavarom', label: 'Sjávarorm (Serpiente Marina)', group: 'VAESEN', type: 'Vaesen', desc: 'Cabeza del tamaño de una cabaña, hileras de dientes, cuerpo sinuoso gris-verde. Atacó el Wave-Jarl. Controlada por Uspa con canto Seiðr (sangre de Snaka).',
        star: 'Revela el poder de Uspa: sangre de Snaka controla criaturas del mar.'
    },
    {
        id: 'skald', label: 'Skald (Bardo)', group: 'NORSE', type: 'Rol Social', desc: 'Poeta y narrador oral. Preservan historia, genealogías, hazañas. Galinn es el skáld de Liga (ver nodo galinn). Grend también cumple función de narrador oral con Elvar. [Histórico: los skalds eran poetas cortesanos escandinavos que componían en metros complejos (dróttkvætt). Gwynne los usa como portadores de memoria cosmológica.]',
        star: 'Galinn recita la saga del Guðfalla completa. La tradición oral es clave para entender cómo se recuerda la historia en Vigríð.'
    },
    {
        id: 'skjaldborg', label: 'Skjaldborg (Muro de Escudos)', group: 'NORSE', type: 'Tactica — Formacion', desc: 'Formacion de combate: guerreros hombro con hombro, escudos superpuestos formando muro. Primera linea usa lanzas. Tactica defensiva de infanteria nordica. Elvar gano su puesto en el muro. Rokia entrena a Varg para el muro. Usado en combate real en los muelles de Liga (ver nodo batalla-muelles).',
        star: '** Primer combate real de Varg en el muro. Su instinto de abandonarlo y montar el caballo enemigo es tacticamente incorrecto pero funciona. La tension entre doctrina e instinto define su potencial como guerrero.'
    },
    {
        id: 'skjoldr', label: 'Skjöldr (Escudo)', group: 'NORSE', type: 'Armadura — Defensa', desc: 'Escudo redondo de madera (80-90cm diámetro), centro con umbo de hierro. Pintado con colores de facción: negro (Hermanos de Sangre), rojo (Terrores de la batalla), azul (Jarl Logur). Formación de muro de escudos (skjaldborg). Varg entrena con escudo bajo Røkia. [Histórico: el escudo era la defensa primaria vikinga. Madera de tilo o abeto, cubierta de cuero. Se rompían en batalla y se reemplazaban. El muro de escudos era la táctica de infantería nórdica básica. Gwynne lo preserva fielmente.]',
        star: '★ Los colores de escudo identifican facciones al instante. Røkia entrena a Varg específicamente en combate de escudo — habilidad fundamental para Hermanos de Sangre.'
    },
    {
        id: 'skraeling', label: 'Skraeling', group: 'VAESEN', type: 'Vaesen — Combatiente', desc: 'Vaesen que participo en el ataque al steading de Orka (ver nodo ataque-steading). Mencionado por Vesli al narrar la batalla junto a guerreros humanos, vaesen y el Tainted-garras. Sus caracteristicas fisicas y habilidades no han sido detalladas aun en los capitulos leidos. [Historico: skraeling era el termino nordico para los nativos de America del Norte y Groenlandia. Gwynne lo reutiliza como nombre de un vaesen de Vigrið.]',
        star: '¿Que hace un skraeling? Participaron activamente en el ataque -- no son solo acompanantes. Primera vez que se los ve en accion (sin descripcion fisica todavia).'
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
        star: 'Uspa y Kráka portan su sangre. ¿Qué otros Tainted de Snaka hay en Vigríð?'
    },
    {
        id: 'snakavik', label: 'Snakavik', group: 'LUGAR', type: 'Lugar — Ciudad del Jarl Störr', desc: 'Ciudad-fortaleza del Jarl Störr construida dentro y sobre el cráneo gigante del dios-serpiente Snaka, en el extremo occidental de las Montañas Boneback. El cráneo emerge a medias de la ladera; los colmillos superiores brotan del agua formando la entrada al puerto: veinte drakkars caben de frente entre ellos. La mandíbula inferior reposa en el fondo del fiordo. El interior existe en penumbra permanente: la única luz natural entra por las cuencas de los ojos, la mandíbula abierta y grietas en el hueso, todo complementado por miles de antorchas de aceite de ballena y foca. La ciudad crece en la ladera interna: muelles, casas de pescado, tabernas, corredores oscuros con prostitutas y cortadores de gargantas. En el muelle hay postes con jaulas de hierro oxidado que exhiben esqueletos y cadáveres de criminales, con letreros rúnicos indicando sus crímenes (p.ej., "adorador de un dios muerto"). Una escalera de madera de 212 escalones — tan ancha que doce marchan en fila — trepa por la parte posterior del cráneo hasta una grieta que conduce a la cima. En la cumbre, una meseta de granito alberga la fortaleza: sala de festines con vigas esculpidas en serpientes (tan grande como algunas ciudades), una torre Galdur donde los Galdurmen aprenden sus artes rúnicas, establos, forjas y una hilera de casas largas para el hird de Störr. Los guardias de la fortaleza llevan escudos amarillos con serpiente anudada alrededor del boss. Los huesos de Snaka actúan de escudo contra los vaesen (ver nodo gods-bones). Berak fue vendido (ver nodo llegada-snakavik). Hogar de infancia de Elvar; hogar de Grend por más años de los que Elvar ha respirado.',
        star: 'Jarl Störr es el padre de Elvar. La reacción emocional de Elvar ante el nombre de Snakavik en capítulos anteriores cobra ahora todo su significado.'
    },
    {
        id: 'snekkja', label: 'Snekkja / Snekke', group: 'NORSE', type: 'Embarcación — Guerra Ligera / Incursión', desc: 'Barco de guerra ligero y rápido (20-30 remos). Más pequeño que drakkar pero más ágil y de menor calado. Ideal para incursiones rápidas, ríos, costas poco profundas, exploración y mensajería. Tripulación reducida. Nombre significa "el que se desliza" / "serpiente". [Histórico: la snekkja (snekke) era el langskip más pequeño de la tipología nórdica. Más común que el drakkar (que era caro). Podía navegar aguas muy someras. Velocidad sobre capacidad de carga. Gwynne podría usarlas para bandidos, exploradores o mensajeros de jarls.]',
        star: 'Posible embarcación de los raptores de niños: rápida, silenciosa, perfecta para huir por ríos.'
    },
    {
        id: 'snepil', label: 'Snepil Kolskegg (†)', group: 'VARG', type: 'Personaje — Muerto', desc: 'Antiguo dueño de Varg. Asesinado por Varg en un episodio de furia roja disociativa del que Varg no recuerda nada. Tenía una granja 20 leguas al noreste de Liga, río arriba. Su muerte es el detonante de toda la huida y búsqueda de Varg. Orl era su thrall de confianza.',
        star: 'Varg mató a su amo sin recordarlo. La furia roja que borró el acto es la misma que lo hace sospechoso de sangre Tainted.'
    },
    {
        id: 'spert', label: 'Spert', group: 'ORKA', type: 'Vaesen — Guardian (Recuperandose)', desc: 'Spertus. Artropodo segmentado con cara casi humana, aguijon, antenas, vapor negro venenoso. Capturado por Orka con vinculo de sangre. Guarda el steading de otros vaesen. Come papilla de sangre y saliva de Orka diariamente. Estado actual: gravemente herido durante el ataque al steading (ver nodo ataque-steading). Mato a al menos un atacante con su veneno antes de caer. Liberado de su juramento por Orka tras el ataque. Siendo curado por Vesli (ver nodo vesli-saliva).',
        star: 'Su veneno mata incluso a guerreros armados. Hizo su trabajo. Fue liberado -- gesto de honra genuina de Orka.'
    },
    {
        id: 'spertus', label: 'Spertus', group: 'VAESEN', type: 'Vaesen — Artrópodo', desc: 'Tipo de vaesen artropodo. Ver nodo spert para el ejemplar capturado por Orka.',
        star: ''
    },
    {
        id: 'spjot', label: 'Spjót (Lanza)', group: 'NORSE', type: 'Arma — Asta', desc: 'Lanza de 2-3 metros. Arma primaria de infantería nórdica. Más común que espada (más barata). Punta de hierro con aleta para evitar penetración excesiva. Arrojadiza o de empuje. Leif hirió a Varg con lanza. [Histórico: la lanza era el arma más común en ejércitos vikingos. Versátil: primera línea en muro de escudos, arma arrojadiza, caza. Odín portaba la lanza Gungnir. Gwynne la usa como arma estándar de soldados.]',
        star: 'Leif hirió a Varg con lanza antes de huir. Arma del soldado común, no del héroe — pero letal igual.'
    },
    {
        id: 'steading', label: 'Steading (Granja)', group: 'NORSE', type: 'Vida Diaria — Vivienda', desc: 'Granja autosuficiente. Casa principal, establos, almacenes, cercas. Unidad basica de vida rural. Orka y Thorkel construyeron su steading en las colinas sobre Fellur con sus propias manos. Asgrim tenia steading donde fue asesinado. El steading de Orka fue DESTRUIDO por la banda de Drekr (ver nodo ataque-steading): hall incendiado, galdr-runas obliteradas, animales muertos, establo vacio, pony Snort matado.',
        star: 'El steading de Orka ya no existe. La familia que lo construyo esta rota: Thorkel muerto, Breca raptado. El lugar fisico de la vida que eligieron ya no esta.'
    },
    {
        id: 'storr', label: 'Jarl Störr', group: 'FACCION', type: 'Facción — Amenaza', desc: 'Jarl poderoso del noroeste, sede en Snakavik. En expansión constante hacia el sur y el este. Alto, delgado, túnica de lana azul oscuro, seax finamente trabajado, cadena de plata con colmillo de serpiente, anillo de brazo con serpiente-que-se-muerde-la-cola. Cejas pesadas, nariz fina. Carácter: señor estricto — su reino prospera pero los infractores acaban en jaulas de hierro en el muelle. Guardia personal: Berserkir-thralls. Agente Seiðr: Silrið (ver nodo silrid). Oráculo: Hrung (ver nodo hrung). Compró a Berak al doble del precio de mercado. Padre biológico de Elvar (ver nodo elvar). Hijos: Thorun (mayor, hostil, obediente) y Broðir (menor, tímido y afectuoso) (ver nodos thorun, brodir). Tenía planeado casar a Elvar con Hákon (hijo de Helka) para unir ambos reinos — una alianza que habría cubierto más de la mitad de Vigríð. La huida de Elvar hace ~4 años le costó sangre para reconsolidar su poder: "tuve que derramar mucha sangre para recuperar el control." En la reunión en la taberna ofrece a Elvar reconciliación y posiblemente su propio warband de drengrs como alternativa al matrimonio. Silrið insinúa que hay "otros caminos por el bosque" además del matrimonio con Helka.',
        star: '★★★ El plan matrimonial Störr-Helka habría fusionado los dos mayores poderes de Vigríð. Elvar lo frustró huyendo. Störr no la castiga — la tienta con lo que ella más desea: un warband propio. Conoce a su hija mejor de lo que ella cree.'
    },
    {
        id: 'sulich', label: 'Sulich', group: 'VARG', type: 'Personaje — Hermanos (Iskidano)', desc: 'Delgado, estatura media. Cabeza rapada excepto una larga trenza negra brillante como azabache. Piel oscura (único de tez oscura entre los Hermanos). Kaftan gris de lana abrochado al centro, calzones anchos con vendas ajustadas tobillo-rodilla. Escudo negro con salpicaduras rojas. Espada curva de un solo filo. Varg lo reconoce sin saber por qué. Miembro pleno de los Hermanos de Sangre, ha prestado juramento de sangre. Origen: Iskidan (su apariencia y armamento coinciden con los druzhina). Jaromir lo reclama por "grandes crímenes" (ver nodo sulich-crisis). Sulich come mutton ahumado con total calma mientras el príncipe lo confronta, sin dignarse mirarlo. Codigo del botin: tras la batalla ofrece a Varg el yelmo del druzhina que este mato, explicando el codigo de honor del botin de guerra (ver nodo botin-guerra). Pronuncia "viaja bien, hermano mio" sobre el caido antes de ofrecerselo a Varg. Cuando Varg dice "quédatelo tú", Sulich se ofende gravemente y se marcha -- tomar el botin ajeno es robo, no honor.',
        star: '★★★ ¿Qué crímenes cometió en Iskidan que hacen que un príncipe cruce el whale road para reclamarlo? La palabra "hermano mío" al druzhina caído -- compatriota quizás conocido -- revela capas de su pasado. Su código de honor es más estricto de lo esperado en un mercenario.'
    },
    {
        id: 'svelgarth', label: 'Svelgarth', group: 'LUGAR', type: 'Lugar — Ciudad', desc: 'Ciudad al este de Vigríð. Dominio del Jarl Orlyg. Mencionada en el contexto político del Althing como otro territorio que debe decidir su postura ante la expansión de Helka.',
        star: ''
    },
    {
        id: 'svik', label: 'Svik Hrulfsson', group: 'VARG', type: 'Personaje — Hermanos', desc: 'Pelo rojo trenzado, apuesto de barba aceitada. Tunica verde, anillos de plata, torc de serpientes. Apodo: Pelo-Enredado (ironico). Sarcastico, cuido a Varg de fiebre. Reclutador/negociador. Momento de profundidad: aceptar ayuda no es debilidad. Acompana a Varg a comprar equipo. Lucha en el muro de escudos en la batalla del muelle (ver nodo batalla-muelles).',
        star: '* Su sonrisa salpicada de sangre y la pregunta a Varg tras el combate revelan admiracion bajo el sarcasmo habitual. Es el primero en reconocer que lo que hizo Varg, aunque incorrecto tacticamente, funciono.'
    },
    {
        id: 'tainted', label: 'Tainted', group: 'COSMO', type: 'Faccion — Perseguidos', desc: 'Descendientes de los dioses muertos. Portadores de poderes heredados de su linaje divino. Perseguidos y cazados desde el Gudfalla. Controlados con collares de hierro activados por lengua Galdur. Vendidos a jarls poderosos. Linajes conocidos en Vigrið e Iskidan: oso (Berser), lobo (Ulfrir), serpiente (Snaka), sabueso (Hundur), toro, halcon, caballo y dragon (ver nodo dragon-born). Los Tainted estan dispersos por todo el mundo conocido, no solo en Vigrið.',
        star: '*** ¿Varg tiene sangre Tainted? ¿Y Breca? Los dos protagonistas muestran senales. El linaje dragon-born de Lik-Rifa ha sido confirmado como activo en Vigrið (ver nodo dragon-born).'
    },
    {
        id: 'tennur', label: 'Tennur', group: 'VAESEN', type: 'Criatura', desc: 'A los Tennur les gustan los dientes y en manada son letales',
        star: ''
    },
    {
        id: 'thorkel', label: 'Thorkel Ulfsson (dagger)', group: 'ORKA', type: 'Personaje — MUERTO', desc: 'Grande como un penasco. Barba trenzada con cicatriz de mejilla a mandibula. Ex-thrall. El mejor rastreador. Profundamente amoroso con Orka y Breca. Hacha de mango largo con hoja barbada. Capa de lobo. Identifico a la thrall de Sigrun como Ulfhednar. Acepto la huida sin resistencia. MUERTO defendiendo el steading (ver nodo thorkel-muerte). Enterrado por Orka en barrow con su hacha, los seaxes ornamentados y brazaletes de oro (ver nodo tumulo-thorkel). Ultimas palabras: Dragon-born (ver nodo dragon-born).',
        star: '*** Sus ultimas dos palabras son las revelaciones mas grandes del libro. Su patronimico Ulfsson y su conocimiento preciso de los Ulfhednar apuntan a sangre de lobo.'
    },
    {
        id: 'thrall', label: 'Thrall (Esclavo)', group: 'NORSE', type: 'Clase Social', desc: 'Esclavo. Collar de hierro como simbolo. Sin derechos legales: no puede portar armas, no puede hablar en el Althing, su vida pertenece a su amo. Los Tainted son esclavizados sistematicamente con collares de control magico. [Historico: los thralls eran la clase mas baja en la sociedad nordica: prisioneros de guerra, deudores, hijos de esclavos. Gwynne expande esto: en Vigrið los Tainted son thralls por ley, controlados con collares magicos.]',
        star: '*** La esclavitud es institucion central en Vigrið. La experiencia de haber sido thrall deja marcas fisicas y psicologicas que definen a quien la vivio.'
    },
    {
        id: 'vafri', label: 'Vafri — Thrall-Guerrera de Sigrún', group: 'ORKA', type: 'Personaje — Tainted (Lobo) — Muerta', desc: 'Descendiente de Ulfrir (el gran dios-lobo) y Hundur el sabueso — linaje mixto lobo-sabueso, orgullosa de ello pese a ser thrall: "orgullosos y fuertes éramos." Ojos ambarinos en combate, dientes que se agudizan, uñas afiladas como garras. Ejecutó a Virk en el holmganga (ver nodo holmganga-event). Función real: espía de Hákon — ordenada a reportar cualquier señal de Tainted en la región; informaba a través de Drekr como intermediario. Lamer la sangre de Thorkel era rastreo activo, no solo frenesí. Estado: MUERTA — Orka la apuñaló en el vientre en la cámara de Sigrún (ver nodo raid-camara-sigrun); murió sin su seax, que Orka le arrebató de las manos moribundas.',
        star: '★★★ Vafri cierra el arco del misterio: era los ojos de Hákon en la región. Lamer la sangre de Thorkel era rastreo, no frenesí. Su linaje Hundur le daba capacidad de seguir pistas — Thorkel tenía razón en preocuparse. La cadena completa queda expuesta: Hákon → Vafri → Drekr → ataque al steading.'
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
        id: 'varg', label: 'Varg', group: 'VARG', type: 'POV — Personaje', desc: 'Ex-thrall de Snepil, ~30 inviernos. Hermana Froya muerta. Episodios de furia roja disociativa. Boxeador formidable (100 combates). Bolsa de cuero con algo de Froya. Estado actual: aprendiz de los Hermanos de Sangre (ver nodo varg-aprendiz). Kit de combate completo adquirido en Liga (ver nodo kit-varg). Primera muerte consciente en combate (ver nodo varg-primera-muerte) -- a diferencia de la muerte de Snepil/Kolskegg que no recuerda, esta la recuerda con todo detalle y lo hace vomitar. Asignado sea-chest y banco de remos en el Sea-Wolf; aprende el codigo del botin de guerra (ver nodo botin-guerra). Ahora navegando con los Bloodsworn en primera mision de Helka (ver nodo mision-helka-norte). Siente atraccion extraña hacia relics divinos (ver nodo objeto-viga). El akall sigue siendo su objetivo final (ver nodo akall).',
        star: '*** La diferencia entre recordar y no recordar una muerte es la fractura central de su arco. Sensibilidad a relics divinos + furia roja disociativa + primera muerte consciente: tres capas de un posible Tainted que aun no sabe que es.'
    },
    {
        id: 'vergelmir', label: 'Vergelmir', group: 'LUGAR', type: 'Lugar — Mítico', desc: 'Cámara subterránea bajo Oskutreð. Allí Lik-Rifa está encadenada y devora almas de guerreros muertos. El camino de los muertos pasa por aquí: por eso los guerreros nórdicos son enterrados con armas en la mano, para poder combatirla. Grend afirma que los guerreros «atraviesan Vergelmir en el camino del alma».',
        star: '★★ Los terremotos de Iskalt son interpretados por Grend como Lik-Rifa forcejeando en Vergelmir. El umbral entre el mundo de los vivos y los muertos está vibrando.'
    },
    {
        id: 'vesli', label: 'Vesli', group: 'ORKA', type: 'Vaesen — Aliada (Recuperandose)', desc: 'Tennur hembra. Pequena, alas membranosas, dos filas de dientes, venas oscuras en piel rosada. Herida y expulsada de su manada. Breca la salvo. Juro lealtad de sangre al nino. Integrada en la familia de Orka. Estado actual: gravemente herida durante el ataque al steading (ver nodo ataque-steading), recuperandose junto a Spert. Su saliva tiene propiedades curativas (ver nodo vesli-saliva). Narra la escena del ataque y la transformacion de Thorkel a Orka (ver nodo thorkel-transformacion). Rechaza la libertad ofrecida por Orka -- su lealtad es a Breca.',
        star: '*** Su juramento de sangre con Breca sigue activo. Pasa de carga a activo: curadora, testigo, narradora. El lazo de sangre con Breca la hace un activo potencial en la persecucion de Orka.'
    },
    {
        id: 'vigrið', label: 'Vigríð', group: 'LUGAR', type: 'Lugar — Continente', desc: '[Pronunciación: "Vigrith" — la ð suena como la "th" de "they".] La Llanura de Batalla. El continente principal. Construido literalmente sobre los huesos de Snaka. Dividido entre jarls, reinas y hombres libres. Los vaesen son una presencia constante en las zonas remotas.',
        star: ''
    },
    {
        id: 'virk', label: 'Virk (†)', group: 'ORKA', type: 'Personaje — Muerto', desc: 'Pescador y exguerrero de Fellur. Dos hijos: Mord (mayor) y Lif (menor). MUERTO tras violar las reglas del holmganga contra Guðvarr -- ejecutado por la thrall de Sigrún (ver nodo holmganga-event). Documentaba el patrón de robos de niños en la región.',
        star: '★★ Su muerte deja a Mord y Lif huérfanos y con deseos de venganza. Los robos de niños que él documentaba quedan sin investigador. La información que tenía sobre el patrón muere con él —¿o la heredó alguien?'
    },
    {
        id: 'vol', label: 'Vol', group: 'VARG', type: 'Personaje — Seidr', desc: 'Bruja Seidr de los Hermanos. Cara de lineas duras acentuada por tatuajes azules anudados en cuello y mandibula inferior. Collar de thrall bajo los tatuajes. Voz sorprendentemente suave para su aspecto severo. Actua con confianza y dignidad absolutamente inusuales en un thrall -- Varg lo nota. Primera interaccion directa con Varg. Cuando el pide el akall, ella comienza a responder afirmativamente (insinuando que esta dispuesta) pero Glornir la interrumpe. La mira un largo momento antes de seguirlo.',
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
        id: 'jaromir', label: 'Principe Jaromir', group: 'FACCION', type: 'Personaje — Poder Externo', desc: 'Hijo del Gran Khagan Kirill. Principe de Gravka. Cabeza rapada, trenza rubia, armadura laminar, yelmo de borde de oro, halcon. Llega a Liga reclamando a Sulich (ver nodo sulich-crisis). Escala de ultimatum a combate total cuando Glornir se niega (ver nodo batalla-muelles). Detiene el combate al ver llegar los tres drakkars de Helka.',
        star: '*** Lanzar una flecha a Glornir en persona es un insulto extremo. Escala de ultimatum a combate total en segundos. La llegada de Helka es lo unico que lo para.'
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
        id: 'vackna', label: 'Vackna (Cuerno-Despertador)', group: 'COSMO', type: 'Objeto Mitico — Reliquia Real', desc: 'El cuerno que sono al alba e inicio el Gudfalla, llamando a los dioses a la batalla. Cantado por Galinn. CONFIRMADO como reliquia fisica real -- una astilla sobrevive incrustada en la viga de la sala de Logur (ver nodo objeto-viga).',
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
        id: 'salla', label: 'Salla', group: 'FACCION', type: 'Personaje — Secundario', desc: 'Esposa del Jarl Logur de Liga. Alta y elegante, cara abierta y honesta. Cabello trenzado y apilado, mas gris que rubio. Viste vestido de lana azul profundo con hangerock bordado y cinturon de tablet-weave con llaves -- senora del hall. Se sienta a la derecha de Logur en la mesa de honor. Cuando Logur promete generosamente enviar a los Hermanos con barriles y vientres llenos, Salla se queda un momento y dice con una sonrisa a Glornir: "Quiere decir que me pedira a mi que lo organice todo." Glornir le hace una reverencia de cabeza y la llama por su nombre.',
        star: 'Nombre confirmado: Salla. Su comentario ironico sobre Logur revela una relacion de pareja real -- ella gestiona, el promete y se lleva el credito. Glornir le hace una reverencia -- la respeta.'
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
        id: 'dragon-born', label: 'Dragon-Born (Tainted de Lik-Rifa)', group: 'TRAMA', type: 'Trama — ACTIVO EN VIGRIÐ', desc: 'Tainted con sangre de la diosa-dragon Lik-Rifa. Elvar niega su existencia, Uspa escupe. CONFIRMADO por las ultimas palabras de Thorkel. DESCRIPCION FISICA por Vesli (ver nodo tainted-garras): humano pero no del todo, con dos garras largas y afiladas, OJOS QUE BRILLAN ROJO COMO BRASAS (marcador visual unico del linaje dragon -- distinto del ambar de Ulfrir/Berser). Fiero y eficaz en combate. Trabaja para Drekr (ver nodo drekr).',
        star: '*** OJOS ROJOS = linaje Lik-Rifa. Marcador que distingue el linaje dragon de todos los otros Tainted (ambar = Ulfrir/Berser, rojo = dragon). Sus armas mataron a Thorkel. Orka las lleva al cinto para devolverselas (ver nodo seaxes-tainted).'
    },

    // ==========================================================
    // CAPITULO 15 -- NUEVOS NODOS
    // ==========================================================
    {
        id: 'ulfhednar', label: 'Ulfhednar (Guerrera-Lobo)', group: 'COSMO', type: 'Concepto — Elite Tainted Lobo',
        desc: 'Clase de elite dentro de los Tainted de sangre Ulfrir. No son simplemente portadores de sangre de dios-lobo -- son guerreros-lobo de elite, equivalente lupino a los Berserkir de Berser. Thorkel identifica a la thrall de Sigrun como Ulfhednar con certeza, sin titubear. Distingue entre Ulfhednar (guerreras-lobo) y Hundur-kin (rastreadores de sangre) -- son tipos distintos de Tainted, aunque los linajes pueden mezclarse. La guardia personal de Helka en Liga: una docena larga de Ulfhednar con collares de thrall -- su "manada de lobos" (Svik). Cabezas rapadas con tatuajes espirales, cloaks grises con ribete de piel, sables y seaxes al cinto. Se mueven como bandada de pajaros o manada de lobos -- sin mirarse, cada uno sabe donde estan los otros. Olisquean a los extraños (Jaromir fue olisqueado). Sus ojos muestran MISERIA, no arrogancia: son tratados con lo mas fino pero son esclavos. Svik: "nadie quiere vivir de rodillas." [Historico: los ulfhednar nordicos eran guerreros consagrados a Odin que vestian pieles de lobo y entraban en trance de furia animal, paralelos a los berserkir pero de lobo en vez de oso. Gwynne los reinterpreta como linaje divino real de Ulfrir.]',
        star: '*** Helka tiene una manada de Ulfhednar-thrall -- no solo una como Sigrun. Escala de poder diferente. Que muestren miseria en los ojos es el detalle mas humano y politicamente peligroso: guerreros perfectos que desean la libertad.'
    },
    {
        id: 'arbol-froa', label: 'Arbol de Froa (destruido)', group: 'LUGAR', type: 'Lugar — Destruido',
        desc: 'Arbol de fresno en un montIculo sobre un prado cruzado por un rio, al sureste del steading de Orka. Froa lo habitaba y guardaba. Nacido de una semilla del gran Oskutred. Destruido -- derribado con muchas hachas y quemado en grandes manchas. El tronco yace astillado. Las raices azotaron a los atacantes levantando la tierra. Manchas de sangre oscura congelada confirman bajas entre los agresores. Significado para Orka: era su lugar de paz y referencia espiritual en el bosque. Acudia alli a pedir consejo y agradecer la proteccion.',
        star: '** Su destruccion es deliberada y organizada. Requirio muchos hombres y sufrieron perdidas. Alguien esta eliminando sistematicamente los guardianes del bosque. ¿Por que? ¿Para que la region quede sin proteccion?'
    },
    {
        id: 'decision-huida', label: 'Decision de Huir', group: 'TRAMA', type: 'Trama — Activa',
        desc: 'Orka propone a Thorkel abandonar el steading antes de que sea demasiado tarde, motivada por la amenaza de la Ulfhednar de Sigrun que probo la sangre de Thorkel. Thorkel acepta sorprendentemente rapido -- sin resistencia. Plan de Orka: pedir consejo a Froa sobre adonde ir, a un lugar donde haya otro de sus parientes. El plan queda en suspension al encontrar a Froa muerta y escuchar gritos al oeste.',
        star: '*** Trama activa urgente. El plan de huida se rompe antes de ejecutarse. Los gritos al oeste sugieren que la amenaza ya llego a su umbral. ¿Podran huir a tiempo?'
    },
    {
        id: 'colgante-espada', label: 'Colgante de Espada (Breca)', group: 'OBJETO', type: 'Objeto — Simbolico',
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
        id: 'objeto-viga', label: 'Astilla del Cuerno Vackna (en la Viga)', group: 'OBJETO', type: 'Objeto — Reliquia Divina', desc: 'Varg nota algo palido como hueso con extremo de plata incrustado en la viga de la sala de Logur, con cuervo posado encima. Siente presion extraña al acercarse. IDENTIFICADO por Torvik como astilla del Cuerno Vackna -- el cuerno que inicio el Gudfalla. Regalo de Skullsplitter (jefe anterior de los Hermanos) al Jarl Logur. Ha enriquecido a Logur.',
        star: '*** Misterio resuelto. La sensacion de presion que Varg sintio revela posible sensibilidad magica -- otro indicador de sangre Tainted?'
    },
    {
        id: 'varg-aprendiz', label: 'Estatus de Aprendiz (Varg)', group: 'TRAMA', type: 'Trama — Estado Actual',
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
        id: 'drekr', label: 'Drekr', group: 'ORKA', type: 'Personaje — Antagonista Principal', desc: 'Líder de la operación que rapta niños Tainted en la región de Fellur. Su operación usa un Galdurman o Seiðr-witch para quemar las protecciones rúnicas, ataca con fuerza mixta y huye en botes por ríos. Composición de su banda (vía Vesli): guerreros humanos en cueros de bosque, vaesen, tennur sin juramento, skraelings y al menos un Tainted de linaje dragón con ojos rojos y garras largas (ver nodo tainted-garras). REVELADO (vía Vafri): actúa bajo las órdenes de Hákon, hijo de la Reina Helka. Era el receptor de los informes de espionaje de Vafri sobre Tainted en la región. Destino posible con los niños raptados: Darl (sede de Helka), aunque Vafri lo afirmó con los ojos desviados — posible engaño. Estado: en ruta con los niños raptados, incluido Breca.',
        star: '★★★ La pregunta de quién financiaba a Drekr tiene respuesta: Hákon / Helka. El rapto de niños Tainted no es bandolerismo — es política de estado. Darl como destino coloca a Breca en el corazón del poder de Helka. La pregunta que persiste: ¿para qué quiere Helka a los niños Tainted?'
    },
    {
        id: 'ataque-steading', label: 'Ataque al Steading de Orka', group: 'EVENTO', type: 'Evento — Crisis', desc: 'La banda de Drekr ataca el steading de Orka mientras ella esta en el bosque buscando a Froa. Cronologia completa (reconstruida por Vesli): (1) destruyen las galdr-runas (Galdurman o Seidr-witch), (2) el infiltrado joven abre la puerta desde dentro, (3) guerreros + vaesen + skraelings + tennur sin juramento + el Tainted-garras de ojos rojos escalan la empalizada, (4) Spert mata a uno con su veneno antes de ser apunalado, (5) Thorkel barro el hall y lucho en el umbral matando a 5-6 atacantes, (6) Thorkel se transformo en el combate (ver nodo thorkel-transformacion), (7) el Tainted-garras de ojos rojos mato a Thorkel con sus garras, (8) los tennur de Drekr intentaron raptar especificamente a Breca -- Vesli los combatio y fue herida, (9) Breca es llevado vivo en los botes.',
        star: '*** Evento pivote de la novela. Dos detalles cruciales: Thorkel se TRANSFORMO en el combate (sangre Tainted de lobo confirmada implicitamente, ver nodo thorkel-transformacion), y los tennur buscaban especificamente a Breca.'
    },
    {
        id: 'thorkel-muerte', label: 'Muerte de Thorkel', group: 'EVENTO', type: 'Evento — Muerte POV',
        desc: 'Thorkel Ulfsson muere en brazos de Orka tras defender el steading contra la banda de Drekr. Defendio solo: retrocedio hasta el hall, barro la puerta y aguanto el umbral mas estrecho donde el numero no contaba. Mato a cinco o seis atacantes -- uno con la cabeza partida de corona a menton por su hacha larga. Fue apunalado con dos seaxes -- uno alto en el pecho, uno en el vientre. Aun respiraba cuando Orka llego. Ultimas palabras: They took Breca y despues Dragon-born. Orka pasa sus dedos por sus labios y frota su sangre sobre su propia cara en franjas (ritual de duelo/guerra). Le coloca su hacha larga en las manos para el paso por Vergelmir. El hall se derrumba encima del lugar donde yacia.',
        star: '*** Muerte de personaje principal POV. Sus dos ultimas palabras son las revelaciones mas grandes del libro: (1) confirma que Drekr se llevo a Breca vivo, (2) Dragon-born -- murio combatiendo a un Tainted de linaje de Lik-Rifa. Elvar estaba equivocada. Uspa tenia razon. Orka le da un final digno con el hacha en las manos -- morira bien armado para Vergelmir.'
    },
    {
        id: 'galdurman-drekr', label: 'Galdurman/Seidr de Drekr', group: 'TRAMA', type: 'Trama — Personaje sin Nombre',
        desc: 'Alguien en la banda de Drekr tiene poder de Galdur o Seidr suficiente para quemar y destruir completamente las galdr-runas de proteccion del steading. Orka lo confirma al ver el poste de runas destruido: solo un Galdurman o Seidr-witch podria haberlo hecho. Este individuo sin nombre es un activo clave de la organizacion de Drekr -- sin el, no podrian penetrar los steadings protegidos. Puede ser el mismo dragon-born que identifico Thorkel, o un segundo miembro magico del grupo.',
        star: '*** Sin nombre. Sin descripcion. Pero su existencia confirma que Drekr no es solo un jefe de banda comun -- tiene acceso a magia de alto nivel. ¿Es el dragon-born el Galdurman? ¿O son dos personas diferentes?'
    },
    {
        id: 'chico-joven', label: 'Joven Infiltrado (dagger)', group: 'ORKA', type: 'Personaje — Muerto',
        desc: 'sobrino del hombre muerto encima de Snort el pony. Fue contratado por su tio para abrir la puerta del steading de Orka desde dentro -- ojos agudos, brazos largos y pies silenciosos, contratado a cambio de oro. No era un guerrero -- fue un medio de acceso. Interrogado por Orka en el rio: revela que Breca fue llevado por el rio y que el lider se llama Drekr. Muere a manos de Orka cuando la informacion ha sido obtenida.',
        star: 'El infiltrado fue el punto de quiebre del steading -- la proteccion galdr-runica no sirve contra un humano que abre la puerta. La vulnerabilidad no era magica sino humana.'
    },
    {
        id: 'drekr-cazadora', label: 'La Caza de Drekr', group: 'TRAMA', type: 'Trama — Nueva Direccion',
        desc: 'Nuevo arco de Orka tras el ataque al steading: Thorkel muerto (ver nodo thorkel-muerte), Breca raptado. Orka sigue las huellas hasta el rio donde cuatro rezagados de Drekr estan matando a su pony Snort. Los mata a todos: lanza a uno en la espalda, seax al viejo en el vientre, hacha repetida sobre la mujer hasta pulpa en acceso de rabia feral, lanza al chico joven en el pecho tras interrogarlo. El chico revela que Breca fue llevado en los botes por el rio y que el lider se llama Drekr. El rio se bifurca en dos canales pasado un penasco de granito -- Orka no sabe que camino tomaron. Sale a buscar a Drekr con el nombre, las armas de Thorkel y las de su cofre enterrado.',
        star: '*** Nuevo motor narrativo del arco Orka. Tiene el nombre, tiene las armas, tiene el rastro en el rio. La rabia feral sobre la mujer es la primera vez que vemos ese lado sin control -- no defensa, sino furia pura. ¿Cual camino tomo Drekr?'
    },
    // ==========================================================
    // CAPITULO 18 -- NUEVOS NODOS
    // ==========================================================
    {
        id: 'sea-wolf', label: 'Sea-Wolf (Lobo del Mar)', group: 'VARG', type: 'Objeto — Drakkar',
        desc: 'El drakkar de los Hermanos de Sangre. Amarrado en el muelle de Liga. Jaromir pone jinetes con antorchas en la entrada del muelle amenazando con quemarlo si Glornir no entrega a Sulich. Hay figuras moviendose en su cubierta. Glornir se niega y la batalla estalla antes de que pueda zarpar. La llegada de Helka interrumpe la crisis.',
        star: 'Nombre confirmado: Sea-Wolf. La amenaza de quemarlo es la presion maxima sobre Glornir -- el drakkar es la vida operativa de los Hermanos.'
    },
    {
        id: 'aslog', label: 'Aslog (dagger)', group: 'VARG', type: 'Personaje — Muerto (Hermanos)',
        desc: 'Hermano de Sangre fallecido cuyo lugar en el banco de remos ocupa Varg. Glornir le entrega a Varg la lanza de Aslog con las palabras: era un hombre fino, aunque no lo suficientemente fino como para conservar la cabeza. Ha tomado el camino del alma. Que te traiga batalla-fama. El detalle de la cabeza sugiere que murio decapitado en combate.',
        star: '¿Como murio Aslog exactamente? Su lanza y su banco pasan a Varg -- Varg hereda su lugar en los Hermanos en todos los sentidos.'
    },
    {
        id: 'skullsplitter', label: 'Skullsplitter (Rompe-Craneos)', group: 'VARG', type: 'Personaje — Muerto (Jefe Anterior)',
        desc: 'Jefe anterior de los Hermanos de Sangre antes de Glornir. Torvik revela su existencia. Fue quien regalo al Jarl Logur la astilla del Cuerno Vackna como parte de la relacion de proteccion entre los Hermanos y Liga. Muerto antes de los eventos de la novela. Mencionado en historias de fogata entre los thralls de la granja de Kolskegg.',
        star: '¿Como murio Skullsplitter? ¿Que mas relics poseyeron los Hermanos en su epoca? La transicion de Skullsplitter a Glornir es historia no contada que podria importar.'
    },
    {
        id: 'batalla-muelles', label: 'Batalla en los Muelles de Liga', group: 'EVENTO', type: 'Evento — Combate',
        desc: 'Jaromir bloquea el muelle con caballeria druzhina cuando ve preparar el Sea-Wolf para zarpar. Glornir se niega a entregar a Sulich. Jaromir le dispara una flecha (Glornir la derriba en el aire con su hacha). Grita LOOSE y desata 40-50 flechas. Los Hermanos forman skjaldborg. Los druzhina cargan por frente y retaguardia. Einar lanza una lanza y mata a un druzhina a caballo. Edel y sus sabuesos derriban otro caballo. Varg abandona el muro, sube a un caballo y mata a un druzhina con el seax. Jarl Logur llega con guardias de escudo azul. La batalla se detiene cuando la flota de Helka entra al fiordo.',
        star: '*** Primera batalla campal del arco Varg. Bloodsworn vs druzhina iskidanos -- dos estilos de combate del mundo de Gwynne. Interrumpida por la llegada de un tercer poder.'
    },
    {
        id: 'llegada-helka', label: 'Llegada de Helka a Liga', group: 'EVENTO', type: 'Evento — Politico Mayor',
        desc: 'tres drakkars enormes y elegantes glidan por el fiordo hacia Liga. Velas negras con imagen de aguila de alas extendidas, pico y garras en ataque -- emblema de Helka y su dominio sobre los huesos de Orna. Cuernos suenan desde sus cubiertas. Toda la batalla en los muelles se detiene al instante. Hasta Varg, recien llegado al mundo de la politica, reconoce ese estandarte.',
        star: '*** MAYOR. Primera aparicion fisica de Helka en la novela. ¿Por que viene a Liga? Tres posibilidades: (1) viene por los Hermanos, (2) sabe lo de Sulich y viene a mediar, (3) la crisis con Iskidan es mas grande de lo que parecia. O las tres.'
    },
    // ==========================================================
    // CAPITULO 19 -- NUEVOS NODOS
    // ==========================================================
    {
        id: 'tainted-garras', label: 'Tainted-Garras (Dragon-Born)', group: 'ORKA', type: 'Personaje — Tainted Antagonista',
        desc: 'El Tainted de linaje dragon que mato a Thorkel en el ataque al steading (ver nodo ataque-steading). Descrito por Vesli: humano pero no del todo -- dos garras largas y afiladas, ojos que brillan rojo como brasas (marcador visual unico del linaje Lik-Rifa, distinto del ambar de Ulfrir/Berser). Fiero y mortal en combate. Trabaja para Drekr. Los seaxes de filo largo y ancho que Orka saco del cuerpo de Thorkel son sus armas (ver nodo seaxes-tainted). Orka los lleva al cinto con intencion de devolverselos.',
        star: '*** Primera descripcion fisica de un dragon-born en la novela. Ojos ROJOS = linaje Lik-Rifa. Sus armas mataron a Thorkel. Orka las lleva al cinto como declaracion de guerra personal contra este individuo. Sin nombre todavia.'
    },
    {
        id: 'tumulo-thorkel', label: 'Entierro de Thorkel y Voto de Orka', group: 'EVENTO', type: 'Evento — Rito y Declaracion',
        desc: 'Orka entierra a Thorkel en el patio del steading destruido. Cava la tumba, arrastra el cuerpo con la hacha larga aun en el puno, coloca el seax ornamentado (ver nodo cofre-enterrado) a su lado, desliza los brazaletes de oro por sus brazos -- sus propios simbolos de rango, entregados a el. Construye un barrow de madera y piedra hasta que solo queda visible la cara. Vierte su propia sangre sobre el rostro de Thorkel. Entonces pronuncia el voto: Soy sangre. Soy muerte. Soy venganza. Voz plana y vacia -- no rabia, sino frialdad. Toma los dos seaxes que mataron a Thorkel (ver nodo seaxes-tainted) y los mete en su cinturon. Cubre el barrow. Al salir, rechaza la compania de Vesli: su unica companera es la muerte.',
        star: '*** El entierro con los brazaletes de oro y el voto son una sola escena inseparable. La frialdad es mas aterradora que la rabia. Orka no promete venganza como emocion -- la declara como estado de ser.'
    },
    {
        id: 'cofre-enterrado', label: 'Cofre Enterrado de Orka', group: 'OBJETO', type: 'Objeto — Pasado Oculto',
        desc: 'Cofre de madera enterrado bajo el suelo del patio del steading, al oeste del hall, guardado por mas de 10 anos. Contenido: brynja de malla remachada (perfecta, conservada en grasa), seax en funda de cuero pulido con knotwork y empunadura de marfil de morsa con herrajes de plata, un puno de brazaletes de plata y oro trenzados, y una bolsa de monedas. Al abrirla Orka experimenta una avalancha de recuerdos de batalla, muerte, viejos amigos y viejos enemigos (algunos que fueron las dos cosas).',
        star: '*** Una brynja de esa calidad y esos brazaletes de plata y oro no son de una granjera -- son de una guerrera de alto rango, posiblemente de una compania o guardia de un jarl. ¿Quien era Orka antes del steading? ¿Por que lo enterro todo?'
    },
    {
        id: 'seaxes-tainted', label: 'Seaxes del Tainted-Garras', group: 'OBJETO', type: 'Objeto — Armas del Enemigo',
        desc: 'Los dos seaxes que mataron a Thorkel, sacados por Orka de su cuerpo. Descripcion: tan largos como su antebrazo, gruesos en la guarda, filo unico y hoja ancha con taper brusco hacia la punta. Empunadura tallada en fresno con knotwork en espiral, capuchon de bronce, pasador enhebrado con cuero. Orka los toma deliberadamente y los mete en su cinturon. Su intencion declarada: encontrar al dueno y devolvercelos.',
        star: '*** Las armas del asesino de Thorkel como instrumentos de venganza. El detalle de la descripcion (fresno, knotwork, bronce) hace de estos seaxes objetos identificables. Orka los convierte en su declaracion de intencion.'
    },
    {
        id: 'vesli-saliva', label: 'Saliva Curativa de Vesli', group: 'VAESEN', type: 'Concepto — Magia Vaesen',
        desc: 'La saliva de Vesli (tennur) tiene propiedades medicinales y adhesivas. Escupida en un glob glutinoso, amasada con los dedos se vuelve fibrosa como tendon. Aplicada sobre heridas: acelera la curacion, reduce el dolor en heartbeats, sirve como hilo y como coating sellador de heridas. Usada para coser y tratar la herida de Spert y las laceraciones de Orka.',
        star: '** Convierte a Vesli de carga a recurso tacticamente valioso. ¿Es capacidad de todas las tennur o especifica de Vesli? ¿Funciona en heridas magicas o solo fisicas?'
    },
    {
        id: 'thorkel-transformacion', label: 'Transformacion de Thorkel (Confirmacion)', group: 'TRAMA', type: 'Trama — Revelacion',
        desc: 'Vesli describe la batalla y dice: Thorkel fierce. Thorkel change, become... (no completa). Orka asiente sin sorpresa -- lo sabia. Esto confirma que Thorkel tenia capacidad de transformacion en combate, muy probablemente sangre Tainted de lobo. Evidencia acumulada: patronimico Ulfsson (hijo de Ulfrir); conocia el termino Ulfhednar con precision exacta sin titubear; acepto huir del steading ante esa amenaza especificamente; eligio morir peleando afuera en el umbral (no escondido). Murio siendo lo que era.',
        star: '*** La confirmacion mas directa posible sin decirlo explicitamente. Vesli lo vio transformarse. Orka asiente sin cuestionarlo. 19 capitulos de insinuaciones culminan en ese asentimiento silencioso.'
    },

    // ── Nuevos nodos del glosario ─────────────────────────────────────────
    {
        id: 'akall-concepto', label: 'Akáll (Invocación de Muertos)', group: 'MAGIA', type: 'Concepto — Ritual Mágico',
        desc: 'Ceremonia de invocación mágica que permite revelar los últimos momentos de un muerto. Tipo específico de Seiðr practicado por brujas völva. El akáll interroga al espíritu del difunto para obtener información sobre las circunstancias de su muerte. Requiere una practicante con poder suficiente. El ritual es extenuante y conlleva un coste físico. [Histórico: en las sagas nórdicas, las völvur podían comunicarse con los muertos. El seiðr de muerte (útiseta, "sentarse fuera") implicaba contacto con el mundo de los muertos. Gwynne lo sistematiza como procedimiento: interrogar al muerto para obtener testimonio.]',
        star: '★★★ El akáll es la clave de la trama de Varg: su petición a Glornir representa la primera articulación pública de su objetivo principal. Ver nodo akall para el evento específico.'
    },
    {
        id: 'berserkir', label: 'Berserkir (Guerrero-Oso)', group: 'COSMO', type: 'Concepto — Élite Tainted Oso',
        desc: 'Clase de Tainted descendiente de Berser el dios-oso. Poseen fuerza sobrehumana, ojos ambarinos en combate y capacidad de transformación parcial. Equivalente ursino de los Ulfhéðnar (guerreros-lobo). Los Berserkir son los Tainted de mayor fuerza bruta conocida en Vigríð. [Histórico: los berserkir nórdicos eran guerreros sagrados de Odín que entraban en trance animal (berserkergang). En las sagas se describen como invulnerables al acero y al fuego durante el frenesí. Gwynne los reinterpreta como linaje de sangre divina literal de Berser.]',
        star: '★★★ Berak es Berserkir confirmado. Su captura por los Terrores de la batalla lo convierte en activo de altísimo valor estratégico para quien lo controle. Paralelismo deliberado con Ulfhéðnar: oso vs lobo.'
    },
    {
        id: 'blod-svarid', label: 'Blóð Svarið (Juramento de Sangre)', group: 'MAGIA', type: 'Concepto — Magia Vinculante',
        desc: '[Pronunciación: "Bloth Svarith" — la ð suena como la "th" de "they".] Juramento mágico sellado con sangre. Vínculo que va más allá del compromiso verbal: la magia lo hace vinculante y su ruptura tiene consecuencias. Mecanismo de lealtad absoluta en Vigríð, más fuerte que cualquier contrato verbal. [Histórico: los juramentos de sangre nórdicos (blóðeiðr) se consideraban sagrados e irrompibles. La sangre era la sede del honor y el alma. Gwynne lo eleva a mecanismo mágico activo: no solo promesa social sino pacto con consecuencias sobrenaturales.]',
        star: '★★ El blóð svarið define la jerarquía moral de Vigríð: los juramentos importan. Su posible ruptura o uso para controlar a los Tainted es una pregunta latente.'
    },
    {
        id: 'galdrabok', label: 'Galdrabók (Libro de Magia)', group: 'MAGIA', type: 'Concepto — Texto Mágico',
        desc: 'Libro de magia que contiene runas, hechizos y conocimiento arcano. Término genérico para los textos de poder en Vigríð. Los galdrabók más conocidos son la Graskinna (piel gris) y la Rauðskinna (piel roja), fabricados en pieles curtidas. El conocimiento contenido en un galdrabók puede ser peligroso o prohibido. [Histórico: los galdrabók islandeses reales (s. XVII) contenían hechizos rúnicos, conjuros de protección y maldiciones. Gwynne adapta el concepto a Vigríð con libros de poder genuinamente mágico escritos en materiales perturbadores.]',
        star: '★★ Los galdrabók representan el conocimiento mágico sistematizado. La Rauðskinna en particular, hecha de piel de dios muerto, es el texto de mayor poder conocido.'
    },
    {
        id: 'graskinna', label: 'Graskinna (Piel Gris)', group: 'MAGIA', type: 'Concepto — Texto Mágico',
        desc: 'Libro de magia (galdrabók) escrito sobre piel curtida gris. Contiene conocimiento arcano de nivel intermedio. Menos poderosa que la Rauðskinna pero igualmente peligrosa. El material de escritura — piel humana desollada — indica el origen oscuro del conocimiento que contiene.',
        star: '★ Uno de los dos galdrabók de piel nombrados explícitamente en Vigríð. Su posesión y uso están reservados a magos de nivel considerable.'
    },
    {
        id: 'raudskinna', label: 'Rauðskinna (Piel Roja)', group: 'MAGIA', type: 'Concepto — Texto Mágico',
        desc: '[Pronunciación: "Rauthskinna" — la ð suena como la "th" de "they".] El más poderoso de los libros de magia conocidos, escrito sobre la piel desollada de un dios muerto. Su color rojo proviene de la sangre divina que impregna el pergamino. Contiene conocimiento mágico de nivel superior al de cualquier otro galdrabók. [Histórico: la Rauðskinna (Piel Roja) islandesa histórica era un grimorio legendario atribuido al obispo Gottskálk el Cruel (s. XVI), considerado el libro de magia más peligroso jamás escrito. Gwynne toma el nombre y lo amplifica: no piel de animal sino de dios.]',
        star: '★★★ Fabricado con piel de dios muerto — el material más cargado de poder en Vigríð. Su existencia implica que alguien desollÃ³ un cadáver divino. ¿Quién lo hizo? ¿Quién lo posee ahora?'
    },
    {
        id: 'gudljos', label: 'Guðljós (Luces de Dioses)', group: 'COSMO', type: 'Concepto — Fenómeno Cosmológico',
        desc: '[Pronunciación: "Guthlyos" — la ð suena como la "th" de "they"; la j suena como la "y" de "yellow".] Luces divinas visibles en el cielo de Vigríð, remanente del poder de los dioses tras el Guðfalla. Fenómeno cosmológico que recuerda a los habitantes de Vigríð que los dioses existieron y que su poder aún permea el mundo.',
        star: '★ Detalle cosmológico que subraya cómo el mundo de Vigríð vive bajo la sombra literal del poder divino perdido.'
    },

    {
        id: 'tafl', label: 'Tafl (Juego de Estrategia)', group: 'NORSE', type: 'Concepto — Cultura Lúdica',
        desc: 'Juego de estrategia sobre tablero con figuras talladas, equivalente nórdico del ajedrez. Jugado en los salones de los jarls y en los campos de batalla. Símbolo de inteligencia táctica. [Histórico: el hnefatafl ("tablero del rey") era el juego de mesa nórdico por excelencia antes de la llegada del ajedrez. Jugado asimétricamente: un rey rodeado defiende contra un atacante. Gwynne lo usa como marcador cultural de las élites de Vigríð.]',
        star: ''
    },
    {
        id: 'whale-road', label: 'Whale-Road (El Mar Abierto)', group: 'NORSE', type: 'Concepto — Kenning Poético',
        desc: 'Kenning (figura poética nórdica) para el mar abierto. Los skalds de Vigríð usan kennings como whale-road (camino de las ballenas) para referirse al océano con resonancia épica. Refleja la cultura oral y poética de la sociedad nórdica. [Histórico: hronrād ("camino de la ballena") es una de las kennings más famosas del inglés antiguo, del poema Beowulf. Los skalds nórdicos construían kennings como metáforas compuestas: kennings de mar incluyen también "camino del cisne", "casa del viento".]',
        star: ''
    },
    {
        id: 'winnigas', label: 'Winnigas (Vendas de Pierna)', group: 'NORSE', type: 'Concepto — Vestimenta',
        desc: 'Tiras de tela que cubren las piernas desde el tobillo hasta justo debajo de la rodilla. Protección práctica contra el frío y la rozadura. Usadas por guerreros y civiles por igual. [Histórico: las winnigas (del anglosajón winnigan) eran vendas de pierna comunes en el norte de Europa medieval. Se enrollaban en espiral. Baratas y funcionales: cualquiera podía llevarlas, independientemente del estatus.]',
        star: ''
    },
    {
        id: 'hangerock', label: 'Hangerock (Vestido Nórdico)', group: 'NORSE', type: 'Concepto — Vestimenta',
        desc: 'Tipo de vestido o sobrevestido femenino nórdico. Prenda exterior característica de las mujeres en la cultura de Vigríð. [Histórico: el hangeroc (anglosajón) o höngeroc era el sobrevestido de lana típico de las mujeres vikingas, sujeto con broches a los hombros sobre una camisa de lino. Marcador cultural de la femineidad en la sociedad nórdica.]',
        star: ''
    },
    {
        id: 'nalbinding', label: 'Nålbinding (Tejido Arcaico)', group: 'NORSE', type: 'Concepto — Artesanía',
        desc: 'Técnica antigua de tejer con aguja que precede al tejido de punto moderno. Usada para fabricar ropa, calcetines y gorros. Más resistente que el tejido moderno. Técnica artesanal cotidiana en la sociedad de Vigríð. [Histórico: el nålebinding ("atar con aguja") es una de las técnicas textiles más antiguas conocidas (restos de más de 6.500 años). La tela resultante no se deshilacha al cortar, a diferencia del tejido de punto.]',
        star: ''
    },
    {
        id: 'madur-boy', label: 'Maður-Boy (Niño Humano)', group: 'NORSE', type: 'Concepto — Término Cultural',
        desc: '[Pronunciación: "Mathur-Boy" — la ð suena como la "th" de "they".] Término para designar un niño humano puro, sin sangre divina. Contrasta con los Tainted, descendientes de dioses. En el contexto de Vigríð, la distinción entre maður (humano) y Tainted es legalmente relevante: determina derechos, estatus y peligrosidad percibida.',
        star: '★ La distinción maður/Tainted es la fractura social central de Vigríð. Breca es sospechoso de no ser maður-boy puro.'
    },
    {
        id: 'skal', label: 'Skál (Brindis)', group: 'NORSE', type: 'Concepto — Cultura Social',
        desc: 'Brindis ritual de buena salud. Expresión de camaradería y celebración en los salones de los jarls. Parte del ritual del mead-hall: el skáld canta, se sirve hidromiel y se pronuncian skál. [Histórico: skál (nórdico antiguo) es el origen del inglés "skull" en expresiones de brindis ("skull" como copa). Acompañaba el consumo ritual de hidromiel en las salas comunales.]',
        star: ''
    },

    // ══════════════════════════════════════════════════════════════
    // CAPÍTULO 20 — NUEVOS NODOS
    // ══════════════════════════════════════════════════════════════
    {
        id: 'hakon', label: 'Hákon', group: 'FACCION', type: 'Personaje — Hijo de Helka',
        desc: 'Hijo de la Reina Helka. Joven, pelo negro, alto y fornido. Viste casi con la misma fineza que su madre pero donde ella lleva oro, él lleva plata. Visto por primera vez cruzando el gangplank de la flota de Helka en Liga, conversando con el Galdurman Skalk (ver nodo skalk). REVELADO (vía Vafri): Hákon es el comandante directo de la red de espionaje sobre Tainted en la región de Fellur. Ordenó a Vafri reportar cualquier señal de Tainted. Vafri informaba a través de Drekr como intermediario. Cadena: Hákon → Vafri → Drekr → rapto de niños Tainted. REVELADO (vía Elvar y Störr): era el prometido designado de Elvar — Störr quería casarlos para unir Snakavik y el reino de Helka en una alianza que habría cubierto más de la mitad de Vigríð. Elvar huyó en parte para evitar ese matrimonio.',
        star: '★★★ Hákon es arquitecto de inteligencia y era el prometido designado de Elvar. La ironía es perfecta: el hombre que Störr quería para su hija es el mismo que ordenó el rapto de Breca en el arco de Orka. Si Elvar y Orka alguna vez cruzan caminos, Hákon será el nudo que las conecta.'
    },
    {
        id: 'skalk', label: 'Skalk', group: 'FACCION', type: 'Personaje — Galdurman de Helka',
        desc: 'Skáld y Galdurman de la Reina Helka. Cabello rubio trenzado con pequeños huesos (cráneos de rata y pájaro) y anillos de peltre colgando de las trenzas. Manos cubiertas de tatuajes en knotwork que suben por las mangas. Torc grueso retorcido alrededor del cuello como una serpiente dormida. Sin armas al cinto — solo un bastón nudoso en el puño. Camina con la confianza de un guerrero veterano pese a no llevar armas. Visto conversando con Hákon al desembarcar en Liga. Tras la reunión de Helka con Logur y Glornir, sale del hall con Glornir y embarca en el Sea-Wolf con dos guerreros más de Helka. Función activa: enlace de Helka durante la misión al norte (ver nodo mision-helka-norte). Glornir le ordena tomar un remo.',
        star: '★★ Skáld Y Galdurman — bardo y mago en uno, raro en Vigríð. Como enlace embarcado tiene acceso al poder Galdur y conocimiento de la amenaza que Helka quiere eliminar. ¿Qué sabe del norte que los Bloodsworn aún no saben?'
    },
    {
        id: 'varg-primera-muerte', label: 'Primera Muerte Consciente de Varg', group: 'EVENTO', type: 'Evento — Personal POV',
        desc: 'Durante la batalla en los muelles (ver nodo batalla-muelles), Varg monta el caballo de un druzhina y hunde el seax entre las placas de la armadura laminar. A diferencia de la muerte de Snepil/Kolskegg (que no recuerda por furia disociativa), esta la recuerda con todo detalle: el metal raspando las placas, la carne cediendo, el calor de la sangre, la fuerza del hombre vaciándose. Vomita al terminar. Røkia observa y confirma: su primera muerte. Le dice "se vuelve más fácil." Sulich le ofrece el yelmo del caído y le explica el código del botín de guerra (ver nodo botin-guerra). Varg rechaza el yelmo al decir "quédatelo tú", insulta sin querer a Sulich. Finalmente aprende a despojar al druzhina con ayuda de Svik: lamellar coat, sabre, bow, arrows, belt-knife. Røkia lo llama "No-Sense": atacó a un druzhina con la cubierta en la lanza y el yelmo colgado del cinturón.',
        star: '★★★ La diferencia entre esta muerte y la de Snepil es el núcleo del arco de Varg: una fue disociativa (¿sangre Tainted?), esta fue plenamente consciente y deja huella física (vómito) y emocional. Recordar el calor de la sangre es el inicio del endurecimiento que Røkia predice.'
    },
    {
        id: 'mision-helka-norte', label: 'Misión al Norte (Helka → Bloodsworn)', group: 'TRAMA', type: 'Trama — Nueva Dirección',
        desc: 'Tras la reunión en el hall de Logur, Helka encarga a los Hermanos de Sangre una misión: algo en el norte de su reino está devorando a su pueblo. Glornir anuncia a la tripulación: "encontraremos lo que sea y lo mataremos." Skalk y dos guerreros de Helka embarcan en el Sea-Wolf como liaisons. Los Hermanos zarpan desde Liga hacia el sur-oeste. Varg rema por primera vez en mar abierto; alguien canta una kenning sobre el Guðfalla y Varg se une. Primera misión de Varg como aprendiz activo. Naturaleza de la amenaza: desconocida — ¿vaesen? ¿Tainted? ¿algo ligado al despertar de Lik-Rifa?',
        star: '★★★ La amenaza sin nombre en el norte es el nuevo motor del arco Varg. Con Skalk (Galdurman) y Vol (Seiðr-thrall) a bordo, el Sea-Wolf lleva potencia mágica combinada. El círculo se cierra: Varg empezó buscando al Seiðr para su hermana; ahora navega con uno hacia algo que devora vidas.'
    },
    {
        id: 'botin-guerra', label: 'Botín de Guerra (Despojo de Caídos)', group: 'NORSE', type: 'Concepto — Honor de Batalla',
        desc: 'Costumbre del guerrero nórdico: despojar al enemigo caído de su equipo de guerra es derecho y obligación. Ambos bandos lo hacen mutuamente — Bloodsworn despojan a druzhina, druzhina despojan al Bloodsworn caído. Reglas de honor: (1) el botín pertenece a quien hizo la muerte — tomarlo de otro es robo y deshonra; (2) rechazar el botín de tu propia muerte insulta la memoria del caído; (3) ofrecer el botín de tu muerte a otro es privarle de su batalla-fama. Sulich explica a Varg: "el ganado muere; todo lo que respira un día fallará. Solo pervive nuestra batalla-fama, y esto [el yelmo] cuenta tu historia." [Histórico: los despojos de honor nórdicos eran evidencia tangible de valor. Los objetos del enemigo eran kennings vivos — trofeos que narraban hazañas sin palabras.]',
        star: '★ Los objetos del caído son páginas de una saga. El equipo del druzhina ya no es del muerto — es la primera página de la saga de Varg como guerrero libre.'
    },
    // ══════════════════════════════════════════════════════════════
    // CAPÍTULO 21 — NUEVOS NODOS
    // ══════════════════════════════════════════════════════════════
    {
        id: 'llegada-snakavik', label: 'Llegada a Snakavik y Venta de Berak', group: 'EVENTO', type: 'Evento',
        desc: 'Secuencia completa: (1) LLEGADA AL PUERTO: el Wave-Jarl entra por la boca del cráneo de Snaka — los remeros en silencio, el sonido cambia al cavernoso eco del interior. Una funcionaria del puerto (lana roja con ribete de marta cibelina, plata en brazos y cuello, guardia con malla) cobra derechos de amarre y entrega bloque de madera con runas talladas. Agnar deja guardia en el barco y sube con un grupo selecto: Elvar, Grend, Sighvat (con Berak encadenado), Biórr y Thrud (guardia de Uspa y Bjarn), Kráka y el Hundur-thrall. Pasan por el muelle con las jaulas de criminales — un letrero: "adorador de un dios muerto." (2) ASCENSO: suben 212 escalones de madera hasta la cima del cráneo, cruzan la meseta de granito hasta la fortaleza, pasan múltiples checkpoints donde Agnar muestra los derechos de amarre y paga coin. (3) EN LA SALA: esperan en el patio de la sala de festines. Entran al gran hall con cuervos en las vigas y hogueras centrales donde los thralls asan jabalíes y ciervos. Al fondo hay una cabeza enorme de mármol — el oráculo Hrung. (4) STÖRR RECIBE: Störr entra con su guardia de Berserkir-thralls y tres personas más: dos hombres jóvenes (cejas oscuras, nariz fina — parientes cercanos de Störr) y una mujer rubia mayor: Silrið, su agente de Seiðr. (5) LA VENTA: Silrið corta el brazo de Berak, lleva la sangre a Hrung, que la saborea y confirma: "Sangre de Berser, o soy un enano." Störr compra a Berak al doble del precio. Los Berserkir-thralls de Störr rodean a Berak gruñendo "bienvenido, hermano." Berak los ignora. (6) LA REVELACIÓN: mientras Agnar se retira, Hrung olfatea el aire y dice "Elvar." Störr niega que pueda ser. Hrung insiste: "Elvar está aquí." Elvar se quita la capucha y dice: "Hola, padre."',
        star: '★★★ El punto de giro del arco de Elvar. Todo el viaje culmina aquí: la incomodidad con Snakavik, la reacción emocional al nombre de Störr, la huida de casa — ahora tienen explicación.'
    },
    {
        id: 'silrid', label: 'Silrið', group: 'ELVAR', type: 'Personaje — Agente Seiðr de Störr',
        desc: 'Mujer rubia, mayor que los hombres jóvenes que flanquean a Störr. Collar de huesos alrededor del cuello. Tatuajes de runas densos en el dorso de las manos. Túnica de lana amarilla. Seax corto de uso ritual, no de combate. Actúa como verificadora de linaje para Störr: despertó a Hrung con sangre de Berak (ver nodo llegada-snakavik). Es de confianza absoluta — Störr la llama solo por su nombre. Presente en la reunión con Elvar en la taberna. Cuando Störr sugiere que el matrimonio con Helka quizás no es el único camino, Silrið añade con voz calma: "siempre hay más de un camino por el bosque, si uno es lo bastante valiente para buscarlo, y quizás lo bastante fuerte para talar unos cuantos árboles." Función doble: consejera política y mágica de Störr. [Histórico: las völur nórdicas servían como adivinas y consejeras de líderes. Silrið es völva libre — sin collar de thrall, a diferencia de Kráka y Vol.]',
        star: '★★★ Su frase sobre "los caminos del bosque" resuena como insinuación de que hay un tercer plan disponible — uno que no depende ni del matrimonio ni de la reconciliación simple. ¿Tiene Silrið su propia agenda o es el brazo largo de Störr? Que Störr le ceda la palabra en un momento tan cargado indica que su consejo tiene peso real.'
    },
    {
        id: 'hrung', label: 'Hrung (Oráculo de Störr)', group: 'ELVAR', type: 'Entidad — Oráculo Viviente',
        desc: 'Cabeza gigante de piedra en la sala de festines de Störr — tan grande como una roca, tan alto como un hombre. Tallado con la imagen de un hombre: frente alta, nariz ancha, labios gruesos. Ojos cerrados cuando duerme; cuando despierta, los ojos son opacos y brumosos como perlas, girando lentamente hasta enfocar. Las venas oscuras del mármol parecen brillar a la luz de las antorchas. Su voz es baja y reverberante — se siente pasar por el cuerpo como un trueno lejano. Duerme la mayor parte del tiempo soñando; hay que despertarlo físicamente (Silrið le pega una patada en el mentón) y con el comando "vaknaðu" (despierta). Capacidad: detectar y clasificar sangre divina saboréandola — identifica linaje Tainted con precisión absoluta. También puede identificar a personas por el olfato aunque estén encapuchadas: detectó a Elvar antes de que se quitara la capucha. Escupe después de saborear. Estado: activo, al servicio de Störr; Silrið es su interlocutora habitual. [Paralelo mitológico: Hrungnir, el Jǫtunn más poderoso de la mitología nórdica, tenía cabeza, corazón y escudo de piedra — fue vencido por Thor. El Hrung de Gwynne es un eco reinterpretado: un ser de piedra antiquísimo reducido a oráculo, dormitando en la sala de un jarl. El nombre "Hrungnir" en nórdico antiguo significa "el que pelea" o "el alborotador".]',
        star: '★★★ ¿Qué es Hrung exactamente? ¿Un ser pre-divino, un gigante de la era anterior al Guðfalla, un thrall petrificado? Su capacidad de detectar linaje por sabor es única en el mundo de Gwynne. Nadie más ha mostrado esta habilidad. Y su reconocimiento de Elvar por olfato implica que la conocía de antes — ¿desde que ella era niña en Snakavik?'
    },
    {
        id: 'raven-feeders', label: 'Los Alimentadores de Cuervos (Raven-Feeders)', group: 'FACCION', type: 'Facción — Mercenarios',
        desc: 'Compañía mercenaria con reputación de crueldad, liderada por Ilska Raven-Feeder, también llamada Ilska la Cruel. Identificación visual: cada miembro lleva una pluma de cuervo negra atada en el cabello. Escudos pintados en gris con alas negras desplegadas alrededor del boss. Buen equipo de guerra: malla, cuero y lana de calidad, varios con espadas — señal de jefe con buena mano de oro. Una docena de miembros descansaban en una taberna de la ladera interna de Snakavik cuando Agnar y su grupo pasaron. Uno de ellos, rubio con barba pelirroja y oro en cuello y brazos, intentó ligar con Elvar. Grend lo miró con ojos de muerte; Elvar lo cortó con una comparación con un jabalí muerto y siguió andando. [Paralelo histórico: los cuervos eran aves de Odín y de los campos de batalla nórdicos — el nombre "alimentadores de cuervos" es kenning para "guerreros que alimentan a los cuervos con los cadáveres de sus enemigos." Una compañía con ese nombre no esconde sus métodos.]',
        star: '★ Primera mención. Una compañía rival con reputación brutal en Snakavik. ¿Cruzarán caminos con los Terrores de la batalla en el futuro? La dinámica con Elvar —ella ignora, Grend reacciona— revela dinámicas de poder dentro de la compañía.'
    },
    {
        id: 'ilska', label: 'Ilska Raven-Feeder (la Cruel)', group: 'FACCION', type: 'Personaje — Jefa Mercenaria',
        desc: 'Jefa de la compañía mercenaria Los Alimentadores de Cuervos. También conocida como Ilska la Cruel. Su compañía tiene una reputación de crueldad bien ganada que precede a Ilska en conversaciones.',
        star: '★ Nombre de alto peligro. En el mundo de Gwynne, los apodos como "la Cruel" son merecidos. Primer indicio de una facción mercenaria rival a los Terrores de la batalla.'
    },
    // ══════════════════════════════════════════════════════════════
    // CAPÍTULO 22 — NUEVOS NODOS
    // ══════════════════════════════════════════════════════════════
    {
        id: 'raid-camara-sigrun', label: 'Raid Nocturno a la Cámara de Sigrún', group: 'EVENTO', type: 'Evento — POV Orka',
        desc: 'Secuencia completa: (1) LLEGADA: Orka abandona su steading y camina más de medio día hasta Fellur, llegando en plena oscuridad antes del alba. Esconde lanza y saco — no los necesita. (2) INFILTRACIÓN: cruza el campo de tiendas del Althing, salta la muralla sin guardia, se mueve hasta el patio del mead hall. (3) MORD Y LIF: descubre a los dos hermanos estacados en el patio — intentaron matar a Guðvarr y fracasaron; esperaban juicio: proscripción o ejecución. Recuerda las palabras de Breca ("me da pena Mord y Lif, mamá"). Decide actuar. (4) GUARDIAS: mata a la guardia dormida en los escalones del mead hall — seax en la garganta, le corta la columna, la recuesta en su posición dormida. (5) LIBERACIÓN: corta las cuerdas de Mord y Lif; ordena a Lif llevar a su hermano al bote, coger provisiones y esperarla en el fiordo. (6) LA CÁMARA: abre la contraventana con la hoja del seax; entra en la cámara de Sigrún. Sorprende a Sigrún y a un amante en el lecho. Degüella al amante antes de que reaccione. Golpea a Sigrún en la mandíbula con la empuñadura. (7) EL INTERROGATORIO: encañona a Vafri con el seax. Interroga: ¿quién ordenó matar a Thorkel y raptar a Breca? Vafri revela: su amo es Hákon, hijo de la Reina Helka; fue ordenada a reportar señales de Tainted; informaba a través de Drekr. Destino posible de los niños: Darl (aunque los ojos de Vafri se desviaron al decirlo). (8) COMBATE Y FUGA: Sigrún intenta alcanzar su espada; Vafri aprovecha el momento de distracción y golpea a Orka. Orka hiere a Sigrún con un tajo diagonal en la cara (frente a barbilla). Guðvarr irrumpe primero entre los drengrs; Orka le lanza su seax, arrebata el de Vafri y lo apuñala en el vientre. Le roba el seax a la moribunda Vafri. Vafri muere sin su arma. (9) ESCAPE: salta por la ventana, corre por el pueblo con los drengrs y el pueblo despertando; alcanza el muelle; salta a la barca de Mord y Lif. Orden: sur, hacia el mar. Guðvarr en el muelle jura venganza mientras la barca se aleja.',
        star: '★★★ El nodo pivote del arco de Orka: de perseguidora ciega a perseguidora con mapa. La cadena Hákon→Vafri→Drekr queda expuesta. Darl emerge como destino — aunque la mirada esquiva de Vafri siembra duda. Orka sale de Fellur con aliados inesperados (Mord y Lif) y un enemigo nuevo en el horizonte: la corona de Helka.'
    },
    // ══════════════════════════════════════════════════════════════
    // CAPÍTULO 23 — NUEVOS NODOS
    // ══════════════════════════════════════════════════════════════
    {
        id: 'thorun', label: 'Thorun', group: 'ELVAR', type: 'Personaje — Hermano de Elvar',
        desc: 'Hijo mayor de Jarl Störr. Hostil hacia Elvar desde su regreso. Considera que la fuga de Elvar fue una deshonra para la familia y que ella tiene obligaciones por ser hija de jarl: obedecer la voluntad de su padre, incluyendo casarse con quien él decida. Voz de las tradiciones y la jerarquía — hace de vocero de lo que Störr no dice directamente. Cuando Elvar llegó el día anterior, fue el más vocal en reprocharle. En la reunión de la taberna, defiende el plan matrimonial con Helka ("el reino combinado de padre y Helka cubriría más de la mitad de Vigríð") y suelta que Elvar no tiene reputación propia sino que viaja a la sombra de Grend. Elvar lo amenaza con el filo de su espada. Cuando Störr lo manda callar, obedece al instante. Físico: cejas oscuras y nariz fina — rasgos de kin de Störr.',
        star: '★ Thorun es el espejo de lo que Elvar habría sido si se hubiera quedado: alguien que confunde obediencia con honor. Su desprecio por Grend y por la vida mercenaria de Elvar tiene raíces en envidia no reconocida — ella se fue y construyó algo; él se quedó y obedeció.'
    },
    {
        id: 'brodir', label: 'Broðir', group: 'ELVAR', type: 'Personaje — Hermano de Elvar',
        desc: 'Hijo menor de Jarl Störr, hermano menor de Elvar. Tímido y afectuoso, contraste total con Thorun. Durante la reunión apenas habla — "principalmente se limitó a mirarla, con cara de decepcionado." Al final, cuando todos salen, se detiene en la puerta: "Vuelve con nosotros, hermana. Thorun es un imbécil, y te he echado de menos." Sonrisa tímida. Físico: cejas oscuras y nariz fina como Thorun — rasgos de kin de Störr.',
        star: '★★ Broðir es el gancho emocional más honesto de toda la familia. No tiene agenda política — solo quiere a su hermana. Su brevedad y timidez lo hacen más creíble que cualquier discurso de Störr. La sonrisa tímida en la puerta es el momento más humano de todo el capítulo.'
    },
    {
        id: 'gytha', label: 'Gytha', group: 'ELVAR', type: 'Personaje — Campeona de Störr',
        desc: 'Campeona y portavoz de Jarl Störr. Brynja reluciente como recién pulida con arena. Pelo oscuro trenzado. Cicatriz que atraviesa una mejilla hasta el labio superior. Entra en la taberna con autoridad: el posadero aparece en el umbral y hace una reverencia a medias. Entregar el cofre de pago de Störr a Agnar (por la compra de Berak) y escoltar a Elvar para la reunión privada con su padre. Al ver a Grend, le dedica una reverencia — señal de que lo conoce y le reconoce rango. Permanece en la taberna durante la reunión familiar con los últimos guardias; cierra la puerta cuando todos salen.',
        star: '★ La reverencia a Grend es la pieza más interesante: implica que Grend era figura conocida en Snakavik, posiblemente sirvió a Störr antes de partir con Elvar. ¿Qué historia une a Grend con el clan de Störr antes de que Elvar naciera?'
    },
    {
        id: 'reunion-storr-elvar', label: 'Reunión en la Taberna (Störr y Elvar)', group: 'EVENTO', type: 'Evento — POV Elvar',
        desc: 'Secuencia completa: (1) PRÓLOGO: Elvar despierta en el pajar de una taberna de Snakavik con los Terrores de la batalla. Desayuno con Biórr, Uspa, Bjarn, Grend y Thrud. Uspa le pide con urgencia salir de Snakavik — dos veces. (2) GYTHA LLEGA: entra la campeona de Störr con el cofre de pago para Agnar (por Berak). Anuncia que Störr quiere ver a su hija en privado. Agnar saca a todos los Terrores de la batalla. Biórr ofrece quedarse; Elvar lo manda afuera con un reproche. (3) LA REUNIÓN: Störr entra con Thorun, Broðir y Silrið. Se sienta frente a Elvar. Recriminaciones: debería no haber huido, eso le costó sangre para reconsolidar su poder. Elvar defiende su reputación y a los Terrores de la batalla. (4) EL NUDO — EL MATRIMONIO: Störr quería casarla con Hákon (hijo de Helka) para crear una alianza que cubriría más de la mitad de Vigríð. Elvar lo rechaza de plano. Thorun explota; Elvar lo amenaza con la espada; Grend manda a Thorun que se siente. Störr lo silencia. (5) LA OFERTA: Störr sugiere que quizás el matrimonio no es el único camino. Silrið añade su enigmática frase sobre los caminos del bosque. Störr ofrece a Elvar su propio warband de drengrs si regresa. Se levanta y se va: "piénsalo." (6) EPÍLOGO: Broðir se detiene en la puerta y le pide que vuelva con una sonrisa tímida. Gytha cierra la puerta. Elvar se queda sola con Grend, se sienta en las piernas que de repente le fallan, y empieza a reír.',
        star: '★★★ El capítulo más psicológicamente denso del arco de Elvar. Störr no la amenaza ni la controla — la tienta con exactamente lo que ella desea. La oferta del warband es más peligrosa que cualquier ultimátum. Silrið insinúa un tercer camino. Broðir abre la herida del afecto familiar. Elvar termina riendo — ¿alivio, ironía, o el primer paso hacia una decisión?'
    },

];
