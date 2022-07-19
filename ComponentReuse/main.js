const container = document.querySelector(".container"),
  question = document.querySelector(".question"),
  answer = document.querySelector(".answer"),
  results= document.querySelector(".results");

  // window.addEventListener("load",showComponents);
const profesiones = [
  ["Informática", "C", 0],
  ["Industrial", "C", 0],
  ["Mecatránica", "C", 0],
  ["Minas", "C", 0],
  ["Petroleo", "C", 0],
  ["Geológia", "C", 0],
  ["Química", "C", 0],
  ["Electronica", "C", 0],
  ["Estadística", "C", 0],
  ["Matemática", "C", 0],
  ["Física", "C", 0],
  ["Biología", "C", 0],
  ["Agrícola", "C", 0],
  ["Agrónomia", "C", 0],
  ["Ambiental", "C", 0],
  ["Zootecnia", "C", 0],
  ["Pesquera", "C", 0],
  ["Arquitectura", "C", 0],
  ["Civil", "C", 0],
  ["Medecina", "C", 0],
  ["Administración", "L", 0],
  ["Contabilidad", "L", 0],
  ["Economía", "L", 0],
  ["Ciencias Sociales", "L", 0],
  ["Ciencias de la comunicación", "L", 0],
  ["Derecho", "L", 0],
  ["Humanidades", "L", 0],
  ["Lengua y literatura", "L", 0],
  ["Historia y geografía", "L", 0],
  ["Educación Primaria", "L", 0],
  ["Educación Inicial", "L", 0],
];

