export const MASK_KEYS: Record<string, MaskKeys> = {
  PHONE: 'phoneNumber',
} as const;

export const MASKS = {
  phoneNumber: {
    mask: '+375-(__)-___-__-__',
    replacement: { _: /\d/ },
  },
} as const;

export type MaskKeys = keyof typeof MASKS;

export const getMaskOptions = (key: MaskKeys) => MASKS[key] ?? { mask: '' };
