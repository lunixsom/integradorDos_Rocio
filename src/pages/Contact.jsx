
export default function Contact() {
    
    return (
        <>
            <main>
<div class="contact-page">
      <div class="card">
        <h3>¿Querés contactarnos?</h3>
        <form id="form-contacto" onsubmit="contactSubmit(event)">
          <div>
            <label for="name"><i class="fas fa-user"></i> Nombre *</label>
            <input type="text" id="name" name="name" />
            <small id="name-error"></small>
          </div>

          <div>
            <label for="email"><i class="fas fa-envelope"></i> Email *</label>
            <input type="email" id="email" name="email" />
            <small id="email-error"></small>
          </div>

          <div>
            <label for="subject"><i class="fas fa-tag"></i> Asunto *</label>
            <input type="text" id="subject" name="subject" />
            <small id="subject-error"></small>
          </div>

          <div>
            <label for="body"><i class="fas fa-comments"></i> Comentarios *</label>
            <textarea id="body" name="body" rows="5"></textarea>
            <small id="body-error"></small>
          </div>

          <button type="submit"><i class="fas fa-paper-plane"></i> Enviar</button>
        </form>
      </div>
    </div>
  </main>

        </>

    )
 
}



