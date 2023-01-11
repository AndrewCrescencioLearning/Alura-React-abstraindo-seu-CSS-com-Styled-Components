import React from "react";
import { Botao, Box } from "../UI/index";
import { extratoLista } from "../../info";
import Items from "../Items";
const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ date, from, id, type, value }) => {
        return (
          <Items
            key={id}
            date={date}
            from={from}
            type={type}
            value={value}
          ></Items>
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
