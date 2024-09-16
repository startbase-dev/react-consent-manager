import {
  Dispatch,
  ReactNode,
  SetStateAction,
  ComponentType,
  ChangeEvent,
} from 'react';

export interface SwitchComponentProps {
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ConsentProviderProps {
  options: Options;
  children: ReactNode;
}

export interface Cookie {
  pattern: string;
}

export interface Options {
  services: Service[];
}

export interface Script {
  id: string;
  src?: string;
  code?: string;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  mandatory: boolean;
}

export interface ConsentState {
  consent: string[];
  isBannerVisible: boolean;
  isDetailsVisible: boolean;
  hash: string;
}

export interface ConsentContextState {
  consent: string[];
  isBannerVisible: boolean;
  isDetailsVisible: boolean;
  hasConsent: (id: string) => boolean;
  toggleConsentBanner: () => void;
  toggleConsentModal: () => void;
  setConsent: Dispatch<SetStateAction<string[]>>;
  options: Options;
}

export interface ConsentItemProps {
  onChange: (name: string, checked: boolean) => void;
  id: string;
  name: string;
  description?: string;
  mandatory?: boolean;
  switchComponent: ComponentType<SwitchComponentProps>;
}

export interface ModalConfig {
  title: string;
  description?: string;
  decline?: {
    hidden?: boolean;
    label?: string;
  };
  approve?: {
    label?: string;
  };
  approveAll?: {
    label?: string;
  };
}

export interface ConsentModalProps {
  onToggle?: () => void;
  modal: ModalConfig;
  switchComponent: ComponentType<SwitchComponentProps>;
}

export interface ConsentBannerProps {
  children: ReactNode;
  settings?: {
    hidden?: boolean;
    label?: string;
    modal?: ModalConfig;
  };
  approve?: {
    label?: string;
  };
  decline?: {
    hidden?: boolean;
    label?: string;
  };
  switchComponent: ComponentType<SwitchComponentProps>;
}
