/* import { useEffect, useState } from "react"; */


export default function Alta() {


  return (
    <>
      <main class="content">
        <div class="container-form card">
          <h2 class="alta-page">Alta de Productos</h2>
          <p class="form-intro">Por favor, completá el siguiente formulario para dar de alta un nuevo producto.</p>

          <form id="formAltaProducto">
            <div class="form-section">
              <h3 class="section-title"><i class="fas fa-info-circle"></i> Información Básica</h3>

              <div class="form-row">
                <div class="form-group">
                  <label for="nombre"><i class="fa-solid fa-user-secret"></i> Nombre*</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="precio"><i class="fas fa-dollar-sign"></i> Precio*</label>
                  <input type="number" id="precio" name="precio" min="0" step="0.01" required />
                </div>
                <div class="form-group">
                  <label for="stock"><i class="fas fa-boxes"></i> Stock*</label>
                  <input type="number" id="stock" name="stock" min="0" required />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="marca"><i class="fas fa-building"></i> Marca*</label>
                  <input type="text" id="marca" name="marca" required />
                </div>
                <div class="form-group">
                  <label for="categoria"><i class="fas fa-list"></i> Categoría*</label>
                  <select id="categoria" name="categoria" required>
                    <option value="">Seleccione...</option>
                    <option value="doodle">Doodle</option>
                    <option value="monopoly">Monopoly</option>
                    <option value="mierdometro">Mierdómetro</option>
                    <option value="estanciero">Estanciero</option>
                    <option value="uno">Uno</option>
                    <option value="tapple">Tapple</option>
                    <option value="no_lo_testeamos">No lo testeamos</option>
                    <option value="exploding_kittens">Exploding Kittens</option>
                    <option value="clue">Clue</option>
                    <option value="hdp">H.D.P.</option>
                    <option value="gran_malo">Gran Malo - Juego de Beber</option>
                    <option value="decisiones">Decisiones de mierda</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-section">
              <h3 class="section-title"><i class="fas fa-align-left"></i> Descripciones</h3>
              <div class="form-group full-width">
                <label for="descCorta"><i class="fas fa-comment-alt"></i> Descripción Corta* (max 100 caracteres)</label>
                <textarea id="descCorta" name="descCorta" maxlength="100" required></textarea>
              </div>
              <div class="form-group full-width">
                <label for="descLarga"><i class="fas fa-align-left"></i> Descripción Larga</label>
                <textarea id="descLarga" name="descLarga" rows="4"></textarea>
              </div>
            </div>

            <div class="form-section">
              <h3 class="section-title"><i class="fas fa-cog"></i> Especificaciones</h3>
              <div class="form-row">
                <div class="form-group">
                  <label for="edadMin"><i class="fas fa-child"></i> Edad Desde*</label>
                  <input type="number" id="edadMin" name="edadMin" min="0" required />
                </div>
                <div class="form-group">
                  <label for="edadMax"><i class="fas fa-child"></i> Edad Hasta</label>
                  <input type="number" id="edadMax" name="edadMax" min="0" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="checkbox-label">
                    <input type="checkbox" id="envioSinCargo" name="envioSinCargo" />
                    <span><i class="fas fa-truck"></i> Envío sin cargo</span>
                  </label>
                </div>
                <div class="form-group">
                  <label for="foto"><i class="fas fa-camera"></i> Foto* (URL)</label>
                  <input type="url" id="foto" name="foto" placeholder="https://ejemplo.com/imagen.jpg" required />
                </div>
              </div>
            </div>

            <button type="submit" class="btn-1" aria-label="Guardar nuevo producto">Guardar Producto</button>
          </form>
        </div>
      </main>
    </>
  )
}

