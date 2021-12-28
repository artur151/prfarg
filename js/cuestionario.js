
function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
  if(parseInt(respuest)==this.correcta){
        var reto;
        alert("Es correcta");
        reto=true;
        return reto
        }else{
            alert("Es false");
            return reto
            }
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,respuesta4,correcta){
        this.pregun=pregun;
        
        this.respuestas=[];
        
        this.respuestas[0]=respuesta1;
        this.respuestas[1]=respuesta2;
        this.respuestas[2]=respuesta3;
        this.respuestas[3]=respuesta4;
        
        this.correcta=parseInt(correcta);
        this.ocupado=false;
        this.valuap=valuap;       
}
var retorno=[];
var preguntas=[];

/* En esta parte incluiran sus preguntas debes ser mas de 10 para que se pueda ajecutar 
el script 
*/
/*La primer parte de las comillas pertenece a la pregunta las siguientes a las respuestas pertintenes y el ultimo valor entero
pertence al numero de la respuesta correcta, por ejemplo; 
RESPUESTA 1 = 0 ;RESPUESTA 1 = 1 ;RESPUESTA1 = 2 ;RESPUESTA 4 = 3
preguntas[0]=new pregunta("¿PREGUNTA GENERICA 1?","RESPUESTA 1","RESPUESTA 2","RESPUESTA 3","RESPUESTA 4",2); 
La respuesta correcta es RESPUESTA 3 ya que su valor asignado es 2*/
preguntas[0]=new pregunta("Menciona dos ramas de la carrera de IC en las que se enfoca el Álgebra Booleana","Diseño Digital y Representación de Circuitos","Tablas de Verdad y Representación de Circuitos","Circuitos Eléctricos y Procesamiento de Señales","Análisis de Sistemas e Ingeniería de Software",0);
preguntas[1]=new pregunta("¿Qué dígitos utiliza el Álgebra Booleana para representar variables?","Menos uno y cero","Verdad y falsedad","Uno y dos","Cero y uno",3);
preguntas[2]=new pregunta("¿Qué diferencia hay entre minitérmino y maxitérmino?","En el maxitérmino aparecen todas la variables de la expresión booleana, en el minitérmino sólo una de estas variables.","En el minitérmino cada variable aparece sólo una vez, en el maxitérmino aparecen los operadores lógicos.","En el minitérmino aparecen todas la variables de la expresión booleana, en el maxitérmino sólo una de estas variables.","En el minitérmino hay sólo valores de falsedad, en el maxitérmino sólo valores de verdad.",1);
preguntas[3]=new pregunta("¿Mediante qué representaciones pueden simplificarse las expresiones booleanas?","Circuitos digitales","Circuitos combinacionales","Mapas de Karnaugh","Tablas de verdad",2);
preguntas[4]=new pregunta("¿Cuántas posiciones deben contener los Mapas de Karnaugh para representar variables? Considera la letra n como la cantidad de variables a emplear.","2^n posiciones","n posiciones","2*n posiciones","n^2 posiciones",0);
preguntas[5]=new pregunta("¿Cuál es el objetivo del razonamiento automático?","Escribir problemas que deduzcan una conclusión a partir de premisas","Escribir problemas que sirvan de asistencia en la resolución de problemas","Escribir programas que realicen circuitos combinacionales","Escribir programas que realicen tablas de verdad",1);
preguntas[6]=new pregunta("¿Qué otro nombre, según algunas literaturas, recibe el concepto de razonamiento automático?","Diseño de circuitos combinacionales","Resolución de tablas de verdad","Demostración automática","Automatización de razonamientos",2);
preguntas[7]=new pregunta("Menciona un ejemplo de enunciado proposicional válido para poder aplicar el Método de Deducción Paso a Paso","Los hombres son mortales","¿Cómo estás?","¡Cuidado con el perro!","No hagas esto o lo lamentarás",0);
preguntas[8]=new pregunta("¿En qué consiste la regla P en el MDPP?","Obtener una conclusión válida a partir de varias premisas","Meter una premisa o hipótesis en cualquier paso de la deducción", "Descomponer la hipótesis de la deducción en premisas más pequeñas","Transformar la deducción en una conclusión válida",1);
preguntas[9]=new pregunta("¿En qué consiste la regla T en el MDPP?","Transformar las premisas en disyunciones y conjunciones","Transformar las premisas en enunciados condicionales","Obtener una conclusión equivalente a partir de varias premisas","implicar tautológicamente una o varias premisas mediante equivalencias",3);
preguntas[10]=new pregunta("Al simplificar A’B’C+ABC’+ABC se obtiene:","A’B’+ABC’","A’+AB’C","ABC+A’B’C’","A’B’C+AB",0);
preguntas[11]=new pregunta("Al simplificar AB+AB’ se obtiene:","AB","A’B’","A","A’",2);
preguntas[12]=new pregunta("Al desarrollar (A+B)(A’+B’) se obtiene:","A+B’","AB’+A’B","A+B","A’+B’",1);
preguntas[13]=new pregunta("Al simplificar AB’D+AB’D’ se obtiene:","A’B’D’","AB’+D","A’+D’","AB’",3);
preguntas[14]=new pregunta("Al simplificar AB+A(B+0)*(B*0) se obtiene:","A’B’D’","AB’+D","A’+D’","AB’",0);