const questions = [
  {
    pregunta:
      "Eres del área de logística en plaza vea,encargado del inventario. Por cambios, gerencia te está" +
      " ofreciendo otros puestos de trabajo con 20 personas a cargo pero con el mismo sueldo ¿aceptarías?",
    respuestas: {
      a: "Si",
      b: "No",
    },
    carrerasVinculadas: [8, 9, 20, 21, 22], // posi de la carrera que le voy aumentar el punto
    rCorrecta: ["No"],
  },
  {
    pregunta:
      "Tienes 3 años trabajando en el área de finanzas de Oechsle y te dan muchos beneficios sin embargo" +
      " se te ocurre una idea de negocio y debes dedicarle tiempo completo. En esta situación tú",
    respuestas: {
      a: "sigo trabajando en Oechsle",
      b: "desarrollo mi negocio",
    },
    carrerasVinculadas: [8, 9, 20, 21, 22],
  },
  {
    pregunta:
      "Eres del área ventas de Promart y hace unos meses hay preocupación por las bajas ventas.Gerencia" +
      " te asciende a coordinador pero si no logras la meta en 6 meses serás despedido. ¿Qué haces?",
    respuestas: {
      a: "Aceptas el reto",
      b: "Mantienes tu puesto actual",
    },
    carrerasVinculadas: [8, 9, 20, 21, 22],
  },
  {
    pregunta: "De las computadoras, lo que más me motiva es:",
    respuestas: {
      a: "Conectar con personas de otras culturas",
      b: "Hacer uso de software de diseño",
      c: "Hacer negocios vía internet",
      d: "Acceder a la información de vanguardia sobre temas científicos",
      e: "Configurar programas compurtacionales en mi equipo",
    },
    carrerasVinculadas: [0, 1, 2, 7, 20],
  },
  {
    pregunta: "Mejor es tener",
    respuestas: {
      a: "Una enciclopedia universal",
      b: "Una guitarra eléctrica",
      c: "Una calculadora financiera",
      d: "Un microscopio",
      e: "Un telescopio",
    },
    carrerasVinculadas: [6, 11, 12, 13, 19, 21, 23, 26, 28],
  },
  {
    pregunta:
      "Segun un estudio de una universidad ignlsea, no importa el orden en el que las ltears etsan Ersciats," +
      " ltears etsan ersciats, la uicna csoa impormtnate es que la pmrirea y la utlima ltera esent ecsritas en la psiocion" +
      " cocrrtea. El rsteo peuden etsar ttaolmntee mal y aun a si pordas lerelo sin pobrleams.Etso es pquore no lemeos casa" +
      " ltera por si msima, snio la paalbra en un tdoo",
    respuestas: {
      a: "El orden de las letras del medio importan",
      b: "El orden de la primera y última letra importan",
    },
    carrerasVinculadas: [23, 24, 26, 27, 29, 30],
    rCorrecta: ["El orden de las letras del medio importan"],
  },
  {
    pregunta: ` ¿Cuál de las palabras mostradas a continuación es la más cercana en significado a la palabra "tranquilizador"`,
    respuestas: {
      a: "Compasivo",
      b: "Reconfortante",
      c: "Explicativo",
      d: "Entrometido",
    },
    carrerasVinculadas: [23, 24, 25, 26, 27, 28, 29, 30],
    rCorrecta: ["Compasivo", "Reconfortante"],
  },
  {
    pregunta: "Si veo una falta de ortografía mi primera redacción es:",
    respuestas: {
      a: "Corregirla rápidamente",
      b: "La anoto para no volver a cometerla",
      c: "No le doy importancia",
      d: "No me daría cuenta",
    },
    carrerasVinculadas: [23, 24, 25, 26, 27, 28, 29, 30],
    rCorrecta: [
      "Corregirla rápidamente",
      "La anoto para no volver a cometerla",
    ],
  },
  {
    pregunta: "Sinónimo de CARO",
    respuestas: {
      a: "Poseedor",
      b: "Módico",
      c: "Meloso",
      d: "Costoso",
    },
    carrerasVinculadas: [23, 24, 25, 26, 27, 28, 29, 30],
    rCorrecta: ["Costoso"],
  },
  {
    pregunta: "Si tuviera la opotunidad de viajar,preferiría conocer:",
    respuestas: {
      a: "Las culturas avorígenes del Amazonas",
      b: "El museo del Louvre de Paris",
      c: "Las especies protegidas de las Islas Galápagos",
      d: "El centro de Investigación de la Nasa",
    },
    carrerasVinculadas: [3, 4, 5, 11, 12, 13, 14, 15, 16],
  },
  {
    pregunta:
      "En Inkafarma se realiza una investigación con un grupo de profesionales de" +
      "la salud para potenciar los componentes de la penicilina.¿Participarías en este equipo?",
    respuestas: {
      a: "si",
      b: "no",
    },
    carrerasVinculadas: [6, 11, 19],
    rCorrecta: ["si"],
  },
  {
    pregunta: "Me gusta más",
    respuestas: {
      a: "Disertar al curso sobre una materia que domino",
      b: "Pintar cuadros al óleo",
      c: "Hacer gráficos de mis ingresos y gastos mensuales",
      d: "Hacer experimentos en un laboratorio químico",
      e: "Armar y desarmar computadoras",
    },
    carrerasVinculadas: [0, 1, 2, 5, 6, 7, 17, 18, 20, 27, 29],
  },
  {
    pregunta: "En una salida a terreno, me interesaría conocer",
    respuestas: {
      a: "El museo de Historia Natural",
      b: "El museo de Arte Contemporáneo",
      c: "La comisión Económica del senado",
      d: "El instituto Médico Legal(Morgue)",
      e: "Una central Hidroeléctrica",
    },
    carrerasVinculadas: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 19, 25, 28],
  },
  {
    pregunta:
      "En interseguro están estudiando la problemática del porqué de la caida de la economía en varios" +
      "sectores del país, ¿Estarías interesado en participar en dicha investigación?",
    respuestas: {
      a: "si",
      b: "no",
    },
    carrerasVinculadas: [20, 21, 22],
    rCorrecta: ["si"],
  },
  {
    pregunta:
      "Han llegado varias personas por Emergencia con una extraña enfermedad.En Química Suiza" +
      "están preocupados y han comenzado a investigar sobre eso, ¿Serías parte del grupo de trabajo?",
    respuestas: {
      a: "si",
      b: "no",
    },
    carrerasVinculadas: [6, 10, 11, 19],
    rCorrecta: ["si"],
  },
  {
    pregunta: "Sigue la secuencia: 1,5,10,14...",
    respuestas: {
      a: "19",
      b: "20",
      c: "18",
      d: "17",
      e: "13",
    },
    carrerasVinculadas: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22],
    rCorrecta: ["19"],
  },
  {
    pregunta: "Sigue la secuencia: 14,11,8,5...",
    respuestas: {
      a: "0",
      b: "2",
      c: "1",
      d: "3",
      e: "4",
    },
    carrerasVinculadas: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22
    ],
    rCorrecta: ["2"],
  },
  {
    pregunta: "Si tuvieras que trabajar en el área agrícola,elegiría ser",
    respuestas: {
      a: "Paisajista o diseñador de áreas verdes",
      b: "Administrador de una empresa exportadora de semillas",
      c: "Encargado de los procesos de siembra, cultivo y cosecha",
      d: "Planificador de un sistema de riesgo eficiente",
    },
    carrerasVinculadas: [13, 14, 15, 16],
  },
  {
    pregunta:
      "De los siguientes trabajos me resultaría más interesante participar en:",
    respuestas: {
      a: "Un programa de mejoramiento de políticas públicas",
      b: "El diseño de la escenografía de una obra teatral",
      c: "Un plan de superación de la pobreza",
      d: "Una investigación sobre los fármacos contra el virus del Sida",
      e: "Un proyecto de la gran minería",
    },
    carrerasVinculadas: [3, 4, 5, 11, 19, 23, 24, 25, 26, 29, 30],
  },
  {
    pregunta: "Me llamaría más la atención el siguiente reportaje",
    respuestas: {
      a: "Formas de facilitar la comunicación entre las personas",
      b: "Historia del cine",
      c: "Fórmula para crear una micro empresa",
      d: "La obesidad y sus efectos",
      e: "Nuevos avances en inteligencia artificial",
    },
    carrerasVinculadas: [0, 2, 23, 24, 25],
  },
  {
    pregunta: "Cuando camino por la ciudad,me fijo en:",
    respuestas: {
      a: "El aislamiento Urbano",
      b: "El diseño Urbano de sus calles y áreas verdes",
      c: "Las ventanas del comercio ambulante",
      d: "El estado de salud de los animales callejeros",
      e: "La construcción de los nuevos edificios",
    },
    carrerasVinculadas: [15, 17, 18],
  },
];

