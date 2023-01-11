import * as variavel from "./variaveis";

export const temaClaro = {
  body: variavel.fundoClaro,
  inside: variavel.ConteudoClaro,
  text: variavel.textoFundoClaro,
};

export const temaEscuro = {
  body: variavel.fundoEscuro,
  inside: variavel.ConteudoEscuro,
  text: variavel.textoFundoEscuro,
  filter: "invert(100%)",
};
