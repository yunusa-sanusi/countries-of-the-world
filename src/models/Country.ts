export type CountryType = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion: string;
  region: string;
  population: number;
  latlng?: number[];
  gini?: number;
  demonym: string;
  area?: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  flags: FlagType;
  currencies?: CurrencyType[];
  languages: LanguageType[];
  translations: TranslationType;
  flag: string;
  regionalBlocs?: RegionalBlocType[];
  cioc?: string;
  independent: boolean;
};

export type FlagType = {
  svg: string;
  png: string;
};

export type CurrencyType = {
  code: string;
  name: string;
  symbol: string;
};

export type LanguageType = {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
};

export type TranslationType = {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa?: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
};

export type RegionalBlocType = {
  acronym: string;
  name: string;
};
