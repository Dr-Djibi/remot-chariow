export interface ThemeConfig {
  backgroundColor: string;
  primaryColor: string;
  accentColor: string;
  textColor: string;
}

export interface PricingConfig {
  badgeText?: string;
  discountPrice?: string;
  originalPrice?: string;
  currency?: string;
}

export interface CoverConfig {
  title: string;
  subtitle: string;
  author: string;
  label: string;
}

export interface HookSceneConfig {
  hookText: string;
  subHookText?: string;
}

export interface SolutionSceneConfig {
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface BenefitsSceneConfig {
  title: string;
  benefits: Benefit[];
}

export interface CTASceneConfig {
  headline: string;
  subheadline?: string;
  buttonText: string;
  websiteUrl?: string;
}

export interface AudioTrackConfig {
  src: string;
  volume?: number;
}

export interface SoundEffectConfig extends AudioTrackConfig {
  atSeconds: number;
}

export interface AudioConfig {
  voiceover?: AudioTrackConfig;
  soundEffects?: SoundEffectConfig[];
}

export interface ProductAdConfig {
  brandName: string;
  cover: CoverConfig;
  theme: ThemeConfig;
  pricing: PricingConfig;
  audio?: AudioConfig;
  scenes: {
    hook: HookSceneConfig;
    solution: SolutionSceneConfig;
    benefits: BenefitsSceneConfig;
    cta: CTASceneConfig;
  };
}