import React from "react";

const MenuSection = () => {
  return (
    <section className="menu-section">
      <hr />
      <h4>PIZZA CON ORILLA DE QUESO (EN TODOS LOS TAMAÑOS)</h4>
      <h4 className="titulo4">
        PIZZA CON BONELESS (BONELESS A LA DIABLA O BBQ)
      </h4>
      <table>
        <tbody>
          <tr>
            <td className="tdIzquierda">SPAGUETI A LA CREMA</td>
            <td>$100</td>
          </tr>
          <tr>
            <td className="tdIzquierda">SPAGUETI A LA MANTEQUILLA</td>
            <td>$100</td>
          </tr>
          <tr>
            <td className="tdIzquierda">SPAGUETI ROJO</td>
            <td>$100</td>
          </tr>
          <tr>
            <td className="tdIzquierda">PAN DE AJO</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>PAN EN GAJO</td>
            <td>$55</td>
          </tr>
          <tr>
            <td>PAPAS ESPECIALES</td>
            <td>$75</td>
          </tr>
        </tbody>
      </table>
      <h5>(QUESO CHEDAR Y TROCITOS DE TOCINO)</h5>
      <table>
        <tbody>
          <tr>
            <td>BONELESS</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>FOCACCIA</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>AGUA DE SABOR</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>AGUA NATURAL</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>REFRESCO DE LATA</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>REFRESCO DE 2 LITROS</td>
            <td>$40</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default MenuSection;
