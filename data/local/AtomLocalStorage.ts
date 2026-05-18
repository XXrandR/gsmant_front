import { atomWithStorage } from 'jotai/utils';
import { ModuleKey } from '../modules';

export const atomActiveModule = atomWithStorage<ModuleKey>('activeModule','inicio')
export const atomActivePage = atomWithStorage('activePage','indicador-general')
