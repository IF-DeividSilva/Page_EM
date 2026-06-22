import { Injectable } from '@angular/core';

/**
 * Mantém o estado de volume e taxa da Web Speech API entre
 * ButtonComponent e ControlComponent, que são criados dinamicamente
 * e não se comunicam diretamente.
 */
@Injectable({ providedIn: 'root' })
export class SpeechService {
  velocidade = 1;
  volume = 1;
}