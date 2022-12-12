import React from "react";

const Contacto = () => {
  return (
    <div>
      <h5>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12">
              <form className="form-horizontal">
                <legend className="text-center header my-5">
                  <h2>¡Contáctanos!</h2>
                </legend>

                <div className="form-group ">
                  <div className="col-10 mx-auto my-5">
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Nombre"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group ">
                  <div className="col-10 mx-auto my-5">
                    <input
                      id="apellido"
                      name="apellido"
                      type="text"
                      placeholder="Apellido"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-10 mx-auto my-5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Correo electrónico"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-10 mx-auto my-5">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Número telefónico"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-10 mx-auto my-5">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="¡Envíanos un mensaje, queremos conocer tu opinión! :D"
                      rows="7"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </h5>
    </div>
  );
};

export default Contacto;
