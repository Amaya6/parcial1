import React from "react";
function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <h1 class="Titulo" class="text-center">
          Encuesta
        </h1>
      </div>

      <ul class="list-group">
        <a href="./encuestas.js" class="list-group-item">
          Encuestas
          <div class="btn-group" class="float-right">
            <button type="button" class="btn btn-success">
              Añadir
            </button>
            <button type="button" class="btn btn-warning">
              Editar
            </button>
          </div>
        </a>
        <a href="./preguntas.js" class="list-group-item">
          Preguntas
          <div class="btn-group" class="float-right">
            <button type="button" class="btn btn-success">
              Añadir
            </button>
            <button type="button" class="btn btn-warning">
              Editar
            </button>
          </div>
        </a>
      </ul>

      <div>
        <h4>
          <br></br>Escoja encuesta a modificar
          <button type="button" class="float-right btn btn-success">
            Añadir encuesta
          </button>
        </h4>
      </div>
      <br></br>

      <div class="form-group row">
        <label>Accion:</label>

        <div>
          <select>
            <option selected>--------</option>
            <option>Eliminar encuesta seleccionada/s</option>
          </select>
        </div>
        <div>
          <button type="button" class="float-right btn-sm btn-success">
            ir
          </button>
        </div>

        <label class="col-md-2">
          {" "}
          seleccionados 0 de 1<br></br>
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="" /> Encuesta
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="" /> Evaluacion Docente I Semestre ---
          Diseño web I --- Darwin Salinas
        </label>
      </div>
      <div>
        <label class="list-group-item text-center">1 encuesta </label>
      </div>

      <div>
        <h4>
          <br></br>Escoja encuesta a modificar
          <button type="button" class="float-right btn btn-success">
            Añadir pregunta
          </button>
        </h4>
      </div>
      <br></br>

      <div class="form-group row">
        <label>Accion:</label>
        <div>
          <select>
            <option selected>--------</option>
            <option>Eliminar encuesta pregunta/s</option>
          </select>
        </div>
        <div>
          <button type="button" class="float-right btn-sm btn-success">
            ir
          </button>
        </div>

        <label class="col-md-2">
          {" "}
          seleccionados 0 de 1<br></br>
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="" /> Pregunta
        </label>
        <div class="checkbox"></div>
        <label>
          <input type="checkbox" value="" /> Realiza comentarios inapropiados de
          caracter racista
        </label>
        <div class="checkbox"></div>
        <label>
          <input type="checkbox" value="" /> Responde las dudas
        </label>
        <div class="checkbox"></div>
        <label>
          <input type="checkbox" value="" /> Hace uso de la plataforma virtual
        </label>
        <div class="checkbox"></div>
        <label>
          <input type="checkbox" value="" /> Presentó el Syllabus al iniciar el
          curso
        </label>
      </div>
      <div>
        <label class="list-group-item text-center">4 preguntas  </label>
      </div>
    </div>
  );
}

export default App;