let index = 0;
//ingreso las preguntas y las respuestas
function showComponents() {  
  if (index < questions.length) {
    const objCurrent = questions[index];
    let btnAnswer = "";
    //agrego la pregunta al contenedor question
    question.textContent = questions[index].pregunta;
    //le añado la respuesta a cada boton
    for (let answer in objCurrent.respuestas) {
      btnAnswer += `<button class="btn">${objCurrent.respuestas[answer]}</button>`;
    }
    answer.innerHTML = btnAnswer;
   
    const btn = document.querySelectorAll(".btn");
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", (e) => {
          if(index<questions.length){
            aswerValidate(e.srcElement.textContent);  
            index += 1;
             showComponents();
             console.log(e.srcElement.textContent); 
          }else{
            return;
          }
                 
      });
    }
  
  } else {
    //coloco la funcion.
    showResults();
  }
  console.log(questions.length);
 
}

showComponents();

function aswerValidate(e) {
    //utilizo el index para iterar en el arreglo de objeto
    questions[index].carrerasVinculadas.forEach(value=>{
      if(questions[index].rCorrecta!=undefined){
        if(questions[index].rCorrecta.includes(e)){
          profesiones[value][2]+=1;
        }
      }else{
        profesiones[value][2]+=1;
      }    
    });
  
  // console.table(profesiones);
}

function showResults(){
  const arrayResults=[];
  //lleno mi array con las profesiones y los puntajes totales
  for(let i=0;i<profesiones.length;i++){
     arrayResults.push({profesion:profesiones[i][0],pTotal:profesiones[i][2]});
  }
  const ordenado=arrayResults.sort((a,b)=>{return b.pTotal - a.pTotal})

  let conResult=`<div class="results">
     <h2 class="title-result">Resultado del Test:</h2>
     <p>Estas son las 5 carreras profesionales que te ayudaran a conocer tu orientación profesional:</p> 
     <ul class="list-profesiones"> 
        <li>${ordenado[0].profesion}</li>
        <li>${ordenado[1].profesion}</li>
        <li>${ordenado[2].profesion}</li>
        <li>${ordenado[3].profesion}</li>
        <li>${ordenado[4].profesion}</li>
     </ul>
  </div>`
  container.innerHTML=conResult;
}
