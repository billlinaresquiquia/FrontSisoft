import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  datosFormulario: any = {};

  abrirClienteCorreo() {
    const destinatario = 'emilianolinaresquiquia@gmail.com';
    const asunto = encodeURIComponent(this.datosFormulario.titulo || '');
    const cuerpo = encodeURIComponent(this.datosFormulario.mensaje || '');

    const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
    window.location.href = mailtoLink;
  }
}
