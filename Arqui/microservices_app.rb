# Proyecto final de Arquitectura de software
# Profesor: Ariel Ortiz
# Fecha: 04-Jun-2021
# Creadores: A01745997 Luis Miguel Baqueiro Vallejo
#          A01746958 Ricardo Velázquez

#Requerimientos iniciales
require 'sinatra'
require 'yaml'
require 'securerandom'
require 'faraday'

#URL para revisar las respuestas que envían
REVISAR_RESPUESTA_URL = "https://uswczlzxjj.execute-api.us-east-1.amazonaws.com/default/check_answer"

#URL para obtener una lista de preguntas mandandole el parametro (no_questions)
OBTENER_PREGUNTAS_URL = "https://lgbyhpy857.execute-api.us-east-1.amazonaws.com/default/get_questions"

#URL para obtener la tabla de puntos guardados en la base de datos
GET_SET_TABLAS_URL = "https://v8s3g14hwe.execute-api.us-east-1.amazonaws.com/default/scores"

#Variables globales
cant_preguntas = 0
preguntas_Buenas = 0
numero_pregunta = 0
preguntas = {}
pregunta_actual={}
ids = []
tabla = {} #(Initials, Score)

#Muestra el indice para ver cuántas preguntas se quieren hacer.
get '/' do
  cant_preguntas=0
  erb :index
end

#Recibe la cantidad de preguntas que el usuario introdujo y carga la página quiz
get '/quiz' do
  cant_preguntas = params["no_questions"].to_i
  preguntas = obtenerPreguntas(cant_preguntas)
  numero_pregunta = 1
  preguntas_Buenas = 0
  @numero_pregunta = numero_pregunta
  @cant_preguntas = cant_preguntas
  @pregunta = ids[numero_pregunta - 1]
  pregunta_actual = @pregunta
  erb :quiz
end

#Obtiene el valor de la pregunta y revisa si es correcta, en caso de que se terminen las preguntas, manda a la tabla
get '/revisarPregunta' do
  if revisarPregunta(preguntas[numero_pregunta - 1]["id"], params["respuesta"])
    preguntas_Buenas += 1
  end
  numero_pregunta += 1
  @numero_pregunta = numero_pregunta
  @cant_preguntas = cant_preguntas
  @pregunta = ids[numero_pregunta - 1]
  pregunta_actual = @pregunta
  if(numero_pregunta <= cant_preguntas)
    erb :quiz
  else
    @tabla = tabla
    erb :iniciales
  end
end

#Obtiene las iniciales del usuario y las sube a la base de datos junto con su puntuación
post '/quiz' do
  subirTabla()
  cargarTabla(params["Initials"], preguntas_Buenas)
  erb :tabla
end

#Hace un get al lambda para obtener las preguntas que se pidieron
def obtenerPreguntas(cant_preguntas)
  jsonT = {"no_questions" : cant_preguntas}
  connection = Faraday.new(url: OBTENER_PREGUNTAS_URL)
  response = connection.get do |request|
    request.headers['Content-Type'] = 'application/json'
    request.body= jsonT.to_json
  end
  if response.success?
    puts response.status
    data = JSON.parse(response.body)
    puts data
  end
# revisar
  for pregunta in preguntas
    ids.push(preguntas)
  end
  data
end

#Hace un get al lambda y un post, para actualizar y descargar los datos.
def cargarTabla(i, p)
  connection = Faraday.new(url: GET_SET_TABLAS_URL)
  response = connection.post do |request|
    request.headers['Content-Type'] = 'application/json'
    request.body= {"Initials" : i, "Score" : p}
  end

  connection = Faraday.new(url: GET_SET_TABLAS_URL)
  response = connection.get do |request|
    request.headers['Content-Type'] = 'application/json'
    request.body= {}
  end
  if response.success?
    puts response.status
    tabla = JSON.parse(response.body)
  end
end

#Carga la pregunta que toca
def obtenerPregunta()
  pregunta_actual = ids[numero_pregunta - 1]
  pregunta_actual
end

#Hace un get al lambda para comprobar si la pregunta es correcta y regresa verdadero o falso.
def revisarPregunta(id, respuesta)
  connection = Faraday.new(url: REVISAR_RESPUESTA_URL)
  response = connection.get do |request|
    request.headers['Content-Type'] = 'application/json'
    request.body= {"id": id, "answer": respuesta}.to_json
  end
  if response.success?
    puts response.status
    regresa = JSON.parse(response.body)
  end
  regresa["result"]
end
