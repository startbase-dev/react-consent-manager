import { Dispatch, ReactNode, SetStateAction } from "react";

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
  id?: string;
  src?: string;
  code?: string;
  async?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  mandatory: boolean;
  scripts: Script[];
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
}

export interface ModalConfig {
  title: string;
  description?: string;
  decline?: {
    hidden?: boolean;
    label?: string;
  };
  approve?: {
    hidden?: boolean;
    label?: string;
  };
  approveAll?: {
    hidden?: boolean;
    label?: string;
  };
}

export interface ConsentModalProps {
  onToggle?: () => void;
  modal: ModalConfig;
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
    hidden?: boolean;
  };
  decline?: {
    hidden?: boolean;
    label?: string;
  };
}

export interface SwitchProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}
