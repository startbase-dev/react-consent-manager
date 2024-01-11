import { addScripts } from './scripts/add';

export function addServices(services) {
  services.forEach(({ id, scripts }) => {
    addScripts(id, scripts);
  });
}
