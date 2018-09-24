import { trigger, style, transition, animate } from '@angular/animations';


export const registerTransitions = trigger('enterAnimation', [
  transition(':enter', [style({ transform: 'translateX(40%)', opacity: 0 }), animate('0.2s ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))]),
  transition(':leave', [style({ transform: 'translateX(0)', opacity: 1 }), animate('0.2s ease-in-out', style({ transform: 'translateX(40%)', opacity: 1 }))]),
])
