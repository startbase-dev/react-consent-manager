import { addScripts } from './scripts/add';
import { Service } from '../types';

export function addServices(services: Service[]): void {
  services.forEach(({ id, scripts }) => {
    addScripts(id, scripts);
  });
}
