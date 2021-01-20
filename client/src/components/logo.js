<Formik
            initialValues={{
              nit: "",
              nombre: "",
              direccion: "",
              telefono: "",
              director: "",
              email: "",
              password: "",
              password2: "",
            }}
            chechConditions={{
              aceptar: "",
            }}
            validationSchema={Yup.object().shape({
              nit: Yup.string()
                .min(
                  10,
                  "Su NIT debe contener entre 10 dígitos (Todos Números)"
                )
                .max(12, "")
                .matches(/^([0-9])*$/, "Invalido")
                .required("Por Favor, ingrese un Nit válido"),

              nombre: Yup.string()
                .min(10, "Nombre Muy Corto")
                .max(50, "")
                .matches(
                  /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/,
                  "Solo debe contener letras"
                )
                .required("Se necesita un nombre"),
              direccion: Yup.string()
                .min(8, "")
                .required("Debe ingresar una dirección"),

              telefono: Yup.string()
                .min(7, "Se necesitan mínimo 7 números")
                .matches(/^([0-9])*$/, "No es un número de telefono valido")
                .required("Debe ingresar un número telefónico"),

              director: Yup.string()
                .min(10, "Nombre Muy Corto")
                .max(50, "")
                .matches(
                  /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/,
                  "Solo debe contener letras"
                )
                .required("Se necesita un nombre"),
              email: Yup.string()
                .email("Proporcione un Email válido")
                .required("Por favor, ingrese su Email!"),

              password: Yup.string()
                .min(8, "Se necesitan mínimo 8 caracteres")
                .max(20, "")
                .required("Se necesita una contraseña"),

              password2: Yup.string()
              .required('Ey, recuerda que debes repetir la contrasenia')
              .oneOf(
                [Yup.ref("password"), null],
                "Las contraseñas deben coincidir"
              ),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const timeOut = setTimeout(() => {
                console.log(values);
                setSubmitting(false);
                clearTimeout(timeOut);
              }, 1000);

              axios
                .post("http://localhost:9000/colegios", values)
                .then(() => console.log("School created successfully"))
                .catch((err) => {
                  console.error(err);
                });

                  //resetForm({ values: "" });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              isSubmitting,
              validating,
              valid,
            }) => {
              return (
                <Form name="contact" method="post" onSubmit={handleSubmit}>
                  <div class="input-group">
                    <FileBinaryIcon size={30} />
                    <Field
                      class="form-control"
                      type="text"
                      name="nit"
                      autoComplete="name"
                      placeholder="Nit Institucional"
                    />
                  </div>
                  {errors.nit && touched.nit && <p>{errors.nit}</p>}
                  <div class="input-group">
                    <HomeFillIcon size={30} />
                    <Field
                      class="form-control"
                      type="text"
                      placeholder="Nombre de la Institución"
                      size="sm"
                      name="nombre"
                    />
                  </div>
                  {errors.nombre && touched.nombre && <p>{errors.nombre}</p>}
                  <div class="input-group">
                    <TagIcon size={30} />
                    <Field
                      class="form-control"
                      size="sm"
                      type="text"
                      placeholder="Direccion"
                      name="direccion"
                    />
                  </div>
                  {errors.direccion && touched.direccion && (
                    <p>{errors.direccion}</p>
                  )}
                  <div class="input-group">
                    <PaperAirplaneIcon size={30} />
                    <Field
                      class="form-control"
                      size="sm"
                      type="text"
                      placeholder="Número de Telefono"
                      name="telefono"
                    />
                  </div>
                  {errors.telefono && touched.telefono && (
                    <p>{errors.telefono}</p>
                  )}
                  <div class="input-group">
                    <PeopleIcon size={30} />
                    <Field
                      class="form-control"
                      size="sm"
                      type="text"
                      placeholder="Nombre del Director"
                      name="director"
                    />
                  </div>
                  {errors.director && touched.director && (
                    <p>{errors.director}</p>
                  )}
                  <div class="input-group">
                    <MailIcon size={30} />
                    <Field
                      class="form-control"
                      size="sm"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <ErrorMessage name="email">
                    {(msg) => <p>{msg}</p>}
                  </ErrorMessage>
                  <div class="input-group">
                    <UnlockIcon size={30} />
                    <Field
                      class="form-control"
                      size="sm"
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                    />
                  </div>
                  {errors.password && touched.password && (
                    <p>{errors.password}</p>
                  )}
                  <div class="input-group">
                    <UnlockIcon size={30} />
                    <Field
                      class="form-control"
                      size="sm"
                      type="password"
                      placeholder="Repetir Contrasena"
                      name="password2"
                    />
                  </div>
                  {errors.password2 && touched.password2 && (
                    <p>{errors.password2}</p>
                  )}
                  <button
                    type="submit"
                    avilable={!valid || isSubmitting}
                    class="btn btn-success btn-lg"
                  >
                    {isSubmitting ? "Registrando..." : "Registrar"}
                  </button>

                  <br />
                  <br />
                </Form>
              );
            }}
          </Formik>

          /* 
          <Navbar bg="light" expand="lg">
          <Navbar.Brand>PEV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form method="post" inline>
              <select
                as="select"
                class="form-control input-sm mr-sm-3"
                custom
                >
                <option selected disabled value='rol'>
                  Rol
                </option>
                <option value='colegio'>Escuela</option>
                <option value='estudiante'>Estudiante</option>
              </select>
              <input
                class="form-control mr-sm-3"
                type="text"
                placeholder="Correo Electrónico"
                id="nameUser"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <input
                class="form-control mr-sm-3"
                type="password"
                placeholder="Contraseña"
                id="passwordUser"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />

              <Button
                type="submit"
                variant="outline-success"
                onClick={(event) => this.handleClick(event)}
              >
                Iniciar Sesión
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
          
          
          */